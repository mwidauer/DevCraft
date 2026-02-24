/* ══════════════════════════════════════════════════════════════════
   DevCraft Pro – app.js
   Single-Page Application: Router, State, DataStore, Render, Events, Search
   Requires: data.js (APP_DATA) loaded before this file
   ══════════════════════════════════════════════════════════════════ */

'use strict';

/* ──────────────────────────────────────────────────────────────────
   1. STATE MANAGEMENT
   ────────────────────────────────────────────────────────────────── */
const State = (() => {
  let current = {
    route: { topicId: null, subareaId: null },
    expandedDeepDives: new Set(),
    searchQuery: ''
  };

  return {
    get: () => ({ ...current, expandedDeepDives: new Set(current.expandedDeepDives) }),
    set: (patch) => { current = { ...current, ...patch }; },
    toggleDeepDive: (subareaId) => {
      const set = new Set(current.expandedDeepDives);
      if (set.has(subareaId)) { set.delete(subareaId); } else { set.add(subareaId); }
      current = { ...current, expandedDeepDives: set };
    }
  };
})();

/* ──────────────────────────────────────────────────────────────────
   2. ROUTER
   ────────────────────────────────────────────────────────────────── */
const Router = (() => {
  const parse = (hash) => {
    const clean = (hash || '').replace(/^#\/?/, '');
    const [topicId = null, subareaId = null] = clean.split('/');
    return { topicId: topicId || null, subareaId: subareaId || null };
  };

  const handleChange = () => {
    const route = parse(window.location.hash);
    State.set({ route, expandedDeepDives: new Set() });
    // If a subareaId is in the URL, auto-expand that deep dive
    if (route.subareaId) {
      State.set({ expandedDeepDives: new Set([route.subareaId]) });
    }
    App.render();
    document.getElementById('app').focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    init: () => {
      window.addEventListener('hashchange', handleChange);
      handleChange(); // initial render
    },
    navigate: (path) => { window.location.hash = path; }
  };
})();

/* ──────────────────────────────────────────────────────────────────
   3. DATA ACCESS
   ────────────────────────────────────────────────────────────────── */
const DataStore = (() => {
  const all = () => APP_DATA.topics;
  const topic = (id) => APP_DATA.topics.find(t => t.id === id) || null;
  const subarea = (topicId, subareaId) => {
    const t = topic(topicId);
    return t ? t.subareas.find(s => s.id === subareaId) || null : null;
  };
  const search = (q) => {
    if (!q) return [];
    const lq = q.toLowerCase();
    const results = [];
    APP_DATA.topics.forEach(t => {
      const topicMatch =
        t.title.toLowerCase().includes(lq) ||
        t.tagline.toLowerCase().includes(lq) ||
        t.overview.toLowerCase().includes(lq);
      if (topicMatch) results.push({ type: 'topic', item: t, topic: t });

      t.subareas.forEach(s => {
        const subMatch =
          s.title.toLowerCase().includes(lq) ||
          s.concept.toLowerCase().includes(lq) ||
          s.keyPoints.some(kp => kp.toLowerCase().includes(lq));
        if (subMatch) results.push({ type: 'subarea', item: s, topic: t });
      });
    });
    return results.slice(0, 10);
  };

  return { all, topic, subarea, search };
})();

/* ──────────────────────────────────────────────────────────────────
   4. UTILITIES
   ────────────────────────────────────────────────────────────────── */
const esc = (str) => String(str)
  .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
  .replace(/"/g,'&quot;');

const icon = (name, extraClass = '') =>
  `<i data-lucide="${name}" class="icon ${extraClass}" aria-hidden="true"></i>`;

/* ──────────────────────────────────────────────────────────────────
   5. RENDER FUNCTIONS (pure: data → HTML string)
   ────────────────────────────────────────────────────────────────── */
const Render = (() => {

  /* Breadcrumb */
  const breadcrumb = (route) => {
    const parts = [{ label: 'Home', href: '#/' }];
    if (route.topicId) {
      const t = DataStore.topic(route.topicId);
      if (t) parts.push({ label: t.title, href: `#/${route.topicId}` });
    }
    return parts.map((p, i) => {
      const isLast = i === parts.length - 1;
      return `${i > 0 ? '<span class="breadcrumb-sep" aria-hidden="true">/</span>' : ''}
        <a href="${p.href}" class="breadcrumb-item${isLast ? ' current' : ''}"
           ${isLast ? 'aria-current="page"' : ''}>${esc(p.label)}</a>`;
    }).join('');
  };

  /* Topic Card (Home Grid) */
  const topicCard = (t) => `
    <article class="topic-card"
             style="--topic-color: ${t.color}"
             data-topic-id="${t.id}"
             role="button"
             tabindex="0"
             aria-label="${esc(t.title)} erkunden">
      <div class="card-accent-bar"></div>
      <header class="card-header">
        <span class="card-icon">${icon(t.icon, 'icon-lg')}</span>
        <h2 class="card-title">${esc(t.title)}</h2>
      </header>
      <p class="card-tagline">${esc(t.tagline)}</p>
      <div class="card-subareas">
        ${t.subareas.slice(0,4).map(s =>
          `<span class="subarea-chip">${esc(s.title)}</span>`
        ).join('')}
        ${t.subareas.length > 4
          ? `<span class="subarea-chip more">+${t.subareas.length - 4} weitere</span>`
          : ''}
      </div>
      <div class="card-footer">
        <span class="card-cta">Erkunden ${icon('arrow-right')}</span>
      </div>
    </article>`;

  /* Home View */
  const homeView = () => `
    <section class="hero">
      <div class="hero-badge">Professional Reference</div>
      <h1 class="hero-title">Software Development<br><span class="gradient-text">Mastery</span></h1>
      <p class="hero-subtitle">15 Kernthemen · 3 Ebenen Tiefe · Echte Tools, Commands und Best Practices für professionelle Entwickler.</p>
      <div class="hero-stats">
        <span>15 Themen</span>
        <span class="divider" aria-hidden="true">·</span>
        <span>75 Subbereiche</span>
        <span class="divider" aria-hidden="true">·</span>
        <span>30 Deep Dives</span>
      </div>
    </section>
    <section class="topic-grid" aria-label="Themenübersicht">
      ${DataStore.all().map(topicCard).join('')}
    </section>`;

  /* Code Block */
  const codeBlock = (cb) => `
    <div class="code-block">
      <div class="code-header">
        <span class="code-lang">${esc(cb.language)}</span>
        <span class="code-label">${esc(cb.label)}</span>
        <button class="copy-btn"
                data-copy="${esc(btoa(unescape(encodeURIComponent(cb.code))))}"
                aria-label="Code kopieren">
          ${icon('clipboard')} Kopieren
        </button>
      </div>
      <pre class="code-pre"><code>${esc(cb.code)}</code></pre>
    </div>`;

  /* ASCII Diagram */
  const asciiDiagram = (d) => `
    <pre class="ascii-diagram" role="img" aria-label="Diagramm">${esc(d.content)}</pre>`;

  /* Deep Dive Panel */
  const deepDivePanel = (dd, topicColor) => `
    <div class="deep-dive-panel" style="--topic-color: ${topicColor}">
      <div class="deep-dive-header">
        <h3>${icon('zap')} ${esc(dd.title)}</h3>
      </div>
      <p class="deep-dive-intro">${esc(dd.intro)}</p>

      ${(dd.sections || []).map(sec => `
        <div class="dd-section">
          <h4>${esc(sec.heading)}</h4>
          <p>${esc(sec.prose)}</p>
          ${sec.codeBlock ? codeBlock(sec.codeBlock) : ''}
          ${sec.diagram ? asciiDiagram(sec.diagram) : ''}
        </div>`).join('')}

      ${(dd.bestPractices?.length || dd.pitfalls?.length) ? `
      <div class="dd-columns">
        ${dd.bestPractices?.length ? `
        <div class="dd-best-practices">
          <h4>${icon('check-circle')} Best Practices</h4>
          <ul>${dd.bestPractices.map(bp => `<li>${esc(bp)}</li>`).join('')}</ul>
        </div>` : ''}
        ${dd.pitfalls?.length ? `
        <div class="dd-pitfalls">
          <h4>${icon('alert-triangle')} Häufige Fehler</h4>
          <ul>${dd.pitfalls.map(p => `<li>${esc(p)}</li>`).join('')}</ul>
        </div>` : ''}
      </div>` : ''}

      ${dd.furtherReading?.length ? `
      <div class="dd-reading">
        <h4>${icon('book-open')} Weiterführende Ressourcen</h4>
        <div class="reading-links">
          ${dd.furtherReading.map(r =>
            `<a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer" class="reading-link">
              ${icon('external-link')} ${esc(r.title)}
            </a>`
          ).join('')}
        </div>
      </div>` : ''}
    </div>`;

  /* Subarea Card */
  const subareaCard = (s, topicColor, expanded) => `
    <div class="subarea-card${expanded ? ' expanded' : ''}"
         id="sub-${s.id}"
         style="--topic-color: ${topicColor}">
      <div class="subarea-main">
        <div class="subarea-header">
          <span class="subarea-icon">${icon(s.icon || 'book-open')}</span>
          <h3 class="subarea-title">${esc(s.title)}</h3>
          ${s.deepDive ? `
          <button class="deep-dive-toggle"
                  data-subarea-id="${s.id}"
                  aria-expanded="${expanded}"
                  aria-controls="dd-${s.id}">
            ${icon(expanded ? 'chevron-up' : 'chevron-down')}
            ${expanded ? 'Schließen' : 'Deep Dive'}
          </button>` : ''}
        </div>

        <p class="subarea-concept"><em>${esc(s.concept)}</em></p>
        <p class="subarea-body">${esc(s.body)}</p>

        <div class="subarea-meta">
          ${s.keyPoints?.length ? `
          <div class="key-points">
            <h4>Key Points</h4>
            <ul>${s.keyPoints.map(kp => `<li>${esc(kp)}</li>`).join('')}</ul>
          </div>` : ''}

          ${s.tools?.length ? `
          <div class="tools-section">
            <h4>Tools & Frameworks</h4>
            <div class="tool-list">
              ${s.tools.map(t => `
              <div class="tool-item">
                <span class="tool-name">${esc(t.name)}</span>
                <span class="tool-purpose">${esc(t.purpose)}</span>
              </div>`).join('')}
            </div>
          </div>` : ''}

          ${s.commands?.length ? `
          <div class="commands-section">
            <h4>Commands</h4>
            ${s.commands.map(c => `
            <div class="command-row">
              <code class="command-code">${esc(c.cmd)}</code>
              <span class="command-desc">${esc(c.desc)}</span>
            </div>`).join('')}
          </div>` : ''}
        </div>
      </div>

      ${expanded && s.deepDive
        ? `<div id="dd-${s.id}">${deepDivePanel(s.deepDive, topicColor)}</div>`
        : ''}
    </div>`;

  /* Topic View */
  const topicView = (t, expandedDeepDives) => {
    const relatedLinks = (t.relatedTopics || [])
      .map(id => DataStore.topic(id))
      .filter(Boolean)
      .map(rt => `<a href="#/${rt.id}" class="related-link">${esc(rt.title)}</a>`)
      .join(', ');

    return `
    <div class="topic-hero" style="background: ${t.gradient}">
      <div class="topic-hero-inner">
        <div class="topic-hero-icon">${icon(t.icon, 'icon-xl')}</div>
        <div class="topic-hero-text">
          <h1 class="topic-hero-title">${esc(t.title)}</h1>
          <p class="topic-hero-tagline">${esc(t.tagline)}</p>
          <div class="topic-hero-meta">
            <span>${t.subareas.length} Subbereiche</span>
            ${relatedLinks ? `<span>Verwandt: ${relatedLinks}</span>` : ''}
          </div>
        </div>
      </div>
    </div>

    <div class="topic-overview">
      <p>${esc(t.overview)}</p>
    </div>

    <div class="subareas-grid">
      ${t.subareas.map(s =>
        subareaCard(s, t.color, expandedDeepDives.has(s.id))
      ).join('')}
    </div>`;
  };

  return { breadcrumb, homeView, topicView };
})();

/* ──────────────────────────────────────────────────────────────────
   6. SEARCH MODULE
   ────────────────────────────────────────────────────────────────── */
const Search = (() => {
  let timer;

  const renderResults = (results, q) => {
    if (!q) return '';
    if (!results.length) return `<div class="search-empty">Keine Treffer für „${esc(q)}"</div>`;
    return results.map(r => `
      <a href="#/${r.type === 'topic' ? r.topic.id : r.topic.id + '/' + r.item.id}"
         class="search-result-item" role="option">
        <span class="result-type">${r.type === 'topic' ? 'Thema' : esc(r.topic.title)}</span>
        <span class="result-title">${esc(r.item.title)}</span>
      </a>`).join('');
  };

  return {
    init: () => {
      const input = document.getElementById('search-input');
      const dropdown = document.getElementById('search-dropdown');
      if (!input || !dropdown) return;

      input.addEventListener('input', (e) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          const q = e.target.value.trim();
          const results = DataStore.search(q);
          dropdown.innerHTML = renderResults(results, q);
          dropdown.hidden = !q;
        }, 150);
      });

      // Close on outside click
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) dropdown.hidden = true;
      });

      // Close on ESC, navigate on Enter
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { dropdown.hidden = true; input.blur(); }
        if (e.key === 'Enter') {
          const first = dropdown.querySelector('.search-result-item');
          if (first) { first.click(); input.value = ''; dropdown.hidden = true; }
        }
      });

      // Close dropdown when a result is clicked
      dropdown.addEventListener('click', () => {
        setTimeout(() => { dropdown.hidden = true; input.value = ''; }, 100);
      });
    }
  };
})();

/* ──────────────────────────────────────────────────────────────────
   7. EVENT DELEGATION
   ────────────────────────────────────────────────────────────────── */
const Events = (() => {
  const onClick = (e) => {
    // Navigate to topic
    const card = e.target.closest('[data-topic-id]');
    if (card && !e.target.closest('button')) {
      Router.navigate(`#/${card.dataset.topicId}`);
      return;
    }

    // Toggle deep dive
    const toggle = e.target.closest('[data-subarea-id]');
    if (toggle) {
      const id = toggle.dataset.subareaId;
      State.toggleDeepDive(id);
      App.render();
      // Scroll to subarea smoothly
      requestAnimationFrame(() => {
        const el = document.getElementById(`sub-${id}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
      return;
    }

    // Copy code button
    const copyBtn = e.target.closest('.copy-btn');
    if (copyBtn) {
      try {
        const code = decodeURIComponent(escape(atob(copyBtn.dataset.copy)));
        navigator.clipboard.writeText(code).then(() => {
          const orig = copyBtn.innerHTML;
          copyBtn.innerHTML = `<i data-lucide="check" class="icon" aria-hidden="true"></i> Kopiert!`;
          copyBtn.classList.add('copied');
          lucide.createIcons({ nodes: [copyBtn] });
          setTimeout(() => { copyBtn.innerHTML = orig; copyBtn.classList.remove('copied'); lucide.createIcons({ nodes: [copyBtn] }); }, 2000);
        });
      } catch (_) {}
      return;
    }
  };

  const onKeydown = (e) => {
    const card = e.target.closest('[data-topic-id]');
    if (card && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      Router.navigate(`#/${card.dataset.topicId}`);
    }
  };

  return {
    init: () => {
      document.addEventListener('click', onClick);
      document.addEventListener('keydown', onKeydown);
    }
  };
})();

/* ──────────────────────────────────────────────────────────────────
   8. APP CONTROLLER
   ────────────────────────────────────────────────────────────────── */
const App = {
  render: () => {
    const { route, expandedDeepDives } = State.get();
    const appEl = document.getElementById('app');
    const breadcrumbEl = document.getElementById('breadcrumb');

    // Update breadcrumb
    if (breadcrumbEl) breadcrumbEl.innerHTML = Render.breadcrumb(route);

    // Render view
    let html;
    if (!route.topicId) {
      html = Render.homeView();
      document.title = 'DevCraft Pro – Professional Software Development';
    } else {
      const t = DataStore.topic(route.topicId);
      if (t) {
        html = Render.topicView(t, expandedDeepDives);
        document.title = `${t.title} – DevCraft Pro`;
      } else {
        html = `<div class="error-view">
          <h2>Thema nicht gefunden</h2>
          <p>Das gesuchte Thema existiert nicht.</p>
          <a href="#/">Zur Startseite</a>
        </div>`;
        document.title = 'DevCraft Pro';
      }
    }

    if (appEl) {
      appEl.innerHTML = html;
      // Re-initialize Lucide icons after DOM update
      lucide.createIcons();
    }
  },

  init: () => {
    Events.init();
    Search.init();
    Router.init(); // triggers first render
  }
};

/* ──────────────────────────────────────────────────────────────────
   9. BOOTSTRAP
   ────────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof APP_DATA === 'undefined') {
    document.getElementById('app').innerHTML = `
      <div class="error-view">
        <h2>Ladefehler</h2>
        <p>data.js konnte nicht geladen werden. Bitte stelle sicher, dass alle Dateien im gleichen Ordner liegen.</p>
      </div>`;
    return;
  }
  App.init();
});
