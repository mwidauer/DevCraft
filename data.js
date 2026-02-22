/* ══════════════════════════════════════════════════════════════════
   DevCraft – data.js
   Alle Inhalte: 10 Topics × 5-6 Subareas × Deep Dives
   Muss VOR app.js geladen werden (definiert APP_DATA)
   ══════════════════════════════════════════════════════════════════ */

const APP_DATA = {
  meta: { title: 'DevCraft', version: '1.0.0' },
  topics: [

/* ══════════════════════════════════════════════════════════════════
   TOPIC 1 – SOFTWARE DEVELOPMENT PROCESS
   ══════════════════════════════════════════════════════════════════ */
{
  id: 'devprocess',
  title: 'Software Development Process',
  icon: 'workflow',
  tagline: 'Von der Idee zur Produktion: Methoden, Praktiken und Teamdynamik',
  color: '#6366F1',
  gradient: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 50%, #7C3AED 100%)',
  overview: 'Professionelle Softwareentwicklung ist weit mehr als das Schreiben von Code. Sie umfasst das strukturierte Management von Anforderungen, die Koordination im Team, die kontinuierliche Verbesserung von Prozessen und den bewussten Umgang mit technischen Schulden. Wer diese Dimension ignoriert, produziert Systeme, die funktionieren – aber nicht gewartet, erweitert oder übergeben werden können.\n\nDie gute Nachricht: Diese Praktiken sind erlernbar und amortisieren sich schnell. Ein Team, das Agile konsequent lebt, liefert nicht nur schneller, sondern auch mit weniger Fehlerrate und höherer Vorhersagbarkeit. Die schlechte Nachricht: Es gibt keine Abkürzung. Kulturelle Veränderungen, ehrliches Feedback und diszipliniertes Handwerk müssen täglich praktiziert werden.',
  relatedTopics: ['git', 'testing', 'cicd'],
  subareas: [
    {
      id: 'agile-scrum',
      title: 'Agile & Scrum',
      icon: 'refresh-cw',
      concept: 'Iterative Lieferung funktionierender Software in kurzen, festen Zyklen (Sprints)',
      body: 'Agile ist kein Prozess, sondern eine Denkweise: Liefere früh, hole Feedback ein, und passe dich an. Scrum ist das konkrete Framework, das diese Denkweise operationalisiert. Ein Sprint dauert typisch 1-2 Wochen und endet immer mit potenziell auslieferbarer Software – nicht mit einem Status-Update oder einer Präsentation.\n\nDie vier Scrum-Zeremonien sind kein Selbstzweck: Sprint Planning definiert den Scope, das Daily Standup synchronisiert – es löst keine Probleme, sondern identifiziert sie, der Sprint Review holt Stakeholder-Feedback ein, und die Retrospektive verbessert den Prozess selbst. Wer Retros als lästige Pflicht behandelt, verschenkt den wertvollsten Teil von Scrum.',
      keyPoints: [
        'Story Points messen relative Komplexität, nicht Zeit – "8 Punkte" bedeutet nicht "8 Stunden"',
        'Die Definition of Done (DoD) ist das gemeinsame Qualitätsversprechen des Teams – kein Feature ist fertig, bis es die DoD erfüllt',
        'Velocity ist ein Planungswerkzeug, kein Produktivitäts-Maß – nie als KPI für Einzelpersonen verwenden',
        'Ein Sprint-Backlog ist eine Verpflichtung, kein Wunschzettel – Scope-Creep mitten im Sprint ist ein Prozessfehler',
        'Der Product Owner priorisiert den Backlog nach Geschäftswert, nicht nach technischer Bequemlichkeit',
        'Impediments (Blockaden) müssen innerhalb von 24h eskaliert werden – der Scrum Master räumt sie aus dem Weg'
      ],
      tools: [
        { name: 'Jira', purpose: 'Vollständiges Backlog- und Sprint-Management für größere Teams' },
        { name: 'Linear', purpose: 'Modernes, schnelles Issue-Tracking – besonders beliebt bei Startups' },
        { name: 'GitHub Projects', purpose: 'Kanban/Scrum direkt im Repository – ideal wenn Code und Tasks zusammengehören' }
      ],
      commands: null,
      deepDive: null
    },
    {
      id: 'requirements',
      title: 'Anforderungen & User Stories',
      icon: 'file-text',
      concept: 'Geschäftsanforderungen in testbare, priorisierbare Entwicklungsaufgaben übersetzen',
      body: 'Eine schlecht formulierte Anforderung ist die teuerste Form von technischer Schuld. Sie verursacht Missverständnisse, Nacharbeit und Konflikte zwischen Business und Entwicklung. Das INVEST-Kriterium (Independent, Negotiable, Valuable, Estimable, Small, Testable) ist der Prüfstein für eine gute User Story.\n\nAkzeptanzkriterien im Given-When-Then-Format (Gherkin) erzwingen präzises Denken: Wer eine Story nicht in diesem Format beschreiben kann, hat sie noch nicht vollständig verstanden. Nicht-funktionale Anforderungen (Performance, Sicherheit, Verfügbarkeit) werden häufig vergessen und verursachen später die teuersten Produktionsprobleme.',
      keyPoints: [
        '"Als [Rolle] möchte ich [Feature], damit [Nutzen]" – der "damit"-Teil ist der wichtigste, er verhindert sinnlose Features',
        'INVEST: Independent (unabhängig schätzbar), Negotiable (kein Vertrag), Valuable (klarer Nutzen), Estimable (schätzbar), Small (in einem Sprint umsetzbar), Testable (prüfbar)',
        'Akzeptanzkriterien sind KEINE Implementierungsdetails – sie beschreiben Verhalten, nicht Lösung',
        'Epics gruppieren zusammengehörige Stories – ein Epic umfasst typisch 3-10 Stories',
        'Non-Functional Requirements (NFRs) gehören in die DoD, nicht als nachträgliche Stories',
        'Spike = zeitlich begrenztes Experiment zur Risikoreduktion, wenn Schätzung nicht möglich ist'
      ],
      tools: [
        { name: 'Confluence', purpose: 'Dokumentation von Anforderungen und Entscheidungen' },
        { name: 'Notion', purpose: 'Flexibles Wissensmanagement für Teams' },
        { name: 'Miro', purpose: 'Visuelles Brainstorming und Story Mapping' }
      ],
      commands: null,
      deepDive: null
    },
    {
      id: 'code-review',
      title: 'Code Review Kultur',
      icon: 'git-pull-request',
      concept: 'Peer-Review als Wissenstransfer und Qualitätstor – nicht als Fehlerjagd',
      body: 'Code Reviews sind das mächtigste Wissenstransfer-Werkzeug im Team. Gleichzeitig können sie toxisch werden, wenn sie als Machtdemonstration oder Fehlersuche missverstanden werden. Die Forschung zeigt: Teams mit psychologischer Sicherheit im Review-Prozess liefern besseren Code – weil Reviewer konstruktiver sind und Autoren Feedback annehmen statt verteidigen.\n\nKleine Pull Requests (unter 400 Zeilen) werden sorgfältig geprüft. Große PRs werden rubber-gestamped. Das ist menschliche Natur, keine Faulheit. Als Autor ist man für die Größe des PRs verantwortlich – ein PR, der eine Woche in Review hängt, ist ein Prozessfehler, keine Reviewerschaft.',
      keyPoints: [
        'Reviewe den Code, nicht die Person – "dieser Ansatz hat einen Edge Case" statt "du hast einen Bug"',
        'Nitpicks explizit markieren ("nit:") – der Autor muss wissen, was blockierend ist und was optional',
        'Zwei-Phasen-Review: erst Architektur/Design, dann Line-by-Line – in falscher Reihenfolge verschwendet man Zeit',
        'Der Autor antwortet auf ALLE Kommentare bevor er Merge requested – auch wenn nur "erledigt" oder "danke"',
        'Draft PRs für frühe Feedback-Schleifen – noch bevor die Implementierung fertig ist',
        'CODEOWNERS-Datei automatisiert Reviewer-Zuweisung für kritische Codebestandteile'
      ],
      tools: [
        { name: 'GitHub PR Reviews', purpose: 'Standard-Workflow für die meisten Teams' },
        { name: 'GitLab Merge Requests', purpose: 'Alternative mit integrierten CI/CD-Gates' },
        { name: 'Reviewpad', purpose: 'Automatisiert Review-Policies (z.B. "2 Approvals für main"' }
      ],
      commands: null,
      deepDive: {
        title: 'Code Review Checkliste & Psychologische Sicherheit',
        intro: 'Eine systematische Checkliste verhindert, dass Reviews inkonsistent werden und wichtige Aspekte übersehen werden. Ebenso wichtig ist das Verständnis, warum Code Reviews scheitern – und wie man eine Kultur schafft, in der Feedback als Geschenk gilt.',
        sections: [
          {
            heading: 'Die professionelle Review-Checkliste',
            prose: 'Gehe PRs in dieser Reihenfolge durch: Zuerst verstehen WARUM dieser PR existiert (Issue-Link, Beschreibung lesen). Dann Architektur (ist der Ansatz korrekt, hätte es einen einfacheren Weg gegeben?). Danach Korrektheit (Edge Cases, Error Handling, Concurrency). Zuletzt Stil (Naming, Struktur, Kommentare).',
            codeBlock: {
              language: 'markdown',
              label: 'PR Review Checkliste (.github/pull_request_template.md)',
              code: `## Kontext
- [ ] Issue-Link vorhanden
- [ ] Beschreibung erklärt WARUM (nicht nur WAS)

## Korrektheit
- [ ] Edge Cases abgedeckt (null, leer, Grenzwerte)
- [ ] Error Handling vollständig
- [ ] Keine Race Conditions bei asynchronem Code
- [ ] Logging an sinnvollen Stellen

## Sicherheit
- [ ] Keine Secrets im Code (API-Keys, Passwörter)
- [ ] Input-Validierung bei externen Daten
- [ ] Keine SQL-Injection / XSS-Lücken

## Tests
- [ ] Unit Tests für neue Logik vorhanden
- [ ] Tests beschreiben Verhalten, nicht Implementierung
- [ ] CI ist grün

## Wartbarkeit
- [ ] Naming ist klar und konsistent
- [ ] Keine Duplikation (DRY)
- [ ] Kein toter Code`
            }
          },
          {
            heading: 'Konstruktive Feedback-Sprache',
            prose: 'Der Unterschied zwischen gutem und schlechtem Review-Feedback liegt oft nur in der Formulierung. Beschreibende, fragende Formulierungen öffnen Diskussion – imperative, bewertende schließen sie.',
            codeBlock: {
              language: 'markdown',
              label: 'Feedback-Formulierungen im Vergleich',
              code: `# Schlecht – wertet die Person
"Das ist falsch."
"Du musst hier einen Try-Catch verwenden."
"Das ist unlesbar."

# Besser – beschreibt das Problem, fragt nach
"Ich sehe hier einen möglichen Edge Case: Was passiert,
wenn 'items' leer ist?"

"Ich würde hier einen Try-Catch bevorzugen, damit wir
den Fehler loggen können. Gibt es einen Grund, das
bewusst nicht zu tun?"

# Nit: (optional, nicht blockierend)
"nit: Ich finde 'userList' klarer als 'data' – aber das
ist Geschmackssache, gerne ignorieren."`
            }
          }
        ],
        bestPractices: [
          'Synchrone Review-Sessions ("Review Together") für komplexe PRs sind oft effizienter als hin-und-her-Kommentare',
          'Time-box Reviews auf 60 Minuten – danach sinkt die Erkennungsrate von Fehlern stark',
          'Positives Feedback geben: "Das ist eine elegante Lösung, danke!" stärkt die Kultur'
        ],
        pitfalls: [
          'Style-Kommentare ohne Linter sind subjektiv und unnötig – was formatiert werden kann, soll automatisiert werden',
          '"Approve mit Kommentar" ist kein Approval – Merge erst nach Auflösung aller Kommentare',
          'Zu lange auf Reviews warten ohne Eskalation blockiert den Fluss – nach 24h Stunden ansprechen'
        ],
        furtherReading: [
          { title: 'Google Engineering Practices: Code Review', url: 'https://google.github.io/eng-practices/review/' },
          { title: 'Conventional Comments', url: 'https://conventionalcomments.org/' }
        ]
      }
    },
    {
      id: 'tech-debt',
      title: 'Technische Schulden',
      icon: 'alert-circle',
      concept: 'Bewusster vs. unbewusster Kompromiss zwischen Geschwindigkeit und Codequalität',
      body: 'Technische Schulden sind keine Fehler – sie sind eine Entscheidung. Martin Fowlers Tech-Debt-Quadrant unterscheidet vier Typen: bewusst-rücksichtslos ("Wir haben keine Zeit für Design"), bewusst-klug ("Wir liefern jetzt und refaktorieren nach dem Launch"), unbewusst-rücksichtslos (mangelndes Wissen) und unbewusst-klug ("Jetzt erst verstehen wir das bessere Design").\n\nDas Problem ist nicht die Schuld selbst, sondern wenn sie nicht gemessen und getilgt wird. Wie bei finanziellen Schulden wächst sie mit Zinsen: ein Modul, das niemand anfassen will, verlangsamt jedes neue Feature in diesem Bereich.',
      keyPoints: [
        '20% der Sprint-Kapazität für Schuldenabbau reservieren – nicht als separates "Refactoring-Sprint" am Ende',
        'Tech Debt im Backlog tracken wie Features – mit Business-Impact-Begründung, nicht nur mit "Code ist hässlich"',
        'Die "Campsite Rule": Hinterlasse Code immer etwas sauberer, als du ihn gefunden hast',
        'SonarQube/CodeClimate messen objektiv: Coverage, Duplikationen, Komplexität – Schulden sichtbar machen',
        'Strangler Fig Pattern: Legacy-System schrittweise durch neues ersetzen – nie Big-Bang-Rewrite',
        'Boy-Scout-PRs: Wenn du eine Funktion änderst, bereinige den unmittelbaren Kontext gleich mit'
      ],
      tools: [
        { name: 'SonarQube', purpose: 'Statische Code-Analyse mit Tech-Debt-Metrik in Entwicklungsstunden' },
        { name: 'CodeClimate', purpose: 'Cloud-basierte Code-Qualitätsmessung mit Trend-Darstellung' },
        { name: 'ArchUnit', purpose: 'Unit-Tests für Architekturregeln (z.B. "Service darf nicht direkt auf Repository zugreifen")' }
      ],
      commands: null,
      deepDive: null
    },
    {
      id: 'documentation',
      title: 'Dokumentation & ADRs',
      icon: 'book-open',
      concept: 'Dokumentation als Lieferbestandteil – besonders das WARUM hinter Entscheidungen',
      body: 'Die wertvollste Dokumentation ist nicht die API-Referenz – die kann man generieren. Es sind die Architecture Decision Records (ADRs): kurze Dokumente, die festhalten, WARUM eine Entscheidung so getroffen wurde, welche Alternativen betrachtet wurden und welche Trade-offs akzeptiert wurden. Ein ADR aus 2019 kann heute erklären, warum ein System so strukturiert ist wie es ist – und verhindert, dass dieselbe Diskussion nochmals geführt wird.\n\nDocs-as-Code bedeutet: Dokumentation liegt im selben Repository wie der Code, wird mit demselben Review-Prozess gepflegt und hat dieselbe Versionierung. Wiki-Seiten veralten; Code-Repository-Docs werden mit Pull Requests aktualisiert.',
      keyPoints: [
        'ADR-Format: Titel, Status, Kontext, Entscheidung, Konsequenzen – mehr braucht es nicht',
        'README.md muss in 5 Minuten beantworten: Was ist das Projekt? Warum existiert es? Wie starte ich es lokal? Wie trage ich bei?',
        'OpenAPI/Swagger-Specs werden aus Code generiert oder sind "Single Source of Truth" für API-Entwicklung',
        'Runbooks dokumentieren Betriebsverfahren: Wie reagiere ich auf Alert X? Wie führe ich Datenbankmigrationen durch?',
        'Vermeide Wiki-Rot: Dokumentation, die nicht regelmäßig validiert wird, ist schlimmer als keine',
        'Diagramme als Code (Mermaid, PlantUML) versionieren statt Bild-Dateien einchecken'
      ],
      tools: [
        { name: 'MkDocs / Docusaurus', purpose: 'Statische Dokumentations-Websites aus Markdown-Dateien' },
        { name: 'adr-tools', purpose: 'CLI zum Erstellen und Verwalten von Architecture Decision Records' },
        { name: 'Mermaid', purpose: 'Diagramme als Code-Syntax direkt in Markdown (GitHub rendert sie nativ)' }
      ],
      commands: [
        { cmd: 'adr new "Verwende PostgreSQL statt MySQL"', desc: 'Neues Architecture Decision Record anlegen' },
        { cmd: 'adr list', desc: 'Alle ADRs des Projekts auflisten' }
      ],
      deepDive: null
    },
    {
      id: 'estimation',
      title: 'Schätzung & Planung',
      icon: 'clock',
      concept: 'Unsicherheit sichtbar machen und Commitments ehrlich managen',
      body: 'Schätzungen sind keine Versprechen. Wer das nicht versteht, erzeugt eine Kultur, in der Entwickler ihre Schätzungen aufblasen und trotzdem nicht pünktlich liefern. Die Cone of Uncertainty zeigt: Zu Projektbeginn kann eine Schätzung um Faktor 4 daneben liegen – das ist keine Inkompetenz, sondern mathematische Realität.\n\nPlanning Poker macht Unsicherheit sichtbar: Wenn ein Team zwischen "3 Punkten" und "13 Punkten" votiert, existiert eine fundamentale unterschiedliche Vorstellung vom Scope. Dieses Gespräch zu führen, bevor die Story umgesetzt wird, ist unbezahlbar. Der wichtigste Output von Planning Poker ist nicht die Zahl – es sind die Fragen, die im Prozess aufkommen.',
      keyPoints: [
        'Fibonacci-Sequenz (1,2,3,5,8,13,21) erzwingt ehrliche Unsicherheits-Einschätzung – Zwischenwerte sind Selbstbetrug',
        'Historische Velocity stabilisiert sich nach 4-6 Sprints – erst dann ist sie als Planungsbasis sinnvoll',
        'Story-Splitting reduziert Varianz: 10 Stories á 1 Punkt schätzt man präziser als 1 Story mit 10 Punkten',
        'Drei-Punkt-Schätzung (optimistisch/realistisch/pessimistisch) für Projektpläne mit Konfidenzintervall',
        'Release-Burndown-Chart zeigt, ob ein Release-Datum realistisch ist – sechs Wochen vor dem Termin',
        '"No Estimate"-Ansatz: Zähle Stories statt Punkte, wenn alle Stories ähnliche Größe haben'
      ],
      tools: [
        { name: 'Planning Poker (pointingpoker.com)', purpose: 'Distributed Estimation in Remote-Teams' },
        { name: 'JIRA Roadmaps', purpose: 'Release-Planung mit Velocity-basierter Prognose' }
      ],
      commands: null,
      deepDive: null
    }
  ]
},

/* ══════════════════════════════════════════════════════════════════
   TOPIC 2 – GIT & GITHUB
   ══════════════════════════════════════════════════════════════════ */
{
  id: 'git',
  title: 'Git & GitHub',
  icon: 'git-branch',
  tagline: 'Versionskontrolle meistern: Branching, Zusammenarbeit und History-Management',
  color: '#F05032',
  gradient: 'linear-gradient(135deg, #F05032 0%, #C73E1D 50%, #E03A00 100%)',
  overview: 'Git ist die lingua franca der kollaborativen Softwareentwicklung. Doch die meisten Entwickler nutzen nur 10% von Gits Möglichkeiten – und haben eine vage Vorstellung davon, was unter der Haube passiert. Das rächt sich: Merge-Konflikte, versehentlich überschriebene History und verlorene Commits sind fast immer Symptome eines unvollständigen mentalen Modells.\n\nGit ist kein Backup-System und kein Datei-Synchronisierungstool. Es ist ein Content-addressable Filesystem mit einem gerichteten azyklischen Graph von Snapshots. Wer das versteht, löst Konflikte souverän, entscheidet zwischen Rebase und Merge mit Bedacht und nutzt git bisect für die Fehlersuche.',
  relatedTopics: ['cicd', 'devprocess'],
  subareas: [
    {
      id: 'git-concepts',
      title: 'Kernkonzepte & mentales Modell',
      icon: 'brain',
      concept: 'Git als Content-addressable Filesystem mit einem gerichteten azyklischen Graph von Snapshots',
      body: 'Das wichtigste Konzept: Jeder Commit ist ein vollständiger Snapshot des gesamten Repositories – kein Diff. Diffs werden on-demand berechnet. Jeder Commit erhält eine SHA-1-Prüfsumme, die aus dem Inhalt berechnet wird: gleicher Inhalt = gleicher Hash, immer. Das macht Git inhärent fälschungssicher.\n\nDie drei Bäume von Git: Working Directory (was du siehst), Index/Staging Area (was im nächsten Commit landet) und HEAD (der letzte Commit des aktuellen Branches). Der häufigste Verwirrungsgrund: Die Staging Area existiert als echte Zwischenstufe – git add bewegt Änderungen in die Stage, git commit macht daraus einen Commit.',
      keyPoints: [
        'Objects: Blob (Dateiinhalt), Tree (Verzeichnis), Commit (Snapshot + Metadata + Parent-Pointer), Tag',
        'Refs (Branches, Tags) sind einfach Dateien, die einen Commit-SHA zeigen – kein "Kopieren" von Commits',
        'Detached HEAD = kein Branch-Pointer auf dem aktuellen Commit – neue Commits werden bei Branch-Wechsel verwaist',
        '"git reflog" zeigt ALLE Bewegungen von HEAD – verloren geglaubte Commits sind fast immer wiederherstellbar',
        'Staging Area ermöglicht atomare Commits: Nur relevante Änderungen committen, unabhängig vom Working Directory'
      ],
      tools: [
        { name: 'git log --graph --oneline --all', purpose: 'Visualisiert den Commit-Graph im Terminal' },
        { name: 'GitLens (VS Code)', purpose: 'Inline-Blame, History und Commit-Details direkt im Editor' },
        { name: 'Sourcetree / Fork', purpose: 'GUI-Clients für visuelles Branch-Management' }
      ],
      commands: [
        { cmd: 'git cat-file -p HEAD', desc: 'Zeigt den rohen Commit-Inhalt – macht Gits interne Datenstruktur sichtbar' },
        { cmd: 'git log --graph --oneline --all --decorate', desc: 'Vollständiger Commit-Graph mit allen Branches' },
        { cmd: 'git reflog --relative-date', desc: 'History aller HEAD-Bewegungen – für Crash-Recovery' }
      ],
      deepDive: {
        title: 'Was Git wirklich speichert: Objects & DAG',
        intro: 'Wer Gits interne Datenstruktur einmal gesehen hat, verliert nie wieder die Orientierung bei Merge-Konflikten oder Rebase-Operationen. Das sind keine Magie-Tricks, sondern einfache Pointer-Operationen auf einem gerichteten azyklischen Graph.',
        sections: [
          {
            heading: 'Die vier Git-Object-Typen',
            prose: 'Git speichert alles als Objects im .git/objects/ Verzeichnis. Ein Blob speichert Dateiinhalt (ohne Namen!), ein Tree verknüpft Dateinamen mit Blob-SHAs, ein Commit zeigt auf einen Tree und hat Parent-Pointer, und ein Tag zeigt auf einen anderen Object mit zusätzlichen Metadaten.',
            codeBlock: {
              language: 'bash',
              label: 'Git-Objekte direkt untersuchen',
              code: `# Zeigt den Typ eines Objects
git cat-file -t HEAD        # "commit"
git cat-file -t HEAD^{tree} # "tree"

# Zeigt den Inhalt
git cat-file -p HEAD
# tree a1b2c3d4...
# parent e5f6a7b8...
# author Max Muster <m@example.com> 1710000000 +0100
# committer Max Muster <m@example.com> 1710000000 +0100
#
# feat: add user authentication

# Den Tree des letzten Commits sehen
git ls-tree HEAD
# 100644 blob 8ab686e  README.md
# 040000 tree 4b825dc  src/`
            }
          },
          {
            heading: 'Merge vs. Rebase: Was passiert wirklich?',
            prose: 'Merge erzeugt einen neuen Merge-Commit mit zwei Parent-Pointern – die History ist vollständig und zeigt die Realität der Entwicklung. Rebase hingegen erzeugt neue Commits mit dem gleichen Inhalt, aber einem anderen Parent – die alten Commits bleiben (im reflog), werden aber von keinem Branch mehr referenziert.',
            diagram: {
              type: 'ascii',
              content: `MERGE:
main:    A---B---C---M    (M = Merge Commit mit 2 Parents)
              \\       /
feat:         X---Y

REBASE (feat auf main):
main:    A---B---C
                 \\
feat:             X'---Y'  (neue Commits, gleicher Inhalt)`
            }
          }
        ],
        bestPractices: [
          'Rebase nur für lokale / eigene Branches verwenden – nie für geteilte Branches (zerstört History für andere)',
          'git pull --rebase statt git pull macht lokale History sauber (kein Merge-Commit für "sync")',
          'Atomic Commits: ein Commit = eine logische Änderung – erleichtert git bisect und Reverts massiv'
        ],
        pitfalls: [
          'git push --force nach Rebase überschreibt Teamkollegen-Commits – immer --force-with-lease verwenden',
          'Detached HEAD nach git checkout <sha> – immer git checkout -b <branchname> um auf dem State zu arbeiten',
          'Riesige Binär-Dateien in Git einchecken – sie bleiben für immer in der History, auch nach Löschen'
        ],
        furtherReading: [
          { title: 'Pro Git Book (kostenlos, de verfügbar)', url: 'https://git-scm.com/book/de/v2' },
          { title: 'Oh Shit, Git! – Notfallhilfe', url: 'https://ohshitgit.com/de' }
        ]
      }
    },
    {
      id: 'branching',
      title: 'Branching-Strategien',
      icon: 'git-merge',
      concept: 'Die passende Branch-Struktur für Teamgröße und Deployment-Frequenz wählen',
      body: 'Die "richtige" Branching-Strategie hängt von zwei Faktoren ab: Wie oft deployt das Team in Produktion, und wie viele parallele Versionen müssen gepflegt werden? Ein SaaS-Team, das täglich deployed, hat andere Bedürfnisse als ein Team, das eine Desktop-Applikation mit LTS-Versionen pflegt.\n\nGit Flow (mit develop, release, hotfix-Branches) ist mächtig aber komplex – es eignet sich für Release-basierte Software. GitHub Flow (main + kurzlebige Feature-Branches + direkter Merge in main) ist einfacher und passt zu Continuous Delivery. Trunk-based Development (alle arbeiten auf main, Features hinter Feature Flags) ist die Basis von echter Continuous Integration.',
      keyPoints: [
        'Trunk-based Development reduziert Merge-Konflikte dramatisch: Branches leben maximal 1-2 Tage',
        'Feature Flags entkoppeln Deployment von Release – Code ist in Produktion, aber für Nutzer unsichtbar',
        'GitHub Flow: main ist immer deploybar, alle PRs gehen direkt in main nach Review + CI',
        'Git Flow: develop als Integrations-Branch, release-Branches für Stabilisierung, hotfix für Notfall-Patches',
        'Branch-Namen konventionieren: feat/, fix/, chore/, docs/ Präfixe machen Branches kategorisierbar',
        'Squash-Merge bei Feature-PRs: eine saubere History in main statt N Zwischen-Commits'
      ],
      tools: [
        { name: 'GitHub Flow', purpose: 'Für Web-Apps mit Continuous Delivery – einfach und effektiv' },
        { name: 'Git Flow', purpose: 'Für versionierte Software mit mehreren gepflegten Releases' },
        { name: 'Trunk-based Dev', purpose: 'Für Teams mit starker CI/CD und Feature-Flag-Infrastruktur' }
      ],
      commands: [
        { cmd: 'git checkout -b feat/user-authentication', desc: 'Feature-Branch erstellen und wechseln' },
        { cmd: 'git push --force-with-lease origin feat/user-auth', desc: 'Nach Rebase pushen – sicherer als --force' },
        { cmd: 'git rebase -i HEAD~3', desc: 'Letzte 3 Commits interaktiv squashen/bearbeiten' }
      ],
      deepDive: null
    },
    {
      id: 'conflicts',
      title: 'Merge-Konflikte lösen',
      icon: 'git-pull-request',
      concept: 'Konflikte sind normal – die Kunst ist das Verstehen beider Absichten vor der Auflösung',
      body: 'Ein Merge-Konflikt bedeutet: Git weiß nicht, welche Änderung "gewinnt" – weil beide Seiten dieselbe Stelle modifiziert haben. Die Konfliktmarker zeigen HEAD (dein Branch) und INCOMING (der gemergter Branch) – aber der entscheidende Kontext fehlt: Warum wurde die Änderung gemacht?\n\nDas größte Risiko beim Lösen von Konflikten: Man wählt eine Seite, ohne die Absicht der anderen zu verstehen. Das kann subtile Bugs einführen. Der korrekte Prozess: git log --merge zeigt die Commits, die den Konflikt verursacht haben. git show <sha> zeigt den Kontext. Erst dann auflösen.',
      keyPoints: [
        '<<<< HEAD = deine Änderungen, ==== = Trenner, >>>> = eingehende Änderungen',
        'git mergetool öffnet ein 3-Wege-Merge-Tool: Basis, Links (dein), Rechts (eingehend) – viel übersichtlicher',
        'git rerere (Reuse Recorded Resolution) merkt sich Konflikt-Auflösungen und wendet sie automatisch wieder an',
        'Nach jeder Konflikt-Auflösung: Tests lokal ausführen – Konflikte die Tests bestehen können trotzdem semantisch falsch sein',
        'Kleine, häufige Merges statt großer, seltener – weniger Konflikte, geringere Auflösungszeit',
        'git log --merge --diff-filter=U zeigt genau die Commits, die zu Konflikten geführt haben'
      ],
      tools: [
        { name: 'VS Code Merge Editor', purpose: 'Dreispaltige Ansicht mit 1-Click-Auflösung direkt im Editor' },
        { name: 'IntelliJ Merge Tool', purpose: 'Mächtige Diff-Ansicht mit Syntax-Highlighting' },
        { name: 'vimdiff / nvim', purpose: 'Terminal-basiertes 3-Wege-Merge für Power-User' }
      ],
      commands: [
        { cmd: 'git config --global rerere.enabled true', desc: 'Aktiviert automatische Wiederholung gelöster Konflikte' },
        { cmd: 'git log --merge --oneline', desc: 'Commits die den aktuellen Merge-Konflikt verursacht haben' },
        { cmd: 'git checkout --theirs -- path/to/file', desc: 'Nimmt die eingehende Version komplett an' }
      ],
      deepDive: null
    },
    {
      id: 'github-workflows',
      title: 'GitHub Collaboration',
      icon: 'github',
      concept: 'Strukturierte Team-Workflows mit GitHubs Collaboration-Features',
      body: 'GitHub ist mehr als ein Git-Hosting-Service. Pull Requests, CODEOWNERS, Branch-Protection-Rules, GitHub Actions und GitHub Projects bilden zusammen einen vollständigen Development-Workflow, der Teams synchron hält und Qualität erzwingt – ohne manuelle Prozesse.\n\nBranch-Protection-Rules sind dabei das wichtigste Feature, das viele Teams ignorieren: Kein Direct Push auf main, mindestens 2 Approvals, Status Checks müssen grün sein. Diese drei Regeln allein verhindern die häufigsten Produktionsausfälle, die durch "mal schnell was pushen" entstehen.',
      keyPoints: [
        'CODEOWNERS-Datei: Bestimmte Verzeichnisse brauchen Review von bestimmten Teams (z.B. /security/ → @security-team)',
        'Draft PRs signalisieren "Work in Progress" – holt früh Feedback, bevor Implementierung final ist',
        'PR-Templates erzwingen strukturierte Beschreibungen: Was, Warum, Wie testen, Screenshots',
        'GitHub CLI (gh): PRs erstellen, mergen und reviewen ohne Browser – Produktivitätsgewinn für Terminal-Nutzer',
        'GitHub Discussions für Architektur-Entscheidungen die kein Issue sind aber dokumentiert sein müssen',
        'Dependabot aktualisiert Dependencies automatisch und erstellt PRs – hält Sicherheitslücken aktuell'
      ],
      tools: [
        { name: 'GitHub CLI (gh)', purpose: 'Vollständige GitHub-Workflows im Terminal' },
        { name: 'Dependabot', purpose: 'Automatische Dependency-Updates als PRs' },
        { name: 'GitHub Actions', purpose: 'CI/CD direkt in GitHub (Details im CI/CD-Topic)' }
      ],
      commands: [
        { cmd: 'gh pr create --title "feat: user auth" --body "..." --draft', desc: 'Draft-PR über CLI erstellen' },
        { cmd: 'gh pr review 123 --approve --body "LGTM!"', desc: 'PR über CLI approven' },
        { cmd: 'gh pr merge 123 --squash --delete-branch', desc: 'PR squashen und Branch löschen' }
      ],
      deepDive: null
    },
    {
      id: 'git-hygiene',
      title: 'Repository-Hygiene',
      icon: 'shield',
      concept: 'Repositories langfristig sauber, sicher und navigierbar halten',
      body: 'Schlechte Repository-Hygiene akkumuliert sich langsam und ist teuer zu bereinigen: Binary-Dateien in der History machen Clone langsam, eingecheckte Secrets sind ein dauerhaftes Sicherheitsrisiko (auch nach Löschen bleiben sie in der History), und chaotische Commit-Nachrichten machen Debugging mit git log ineffektiv.\n\nConventional Commits ist ein schlanker Standard für Commit-Messages, der gleichzeitig automatische Changelogs ermöglicht: feat: für neue Features, fix: für Bugfixes, chore: für Maintenance, docs: für Dokumentation. Mit BREAKING CHANGE im Footer wird ein Major-Version-Bump getriggert.',
      keyPoints: [
        '.gitignore für node_modules/, .env, *.log, dist/, .DS_Store – vor dem ersten Commit anlegen',
        'git-secrets oder gitleaks als Pre-Commit-Hook verhindert das Einchecken von API-Keys',
        'Conventional Commits: "feat(auth): add JWT refresh token" – maschinenlesbar, menschenverständlich',
        'Signed Commits (GPG/SSH): beweist, dass Commits wirklich vom angegebenen Autor stammen',
        'Git LFS (Large File Storage) für Binärdateien: Videos, PSD-Dateien, ML-Modelle',
        'Regelmäßiges git gc optimiert das Repository (komprimiert Objects, entfernt unreferenzierte)'
      ],
      tools: [
        { name: 'gitleaks', purpose: 'Scannt Git-History nach Secrets – auch historische Commits' },
        { name: 'commitlint', purpose: 'CI-Regel die Conventional-Commits-Format erzwingt' },
        { name: 'git-lfs', purpose: 'Large File Storage für Binary-Assets' }
      ],
      commands: [
        { cmd: 'git log --follow -- path/to/file', desc: 'History einer Datei auch über Umbenennung hinweg' },
        { cmd: 'gitleaks detect --source . --verbose', desc: 'Scannt aktuelles Repo nach Secrets' },
        { cmd: 'git gc --aggressive --prune=now', desc: 'Repository komprimieren und Garbage-Collection ausführen' }
      ],
      deepDive: null
    }
  ]
},

/* ══════════════════════════════════════════════════════════════════
   TOPIC 3 – SOFTWARE ARCHITECTURE
   ══════════════════════════════════════════════════════════════════ */
{
  id: 'architecture',
  title: 'Software-Architektur',
  icon: 'layers',
  tagline: 'Systeme entwerfen, die skalieren, sich weiterentwickeln und reale Bedingungen überleben',
  color: '#0EA5E9',
  gradient: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 50%, #0369A1 100%)',
  overview: 'Architektur ist die Gesamtheit der Entscheidungen, die teuer zu ändern sind. Gute Architektur verschiebt Entscheidungen, minimiert Kopplung und maximiert die Optionen für die Zukunft. Schlechte Architektur trifft zu früh irreversible Entscheidungen und macht jede Änderung zu einem Risiko.\n\nDer häufigste Fehler: zu früh auf Microservices zu setzen, weil es "professionell" klingt. Ein Monolith, der klar strukturiert ist, ist die richtige Startarchitektur für fast alle Systeme. Microservices lösen organisatorische Probleme (Conway\'s Law), nicht technische – und sie erzeugen erhebliche operationale Komplexität.',
  relatedTopics: ['testing', 'docker', 'apis'],
  subareas: [
    {
      id: 'arch-patterns',
      title: 'Architektur-Patterns',
      icon: 'layout',
      concept: 'Bewährte strukturelle Lösungen für wiederkehrende Systemorganisations-Probleme',
      body: 'Kein Architektur-Pattern ist universell richtig. Jedes löst bestimmte Probleme und erzeugt andere. Layered Architecture (Presentation, Business Logic, Data) ist der universelle Einstieg und für die meisten Anwendungen angemessen. Hexagonale Architektur (Ports & Adapters) isoliert Business-Logik von Framework und Infrastruktur – ideal für langlebige Systeme, die Framework-unabhängig testbar sein müssen.\n\nMicroservices sind kein Ziel, sondern ein Ergebnis: Sie entstehen, wenn Teams unabhängig deployen müssen (Conway\'s Law). Ein gut strukturierter Monolith mit klaren Modul-Grenzen ist der richtige Startpunkt – er kann später zu Microservices zerlegt werden, wenn die organisatorischen Bedürfnisse es erfordern.',
      keyPoints: [
        'Layered Architecture: Presentation → Business Logic → Data Access – jede Schicht kennt nur die direkt darunter',
        'Hexagonale Architektur (Clean Architecture): Business Logic in der Mitte, alle Abhängigkeiten zeigen nach innen',
        'CQRS: Separate Modelle für Lesen (Query) und Schreiben (Command) – sinnvoll bei hohem Lese-Schreib-Ungleichgewicht',
        'Event Sourcing: Status als Folge von Events speichern statt als State – vollständiger Audit-Trail, aber hohe Komplexität',
        'Modularer Monolith: Monolith mit harten Modul-Grenzen – das Beste aus beiden Welten als Zwischenstufe',
        'Conway\'s Law: "Software-Struktur spiegelt Kommunikationsstrukturen der Organisation" – berücksichtigen, nicht ignorieren'
      ],
      tools: [
        { name: 'C4 Model', purpose: 'Vier-Ebenen-Diagramm-Standard für Architekturdokumentation (System → Container → Component → Code)' },
        { name: 'Structurizr', purpose: 'C4-Diagramme als Code – versionierbar und automatisch generiert' },
        { name: 'ArchUnit', purpose: 'Architekturregeln als Unit-Tests – verletzt niemand die Schichtenregel?' }
      ],
      commands: null,
      deepDive: {
        title: 'Monolith → Modularer Monolith → Microservices: Wann was?',
        intro: 'Die Entscheidung für eine Deployment-Architektur ist eine der folgenreichsten im gesamten Projektverlauf. Dieser Deep Dive gibt konkrete Entscheidungskriterien statt vager "es kommt drauf an"-Antworten.',
        sections: [
          {
            heading: 'Wann ist ein Monolith richtig?',
            prose: 'Startpunkt für fast jedes neue System. Ein Monolith ist richtig, wenn das Team klein ist (< 10 Entwickler), die Domäne noch nicht vollständig verstanden ist, schnelle Iterationen wichtiger sind als Deployment-Unabhängigkeit, und keine starken Skalierungsanforderungen für einzelne Teile existieren. Der Monolith ist nicht das Problem – ein Big Ball of Mud ist das Problem.',
            codeBlock: {
              language: 'text',
              label: 'Strukturierter Monolith: Modul-Grenzen erzwingen',
              code: `src/
├── modules/
│   ├── users/          # Modul: User-Management
│   │   ├── api/        # Controller, DTOs (public interface)
│   │   ├── domain/     # Business Logic (private)
│   │   └── infra/      # DB-Access (private)
│   ├── orders/         # Modul: Bestellungen
│   │   ├── api/
│   │   ├── domain/
│   │   └── infra/
│   └── payments/       # Modul: Zahlungen
│       ├── api/
│       ├── domain/
│       └── infra/
└── shared/             # Nur explizit shared Code
    └── kernel/         # Primitives, Utilities`
            }
          },
          {
            heading: 'Wann lohnen sich Microservices?',
            prose: 'Microservices lösen primär ein organisatorisches Problem: unabhängiges Deployen von Teams. Die Heuristik: "Könnten zwei Teams denselben Service deployen ohne sich abzusprechen?" Wenn ja, sind Microservices noch nicht nötig. Technische Gründe (Skalierung einzelner Komponenten) sind seltener als gedacht – horizontale Skalierung des Monoliths reicht oft deutlich weiter.',
            diagram: {
              type: 'ascii',
              content: `ENTSCHEIDUNGSBAUM:

Braucht ein Teil massiv andere Skalierung?
    Ja → Extrahiere NUR diesen Service
    Nein ↓

Müssen Teams unabhängig deployen?
    Ja → Microservices (aber erst nach Modularisierung)
    Nein ↓

Bleib beim Modularen Monolith – er ist wartbarer`
            }
          }
        ],
        bestPractices: [
          'Zuerst Monolith bauen, Modul-Grenzen einhalten – dann bei Bedarf extrahieren (Strangler Fig Pattern)',
          'Microservice-Grenzen entlang von Bounded Contexts schneiden (Domain-Driven Design)',
          'Jeder Microservice hat eine eigene Datenbank – kein geteiltes Schema (sonst ist es ein verteilter Monolith)'
        ],
        pitfalls: [
          'Microservices von Anfang an in einer neuen Domäne – die Grenzen sind noch nicht bekannt, werden falsch gesetzt',
          'Geteilte Datenbank zwischen Services – erzeugt implizite Kopplung, schlimmer als ein Monolith',
          '"Nanoservices": Services die nur eine einzige Funktion haben – Overhead überwiegt Nutzen'
        ],
        furtherReading: [
          { title: 'Martin Fowler: MonolithFirst', url: 'https://martinfowler.com/bliki/MonolithFirst.html' },
          { title: 'Sam Newman: Building Microservices (Buch)', url: 'https://samnewman.io/books/building_microservices_2nd_edition/' }
        ]
      }
    },
    {
      id: 'solid',
      title: 'SOLID-Prinzipien',
      icon: 'box',
      concept: 'Fünf Design-Prinzipien die Code wartbar, erweiterbar und testbar machen',
      body: 'SOLID ist kein Regelwerk sondern eine Heuristik. Die Prinzipien helfen, Klassen zu schreiben, die sich leicht ändern lassen ohne andere Teile des Systems zu brechen. Ein häufiges Missverständnis: SOLID führt zu mehr Klassen und mehr Code. Das stimmt – und das ist oft der Preis für Flexibilität. Wer die Einfachheit bevorzugt, kann bewusst auf einzelne Prinzipien verzichten, solange er die Konsequenzen versteht.\n\nDer praktische Einstieg: SRP und DIP sind die wirkungsvollsten Prinzipien für Testbarkeit. Eine Klasse die schwer zu testen ist, verletzt fast immer SRP oder DIP – sie hat zu viele Verantwortlichkeiten oder instanziiert ihre Abhängigkeiten selbst.',
      keyPoints: [
        'S – Single Responsibility: Eine Klasse hat genau einen Grund zu ändern (Stakeholder = Änderungs-Treiber)',
        'O – Open/Closed: Offen für Erweiterung (neue Klasse), geschlossen für Modifikation (bestehende unverändert)',
        'L – Liskov Substitution: Unterklassen müssen alle Verträge der Oberklasse einhalten – keine "Überraschungen"',
        'I – Interface Segregation: Viele kleine, spezifische Interfaces sind besser als ein "fettes" Interface',
        'D – Dependency Inversion: Abhängig von Abstraktionen (Interfaces), nicht von konkreten Implementierungen',
        'Dependency Injection (DI) ist die Umsetzung von DIP: Abhängigkeiten werden übergeben, nicht selbst erzeugt'
      ],
      tools: [
        { name: 'Spring (Java/Kotlin)', purpose: 'DI-Framework: Abhängigkeiten via @Autowired injizieren' },
        { name: 'InversifyJS (TypeScript)', purpose: 'DI-Container für Node.js/Browser' },
        { name: 'Python dataclasses + Protocol', purpose: 'Leichtgewichtige Interface-Definition in Python' }
      ],
      commands: null,
      deepDive: {
        title: 'SOLID Verletzung erkennen und refaktorieren',
        intro: 'Das Beste an SOLID ist nicht das Wissen über die Prinzipien, sondern die Fähigkeit, Verletzungen im bestehenden Code zu erkennen. Hier ein reales Beispiel: Ein UserService der Emails schickt, Passwörter hasht, Nutzer persistiert und Audit-Logs schreibt – klassische SRP-Verletzung.',
        sections: [
          {
            heading: 'Vorher: Alles in einer Klasse (SRP-Verletzung)',
            prose: 'Diese Klasse hat mindestens vier verschiedene Gründe sich zu ändern: Wenn Email-Templates sich ändern, wenn das Passwort-Hashing-Verfahren wechselt, wenn die Datenbank-Struktur sich ändert, oder wenn das Audit-Format sich ändert.',
            codeBlock: {
              language: 'typescript',
              label: 'Problematisch: UserService macht zu viel',
              code: `class UserService {
  async register(email: string, password: string) {
    // 1. Passwort hashen (Sicherheits-Concern)
    const hash = await bcrypt.hash(password, 12);

    // 2. In DB speichern (Persistenz-Concern)
    const user = await db.users.create({ email, passwordHash: hash });

    // 3. Email senden (Kommunikations-Concern)
    await sendgrid.send({
      to: email,
      subject: 'Willkommen!',
      html: '<h1>Registrierung erfolgreich</h1>'
    });

    // 4. Audit-Log (Compliance-Concern)
    await auditLog.write({ action: 'USER_REGISTERED', userId: user.id });

    return user;
  }
}`
            }
          },
          {
            heading: 'Nachher: Jede Klasse hat eine Verantwortung',
            prose: 'Nach der Refaktorierung hat jede Klasse genau einen Grund sich zu ändern. Der UserService orchestriert nur noch – er enthält keine Implementierungsdetails mehr. Jede Klasse ist einzeln testbar, einzeln austauschbar.',
            codeBlock: {
              language: 'typescript',
              label: 'Refaktoriert: Klare Verantwortlichkeiten',
              code: `// Jede Klasse hat genau eine Verantwortung
class PasswordService {
  async hash(plain: string): Promise<string> {
    return bcrypt.hash(plain, 12);
  }
}

class UserRepository {
  async create(data: CreateUserDto): Promise<User> {
    return db.users.create(data);
  }
}

class EmailService {
  async sendWelcome(email: string): Promise<void> {
    await sendgrid.send({ to: email, subject: 'Willkommen!' });
  }
}

class AuditService {
  async log(action: string, userId: string): Promise<void> {
    await auditLog.write({ action, userId });
  }
}

// UserService orchestriert nur noch
class UserService {
  constructor(
    private passwords: PasswordService,    // DIP: injiziert
    private users: UserRepository,
    private emails: EmailService,
    private audit: AuditService
  ) {}

  async register(email: string, password: string) {
    const hash = await this.passwords.hash(password);
    const user = await this.users.create({ email, passwordHash: hash });
    await this.emails.sendWelcome(email);
    await this.audit.log('USER_REGISTERED', user.id);
    return user;
  }
}`
            }
          }
        ],
        bestPractices: [
          'Test-Schwierigkeiten sind ein Signal für SOLID-Verletzungen – wenn du mocken musst was nicht injiziert wurde, verletzt du DIP',
          'Interfaces erst einführen wenn es mindestens zwei Implementierungen gibt oder Tests sie brauchen',
          'OCP durch Strategy-Pattern: neues Verhalten als neue Klasse, ohne die bestehende zu ändern'
        ],
        pitfalls: [
          'SOLID übertreiben: Eine Klasse pro Methode ist kein gutes Design – Kohäsion muss gewahrt bleiben',
          'Interfaces für alles erstellen "weil SOLID": Ohne zweite Implementierung ist das nur Overhead',
          'LSP vergessen: Unterklasse wirft Exception für Methode der Basisklasse → Vertragsbruch'
        ],
        furtherReading: [
          { title: 'Robert C. Martin: SOLID Principles', url: 'https://blog.cleancoder.com/uncle-bob/2020/10/18/Solid-Relevance.html' }
        ]
      }
    },
    {
      id: 'design-patterns',
      title: 'Design Patterns',
      icon: 'puzzle',
      concept: 'Sprachunabhängige Lösungen für wiederkehrende objektorientierte Designprobleme',
      body: 'Design Patterns sind Vokabular, keine Regeln. Wenn ein Senior-Entwickler sagt "das ist ein Observer", versteht jeder die Struktur sofort – das ist ihr eigentlicher Wert. Sie zu kennen bedeutet nicht, sie überall anzuwenden. Ein Pattern, das erzwungen wird wo es nicht passt, macht Code komplizierter, nicht eleganter.\n\nDie 23 GoF-Patterns sind in drei Kategorien: Creational (wie werden Objekte erzeugt), Structural (wie werden Klassen/Objekte zusammengefügt) und Behavioral (wie kommunizieren Objekte miteinander). Die wichtigsten im Alltag: Strategy (austauschbares Verhalten), Observer (Events/Callbacks), Factory (Erzeugung ohne konkreten Typ), Decorator (Funktionalität schichten).',
      keyPoints: [
        'Strategy: Algorithmus als austauschbares Objekt – z.B. verschiedene Payment-Provider mit gleichem Interface',
        'Observer: Publisher-Subscriber – UI-Frameworks (React State, RxJS) sind alle Varianten davon',
        'Factory Method: Erzeugung delegieren ohne konkreten Typ zu kennen – entkoppelt Erzeuger vom Erzeugnis',
        'Decorator: Funktionalität schichten ohne Vererbung – HTTP-Middleware-Chains sind Decorators',
        'Repository: Datenzugriff hinter einem Interface verstecken – Datenbank austauschbar und testbar',
        'Anti-Patterns kennen: God Object, Spaghetti Code, Lava Flow, Golden Hammer'
      ],
      tools: [
        { name: 'Refactoring.Guru', purpose: 'Illustrierte Erklärungen aller GoF-Patterns mit Code-Beispielen' }
      ],
      commands: null,
      deepDive: null
    },
    {
      id: 'scalability',
      title: 'Skalierbarkeit & Reliability',
      icon: 'zap',
      concept: 'Systeme für Versagen und Wachstum designen – von Anfang an',
      body: 'Die häufigsten Produktionsausfälle entstehen nicht durch schlechten Code, sondern durch fehlende Resilienz-Patterns: Ein Downstream-Service antwortet langsam, der Connection Pool läuft voll, und das gesamte System fällt aus. Circuit Breaker, Retry mit Backoff, Bulkhead und Timeout sind die vier Grundpfeiler von resilientem Design.\n\nHorizontale Skalierung (mehr Instanzen) erfordert zustandslose Services: Kein Session-State im Prozess-Speicher, kein lokaler Filesystem-State, keine Singleton-Caches die nicht geteilt werden. Alles, was zwischen Requests persistiert werden muss, gehört in eine externe State-Store (Redis, Datenbank).',
      keyPoints: [
        'Circuit Breaker: Öffnet bei zu vielen Fehlern (OPEN-State), schützt das System vor Cascade-Failures',
        'Retry mit Exponential Backoff + Jitter: Nicht alle zur gleichen Zeit nochmal versuchen – Thundering Herd vermeiden',
        'Bulkhead Pattern: Thread-Pools pro Downstream-Service isolieren – ein langsamer Service blockt nicht alle anderen',
        'Timeout IMMER setzen: Kein HTTP-Call ohne Timeout – hängende Requests füllen den Connection Pool',
        'Idempotente Operationen erlauben sicheres Retry: PUT /orders/123 = sicher, POST /orders = nicht sicher',
        'Read Replicas für Lese-skalierung: 80/20-Regel – 80% der DB-Last ist Lesen'
      ],
      tools: [
        { name: 'Resilience4j (Java)', purpose: 'Circuit Breaker, Retry, Bulkhead, Rate Limiter' },
        { name: 'Polly (.NET)', purpose: 'Resilience- und Transient-Fault-Handling-Bibliothek' },
        { name: 'Hystrix (Netflix, Legacy)', purpose: 'Pionier der Circuit-Breaker-Libraries, heute Resilience4j bevorzugt' }
      ],
      commands: null,
      deepDive: null
    },
    {
      id: 'ddd',
      title: 'Domain-Driven Design',
      icon: 'map',
      concept: 'Code strukturieren, der die Fachsprache und Grenzen der Geschäftsdomäne widerspiegelt',
      body: 'Domain-Driven Design ist eine Sammlung von Mustern für den strategischen und taktischen Entwurf komplexer Systeme. Der wichtigste Beitrag ist nicht der taktische Code (Entities, Value Objects), sondern das strategische Denken: Bounded Contexts definieren, wo ein Modell gültig ist, und Ubiquitous Language erzwingt, dass Entwickler und Business dieselben Begriffe verwenden.\n\nEin "Order" im Sales-Kontext ist nicht dasselbe wie ein "Order" im Shipping-Kontext. Wenn beide denselben Code teilen, entstehen ständige Konflikte. Bounded Contexts trennen diese Modelle explizit – Kommunikation zwischen ihnen passiert über Domain Events oder Anti-Corruption Layers.',
      keyPoints: [
        'Ubiquitous Language: Exakt die Fachbegriffe des Business im Code verwenden – kein "User" wenn das Business "Customer" sagt',
        'Bounded Context: Explizite Grenze innerhalb der ein Modell konsistent und gültig ist',
        'Aggregate: Cluster von Objekten die als atomare Einheit behandelt werden – die Grenze für Transaktionen',
        'Entity: Hat Identität über Zeit (User mit ID 42 bleibt "derselbe User" auch wenn sich Felder ändern)',
        'Value Object: Keine Identität, immutabel – Money(100, EUR), Address – Gleichheit über Wert, nicht ID',
        'Domain Event: "Etwas Wichtiges ist passiert" – OrderPlaced, PaymentFailed – entkoppelt Bounded Contexts'
      ],
      tools: [
        { name: 'EventStorming', purpose: 'Workshop-Methode um Domain Events und Bounded Contexts zu entdecken' },
        { name: 'Context Map', purpose: 'Visualisiert Beziehungen zwischen Bounded Contexts' }
      ],
      commands: null,
      deepDive: null
    }
  ]
},

/* ══════════════════════════════════════════════════════════════════
   TOPIC 4 – TESTING
   ══════════════════════════════════════════════════════════════════ */
{
  id: 'testing',
  title: 'Testing & Qualität',
  icon: 'test-tube-2',
  tagline: 'Vertrauen in Code aufbauen durch mehrschichtige Verifikationsstrategien',
  color: '#10B981',
  gradient: 'linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%)',
  overview: 'Tests sind kein Luxus – sie sind die einzige skalierbare Methode, Vertrauen in Änderungen zu haben. Ohne Tests wird jede neue Funktion zum Roulette: Funktioniert das Alte noch? Wer weiß. Mit guten Tests wird Refaktorierung zur risikoarmen Aktivität, weil das Netz der Tests signalisiert wenn etwas bricht.\n\nDer entscheidende Unterschied: Tests die Verhalten beschreiben, sind wertvoll. Tests die Implementierungsdetails prüfen, sind teuer und fragil. "Die Methode saveUser() wurde aufgerufen" ist ein schlechter Test. "Nach der Registrierung kann sich der User einloggen" ist ein guter Test.',
  relatedTopics: ['devprocess', 'cicd', 'architecture'],
  subareas: [
    {
      id: 'test-pyramid',
      title: 'Testing-Pyramide & Strategie',
      icon: 'triangle',
      concept: 'Balance zwischen Testtypen für maximales Vertrauen bei minimalem Wartungsaufwand',
      body: 'Die Testing-Pyramide ist eine Heuristik für die Verteilung von Tests: Viele Unit Tests (schnell, isoliert, günstig), weniger Integration Tests (testen Zusammenspiel), noch weniger E2E Tests (testen den gesamten Stack, aber langsam und fragil). Das Eiswaffel-Anti-Pattern ist die Umkehrung: viele langsame E2E Tests und kaum Unit Tests.\n\nDie beste Test-Strategie hängt vom System ab: Bibliotheken brauchen andere Testverteilungen als Microservices. Contract Tests (Pact) ersetzen E2E-Tests zwischen Services – viel zuverlässiger und schneller. Visual Regression Tests (Playwright, Chromatic) prüfen UI-Rendering-Änderungen automatisch.',
      keyPoints: [
        'Unit Tests (Pyramidenbasis): < 100ms, keine externen Dependencies, testen eine Einheit isoliert',
        'Integration Tests (Mitte): Testen das Zusammenspiel – Controller + Service + DB mit echtem Schema',
        'E2E Tests (Pyramidenspitze): Nur für kritische User-Journeys (Login, Checkout, Kernprozesse)',
        'Coverage ist ein Floor, kein Ziel: 80% mit guten Tests > 90% mit sinnlosen Tests',
        'Mutation Testing (Stryker, Pitest) prüft Testqualität: Überlebt eine Mutation die Tests? Dann ist der Test schwach',
        'Flaky Tests sind ein Notfall: Sie untergraben das Vertrauen in die gesamte Suite – sofort quarantänen'
      ],
      tools: [
        { name: 'Jest / Vitest', purpose: 'Standard JavaScript/TypeScript Test-Frameworks' },
        { name: 'pytest', purpose: 'Python-Testframework mit mächtigen Fixtures' },
        { name: 'JUnit 5', purpose: 'Java-Standard mit parametrisierten Tests und Extensions' },
        { name: 'Pact', purpose: 'Contract Testing zwischen Microservices' }
      ],
      commands: [
        { cmd: 'jest --coverage --watch', desc: 'Tests im Watch-Modus mit Coverage-Report' },
        { cmd: 'pytest -v --tb=short --cov=src', desc: 'Pytest mit kurzem Traceback und Coverage' }
      ],
      deepDive: null
    },
    {
      id: 'unit-testing',
      title: 'Unit Testing Best Practices',
      icon: 'check-square',
      concept: 'Tests schreiben, die wertvoll, wartbar und vertrauenswürdig sind',
      body: 'Gute Unit Tests beschreiben Verhalten, nicht Implementierung. Der Unterschied ist entscheidend: Verhaltens-Tests überleben Refaktorierungen, Implementierungs-Tests nicht. "Benutzer mit ungültigem Email wird abgelehnt" beschreibt Verhalten. "Die Regex-Validierung wird aufgerufen" beschreibt Implementierung.\n\nDas AAA-Pattern strukturiert jeden Test klar: Arrange (Vorbereitung), Act (Ausführung), Assert (Überprüfung). Genau eine logische Behauptung pro Test. Wenn ein Test bricht, soll sofort klar sein WAS gebrochen ist – nicht eine Flut von Assertion-Failures durchsucht werden müssen.',
      keyPoints: [
        'AAA: Arrange (Setup), Act (Aktion), Assert (Prüfung) – die drei Phasen klar trennen',
        'Ein Test = eine logische Behauptung: Wenn möglich, ein expect() pro Test',
        'Testnamen beschreiben Verhalten: "should reject email without @ sign" statt "testValidateEmail"',
        'FIRST: Fast (<100ms), Independent (keine Reihenfolge), Repeatable (immer gleich), Self-validating, Timely (vor Produktion)',
        'Testen von Public Interface, nicht private Methoden – private sind Implementierungsdetail',
        'Parametrisierte Tests für Grenzwerte: leerer String, null, Maximalwert, Negativwert'
      ],
      tools: [
        { name: 'Vitest', purpose: 'Schnelleres Jest-Alternative mit nativer TypeScript-Unterstützung' },
        { name: 'Testing Library', purpose: 'UI-Testing mit Fokus auf Nutzer-Verhalten statt DOM-Struktur' }
      ],
      commands: [
        { cmd: 'npx jest --testNamePattern="should reject"', desc: 'Nur Tests ausführen, die Pattern im Namen haben' },
        { cmd: 'pytest -k "invalid" -v', desc: 'Python: Nur Tests mit "invalid" im Namen' }
      ],
      deepDive: {
        title: 'Test Doubles: Fake, Stub, Spy, Mock – wann was?',
        intro: 'Der häufigste Fehler im Unit Testing: Alles wird "gemockt". Das ist nicht nur unnötige Arbeit, es erzeugt auch fragile Tests die bei jeder Implementierungsänderung brechen. Hier ist die Taxonomie mit konkreten Anwendungsfällen.',
        sections: [
          {
            heading: 'Die vier Test Double Typen',
            prose: 'Gerard Meszaros unterscheidet vier Test-Double-Typen. Fakes sind einfache Implementierungen (In-Memory-Datenbank statt echter DB). Stubs liefern vordefinierte Antworten (getUserById() gibt immer einen fixen User zurück). Spies zeichnen Aufrufe auf. Mocks sind vorprogrammierte mit Erwartungen – sie schlagen fehl wenn die Erwartung nicht erfüllt wird.',
            codeBlock: {
              language: 'typescript',
              label: 'Test Double Typen in TypeScript (Jest)',
              code: `// FAKE: Echte Implementierung, vereinfacht
class InMemoryUserRepository implements UserRepository {
  private users = new Map<string, User>();
  async findById(id: string) { return this.users.get(id) ?? null; }
  async save(user: User) { this.users.set(user.id, user); }
}

// STUB: Vordefinierte Antwort, egal was gefragt wird
const userRepoStub = {
  findById: jest.fn().mockResolvedValue({ id: '1', email: 'a@b.com' })
};

// SPY: Echte Funktion + Aufzeichnung
const emailSpy = jest.spyOn(emailService, 'sendWelcome');
await userService.register('a@b.com', 'password123');
expect(emailSpy).toHaveBeenCalledWith('a@b.com');

// MOCK: Vorprogrammiert MIT Erwartung (schlägt fehl wenn nicht erfüllt)
const emailMock = jest.fn();
const service = new UserService(repoStub, { sendWelcome: emailMock });
await service.register('a@b.com', 'pw');
expect(emailMock).toHaveBeenCalledTimes(1); // Scheitert wenn nicht aufgerufen`
            }
          },
          {
            heading: 'Wann welchen Test Double verwenden?',
            prose: 'Faustregel: Verwende Fakes wenn du das externe System vermeiden willst aber echtes Verhalten brauchst. Stubs wenn ein Collaborator einen Wert liefern muss, sein Verhalten aber unwichtig ist. Spies nur für "wurde aufgerufen?"-Überprüfungen. Mocks sparsam – sie koppeln Tests an Implementierung.',
            codeBlock: {
              language: 'typescript',
              label: 'Entscheidungshilfe: Welcher Double für welchen Zweck?',
              code: `// Datenbankzugriff vermeiden, aber reales Verhalten brauchen?
// → FAKE (InMemoryRepository)
const repo = new InMemoryUserRepository();
const service = new UserService(repo);

// Externer Service gibt Wert zurück, Details unwichtig?
// → STUB
const paymentStub = { charge: jest.fn().mockResolvedValue({ status: 'ok' }) };

// Wurde eine Methode aufgerufen (Seiteneffekt prüfen)?
// → SPY auf echte Implementierung
const logSpy = jest.spyOn(logger, 'warn');
service.doRiskyThing();
expect(logSpy).toHaveBeenCalled();`
            }
          }
        ],
        bestPractices: [
          'Fakes > Mocks für Repositories und externe Services: weniger Kopplung an Implementierung',
          'Mock-heavy Tests schlagen bei jeder Refaktorierung fehl – das ist ein Signal, nicht ein Ziel',
          'Test-Doubles immer vom selben Interface ableiten – TypeScript-Typsicherheit schützt vor Abweichungen'
        ],
        pitfalls: [
          'Alles mocken auch wenn keine externe Abhängigkeit vorliegt – unnötige Komplexität',
          'Spies auf private Methoden – koppelt Test an Implementierungsdetail',
          '"Mock-Hölle": Zehn verschachtelte Mock-Setups → meist ein SRP-Problem im Produktionscode'
        ],
        furtherReading: [
          { title: 'Martin Fowler: Mocks Aren\'t Stubs', url: 'https://martinfowler.com/articles/mocksArentStubs.html' },
          { title: 'Vladimir Khorikov: Unit Testing Principles', url: 'https://www.manning.com/books/unit-testing' }
        ]
      }
    },
    {
      id: 'integration-e2e',
      title: 'Integration & E2E Tests',
      icon: 'link',
      concept: 'Komponentenzusammenspiel über echte Grenzen hinweg verifizieren',
      body: 'Integration Tests testen das Zusammenspiel von mindestens zwei Komponenten über eine echte Grenze – z.B. Service + Datenbank. Die wichtigste Entscheidung: Welche externen Abhängigkeiten sind echt, welche werden ersetzt? Testcontainers ist die Antwort für Datenbanken: eine echte PostgreSQL-Instanz im Docker-Container, die nach dem Test weggeworfen wird.\n\nE2E Tests (End-to-End) testen den gesamten Stack aus Nutzerperspektive – Browser, API, Datenbank, alles. Sie sind wertvoll für kritische Geschäftsprozesse, aber teuer in der Wartung. Playwright hat Cypress weitgehend abgelöst: bessere Browser-Unterstützung, schnelleres paralleles Ausführen, und TypeScript-First.',
      keyPoints: [
        'Testcontainers: Echte DB im Container startet für Tests, wird danach automatisch entfernt – keine geteilte Test-DB',
        'Integration Tests laufen oft mit Datenbankrollback nach jedem Test – sauberer Zustand garantiert',
        'E2E nur für kritische Pfade: Login, Zahlung, Kernprozesse – nicht für jedes UI-Element',
        'Flaky E2E Tests sofort quarantänen – eine grüne Suite mit 2 ignorierten Tests ist besser als rotes CI',
        'Contract Tests (Pact) ersetzen E2E zwischen Services: Consumer-driven, schnell, ohne laufende Services',
        'Page Object Pattern für E2E: UI-Interaktion in Klassen kapseln, Tests bleiben lesbar'
      ],
      tools: [
        { name: 'Testcontainers', purpose: 'Echte Docker-Container (DB, Redis, Kafka) für Integration Tests' },
        { name: 'Playwright', purpose: 'E2E Browser-Testing – multi-browser, schnell, TypeScript-nativ' },
        { name: 'Cypress', purpose: 'E2E-Alternative mit exzellentem DX und interaktivem Debug-Modus' },
        { name: 'Pact', purpose: 'Consumer-Driven Contract Testing für Microservices-Integration' }
      ],
      commands: [
        { cmd: 'npx playwright test --ui', desc: 'Playwright im UI-Modus mit Live-Debugging' },
        { cmd: 'npx playwright codegen https://localhost:3000', desc: 'Tests aus Browser-Interaktionen aufzeichnen' }
      ],
      deepDive: null
    },
    {
      id: 'tdd',
      title: 'Test-Driven Development',
      icon: 'repeat',
      concept: 'Fehlschlagende Tests als Design-Treiber für Produktionscode verwenden',
      body: 'TDD ist kontraintuitiv: Erst den Test schreiben, der fehlschlägt, dann den Code schreiben, der ihn bestehen lässt, dann refaktorieren. Red-Green-Refactor. Der eigentliche Nutzen ist nicht die Testabdeckung – es ist das Design-Feedback: Code der schwer zu testen ist, ist fast immer schlecht designed. TDD erzwingt testbaren Code von Anfang an.\n\nEs gibt zwei Schulen: Die Detroit School (Classicist) verwendet echte Objekte und minimale Test Doubles – Tests testen emergentes Verhalten. Die London School (Mockist) mockt alle Collaborators – Tests testen Interaktionen. Beide haben ihren Platz; für neue Projekte empfiehlt sich die Detroit School.',
      keyPoints: [
        'Red: Schreibe einen Test der die noch nicht existierende Funktionalität beschreibt – er MUSS fehlschlagen',
        'Green: Schreibe minimal Code um den Test zu bestehen – auch hässlich, auch hardcoded, wenn nötig',
        'Refactor: Verbessere Code ohne neue Funktionalität – Tests bleiben grün als Sicherheitsnetz',
        'TDD verbessert API-Design: Wenn der Test umständlich zu schreiben ist, ist die API schlecht',
        'Katas (KataBankAccount, KataMarsRover) zum Üben – TDD braucht Muskelgedächtnis',
        'Nicht jede Linie braucht TDD: UI, Migrations, Konfiguration – das Verhältnis ist situativ'
      ],
      tools: [
        { name: 'Jest / Vitest', purpose: 'Watch-Modus ideal für TDD: Test automatisch re-run bei Datei-Änderung' },
        { name: 'kata-log.rocks', purpose: 'Sammlung von TDD-Katas für verschiedene Komplexitätsstufen' }
      ],
      commands: [
        { cmd: 'jest --watch --verbose', desc: 'Tests automatisch re-run – ideal für TDD-Zyklus' },
        { cmd: 'pytest --tb=short -x', desc: 'Python: Stop nach erstem Fehler, kurzer Traceback' }
      ],
      deepDive: null
    },
    {
      id: 'performance-testing',
      title: 'Performance Testing',
      icon: 'activity',
      concept: 'Systemverhalten unter realistischer und extremer Last verifizieren',
      body: 'Performance Testing ist kein optionales Nice-to-have – es ist die einzige Möglichkeit, zu wissen ob das System den Produktionsload trägt, bevor der Produktionsload eintrifft. Die häufigste Überraschung: Das System funktioniert für 10 gleichzeitige User. Bei 1000 bricht alles zusammen – weil ein SQL-Query kein Index hat, weil der Connection Pool zu klein ist, oder weil eine externe API gedrosselt wird.\n\nDer kritische Unterschied: Durchschnittliche Latenz lügt. P99-Latenz (die 99. Perzentile) zeigt, was 1% der Nutzer erlebt – meist die mit großen Datensätzen oder langsamen Verbindungen. Diese 1% sind in absoluten Zahlen bei 100.000 täglichen Nutzern immer noch 1.000 Menschen.',
      keyPoints: [
        'Load Test: Erwarteter Produktions-Load – verifiziert, dass das System unter Normallast funktioniert',
        'Stress Test: Über Kapazitätsgrenze gehen – findet den Bruchpunkt und das Verhalten danach',
        'Spike Test: Plötzlicher Traffic-Anstieg (Marketing-Aktion, Viral-Moment) – wie schnell erholt sich das System?',
        'Soak Test: Mehrere Stunden unter Last – findet Memory Leaks und Resource Exhaustion',
        'P50/P95/P99 Latenz statt Durchschnitt – Durchschnitt verbirgt Extremwerte',
        'Warm-Up Phase vor Messung: JIT-Compiler, Connection Pool und Caches brauchen Zeit'
      ],
      tools: [
        { name: 'k6', purpose: 'Modernes Load-Testing mit JavaScript-Scripting und Cloud-Skalierung' },
        { name: 'Locust', purpose: 'Python-basiertes Load-Testing, gut für komplexe Szenarien' },
        { name: 'Artillery', purpose: 'YAML-konfiguriertes Load-Testing für APIs' },
        { name: 'Grafana', purpose: 'Echtzeit-Dashboard für Performance-Test-Ergebnisse' }
      ],
      commands: [
        { cmd: 'k6 run --vus 100 --duration 30s load-test.js', desc: '100 virtuelle User für 30 Sekunden' },
        { cmd: 'k6 run --stage 0:10,100:30s,100:1m,0:10s ramp.js', desc: 'Ramp-Up-Profil: langsam hochfahren' }
      ],
      deepDive: null
    }
  ]
},

/* ══════════════════════════════════════════════════════════════════
   TOPIC 5 – SECURITY & AUTHENTICATION
   ══════════════════════════════════════════════════════════════════ */
{
  id: 'security',
  title: 'Security & Authentifizierung',
  icon: 'shield',
  tagline: 'Defense in Depth: Systeme, Daten und Nutzer auf jeder Ebene schützen',
  color: '#EF4444',
  gradient: 'linear-gradient(135deg, #EF4444 0%, #DC2626 50%, #B91C1C 100%)',
  overview: 'Sicherheit ist kein Feature das man "am Ende hinzufügt". Jede Entscheidung in der Entwicklung hat Sicherheitsimplikationen: Wie werden Passwörter gespeichert? Wie wird validiert wer eine Ressource lesen darf? Werden Eingaben trusted? Die häufigsten Sicherheitslücken entstehen nicht durch komplexe Angriffe – sie entstehen durch grundlegende Fehler wie fehlende Autorisierungsprüfungen oder direkte SQL-String-Konkatenation.\n\nDer wichtigste Mindset-Shift: Security ist eine Eigenschaft des Systems, keine Komponente davon. OWASP Top 10 ist die Pflichtlektüre – die meisten realen Angriffe nutzen diese bekannten Schwachstellen, nicht ausgefeilte Zero-Days.',
  relatedTopics: ['architecture', 'cicd', 'apis'],
  subareas: [
    {
      id: 'authentication',
      title: 'Authentifizierung',
      icon: 'key',
      concept: 'Identität zuverlässig verifizieren ohne dabei neue Sicherheitslücken zu erzeugen',
      body: 'Authentifizierung (AuthN) – Wer bist du? – ist von Autorisierung (AuthZ) – Was darfst du? – zu trennen. Beide Konzepte werden häufig vermischt. Passwörter müssen mit bcrypt oder Argon2 gehasht werden – niemals mit MD5 oder SHA-256 allein, weil Rainbow Tables diese Algorithmen für kurze Passwörter in Sekunden brechen.\n\nJWT (JSON Web Tokens) sind weit verbreitet, aber auch oft falsch implementiert. Die Algorithm Confusion Attack (RS256 vs HS256) kann Tokens fälschbar machen wenn der Algorithmus nicht serverseitig erzwungen wird. JWTs im localStorage speichern öffnet XSS-Angriffsvektoren – httpOnly-Cookies sind die sichere Alternative.',
      keyPoints: [
        'bcrypt oder Argon2 für Passwort-Hashing – der Work-Factor macht Brute-Force teuer (bcrypt: cost=12)',
        'JWT-Pitfall: Algorithmus im Server erzwingen, nicht aus dem Token lesen – algorithm confusion verhindert',
        'JWT in httpOnly Cookie speichern, nicht in localStorage – localStorage ist via XSS lesbar',
        'OAuth 2.0 Authorization Code Flow + PKCE für Web-Apps – nicht Implicit Flow (veraltet, unsicher)',
        'MFA (Multi-Factor Authentication) reduziert Account-Takeover-Risiko um >99% – TOTP oder FIDO2',
        'Session-Tokens vs JWT: Session erfordert Server-State (skaliert schlechter), JWT ist stateless (kann nicht invalidiert werden)'
      ],
      tools: [
        { name: 'Auth0', purpose: 'Vollständige Identity-Platform – Authentifizierung als Service' },
        { name: 'Keycloak', purpose: 'Self-hosted Open-Source Identity Provider mit OAuth2/OIDC' },
        { name: 'Passport.js', purpose: 'Node.js Authentication-Middleware mit 500+ Strategien' }
      ],
      commands: [
        { cmd: 'openssl rand -hex 32', desc: 'Kryptografisch sicheren Session-Secret generieren' }
      ],
      deepDive: {
        title: 'JWT vs. Opaque Tokens: Sicherheit und Operational Trade-offs',
        intro: 'Die Entscheidung zwischen JWTs und opaken Session-Tokens ist eine der häufigsten Architektur-Diskussionen. Hier sind die konkreten Trade-offs mit Implementierungsbeispielen.',
        sections: [
          {
            heading: 'JWT: Stateless, aber mit Tücken',
            prose: 'JWTs sind Base64-kodierte JSON-Objekte in drei Teilen: Header.Payload.Signature. Die Signatur verifiziert die Integrität, macht den Token aber nicht geheim – der Payload ist lesbar (nur Base64, nicht verschlüsselt). Das ist oft vergessen: Keine sensiblen Daten in JWT-Payloads speichern.',
            codeBlock: {
              language: 'typescript',
              label: 'JWT sicher ausstellen und validieren',
              code: `import jwt from 'jsonwebtoken';

// Ausstellen – sparsame Claims, kurze Lifetime
const token = jwt.sign(
  {
    sub: userId,          // Subject: User-ID
    role: 'user',         // Minimal benötigte Claims
    // NICHT: password, email, PII
  },
  process.env.JWT_SECRET!,
  {
    algorithm: 'HS256',   // Algorithmus IMMER explizit setzen
    expiresIn: '15m',     // Kurze Lifetime (15min), Refresh Token für Erneuerung
    issuer: 'api.example.com',
    audience: 'web-client'
  }
);

// Validieren – Algorithmus explizit erzwingen!
const payload = jwt.verify(token, process.env.JWT_SECRET!, {
  algorithms: ['HS256'],  // KRITISCH: verhindert algorithm confusion attack
  issuer: 'api.example.com',
  audience: 'web-client'
});`
            }
          },
          {
            heading: 'Das Invalidierungs-Problem von JWTs',
            prose: 'JWTs können vor ihrer Expiry-Zeit nicht invalidiert werden – ohne zusätzliche Infrastruktur. Wenn ein User-Account gesperrt wird oder sich ausloggt, kann der JWT noch 15 Minuten gültig sein. Lösungen: Sehr kurze Lifetime (1-5min) + Refresh Tokens, oder eine Token-Denylist in Redis.',
            codeBlock: {
              language: 'typescript',
              label: 'Token-Denylist in Redis für sofortige Invalidierung',
              code: `// Logout: Token in Denylist aufnehmen
async function logout(token: string) {
  const payload = jwt.decode(token) as JwtPayload;
  const ttl = payload.exp! - Math.floor(Date.now() / 1000);

  // Token in Redis für verbleibende Lifetime blocken
  await redis.setex(\`denylist:\${token}\`, ttl, '1');
}

// Middleware: Denylist vor jeder Anfrage prüfen
async function verifyToken(token: string) {
  const isDenied = await redis.exists(\`denylist:\${token}\`);
  if (isDenied) throw new Error('Token invalidated');

  return jwt.verify(token, process.env.JWT_SECRET!, {
    algorithms: ['HS256']
  });
}`
            }
          }
        ],
        bestPractices: [
          'Refresh Token Rotation: Jedes Mal wenn ein Refresh Token verwendet wird, wird ein neuer ausgestellt – Diebstahl erkennbar',
          'Access Token Lifetime: 5-15 Minuten – kurz genug dass Diebstahl wenig nützt',
          'Separate Signing Keys für Access und Refresh Tokens – kompromittierter Key hat kleineren Scope'
        ],
        pitfalls: [
          'JWT-Secret in .env committed → Direktzugriff auf alle Tokens aller Nutzer',
          'Lange JWT-Lifetime (24h+) ohne Invalidierungsmöglichkeit – bei Account-Kompromittierung zu spät',
          'none-Algorithmus: Manche Libraries akzeptieren unsignierte Tokens wenn algorithm nicht erzwungen wird'
        ],
        furtherReading: [
          { title: 'JWT.io – Token Debugger und Dokumentation', url: 'https://jwt.io/' },
          { title: 'OWASP: JSON Web Token Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.html' }
        ]
      }
    },
    {
      id: 'authorization',
      title: 'Autorisierung & Zugriffskontrolle',
      icon: 'lock',
      concept: 'Sicherstellen dass authentifizierte Nutzer nur auf erlaubte Ressourcen zugreifen',
      body: 'Insecure Direct Object Reference (IDOR) ist konsistent in den OWASP Top 10: GET /api/orders/12345 gibt die Bestellung zurück – aber wurde geprüft, ob der anfragende Nutzer diese Bestellung sehen darf? Diese Prüfung vergisst das Team erschreckend oft. Authorization muss auf jeder Ebene stattfinden: API Gateway, Service, und Datenbank-Abfrage.\n\nRBAC (Role-Based Access Control) ist einfach zu implementieren aber unflexibel für komplexe Szenarien. ABAC (Attribute-Based) erlaubt fein-granulare Regeln ("User darf Dokument sehen wenn er Eigentümer ist ODER Mitglied der Organisation ist UND Dokument nicht archiviert ist"). OPA (Open Policy Agent) externalisisert diese Entscheidungen aus dem Anwendungscode.',
      keyPoints: [
        'IDOR prüfen: Jede Resource-Operation muss prüfen ob der Caller Zugriff auf GENAU DIESE Resource hat',
        'Principle of Least Privilege: Minimale Berechtigungen für jeden User, Service und Prozess',
        'AuthZ an mehreren Ebenen: API Gateway (grobe Filter), Service (Business-Regeln), DB (Row-Level Security)',
        'RBAC: Roles → Permissions – einfach, aber "God Role"-Anti-Pattern durch schlechte Rollenplanung',
        'ABAC / PBAC: Regeln basierend auf Attributen (User, Resource, Environment) – mächtig aber komplex',
        'Audit-Logging: Jeder Zugriff und jede Ablehnung wird protokolliert – für Compliance und Debugging'
      ],
      tools: [
        { name: 'OPA (Open Policy Agent)', purpose: 'Policy als Code: Autorisierungsregeln in Rego-Sprache, unabhängig von Anwendungslogik' },
        { name: 'Casbin', purpose: 'Leichtgewichtige RBAC/ABAC-Bibliothek für viele Sprachen' },
        { name: 'AWS IAM', purpose: 'Feingranulare Zugriffskontrolle für AWS-Ressourcen (Policy-as-Code)' }
      ],
      commands: null,
      deepDive: null
    },
    {
      id: 'owasp',
      title: 'OWASP Top 10 & Häufige Schwachstellen',
      icon: 'alert-triangle',
      concept: 'Die zehn kritischsten Web-Anwendungs-Sicherheitsrisiken und ihre Prävention',
      body: 'Die OWASP Top 10 ist die wichtigste Referenz für Web-Anwendungssicherheit und wird alle 3-4 Jahre aktualisiert. Seit 2021 führt "Broken Access Control" die Liste an – d.h. fehlende oder fehlerhafte Autorisierungsprüfungen. SQL Injection ist seit Jahren bekannt, tritt aber immer noch regelmäßig in Pentests auf.\n\nJede Schwachstelle hat eine klare Prävention. SQL Injection: ausschließlich parametrisierte Queries verwenden, niemals String-Konkatenation. XSS: Output immer kontext-sensitiv escapen, CSP-Header setzen. CSRF: SameSite=Strict Cookie-Attribute setzen. Diese Maßnahmen kosten minimal Aufwand und eliminieren ganze Schwachstellen-Klassen.',
      keyPoints: [
        'A01 Broken Access Control: Fehlende IDOR-Prüfungen, horizontale Privilege Escalation – #1 seit 2021',
        'A03 Injection (SQL, NoSQL, LDAP): Parametrisierte Queries und ORMs verwenden – niemals String-Konkatenation',
        'A07 XSS (Cross-Site Scripting): Output escapen, Content-Security-Policy Header, kein eval()',
        'A08 Integrity Failures: Unsigned Artifacts, Supply Chain Attacks – Dependency-Scanning in CI',
        'A10 SSRF (Server-Side Request Forgery): URL-Allowlist für externe Requests – kein User-controlled URL',
        'Security Headers: HSTS, CSP, X-Frame-Options, X-Content-Type-Options – in 10 Minuten konfiguriert'
      ],
      tools: [
        { name: 'OWASP ZAP', purpose: 'Kostenloses DAST-Tool: Scannt laufende Anwendung auf bekannte Schwachstellen' },
        { name: 'Snyk', purpose: 'SCA + SAST: Dependency-Vulnerabilities und Code-Schwachstellen' },
        { name: 'Semgrep', purpose: 'Schnelles SAST mit community-gepflegten Sicherheits-Regeln' }
      ],
      commands: [
        { cmd: 'npx snyk test', desc: 'Dependency-Vulnerabilities im aktuellen Projekt scannen' },
        { cmd: 'semgrep --config=p/owasp-top-ten .', desc: 'OWASP-Top-10-Scan mit Semgrep' }
      ],
      deepDive: {
        title: 'SQL Injection: Parameterized Queries vs. ORM vs. Stored Procedures',
        intro: 'SQL Injection ist die bekannteste Schwachstelle – und noch immer eine der häufigsten. Hier sind alle Präventionsmethoden im Vergleich mit konkreten Code-Beispielen.',
        sections: [
          {
            heading: 'Das Problem: String-Konkatenation',
            prose: 'SQL Injection entsteht wenn User-Input direkt in SQL-Strings eingebaut wird. Ein Angreifer gibt einen speziell konstruierten String ein, der die SQL-Struktur verändert.',
            codeBlock: {
              language: 'typescript',
              label: 'UNSICHER: String-Konkatenation (niemals verwenden)',
              code: `// 🚫 GEFÄHRLICH: Direkte String-Konkatenation
const query = "SELECT * FROM users WHERE email = '" + email + "'";

// Angreifer gibt ein: ' OR '1'='1
// Resultat: SELECT * FROM users WHERE email = '' OR '1'='1'
// → Gibt ALLE User zurück

// Schlimmer: email = "'; DROP TABLE users; --"
// → Löscht die gesamte User-Tabelle`
            }
          },
          {
            heading: 'Lösung 1: Parametrisierte Queries',
            prose: 'Parametrisierte Queries trennen SQL-Struktur von Daten. Der Datenbankserver bekommt das SQL-Template und die Parameter getrennt – der Parameter kann niemals als SQL interpretiert werden.',
            codeBlock: {
              language: 'typescript',
              label: 'SICHER: Parametrisierte Queries mit node-postgres',
              code: `// ✅ Sicher: Parameter getrennt vom SQL
const result = await db.query(
  'SELECT * FROM users WHERE email = $1 AND active = $2',
  [email, true]  // Werte niemals in den String einbauen
);

// Auch sicher mit named parameters (MySQL2)
const [rows] = await connection.execute(
  'SELECT * FROM users WHERE email = ? AND active = ?',
  [email, true]
);`
            }
          },
          {
            heading: 'Lösung 2: ORM mit Query Builder',
            prose: 'Ein ORM wie Prisma, TypeORM oder Sequelize generiert parametrisierte Queries automatisch. Das ist die sicherste Option da kein manuelles SQL geschrieben wird – aber man muss wissen wann der ORM auf raw queries fällt (z.B. bei komplexen JOINs).',
            codeBlock: {
              language: 'typescript',
              label: 'SICHER: Prisma ORM (generiert parametrisierte Queries)',
              code: `// ✅ Prisma: Automatisch parametrisiert
const user = await prisma.user.findFirst({
  where: {
    email: email,    // Niemals direktes SQL – Prisma übernimmt Escaping
    active: true
  }
});

// Wenn raw SQL nötig: prisma.$queryRaw mit Template Literals
const users = await prisma.$queryRaw\`
  SELECT * FROM users WHERE email = \${email}
\`;
// Template-Tag erzwingt Parametrisierung – sicher`
            }
          }
        ],
        bestPractices: [
          'Input Validation als zusätzliche Sicherheitsschicht (E-Mail-Format prüfen, Länge begrenzen) – aber kein Ersatz für Parametrisierung',
          'Datenbank-User mit minimalen Berechtigungen: Die App braucht kein DROP TABLE – also keinen Zugriff geben',
          'Dependency-Scanning in CI: SQL-Injection-Schwachstellen in Dependencies regelmäßig prüfen'
        ],
        pitfalls: [
          'ORM-Rawquery ohne Template-Tag: prisma.$queryRawUnsafe(string + input) ist genauso gefährlich wie direktes SQL',
          '"Input validation ist genug" – niemals: Validation kann umgangen werden, Parametrisierung nicht',
          'Second-Order Injection: Gespeicherter Input wird später als SQL verwendet – auch parametrisiert muss Output escaped werden'
        ],
        furtherReading: [
          { title: 'OWASP SQL Injection Prevention Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html' }
        ]
      }
    },
    {
      id: 'secrets-management',
      title: 'Secrets Management',
      icon: 'key-round',
      concept: 'Credentials, API-Keys und sensitive Konfiguration sicher verwalten',
      body: 'Secrets in Git-Repositories sind das häufigste Datenleck in der Softwareentwicklung. Auch nach dem Entfernen bleiben Secrets in der Git-History – ein git filter-repo ist nötig, und alle kompromittierten Credentials müssen rotiert werden. Der einzig sichere Ansatz: Secrets nie committen, und pre-commit Hooks verhindern es mechanisch.\n\nDie Twelve-Factor-App-Methodik definiert, dass Konfiguration (Umgebungsunterschiede) in Umgebungsvariablen gehört. Ein Schritt weiter: HashiCorp Vault oder AWS Secrets Manager verwalten Secrets zentral, ermöglichen Rotation, Audit-Logs und temporäre Credentials (Vault Leases).',
      keyPoints: [
        '.gitignore für .env-Dateien – aber als Defense-in-Depth, nicht als einziger Schutz',
        'gitleaks oder git-secrets als Pre-Commit-Hook – verhindert das Einchecken mechanisch',
        'Vault Dynamic Secrets: DB-Credentials werden on-demand ausgestellt und nach TTL automatisch revoked',
        'Verschiedene Secrets pro Environment: Dev-DB-Passwort ≠ Prod-DB-Passwort – niemals teilen',
        'Secret Scanning in CI (GitHub Advanced Security, Trufflehog) – auch historische Commits',
        'Rotation-Strategie definieren: Wann werden Secrets rotiert? Wer darf rotieren? Wie ohne Downtime?'
      ],
      tools: [
        { name: 'HashiCorp Vault', purpose: 'Vollständige Secrets-Management-Plattform mit Dynamic Secrets und Audit-Log' },
        { name: 'AWS Secrets Manager', purpose: 'Managed Secrets Storage mit automatischer Rotation' },
        { name: 'Doppler', purpose: 'Developer-freundliches Secrets-Management mit Team-Features' },
        { name: 'gitleaks', purpose: 'Git-Secret-Scanner – Pre-Commit und CI-Integration' }
      ],
      commands: [
        { cmd: 'gitleaks detect --source . -v', desc: 'Aktuelles Repository nach Secrets scannen' },
        { cmd: 'vault kv get secret/myapp/database', desc: 'Secret aus HashiCorp Vault lesen' }
      ],
      deepDive: null
    },
    {
      id: 'devsecops',
      title: 'DevSecOps & Sicherheit im SDLC',
      icon: 'shield-check',
      concept: 'Sicherheit links verschieben – Schwachstellen finden wenn sie am günstigsten zu beheben sind',
      body: 'DevSecOps bedeutet: Sicherheit ist nicht das letzte Gate vor dem Release, sondern ein integrierter Bestandteil jedes Schritts des Entwicklungsprozesses. Je früher eine Schwachstelle gefunden wird, desto günstiger ist die Behebung: In der Design-Phase kostet es einen Architektur-Diskussion. In der Code-Phase kostet es ein Refactoring. In der Produktion kostet es Datenverlust, Reputationsschaden und möglicherweise Bußgelder.\n\nSAST (Static Application Security Testing) analysiert Code ohne Ausführung – ideal für CI. DAST (Dynamic Analysis) testet die laufende Anwendung von außen – findet Runtime-Schwachstellen. SCA (Software Composition Analysis) prüft Dependencies auf bekannte CVEs.',
      keyPoints: [
        'SAST in jedem PR: Semgrep, SonarQube oder CodeQL analysieren Code auf Sicherheitsmuster',
        'SCA (Dependency Scanning): Snyk, Dependabot oder OWASP Dependency-Check – nie ohne laufendes Dep-Scanning deployen',
        'Container-Image-Scanning: Trivy oder Snyk Container prüfen Images auf OS-Pakete mit CVEs',
        'Threat Modeling in Design-Phase: STRIDE (Spoofing, Tampering, Repudiation, Info Disclosure, DoS, Elevation) strukturiert Sicherheitsüberlegungen',
        'Security Champions: Pro Team ein Entwickler mit Sicherheits-Fokus – Sicherheitskultur skaliert über Personen',
        'SBOM (Software Bill of Materials): Inventar aller Dependencies – Pflicht in regulated Industries (US Executive Order 2021)'
      ],
      tools: [
        { name: 'Trivy', purpose: 'All-in-one Scanner: Container, IaC, SBOM, Secrets' },
        { name: 'Snyk', purpose: 'Developer-fokussiertes Security-Testing: Code, Dependencies, Container' },
        { name: 'OWASP Dependency-Check', purpose: 'Open-Source SCA für Java, .NET, Node.js, Python' }
      ],
      commands: [
        { cmd: 'trivy image myapp:latest', desc: 'Docker-Image auf CVEs scannen' },
        { cmd: 'trivy fs --security-checks secret,vuln .', desc: 'Filesystem nach Secrets und Vulnerabilities scannen' }
      ],
      deepDive: null
    }
  ]
}

/* ══════════════════════════════════════════════════════════════════
   TOPIC 6 – DOCKER & CONTAINER
   ══════════════════════════════════════════════════════════════════ */
,{
  id: 'docker',
  title: 'Docker & Container',
  icon: 'box',
  tagline: 'Anwendungen so verpacken, dass sie überall konsistent ausgeführt werden',
  color: '#2496ED',
  gradient: 'linear-gradient(135deg, #2496ED 0%, #1A6BB5 50%, #0D4A8A 100%)',
  overview: 'Container haben die Art wie Software deployed wird grundlegend verändert. "Works on my machine" ist keine Ausrede mehr – ein Container-Image enthält alles was die Anwendung braucht: Laufzeitumgebung, Abhängigkeiten, Konfiguration. Das Image auf dem Laptop ist identisch mit dem in der Produktion.\n\nDocker ist dabei nur der bekannteste Vertreter – der offene Standard ist OCI (Open Container Initiative). Kubernetes baut auf diesen Standards auf und löst die nächste Frage: Wie verteile und verwalte ich viele Container über viele Maschinen?',
  relatedTopics: ['cicd', 'architecture'],
  subareas: [
    {
      id: 'container-basics',
      title: 'Container-Grundlagen',
      icon: 'layers',
      concept: 'Container als isolierte, portable Prozesse die den Host-OS-Kernel teilen',
      body: 'Container sind keine VMs. VMs emulieren vollständige Hardware inklusive eigenem Betriebssystem-Kernel – das ist mächtig aber schwer. Container teilen den Kernel des Host-Betriebssystems und isolieren nur den Prozess-Raum. Das macht sie leichtgewichtig (Start in Millisekunden) und portable, aber schwächer isoliert als VMs.\n\nDie Linux-Primitives hinter Containern: Namespaces (isolieren was Prozesse sehen – PID, Network, Filesystem, User) und cgroups (begrenzen was Prozesse verbrauchen – CPU, Memory, I/O). Docker und andere Container-Runtimes (containerd, podman) sind Abstraktion über diese Kernel-Features.',
      keyPoints: [
        'Container vs VM: Container teilt Kernel (leichter, schneller), VM hat eigenen Kernel (stärkere Isolation)',
        'Image = Immutabler Layer-Stack; Container = laufende Instanz eines Images + beschreibbarer Layer',
        'Namespaces isolieren: PID (eigener Prozessbaum), Network (eigene Netzwerk-Interfaces), Mount (eigenes Filesystem)',
        'cgroups begrenzen Ressourcen: docker run --memory=512m --cpus=1.0',
        'Jeder RUN-Befehl im Dockerfile erzeugt einen neuen Layer – Layer-Caching ist entscheidend für Build-Speed',
        'Docker ist nicht der einzige Standard: containerd (Kubernetes-Standard), podman (rootless, daemonless)'
      ],
      tools: [
        { name: 'Docker Desktop', purpose: 'Komplette Docker-Umgebung für Mac/Windows mit GUI' },
        { name: 'Podman', purpose: 'Daemonloser, rootloser Docker-Ersatz – besser für Sicherheit' },
        { name: 'Dive', purpose: 'Analysiert Docker-Image-Layer interaktiv – findet Größen-Verschwender' }
      ],
      commands: [
        { cmd: 'docker run -it --rm ubuntu:22.04 bash', desc: 'Interaktiver Ubuntu-Container, nach Exit automatisch entfernt' },
        { cmd: 'docker exec -it <container_id> sh', desc: 'Shell in laufendem Container öffnen' },
        { cmd: 'docker inspect <container_id>', desc: 'Vollständige Metadaten eines Containers anzeigen' }
      ],
      deepDive: null
    },
    {
      id: 'dockerfile',
      title: 'Dockerfile Best Practices',
      icon: 'file-code',
      concept: 'Dockerfiles schreiben die kleine, sichere und reproduzierbare Images erzeugen',
      body: 'Ein schlecht geschriebenes Dockerfile erzeugt riesige Images (1GB+) die langsam bauen, Sicherheitslücken enthalten und sich nicht korrekt cachen. Die drei wichtigsten Optimierungen: Multi-Stage Builds, Layer-Caching durch korrekte Instruktions-Reihenfolge, und Non-Root User.\n\nDer häufigste Cache-Fehler: COPY . . vor npm install. Das invalidiert den npm-Cache bei jeder Code-Änderung. Korrekt: zuerst package.json und package-lock.json kopieren, dann npm install, dann den Rest des Codes. So wird npm install nur neu ausgeführt wenn sich Dependencies geändert haben.',
      keyPoints: [
        'Layer-Reihenfolge: Selten änderndes zuerst (Base-Image, System-Packages), häufig änderndes zuletzt (Code)',
        'COPY package.json ./ && npm ci vor COPY . . – npm-Layer wird gecacht wenn package.json unverändert',
        'Multi-Stage Build: Build-Stage (alle Dev-Tools) → Runtime-Stage (nur Produktions-Artefakte) – massiv kleinere Images',
        'USER 1001 oder useradd: Container als Non-Root laufen – root im Container ≠ root auf Host (aber trotzdem vermeiden)',
        '.dockerignore erstellen: node_modules/, .git/, .env, *.log aus dem Build-Context ausschließen',
        'Spezifische Tags statt :latest – "node:20.11.0-alpine3.19" statt "node:latest" für reproduzierbare Builds'
      ],
      tools: [
        { name: 'Hadolint', purpose: 'Dockerfile-Linter mit Sicherheits- und Best-Practice-Regeln' },
        { name: 'dive', purpose: 'Image-Layer-Inspektion – zeigt was in welchem Layer Platz verbraucht' },
        { name: 'Trivy', purpose: 'Security-Scanning des fertigen Images' }
      ],
      commands: [
        { cmd: 'hadolint Dockerfile', desc: 'Dockerfile auf Best-Practice-Verletzungen prüfen' },
        { cmd: 'docker build --no-cache -t myapp:latest .', desc: 'Build ohne Cache – für sauberen Referenz-Build' },
        { cmd: 'docker image ls --format "table {{.Repository}}\\t{{.Tag}}\\t{{.Size}}"', desc: 'Images mit Größe auflisten' }
      ],
      deepDive: {
        title: 'Multi-Stage Build: Node.js-App von 1.2GB auf 120MB',
        intro: 'Multi-Stage Builds sind das wirkungsvollste Werkzeug für kleine, sichere Container-Images. Das Konzept: Mehrere FROM-Anweisungen in einem Dockerfile – jede Stage ist eine eigene Umgebung. Nur explizit kopierte Dateien kommen in die nächste Stage.',
        sections: [
          {
            heading: 'Vorher: Naiver Dockerfile (>1GB)',
            prose: 'Ein typischer Node.js-Dockerfile der alles in eine Stage packt: Alle Dev-Dependencies, TypeScript-Compiler, Build-Tools und der gesamte Quellcode landen im finalen Image.',
            codeBlock: {
              language: 'dockerfile',
              label: 'Problematisch: Alles in einer Stage',
              code: `FROM node:20
WORKDIR /app
COPY . .
RUN npm install          # inkl. devDependencies (typescript, jest, eslint...)
RUN npm run build        # TypeScript kompilieren
EXPOSE 3000
CMD ["node", "dist/index.js"]
# Image-Größe: ~1.2GB (node_modules mit devDeps, TypeScript-Source, etc.)`
            }
          },
          {
            heading: 'Nachher: Multi-Stage Build (<120MB)',
            prose: 'Die Build-Stage kompiliert TypeScript und hat alle Dev-Tools. Die Runtime-Stage kopiert nur die kompilierten dist/-Dateien und installiert ausschließlich Produktions-Dependencies. Das Ergebnis ist ein winziges, sicheres Image.',
            codeBlock: {
              language: 'dockerfile',
              label: 'Optimiert: Multi-Stage Build',
              code: `# ── Stage 1: Build ──────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app

# Dependencies zuerst (gecacht wenn package.json unverändert)
COPY package*.json ./
RUN npm ci                 # ci statt install: deterministisch, kein package-lock Update

# Source kopieren und kompilieren
COPY tsconfig.json ./
COPY src/ ./src/
RUN npm run build          # Erzeugt dist/

# ── Stage 2: Runtime ─────────────────────────────────────
FROM node:20-alpine AS runtime
WORKDIR /app

# Non-root User anlegen
RUN addgroup -g 1001 appgroup && \
    adduser -D -u 1001 -G appgroup appuser

# Nur Produktions-Dependencies
COPY package*.json ./
RUN npm ci --omit=dev && \
    npm cache clean --force   # Cache nicht im Layer belassen

# Nur kompilierte Artefakte aus Build-Stage
COPY --from=builder /app/dist ./dist

# Security: Non-root User aktivieren
USER appuser

EXPOSE 3000
CMD ["node", "dist/index.js"]
# Image-Größe: ~120MB`
            }
          }
        ],
        bestPractices: [
          'npm ci statt npm install in CI/Dockerfile: deterministisch, respektiert package-lock.json exakt',
          'Alpine-Images (~5MB) als Base statt Debian-Images (~170MB) – weniger Attack Surface',
          'Healthcheck hinzufügen: HEALTHCHECK CMD curl -f http://localhost:3000/health || exit 1'
        ],
        pitfalls: [
          'Secrets in Dockerfile-RUN-Befehlen – bleiben in Layer-History, auch nach Löschen',
          'COPY . . vor npm install invalidiert npm-Cache bei jeder Code-Änderung – langsame Builds',
          ':latest tag in Produktion – nicht reproduzierbar, kann sich zwischen Builds ändern'
        ],
        furtherReading: [
          { title: 'Docker Multi-Stage Builds Docs', url: 'https://docs.docker.com/build/building/multi-stage/' },
          { title: 'Hadolint: Dockerfile Linter', url: 'https://github.com/hadolint/hadolint' }
        ]
      }
    },
    {
      id: 'compose',
      title: 'Docker Compose & lokale Entwicklung',
      icon: 'package',
      concept: 'Multi-Container-Anwendungen für lokale Entwicklungsumgebungen orchestrieren',
      body: 'Docker Compose definiert eine Multi-Container-Umgebung als YAML-Datei: Anwendung + Datenbank + Cache + Message Queue – alle starten mit einem einzigen Befehl. Für neue Teammitglieder bedeutet das: git clone → docker compose up → Entwicklungsumgebung läuft. Kein "Install PostgreSQL, dann Redis, dann RabbitMQ".\n\nDer wichtigste Gotcha: depends_on startet Container in Reihenfolge, wartet aber nicht bis der Service bereit ist. Eine Datenbank startet vielleicht in 5 Sekunden, nimmt aber 30 Sekunden bis sie Connections akzeptiert. Die Lösung: depends_on mit condition: service_healthy und Healthchecks.',
      keyPoints: [
        'compose.yml beschreibt Services, Networks und Volumes – alles deklarativ',
        'Named Volumes persistieren Daten über Container-Restarts (db-data für PostgreSQL)',
        'depends_on + condition: service_healthy wartet auf tatsächliche Betriebsbereitschaft, nicht nur Container-Start',
        'Umgebungsvariablen via .env-Datei – nie Produktions-Secrets in compose.yml hardcoden',
        'docker compose watch (ab v2.22): Hot-Reload bei Dateiänderungen – kein manuelles Restart',
        'docker compose -f compose.yml -f compose.dev.yml: Override-Dateien für Dev vs. Prod-Konfiguration'
      ],
      tools: [
        { name: 'Docker Compose V2', purpose: 'Integriert in Docker CLI (docker compose statt docker-compose)' }
      ],
      commands: [
        { cmd: 'docker compose up -d --build', desc: 'Alle Services im Hintergrund starten, Images neu bauen' },
        { cmd: 'docker compose logs -f app', desc: 'Logs eines Services live verfolgen' },
        { cmd: 'docker compose exec db psql -U postgres', desc: 'Direkt in Datenbankcontainer verbinden' },
        { cmd: 'docker compose down -v', desc: 'Alles stoppen UND Volumes löschen (sauberer Reset)' }
      ],
      deepDive: null
    },
    {
      id: 'kubernetes-intro',
      title: 'Kubernetes Einführung',
      icon: 'server',
      concept: 'Container-Orchestrierung für produktionsskalierte Deployments und Management',
      body: 'Kubernetes (K8s) löst das Problem der Skalierung: Wie deploye ich 50 Container-Instanzen auf 10 Maschinen, stelle sicher dass immer 3 Instanzen laufen, update sie ohne Downtime, und verteile Traffic intelligent? Kubernetes ist der De-facto-Standard für Container-Orchestrierung in der Produktion.\n\nDie wichtigsten Konzepte: Pods (die kleinste deploybare Einheit – 1+ Container), Deployments (verwalten ReplicaSets für Rolling Updates), Services (stabiler DNS-Name und Load Balancing für Pods), ConfigMaps und Secrets (Konfiguration und Credentials). Kubernetes ist komplex – man startet nicht mit K8s, man landet bei K8s wenn man ihn braucht.',
      keyPoints: [
        'Pod: 1+ Container die Netzwerk und Storage teilen – stirbt der Pod, wird er neu gestartet',
        'Deployment: Deklariert "Ich möchte 3 Replicas von Image X" – K8s sorgt dafür, selbstheilend',
        'Service: Stabiler DNS-Eintrag (my-app.namespace.svc.cluster.local) der auf Pods zeigt',
        'Liveness Probe: Ist der Container am Leben? (Neustart wenn nicht) – Readiness Probe: Ist er bereit für Traffic?',
        'Resource Requests/Limits: Jeder Container deklariert CPU/Memory-Bedarf für Scheduling',
        'kubectl apply -f: Deklarativer Ansatz – Desired State definieren, K8s konvergiert dorthin'
      ],
      tools: [
        { name: 'k9s', purpose: 'Terminal-UI für Kubernetes – deutlich produktiver als pure kubectl' },
        { name: 'Helm', purpose: 'Package Manager für Kubernetes – Templates für komplexe Deployments' },
        { name: 'kind / minikube', purpose: 'Lokales Kubernetes-Cluster für Entwicklung und Tests' }
      ],
      commands: [
        { cmd: 'kubectl get pods -n production', desc: 'Alle Pods im production-Namespace auflisten' },
        { cmd: 'kubectl describe pod <name>', desc: 'Detaillierte Informationen und Events eines Pods' },
        { cmd: 'kubectl rollout undo deployment/myapp', desc: 'Letztes Deployment zurückrollen' },
        { cmd: 'kubectl logs -f <pod> --previous', desc: 'Logs des vorherigen (abgestürzten) Pod-Containers' }
      ],
      deepDive: null
    }
  ]
},

/* ══════════════════════════════════════════════════════════════════
   TOPIC 7 – CI/CD PIPELINES
   ══════════════════════════════════════════════════════════════════ */
{
  id: 'cicd',
  title: 'CI/CD Pipelines',
  icon: 'zap',
  tagline: 'Den Weg vom Commit zur Produktion automatisieren – mit Vertrauen',
  color: '#8B5CF6',
  gradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #6D28D9 100%)',
  overview: 'Continuous Integration bedeutet: Jeder Commit löst automatisch Build und Tests aus. Integration-Probleme werden nach Minuten gefunden, nicht nach Wochen. Continuous Delivery ergänzt das um automatisches Deployment in Staging – mit manuellem Gate für Produktion. Continuous Deployment geht einen Schritt weiter: jeder grüne Commit geht automatisch in Produktion.\n\nDie vier DORA-Metriken messen Pipeline-Exzellenz: Deployment Frequency (wie oft deployed?), Lead Time (Commit bis Produktion), MTTR (wie schnell nach Ausfall erholt?), Change Failure Rate (wie oft führt ein Deployment zu Problemen?). Elite-Teams deployen mehrmals täglich mit < 1 Stunde Lead Time.',
  relatedTopics: ['git', 'docker', 'testing'],
  subareas: [
    {
      id: 'pipeline-concepts',
      title: 'Pipeline-Konzepte & Anatomie',
      icon: 'git-commit',
      concept: 'CI/CD als automatisierter Pfad: von Code-Änderung zu deployed-er Software',
      body: 'Eine CI/CD-Pipeline ist eine Sequenz von automatisierten Schritten die bei jedem Commit ausgeführt werden. Der Grundsatz: Fail Fast – frühe, günstige Checks (Linting, Unit Tests) müssen schnell sein. Späte, teure Checks (Integration Tests, Security Scans) laufen nach dem ersten Filter.\n\nDie optimale Reihenfolge: Trigger → Checkout → Lint/Format-Check → Unit Tests → Build → Integration Tests → Security Scan → Artifact Publish → Deploy Staging → Smoke Test → (manuell) Deploy Production. Jede Stage sollte unter 5 Minuten dauern für schnelles Feedback.',
      keyPoints: [
        'CI = jeder Commit → automatischer Build + Tests; CD = automatischer Deployment-Pfad',
        'DORA Metrics: Deployment Frequency, Lead Time for Changes, MTTR, Change Failure Rate',
        'Trunk-based Development + CI = echte Continuous Integration – Feature-Branch-CI ist kein CI',
        'Artifacts (Docker Images, JARs) werden einmal gebaut und durch alle Environments promoviert – nicht neu gebaut',
        'Test-Suite muss unter 10 Minuten bleiben: über 10 Minuten beginnen Entwickler die Pipeline zu ignorieren',
        'Parallelisierung: Unit Tests, Linting und Security Scans können parallel laufen'
      ],
      tools: [
        { name: 'GitHub Actions', purpose: 'CI/CD direkt in GitHub – YAML-Workflows, riesiges Marketplace-Ökosystem' },
        { name: 'GitLab CI/CD', purpose: 'GitLab-integriert mit starker Docker-Integration und Environments' },
        { name: 'Jenkins', purpose: 'Selbst-gehosteter CI-Klassiker – mächtig aber hoher Wartungsaufwand' }
      ],
      commands: [
        { cmd: 'gh workflow run deploy.yml --ref main', desc: 'GitHub Actions Workflow manuell triggern' },
        { cmd: 'gh run watch', desc: 'Laufenden Workflow in Echtzeit verfolgen' }
      ],
      deepDive: null
    },
    {
      id: 'github-actions',
      title: 'GitHub Actions',
      icon: 'play-circle',
      concept: 'Event-getriebene Automatisierung direkt in GitHub-Repositories',
      body: 'GitHub Actions definiert Workflows als YAML-Dateien in .github/workflows/. Jeder Workflow besteht aus Jobs, jeder Job aus Steps. Jobs laufen standardmäßig parallel – needs: erzeugt Abhängigkeiten. Steps sind sequenziell. Actions sind wiederverwendbare Einheiten – entweder aus dem Marketplace oder selbst definiert.\n\nDer wichtigste Sicherheitsaspekt: Actions-Versionen an SHA pinnen, nicht an Versions-Tags. Tags wie v3 sind mutable – ein Angreifer der actions/checkout@v3 kompromittiert, kann beliebigen Code in allen Pipelines ausführen. actions/checkout@abc123def... ist unveränderlich.',
      keyPoints: [
        'on: [push, pull_request] oder cron: "0 2 * * *" – Events triggern Workflows',
        'jobs.<job>.needs: [build] erzeugt Job-Abhängigkeiten – Jobs ohne needs laufen parallel',
        'secrets.MY_SECRET aus Repository/Organization Settings – niemals in YAML hardscriben',
        'matrix strategy: { node: [18, 20], os: [ubuntu, windows] } – Tests über Versionen/Plattformen',
        'actions/cache für Dependency-Caching: npm, pip, Maven – erhebliche Speed-Verbesserung',
        'OIDC für Cloud-Auth: AWS/GCP/Azure ohne langlebige Credentials – kurzlebige Tokens per OIDC'
      ],
      tools: [
        { name: 'act', purpose: 'GitHub Actions lokal ausführen – schnelles Debugging ohne Push' },
        { name: 'GitHub CLI (gh)', purpose: 'Workflows starten, beobachten und Logs lesen' }
      ],
      commands: [
        { cmd: 'act push -j build', desc: 'push-Event lokal simulieren und build-Job ausführen' }
      ],
      deepDive: {
        title: 'Komplette Node.js CI/CD Pipeline mit GitHub Actions',
        intro: 'Eine Production-ready GitHub Actions Pipeline für eine Node.js/TypeScript-Anwendung: Lint, Tests, Coverage, Security-Scan, Docker-Build und Deployment mit Environment-Gates.',
        sections: [
          {
            heading: 'CI-Workflow: Für jeden PR und Push auf main',
            prose: 'Dieser Workflow läuft bei jedem Pull Request und jedem Push auf main. Er prüft Code-Qualität, führt Tests aus und baut das Docker-Image. Jobs laufen parallel wo möglich.',
            codeBlock: {
              language: 'yaml',
              label: '.github/workflows/ci.yml',
              code: `name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  # ── Lint & Type Check ────────────────────────────────────
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4           # An SHA pinnen in Prod: @abc123

      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'                       # npm-Cache automatisch

      - run: npm ci
      - run: npm run lint
      - run: npm run type-check

  # ── Tests mit Coverage ───────────────────────────────────
  test:
    runs-on: ubuntu-latest
    services:
      postgres:                             # DB als Service-Container
        image: postgres:16-alpine
        env:
          POSTGRES_PASSWORD: testpw
          POSTGRES_DB: testdb
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'npm' }
      - run: npm ci
      - run: npm test -- --coverage
        env:
          DATABASE_URL: postgres://postgres:testpw@localhost:5432/testdb

      - uses: codecov/codecov-action@v4    # Coverage-Report hochladen
        with:
          token: \${{ secrets.CODECOV_TOKEN }}

  # ── Security Scan ────────────────────────────────────────
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm audit --audit-level=high   # Schlägt fehl bei kritischen CVEs
      - uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: \${{ secrets.SNYK_TOKEN }}`
            }
          },
          {
            heading: 'CD-Workflow: Docker Build und Deployment',
            prose: 'Nach erfolgreichem CI: Docker-Image bauen, in Registry pushen, und in Staging deployen. Produktion erfordert manuelles Approval.',
            codeBlock: {
              language: 'yaml',
              label: '.github/workflows/cd.yml (nach CI-Success auf main)',
              code: `name: CD

on:
  workflow_run:
    workflows: [CI]
    types: [completed]
    branches: [main]

jobs:
  deploy-staging:
    if: \${{ github.event.workflow_run.conclusion == 'success' }}
    runs-on: ubuntu-latest
    environment: staging               # GitHub Environment mit Secrets

    steps:
      - uses: actions/checkout@v4

      # OIDC für AWS – keine langlebigen Credentials nötig
      - uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: arn:aws:iam::123456789:role/github-actions
          aws-region: eu-central-1

      - uses: aws-actions/amazon-ecr-login@v2

      - name: Build & Push
        run: |
          IMAGE_TAG=\${{ github.sha }}
          docker build -t \$ECR_REGISTRY/myapp:\$IMAGE_TAG .
          docker push \$ECR_REGISTRY/myapp:\$IMAGE_TAG
          echo "IMAGE_TAG=\$IMAGE_TAG" >> \$GITHUB_ENV

      - name: Deploy to Staging
        run: |
          aws ecs update-service --cluster staging \
            --service myapp \
            --force-new-deployment

  deploy-production:
    needs: deploy-staging
    environment: production             # Erfordert manuelles Approval!
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploying to Production..."`
            }
          }
        ],
        bestPractices: [
          'Actions an SHA pinnen: uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683',
          'Secrets in GitHub Environments statt Repository-Secrets – Environment-spezifische Werte',
          'Concurrency-Groups: nur eine Pipeline pro Branch gleichzeitig – verhindert Race Conditions beim Deployment'
        ],
        pitfalls: [
          'pull_request_target Trigger mit Checkout des PR-Codes – ermöglicht Secret-Diebstahl durch Fork-PRs',
          'Alle Jobs in einer riesigen YAML-Datei – lieber getrennte Workflow-Files für CI und CD',
          'Keine Timeout-Limits auf Jobs – hängende Jobs verbrauchen kostbare Minuten'
        ],
        furtherReading: [
          { title: 'GitHub Actions Dokumentation', url: 'https://docs.github.com/en/actions' },
          { title: 'Security Hardening für GitHub Actions', url: 'https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions' }
        ]
      }
    },
    {
      id: 'deployment-strategies',
      title: 'Deployment-Strategien',
      icon: 'truck',
      concept: 'Neue Versionen ohne Nutzer-spürbaren Ausfall ausliefern',
      body: 'Die Wahl der Deployment-Strategie bestimmt wie viel Risiko bei einem Release eingegangen wird und wie teuer ein Rollback ist. Blue-Green ermöglicht instant Rollback (Traffic-Switch zurück), braucht aber doppelte Infrastruktur. Canary limitiert den Impact auf einen kleinen Prozentsatz der Nutzer und erlaubt datengetriebene Entscheidungen.\n\nFeature Flags sind orthogonal zu Deployment-Strategien: Der Code ist deployed, aber das Feature ist für 0% der Nutzer aktiv. Damit ist Deployment von Release entkoppelt – das Team kann mergen und deployen ohne das Feature zu aktivieren. Der "Feature Toggle" ist der Kill-Switch für jedes Feature in der Produktion.',
      keyPoints: [
        'Blue-Green: Zwei identische Environments; Traffic wechselt von Blue→Green; Rollback = Traffic zurück auf Blue',
        'Canary: 1%→10%→50%→100% Traffic; bei jedem Schritt Metriken prüfen; automatischer Rollback bei Threshold',
        'Rolling Update: Pods/Instanzen nacheinander austauschen; keine Extra-Infrastruktur; kurz gemischte Versionen',
        'Feature Flags: Code deployed aber Feature deaktiv; per Toggle für %Users oder spezifische Nutzer aktivieren',
        'GitOps: Gewünschter Zustand in Git; Operator (ArgoCD, Flux) konvergiert Cluster dorthin',
        'Dark Launch: Feature für 100% Users deployed aber Output wird verworfen – Produktions-Performance-Test'
      ],
      tools: [
        { name: 'Argo Rollouts', purpose: 'Canary und Blue-Green für Kubernetes mit Analyse-Integration' },
        { name: 'LaunchDarkly', purpose: 'Feature-Flag-Platform mit zielgruppen-spezifischer Aktivierung' },
        { name: 'Unleash', purpose: 'Open-Source Feature-Toggle-Server – selbst-gehostet' }
      ],
      commands: [
        { cmd: 'kubectl argo rollouts get rollout myapp --watch', desc: 'Canary-Rollout in Echtzeit beobachten' },
        { cmd: 'kubectl argo rollouts promote myapp', desc: 'Canary auf nächste Phase voranbringen' }
      ],
      deepDive: null
    },
    {
      id: 'environments',
      title: 'Environment-Management',
      icon: 'layers',
      concept: 'Konsistente, isolierte Environments von Development bis Production verwalten',
      body: 'Environment Parity (Dev ≈ Staging ≈ Production) ist das wichtigste Prinzip um "Works on my machine"-Probleme zu eliminieren. Die häufigste Quelle von Parity-Verletzungen: unterschiedliche Datenbankversionen, unterschiedliche OS-Versionen, unterschiedliche Konfigurationen. Docker löst das Problem für Anwendungen – Infrastruktur-as-Code (Terraform) löst es für die Infrastruktur.\n\nEphemere Preview-Environments (eine Umgebung pro Pull Request, automatisch erstellt und gelöscht) beschleunigen Reviews massiv: Reviewer können direkt mit der laufenden Anwendung interagieren statt lokal den Branch auszuchecken.',
      keyPoints: [
        '12-Factor App: Konfiguration in Umgebungsvariablen – kein Environment-spezifischer Code',
        'Secrets nie teilen zwischen Environments – Prod-DB-Credentials nicht in Dev-Environment',
        'Ephemere Preview-Environments per PR: Vercel, Render, Fly.io erstellen diese automatisch',
        'Infrastructure as Code (IaC): Terraform oder Pulumi für reproduzierbare Infrastruktur-Definitionen',
        'Environment Promotion: Artefakt in Dev testen → nach Staging promovieren → nach Prod promovieren',
        'Staging-Environment muss Produktions-Größe simulieren können – sonst findet man Last-Probleme erst in Prod'
      ],
      tools: [
        { name: 'Terraform', purpose: 'De-facto-Standard IaC – Multi-Cloud, riesiges Provider-Ökosystem' },
        { name: 'Pulumi', purpose: 'IaC mit echten Programmiersprachen (TypeScript, Python) statt HCL' },
        { name: 'Vercel / Fly.io', purpose: 'Preview-Deployments per PR – automatisch erstellt und gelöscht' }
      ],
      commands: [
        { cmd: 'terraform plan -out=tfplan', desc: 'Infrastruktur-Änderungen planen ohne anzuwenden' },
        { cmd: 'terraform apply tfplan', desc: 'Geplante Infrastruktur-Änderungen anwenden' }
      ],
      deepDive: null
    }
  ]
},

/* ══════════════════════════════════════════════════════════════════
   TOPIC 8 – DATABASES
   ══════════════════════════════════════════════════════════════════ */
{
  id: 'databases',
  title: 'Datenbanken',
  icon: 'database',
  tagline: 'Daten speichern, abfragen und schützen mit dem richtigen Tool für jeden Anwendungsfall',
  color: '#F59E0B',
  gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 50%, #B45309 100%)',
  overview: 'Die Wahl der Datenbank ist eine der langfristigsten Entscheidungen im System-Design. Sie ist schwer zu ändern, hat massive Performance-Implikationen und bestimmt welche Abfragemuster effizient möglich sind. Der häufigste Fehler: MongoDB nehmen weil man sich an SQL-Schema nicht binden möchte – und dann monate später merken, dass man relationale Daten hat die man hätte normalisieren sollen.\n\nPostgreSQL ist die richtige Wahl für die meisten Anwendungen. Es ist zuverlässig, ACID-konform, hat hervorragende JSON-Unterstützung (JSONB), Full-Text-Search, Erweiterbarkeit (pgvector für Embeddings) und skaliert weiter als die meisten Anwendungen je brauchen.',
  relatedTopics: ['architecture', 'security', 'apis'],
  subareas: [
    {
      id: 'sql',
      title: 'Relationale Datenbanken & SQL',
      icon: 'table',
      concept: 'ACID-konforme strukturierte Datenhaltung mit mächtigen Abfrage-Fähigkeiten',
      body: 'Relationale Datenbanken sind seit 50 Jahren der Goldstandard für Transaktionsdaten. ACID-Eigenschaften (Atomicity, Consistency, Isolation, Durability) garantieren, dass Transaktionen entweder vollständig oder gar nicht ausgeführt werden. Kein NoSQL-System bietet diese Garantien ohne erhebliche Kompromisse.\n\nDer N+1-Query-Fehler ist das häufigste Performance-Problem in ORM-basierten Anwendungen: Lade 100 User (1 Query), lade dann für jeden User seine Orders (100 Queries) = 101 Queries statt 1. ORM Lazy Loading verursacht dieses Pattern unbemerkt. EXPLAIN ANALYZE ist der wichtigste Befehl für Datenbanktuning – er zeigt den Query Execution Plan mit tatsächlichen Kosten.',
      keyPoints: [
        'ACID: Atomicity (alles oder nichts), Consistency (immer valider Zustand), Isolation (Transaktionen sehen sich nicht), Durability (committed = persistent)',
        'N+1-Query-Problem: SELECT in einer Schleife – immer JOIN oder eager loading verwenden',
        'EXPLAIN ANALYZE zeigt Query-Plan mit tatsächlicher Ausführungszeit – "Seq Scan" auf großer Tabelle = fehlender Index',
        'B-Tree-Index für Equality und Range Queries; GIN-Index für Full-Text und JSONB-Abfragen; Partial Index für Teilmengen',
        'Connection Pooling (PgBouncer): Anwendungen öffnen keine DB-Connections direkt – Pool verwaltet sie',
        'Transaktions-Isolation-Level: Read Committed (Standard in Postgres), Repeatable Read, Serializable'
      ],
      tools: [
        { name: 'PostgreSQL', purpose: 'De-facto-Standard für neue Projekte – ACID, JSONB, Full-Text, Extensions' },
        { name: 'PgBouncer', purpose: 'Connection-Pooler für PostgreSQL – reduziert Connection-Overhead massiv' },
        { name: 'pgAdmin / DBeaver', purpose: 'DB-GUI für Query-Entwicklung und Schema-Inspektion' }
      ],
      commands: [
        { cmd: 'EXPLAIN ANALYZE SELECT * FROM orders WHERE user_id = 42;', desc: 'Query-Plan mit tatsächlicher Ausführungszeit anzeigen' },
        { cmd: 'CREATE INDEX CONCURRENTLY idx_orders_user ON orders(user_id);', desc: 'Index ohne Table-Lock erstellen (Online DDL)' }
      ],
      deepDive: {
        title: 'Query-Optimierung mit EXPLAIN ANALYZE',
        intro: 'EXPLAIN ANALYZE ist das mächtigste Werkzeug für Datenbank-Performance. Es führt die Query tatsächlich aus und zeigt für jeden Schritt: welcher Algorithmus gewählt wurde, wie viele Zeilen verarbeitet wurden, und wie lange es dauerte.',
        sections: [
          {
            heading: 'EXPLAIN ANALYZE lesen lernen',
            prose: 'Die Ausgabe ist ein Baum von Operationen. Entscheidende Begriffe: Seq Scan = kompletter Tabellen-Scan (kein Index), Index Scan = Index verwendet, Rows = geschätzte Zeilen, Actual Rows = tatsächliche Zeilen, cost = relativer Planungswert, actual time = Millisekunden.',
            codeBlock: {
              language: 'sql',
              label: 'EXPLAIN ANALYZE: Slow Query identifizieren',
              code: `-- Langsame Query: Suche nach nicht-indexiertem Feld
EXPLAIN ANALYZE
SELECT * FROM orders
WHERE status = 'pending' AND created_at > NOW() - INTERVAL '7 days';

-- Typische Ausgabe OHNE Index:
-- Seq Scan on orders (cost=0.00..45823.00 rows=234 width=312)
--   Filter: ((status = 'pending') AND (created_at > ...))
--   Rows Removed by Filter: 989766   ← 99% der Zeilen werden gescannt!
--   Actual time: 2847.234..2901.445 ms  ← ~3 Sekunden!

-- Lösung: Partieller Index für häufige Abfrage
CREATE INDEX CONCURRENTLY idx_orders_pending_recent
  ON orders(created_at DESC)
  WHERE status = 'pending';   -- Partieller Index: nur pending-Rows

-- Ausgabe NACH Index:
-- Index Scan using idx_orders_pending_recent on orders
--   Index Cond: (created_at > ...)
--   Actual time: 0.234..1.445 ms  ← ~1ms statt 3 Sekunden!`
            }
          },
          {
            heading: 'Das N+1-Problem erkennen und lösen',
            prose: 'N+1 entsteht wenn ORM-Lazy-Loading unbewusst eine Query pro Datensatz ausführt. Die Lösung: eager loading mit JOIN oder Include.',
            codeBlock: {
              language: 'typescript',
              label: 'N+1-Problem und Lösung (Prisma)',
              code: `// 🚫 N+1-Problem: 1 Query für Users + N Queries für Orders
const users = await prisma.user.findMany();          // 1 Query
for (const user of users) {
  const orders = await prisma.order.findMany({       // N Queries!
    where: { userId: user.id }
  });
  console.log(user.name, orders.length);
}
// Bei 100 Users: 101 Datenbank-Anfragen

// ✅ Lösung: Eager Loading mit include
const usersWithOrders = await prisma.user.findMany({
  include: {
    orders: true   // JOIN: 1 Query statt 101
  }
});
// Bei 100 Users: 1-2 Datenbank-Anfragen`
            }
          }
        ],
        bestPractices: [
          'pg_stat_statements Extension aktivieren: Aggregiert langsame Queries über Zeit – ohne manuelles EXPLAIN',
          'Covering Index: alle Spalten im Index die der Query braucht – verhindert Table Heap Lookup',
          'Autovacuum-Tuning: PostgreSQL braucht Vacuum um tote Tupel zu bereinigen – bei hohem Update-Volumen einstellen'
        ],
        pitfalls: [
          'Index auf jede Spalte – zu viele Indizes verlangsamen Writes und verbrauchen Speicher',
          'SELECT * statt SELECT benötigte_spalten – überträgt unnötige Daten, verhindert Index-Only Scans',
          'Ohne CONCURRENTLY einen Index auf Produktionstabelle erstellen – Table-Lock für Minuten bis Stunden'
        ],
        furtherReading: [
          { title: 'Use the Index, Luke! – SQL Performance Guide', url: 'https://use-the-index-luke.com/' },
          { title: 'PostgreSQL EXPLAIN Visualizer', url: 'https://explain.dalibo.com/' }
        ]
      }
    },
    {
      id: 'nosql',
      title: 'NoSQL Datenbanken',
      icon: 'layers',
      concept: 'Nicht-relationale Speichermodelle optimiert für spezifische Access-Patterns',
      body: 'NoSQL ist kein monolithisches Konzept – es ist eine Familie sehr unterschiedlicher Datenbank-Typen, die jeweils für spezifische Access-Patterns optimiert sind. Document Stores (MongoDB, Firestore) eignen sich für hierarchische Daten mit flexiblem Schema. Key-Value Stores (Redis) für extreme Geschwindigkeit bei einfachen Zugriffsmustern. Column Stores (Cassandra) für massive Write-Throughput und Time-Series.\n\nDie wichtigste Lektion: Denormalisierung in NoSQL ist kein Fehler, sie ist das Design. In MongoDB speichert man redundante Daten wenn das die Abfrage einfacher macht – anders als in relationalen DBs wo Normalisierung Pflicht ist.',
      keyPoints: [
        'Document (MongoDB, Firestore): Flexible Schemas, hierarchische Daten, abgefragt nach Feldinhalten',
        'Key-Value (Redis, DynamoDB): Maximale Geschwindigkeit (<1ms), einfache Zugriffsstruktur key→value',
        'Column-Family (Cassandra): Sehr hoher Write-Throughput, zeitreihenbasierte Daten, horizontale Skalierung',
        'Graph (Neo4j): Beziehungsabfragen (Freunde-von-Freunden, Empfehlungen) – ungeeignet für einfache CRUD',
        'CAP-Theorem: Consistency, Availability, Partition Tolerance – nur 2 von 3 möglich',
        'Eventual Consistency: NoSQL-DBs opfern oft sofortige Konsistenz für Verfügbarkeit und Geschwindigkeit'
      ],
      tools: [
        { name: 'Redis', purpose: 'Cache, Session Store, Message Broker, Leaderboards – in-memory, extrem schnell' },
        { name: 'MongoDB Atlas', purpose: 'Managed Document Store mit globaler Verteilung' },
        { name: 'Apache Cassandra', purpose: 'Write-heavy Workloads, IoT, Time-Series – lineares Skalierungsmodell' }
      ],
      commands: [
        { cmd: 'redis-cli SET session:abc123 "user:42" EX 3600', desc: 'Session in Redis mit 1h TTL speichern' },
        { cmd: 'redis-cli HGETALL user:42', desc: 'Hash-Map (User-Profil) aus Redis lesen' }
      ],
      deepDive: null
    },
    {
      id: 'migrations',
      title: 'Datenbank-Migrationen',
      icon: 'arrow-right-left',
      concept: 'Schema-Änderungen sicher und versioniert über alle Environments ausrollen',
      body: 'Datenbank-Migrationen sind der gefährlichste Schritt jedes Deployments. Eine falsche ALTER TABLE-Statement kann eine Produktionstabelle für Minuten sperren. Ein fehlgeschlagenes Deployment mit halb-durchgeführter Migration hinterlässt die DB in einem inkonsistenten Zustand. Zero-Downtime-Migrationen erfordern ein mehrphasiges Vorgehen: Additive Änderungen, Backfill, dann Constraint-Hinzufügung.\n\nDer goldene Regel: Eine Migration, die einmal in irgendeinem Environment ausgeführt wurde, wird nicht mehr modifiziert. Wenn ein Fehler passiert, wird eine neue Migration mit dem Fix geschrieben.',
      keyPoints: [
        'Jede Migration hat eine up() und down()-Funktion – Rollback muss möglich sein',
        'Migrationen vor App-Code deployen – App-Code muss altes UND neues Schema verstehen (während Migration)',
        'Zero-Downtime: Spalte hinzufügen (nullable) → App mit neuer Spalte deployen → Daten backfüllen → NOT NULL hinzufügen',
        'CREATE INDEX CONCURRENTLY in PostgreSQL: Index ohne Table-Lock – Standard für Produktionssysteme',
        'Lange Transaktionen während Migration vermeiden – sie blockieren VACUUM und erzeugen Lock-Konflikte',
        'Migrationsstatus versionieren: flyway_schema_history / alembic_version Tabelle merkt sich Stand'
      ],
      tools: [
        { name: 'Flyway', purpose: 'SQL-basierte Migrationen für Java/JVM – einfach und robust' },
        { name: 'Alembic', purpose: 'Python-Migrationsframework (SQLAlchemy-Ökosystem)' },
        { name: 'Prisma Migrate', purpose: 'Schema-Definition in Prisma Schema → automatisch generierte Migrationen' }
      ],
      commands: [
        { cmd: 'npx prisma migrate dev --name add_user_email_index', desc: 'Neue Prisma-Migration erstellen und anwenden' },
        { cmd: 'flyway migrate -url=jdbc:postgresql://localhost/db', desc: 'Ausstehende Flyway-Migrationen anwenden' }
      ],
      deepDive: null
    },
    {
      id: 'db-performance',
      title: 'Performance & Optimierung',
      icon: 'trending-up',
      concept: 'Datenbanken schnell machen unter realen Workloads – ohne voreilige Optimierung',
      body: 'Datenbankperformance-Optimierung beginnt immer mit Messung, nie mit Vermutung. pg_stat_statements ist das erste was auf jeder PostgreSQL-Instanz aktiviert werden sollte – es aggregiert Statistiken über alle Queries und zeigt welche am meisten Zeit verbrauchen. Ein Index auf dem richtigen Feld kann eine Query von 10 Sekunden auf 1 Millisekunde bringen.\n\nConnection Pooling ist das zweitwichtigste Performance-Werkzeug. PostgreSQL kann typisch 100-200 Connections verwalten. Eine Anwendung mit 1000 gleichzeitigen Requests direkt gegen die DB = 1000 Connections = DB-Crash. PgBouncer als Middleware pooled diese auf 20-50 echte DB-Connections.',
      keyPoints: [
        'pg_stat_statements: Zeigt die teuersten Queries über Zeit – installieren bevor ein Problem auftritt',
        'Slow Query Log: MySQL und PostgreSQL können Queries über einem Threshold loggen',
        'Read Replicas: 80% der DB-Last ist typisch lesend – Leseoperationen auf Replicas auslagern',
        'Caching-Layer: Redis vor der DB für häufig gelesene, selten geänderte Daten (Produktkatalog, Konfiguration)',
        'Partitionierung: Tabellen mit Milliarden Zeilen nach Zeit/Wert partitionieren – Abfragen nur auf relevante Partitionen',
        'VACUUM in PostgreSQL: Tote Tupel bereinigen – bei hohem UPDATE-Volumen autovacuum-Einstellungen prüfen'
      ],
      tools: [
        { name: 'pganalyze', purpose: 'SaaS-Monitoring für PostgreSQL: Query-Performance, Index-Empfehlungen' },
        { name: 'PgBouncer', purpose: 'Connection Pooler – unverzichtbar für Produktionssysteme' },
        { name: 'pgBadger', purpose: 'PostgreSQL-Log-Analyzer – generiert HTML-Reports aus Log-Dateien' }
      ],
      commands: [
        { cmd: 'SELECT query, calls, mean_exec_time FROM pg_stat_statements ORDER BY mean_exec_time DESC LIMIT 10;', desc: 'Top-10 langsamste Queries nach Durchschnittszeit' }
      ],
      deepDive: null
    }
  ]
},

/* ══════════════════════════════════════════════════════════════════
   TOPIC 9 – APIs & INTEGRATION
   ══════════════════════════════════════════════════════════════════ */
{
  id: 'apis',
  title: 'APIs & Integration',
  icon: 'plug',
  tagline: 'APIs bauen und konsumieren die zuverlässig, sicher und entwicklerfreundlich sind',
  color: '#06B6D4',
  gradient: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 50%, #0E7490 100%)',
  overview: 'APIs sind die Schnittstellen zwischen Systemen – und die Verträge zwischen Teams. Ein schlecht designtes API ist teuer: Es wird falsch verwendet, erzeugt Support-Aufwand, und Änderungen daran brechen Client-Code. Ein gutes API ist selbsterklärend, konsistent, versioniert und dokumentiert.\n\nREST ist nicht "URL + HTTP" – es hat Constraints (Stateless, Uniform Interface, Cacheable) die wenn man sie befolgt ein API entsteht das sich vorhersagbar verhält. GraphQL löst das Problem des Over- und Underfetching aber erzeugt eigene Komplexität (N+1, Query-Complexity-Management).',
  relatedTopics: ['security', 'architecture', 'testing'],
  subareas: [
    {
      id: 'rest-design',
      title: 'REST API Design',
      icon: 'globe',
      concept: 'Ressourcen-orientierte APIs die konsistent, vorhersagbar und langlebig sind',
      body: 'Ein REST API ist nicht REST weil es HTTP verwendet – es ist REST wenn es die REST-Constraints einhält. Die wichtigsten: Stateless (jeder Request enthält alle nötigen Informationen), Uniform Interface (konsistente URLs, HTTP-Methoden und Status-Codes), und Resource-based (URLs benennen Ressourcen, nicht Aktionen).\n\nAPI-Design ist eine Produktentscheidung: Das API ist das User Interface für Entwickler. Inkonsistente Benennung, unklare Error-Responses und fehlende Dokumentation treiben Entwickler zur Konkurrenz. API-First-Design (OpenAPI-Spec vor Implementierung) erzwingt Nachdenken über das Interface bevor der Code gebaut wird.',
      keyPoints: [
        'Ressourcen als Substantive (Plural): /users, /orders, /products – keine Verben in URLs',
        'HTTP-Methoden semantisch: GET=lesen, POST=erstellen, PUT=ersetzen, PATCH=teilweise ändern, DELETE=löschen',
        'HTTP-Status-Codes bedeutungsvoll: 200/201/204 für Erfolg, 400/422 für Client-Fehler, 401/403 für Auth, 404 nicht gefunden, 409 Konflikt, 500 Server-Fehler',
        'Paginierung: Cursor-based für große Datensätze (stabil bei Einfügungen), Offset-based für kleine Mengen',
        'Versionierung: /api/v1/ in der URL (einfach und klar), oder via Accept-Header (REST-konformer)',
        'HATEOAS in der Praxis: Links in der Response ermöglichen Client-Navigation ohne URL-Hardcoding'
      ],
      tools: [
        { name: 'OpenAPI 3.1 / Swagger', purpose: 'Maschinen-lesbare API-Spezifikation – generiert Docs, SDKs, Mocks' },
        { name: 'Bruno / Postman', purpose: 'API-Testing und -Dokumentation – Bruno ist Open-Source und Git-friendly' },
        { name: 'Prism', purpose: 'Mock-Server aus OpenAPI-Spec – parallel Frontend/Backend-Entwicklung' }
      ],
      commands: [
        { cmd: 'npx @stoplight/prism-cli mock openapi.yaml', desc: 'Mock-Server aus OpenAPI-Spec starten' },
        { cmd: 'npx @redocly/cli lint openapi.yaml', desc: 'OpenAPI-Spec auf Fehler und Best Practices prüfen' }
      ],
      deepDive: {
        title: 'Cursor-basierte Paginierung für skalierbare APIs',
        intro: 'Offset-Paginierung (?page=5&per_page=20) ist einfach zu implementieren aber skaliert schlecht und ist instabil bei Einfügungen. Cursor-basierte Paginierung ist die professionelle Alternative für jede API die mehr als einige Tausend Datensätze hat.',
        sections: [
          {
            heading: 'Das Problem mit Offset-Paginierung',
            prose: 'OFFSET 1000 LIMIT 20 zwingt die Datenbank 1020 Zeilen zu lesen und 1000 zu verwerfen. Bei Seite 50 mit 100 Einträgen pro Seite: OFFSET 4900 – die DB liest 4920 Zeilen. Zusätzlich: wenn zwischen Seite 1 und Seite 2 ein neuer Eintrag eingefügt wird, verschiebt sich alles und Seite 2 enthält einen Duplikat von Seite 1.',
            codeBlock: {
              language: 'sql',
              label: 'Offset-Paginierung: skaliert schlecht',
              code: `-- Seite 1 (schnell)
SELECT * FROM orders ORDER BY created_at DESC LIMIT 20 OFFSET 0;

-- Seite 50 (langsam: 1000 Rows lesen, 980 verwerfen)
SELECT * FROM orders ORDER BY created_at DESC LIMIT 20 OFFSET 980;

-- Seite 500 (sehr langsam: 10.000 Rows lesen!)
SELECT * FROM orders ORDER BY created_at DESC LIMIT 20 OFFSET 9980;`
            }
          },
          {
            heading: 'Cursor-basierte Paginierung: stabil und schnell',
            prose: 'Der Cursor ist ein opaker Pointer auf eine Position in den Daten – typisch ein Base64-kodierter Timestamp oder ID. Die Query nutzt WHERE statt OFFSET – mit einem Index ist das O(log n) statt O(n).',
            codeBlock: {
              language: 'typescript',
              label: 'Cursor-Paginierung: API-Response und DB-Query',
              code: `// API Response Format
{
  "data": [...],
  "pagination": {
    "hasNextPage": true,
    "endCursor": "eyJpZCI6MTIzNH0=",  // Base64: {"id":1234}
    "hasPreviousPage": false
  }
}

// DB-Query mit Cursor (nutzt Index, keine OFFSET-Costs)
async function getOrders(cursor?: string, limit = 20) {
  const decodedCursor = cursor
    ? JSON.parse(Buffer.from(cursor, 'base64').toString())
    : null;

  const orders = await prisma.order.findMany({
    take: limit + 1,              // +1 um hasNextPage zu ermitteln
    where: decodedCursor
      ? { id: { lt: decodedCursor.id } }  // Cursor-Bedingung
      : undefined,
    orderBy: { id: 'desc' },      // Stabiles Ordering über Index
  });

  const hasNextPage = orders.length > limit;
  const items = orders.slice(0, limit);
  const endCursor = items.length > 0
    ? Buffer.from(JSON.stringify({ id: items[items.length-1].id })).toString('base64')
    : null;

  return { data: items, pagination: { hasNextPage, endCursor } };
}`
            }
          }
        ],
        bestPractices: [
          'Cursor immer opak übergeben (Base64) – Client soll nicht wissen was drin ist, nur weitergeben',
          'Konsistentes Ordering mit Index: ORDER BY id DESC oder ORDER BY (created_at, id) DESC für stabile Reihenfolge',
          'Page Size limitieren: Maximum per_page=100 – verhindert dass Client die ganze Tabelle lädt'
        ],
        pitfalls: [
          'Cursor ohne Index → gleiches Performance-Problem wie Offset-Paginierung',
          'Cursor auf nicht-eindeutiges Feld (z.B. nur created_at) → bei Duplikaten werden Einträge übersprungen',
          'Cursor der Daten-Implementierungsdetails leakt (interne IDs, DB-Sequenzen) – Base64 schützt nicht wirklich'
        ],
        furtherReading: [
          { title: 'Slack Engineering: Evolving API Pagination', url: 'https://slack.engineering/evolving-api-pagination-at-slack/' }
        ]
      }
    },
    {
      id: 'graphql',
      title: 'GraphQL',
      icon: 'share-2',
      concept: 'Query-Sprache die Clients erlaubt genau die Daten abzufragen die sie brauchen',
      body: 'GraphQL löst das Over- und Underfetching-Problem von REST: Clients definieren exakt welche Felder sie brauchen. Statt GET /users/1 (gibt alles zurück) und dann GET /users/1/orders (zweiter Request) holt man in einer Anfrage: { user(id: 1) { name, email, orders { id, total } } }.\n\nDas N+1-Problem ist in GraphQL inherent und muss explizit gelöst werden: DataLoader batcht und cached Resolver-Aufrufe pro Request. Ohne DataLoader löst jeder user.orders-Resolver eine separate DB-Query aus – bei 100 Usern = 100 Queries.',
      keyPoints: [
        'Schema-First: SDL (Schema Definition Language) definiert den Vertrag vor der Implementierung',
        'Queries = Lesen, Mutations = Schreiben, Subscriptions = Echtzeit (WebSocket)',
        'N+1-Problem: DataLoader batcht Resolver-Aufrufe zu einer DB-Query – Pflicht für jedes GraphQL-Produktionssystem',
        'Query-Complexity-Limit: verhindert DoS durch verschachtelte Queries wie { users { friends { friends { friends } } } }',
        'Persisted Queries: Queries vorab registrieren, nur Query-ID senden – Performance und Sicherheit',
        'Apollo Federation: Verteilte GraphQL-Schemas über mehrere Services zusammenführen'
      ],
      tools: [
        { name: 'Apollo Server', purpose: 'De-facto-Standard GraphQL-Server für Node.js' },
        { name: 'Pothos', purpose: 'Code-First TypeScript-GraphQL-Builder mit hervorragender Type-Safety' },
        { name: 'GraphiQL / Apollo Sandbox', purpose: 'Interaktiver GraphQL-Explorer direkt im Browser' }
      ],
      commands: null,
      deepDive: null
    },
    {
      id: 'async-messaging',
      title: 'Messaging & Event-Driven',
      icon: 'message-square',
      concept: 'Asynchrone Kommunikation für Entkopplung und Load-Spike-Management',
      body: 'Synchrone API-Calls erzeugen enge Kopplung: Service A muss warten bis Service B antwortet. Wenn B langsam ist, wird A langsam. Wenn B ausfällt, fällt A aus. Message Queues lösen dieses Problem: A sendet eine Nachricht und ist sofort fertig – B verarbeitet in eigenem Tempo.\n\nAt-Least-Once Delivery bedeutet: eine Nachricht kann mehrfach zugestellt werden. Consumer müssen idempotent sein – dieselbe Nachricht zweimal verarbeiten darf kein anderes Ergebnis erzeugen. Das Outbox Pattern löst das Dual-Write-Problem: DB-Änderung und Queue-Nachricht atomar in dieselbe Transaktion schreiben.',
      keyPoints: [
        'At-Least-Once vs. At-Most-Once vs. Exactly-Once: Exactly-Once ist teuer und selten nötig',
        'Idempotency Key: jede Nachricht hat eine eindeutige ID – Consumer prüft ob bereits verarbeitet',
        'Dead Letter Queue (DLQ): Nachrichten die N-mal fehlschlagen landen in DLQ für manuelle Inspektion',
        'Outbox Pattern: Event in derselben DB-Transaktion wie State-Änderung speichern – kein dual-write Problem',
        'Consumer Groups (Kafka): N Consumer in einer Gruppe verarbeiten Partitionen aufgeteilt – horizontale Skalierung',
        'Backpressure: Consumer signalisiert dem Producer wenn er überfordert ist – verhindert Out-of-Memory'
      ],
      tools: [
        { name: 'Apache Kafka', purpose: 'Hochdurchsatz-Event-Streaming: Millionen Events/sec, persistente Log-Architektur' },
        { name: 'RabbitMQ', purpose: 'Flexibles Message-Broker mit verschiedenen Exchange-Typen (Topic, Direct, Fanout)' },
        { name: 'AWS SQS/SNS', purpose: 'Managed Queue (SQS) und Pub/Sub (SNS) – kein Infrastruktur-Management' }
      ],
      commands: [
        { cmd: 'kafka-topics.sh --create --topic orders --partitions 6 --replication-factor 3', desc: 'Kafka-Topic mit 6 Partitionen erstellen' }
      ],
      deepDive: null
    },
    {
      id: 'webhooks',
      title: 'Webhooks & Echtzeit',
      icon: 'radio',
      concept: 'Push-basierte Integration für Echtzeit-Datenzustellung statt Polling',
      body: 'Webhooks sind HTTP-Callbacks: "Wenn Event X passiert, rufe diese URL auf." Sie ermöglichen Echtzeit-Integration ohne Polling – statt alle 60 Sekunden zu fragen "Gibt es neue Bestellungen?" ruft der Shop-System auf wenn eine neue Bestellung eintrifft. Die Herausforderung: Webhooks müssen reliable sein, auch wenn der Empfänger kurzzeitig nicht verfügbar ist.\n\nWebhook-Sicherheit ist entscheidend: Jede URL kann eine HTTP-POST-Anfrage empfangen. Ohne Signatur-Verifikation kann jeder gefälschte Webhook-Events senden. HMAC-SHA256-Signatur im Header verifiziert die Authentizität – Berechnen und Vergleichen, niemals dem gesendeten Wert blind vertrauen.',
      keyPoints: [
        'HMAC-Signatur verifizieren: signature = HMAC-SHA256(secret, rawBody) – rohen Request-Body verwenden, nicht parsed',
        'Idempotency: Gleiche Webhook-Event kann mehrfach kommen (Retry des Senders) – Deduplication nötig',
        'Retry-Policy: Webhook-Sender wiederholt bei Fehler (exponential backoff) – Consumer muss idempotent sein',
        'WebSocket für bidirektionale Echtzeit-Kommunikation (Chat, Live-Updates)',
        'Server-Sent Events (SSE) für Server→Client-Streaming: einfacher als WebSocket, HTTP/2-kompatibel',
        'Webhook-Delivery-Dashboard: Produktions-Webhooks immer mit Retry-Status und Log anbieten'
      ],
      tools: [
        { name: 'Svix', purpose: 'Managed Webhook-Infrastruktur: Delivery, Retry, Logs, Dashboard' },
        { name: 'ngrok', purpose: 'Lokalen Server temporär öffentlich machen – Webhook-Testing in der Entwicklung' }
      ],
      commands: [
        { cmd: 'ngrok http 3000', desc: 'Lokalen Port 3000 mit öffentlicher URL exponieren (Webhook-Testing)' }
      ],
      deepDive: null
    }
  ]
},

/* ══════════════════════════════════════════════════════════════════
   TOPIC 10 – MONITORING & OBSERVABILITY
   ══════════════════════════════════════════════════════════════════ */
{
  id: 'monitoring',
  title: 'Monitoring & Observability',
  icon: 'activity',
  tagline: 'Systemverhalten in Produktion verstehen durch Metriken, Logs und Traces',
  color: '#84CC16',
  gradient: 'linear-gradient(135deg, #84CC16 0%, #65A30D 50%, #4D7C0F 100%)',
  overview: 'Ohne Observability ist ein Produktionssystem eine Blackbox. Du weißt nicht was es macht, du weißt nicht warum es langsam ist, und du merkst erst dass etwas falsch ist wenn ein Nutzer sich beschwert. Observability bedeutet: du kannst jede Frage über den Systemzustand beantworten – auch solche, die du vorher nicht gestellt hast.\n\nDie drei Säulen sind Metriken (was passiert im Aggregat?), Logs (was ist wann passiert?) und Traces (wie floss eine Anfrage durch das System?). Alle drei zusammen – und mit korrelierten IDs verknüpft – ermöglichen effektive Fehlerdiagnose in Minuten statt Stunden.',
  relatedTopics: ['docker', 'cicd', 'apis'],
  subareas: [
    {
      id: 'three-pillars',
      title: 'Die drei Säulen der Observability',
      icon: 'columns',
      concept: 'Metriken, Logs und Traces bilden zusammen ein vollständiges Bild des Systemverhaltens',
      body: 'Metriken sind numerische Aggregationen über Zeit: Request-Rate, Error-Rate, Latenz, CPU-Auslastung. Sie sind gut für Alerting und Dashboards, aber sie zeigen nicht warum etwas passiert – nur dass es passiert. Logs sind diskrete Ereignisse mit Kontext: welcher Request hat welchen Fehler erzeugt, mit welcher Input, bei welchem User?\n\nTraces zeigen wie eine einzelne Anfrage durch alle Services und Schichten geflossen ist. In einem Microservices-System mit 10 Services sieht man ohne Tracing nicht wo die 2 Sekunden Latenz entstehen. OpenTelemetry ist der offene Standard für Instrumentierung – einmal instrumentieren, zu jedem Backend senden.',
      keyPoints: [
        'Metriken: Aggregate (P99-Latenz, Error-Rate) – gut für Alerting, schlecht für "warum" debuggen',
        'Logs: Ereignisse mit Kontext – strukturiert (JSON) statt Freitext für Maschinenlesbarkeit',
        'Traces: Request-Flow durch Services – Latenz-Attribution, Abhängigkeits-Mapping',
        'Correlation ID: Derselbe unique-ID in Logs, Metriken und Traces verknüpft die Säulen',
        'OpenTelemetry (OTEL): Vendor-neutrales SDK für alle drei Säulen – einmal integriert, überall nutzbar',
        'Sampling: Nicht jeden Trace speichern (zu teuer) – 1-10% Head-Sampling oder tail-based bei Fehlern'
      ],
      tools: [
        { name: 'OpenTelemetry', purpose: 'Standard-SDK für Instrumentierung – exportiert zu jedem Backend' },
        { name: 'Grafana Stack', purpose: 'Prometheus (Metriken), Loki (Logs), Tempo (Traces) – vollständige Suite' },
        { name: 'Datadog / New Relic', purpose: 'Kommerzielle All-in-One Observability-Platform' }
      ],
      commands: [
        { cmd: 'docker compose up grafana prometheus loki tempo', desc: 'Lokalen Observability-Stack starten (Grafana-LGTM-Stack)' }
      ],
      deepDive: null
    },
    {
      id: 'metrics-alerting',
      title: 'Metriken & Alerting',
      icon: 'bell',
      concept: 'Systemgesundheit mit actionable Signalen messen – nicht mit Lärm',
      body: 'Das häufigste Monitoring-Problem: zu viele Alerts, die niemand mehr ernst nimmt. "Alert Fatigue" entsteht wenn Alerts auf Ursachen statt auf Symptome feuern, und wenn zu niedrige Thresholds unnötige Wecker auslösen. Ein guter Alert weckt einen Entwickler um 3 Uhr nachts nur wenn es wirklich ein Problem für Nutzer gibt.\n\nSLOs (Service Level Objectives) und Error Budgets lösen dieses Problem systematisch: Das Team definiert "99.9% der Requests unter 200ms" als SLO. Der Alert feuert wenn das Error Budget (0.1% Fehler-Budget) mit einer Rate verbraucht wird, die das monatliche Budget erschöpfen würde – das sind Burn Rate Alerts.',
      keyPoints: [
        'RED-Methode für Services: Rate (Anfragen/sec), Errors (Fehlerrate), Duration (Latenz)',
        'USE-Methode für Ressourcen: Utilization (%), Saturation (Queue-Tiefe), Errors',
        'SLI (Indicator) → SLO (Objective: 99.9%) → SLA (Contractual: 99.5%) → Error Budget',
        'Burn Rate Alerts: "In den letzten 5min verbrauchen wir das 14x-fache des normalen Fehler-Budgets"',
        'Alert auf Symptome (hohe Latenz für Nutzer) nicht auf Ursachen (hohe CPU) – CPU ist kein Nutzerproblem',
        'PagerDuty-Rotation: Sustainable On-Call – Limits für Nacht-Alerts, immer paarweise'
      ],
      tools: [
        { name: 'Prometheus', purpose: 'Open-Source Metrik-Sammlung mit mächtiger PromQL-Abfragesprache' },
        { name: 'Grafana', purpose: 'Visualization für Prometheus und andere Datenquellen' },
        { name: 'PagerDuty / OpsGenie', purpose: 'Alert-Routing mit On-Call-Rotation und Eskalations-Policies' }
      ],
      commands: [
        { cmd: 'rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m])', desc: 'PromQL: 5-Minuten-Error-Rate berechnen' }
      ],
      deepDive: {
        title: 'SLOs, Error Budgets und sinnvolles Alerting',
        intro: 'SLO-basiertes Alerting ist die professionellste Methode um zu entscheiden wann ein Alert den On-Call wecken soll. Es verbindet technische Metriken mit Business-Impact.',
        sections: [
          {
            heading: 'SLO und Error Budget definieren',
            prose: 'Ein SLO definiert das Qualitätsziel. Das Error Budget ist der "erlaubte" Fehleranteil in einem Zeitraum (z.B. Monat). Wenn das Budget aufgebraucht wird, verlangsamt das Team die Feature-Entwicklung und fokussiert auf Reliability.',
            codeBlock: {
              language: 'yaml',
              label: 'SLO-Definition (Prometheus Alertmanager)',
              code: `# SLO: 99.9% der Requests erfolgreich, über 30 Tage
# Error Budget: 0.1% = 43.8 Minuten Downtime/Monat

# Burn Rate Alert: 14x Rate verbraucht 100% Budget in ~2h
# → Sofort wecken!
- alert: HighErrorBurnRate
  expr: |
    (
      rate(http_requests_total{status=~"5.."}[1h])
      / rate(http_requests_total[1h])
    ) > 0.001 * 14   # 14x normaler Fehlerrate
  for: 5m
  annotations:
    summary: "High Error Burn Rate – Error Budget gefährdet"

# Langsam brennendes Budget: 3x Rate über 6h
# → Business Hours Alert
- alert: SlowErrorBurnRate
  expr: |
    (
      rate(http_requests_total{status=~"5.."}[6h])
      / rate(http_requests_total[6h])
    ) > 0.001 * 3
  for: 30m
  annotations:
    summary: "Error Budget wird langsam verbraucht"`
            }
          },
          {
            heading: 'Dashboard: Die wichtigsten Metriken auf einen Blick',
            prose: 'Ein gutes Monitoring-Dashboard zeigt den aktuellen Zustand in Sekunden. Die Golden Signals (Latency, Traffic, Errors, Saturation) auf einem Dashboard reichen für die meisten Services.',
            codeBlock: {
              language: 'text',
              label: 'Grafana Dashboard Struktur',
              code: `ROW 1: Service Health (letzte 1h)
┌─────────────────┬──────────────┬─────────────┬──────────────┐
│ Request Rate    │ Error Rate   │ P50 Latency │ P99 Latency  │
│ 1.2k req/s     │ 0.03%        │ 45ms        │ 312ms        │
│ [sparkline]    │ [sparkline]  │ [sparkline] │ [sparkline]  │
└─────────────────┴──────────────┴─────────────┴──────────────┘

ROW 2: Infrastructure
┌─────────────────┬──────────────┬─────────────┐
│ CPU Utilization │ Memory       │ DB Conn Pool │
│ 34%            │ 2.1GB/4GB    │ 45/100       │
└─────────────────┴──────────────┴─────────────┘

ROW 3: Error Budget (dieser Monat)
┌──────────────────────────────────────────────┐
│ SLO: 99.9%  │  Remaining Budget: 78% (34min) │
│ [Gauge: grün]                                │
└──────────────────────────────────────────────┘`
            }
          }
        ],
        bestPractices: [
          'Alert-Review-Meeting monatlich: welche Alerts waren nutzlos? Schwellenwerte anpassen oder Alert entfernen',
          'Jeder Alert hat ein Runbook: verlinktes Dokument das erklärt was zu tun ist wenn der Alert feuert',
          'Silencing-Mechanismus: geplante Wartung ohne On-Call-Wecker – aber immer mit Ablaufzeit'
        ],
        pitfalls: [
          'Alert auf jeden Metric-Ausreißer → Alert Fatigue → On-Call ignoriert Alerts',
          'SLO ohne Error Budget: Das Budget ist der entscheidende Teil – ohne Budget kein Framework für Entscheidungen',
          'Nur Durchschnitts-Latenz alerten: Der Durchschnitt kann gut sein während P99 katastrophal ist'
        ],
        furtherReading: [
          { title: 'Google SRE Book: Service Level Objectives', url: 'https://sre.google/sre-book/service-level-objectives/' },
          { title: 'Prometheus Alerting Rules Dokumentation', url: 'https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/' }
        ]
      }
    },
    {
      id: 'logging',
      title: 'Logging Best Practices',
      icon: 'file-text',
      concept: 'Anwendungsereignisse strukturiert und sinnvoll erfassen für effektive Diagnose',
      body: 'Strukturierte Logs (JSON) sind der Unterschied zwischen "suchen wie in einer Textdatei" und "abfragen wie eine Datenbank". Ein Log-Eintrag mit festen Feldern (timestamp, level, service, traceId, userId, message, durationMs) kann über Milliarden Einträge effizient gefiltert werden. Freitext-Logs mit printf können nicht.\n\nDer häufigste Logging-Fehler: entweder zu viel loggen (jeder DB-Query, jede Variable) oder zu wenig (nur Exceptions, keine Business-Events). Business-Events (UserRegistered, OrderPlaced, PaymentFailed) sind das Wertvollste im Log – sie sind die Quelle für Audit-Trails und Business-Analytics.',
      keyPoints: [
        'Strukturiertes Logging: JSON mit konsistenten Feldern (timestamp, level, traceId, userId, message)',
        'Log-Level richtig nutzen: DEBUG (Entwicklung), INFO (Business-Events), WARN (Degradierter Zustand), ERROR (Fehler), FATAL (Nicht wiederherstellbar)',
        'Correlation ID in jedem Log-Eintrag: derselbe request.id durch alle Services über Middleware propagieren',
        'Niemals Passwörter, Tokens, PII (Namen, Emails, Adressen) loggen – DSGVO-Pflicht, Security-Pflicht',
        'Centralized Logging: Logs in ELK Stack oder Grafana Loki sammeln – kein SSH auf Server für Logs',
        'Sampling für High-Volume Debug-Logs: 1% der DEBUG-Logs samplen um Speicherkosten zu kontrollieren'
      ],
      tools: [
        { name: 'Pino (Node.js)', purpose: 'Schnellstes strukturiertes Logger für Node.js' },
        { name: 'Grafana Loki', purpose: 'Log-Aggregation optimiert für Label-basierte Abfragen' },
        { name: 'ELK Stack', purpose: 'Elasticsearch + Logstash + Kibana – mächtig aber ressourcenintensiv' }
      ],
      commands: [
        { cmd: 'logcli query \'{app="myapp"} |= "ERROR" | json\' --limit=100', desc: 'Grafana Loki: Letzten 100 Error-Logs abfragen' }
      ],
      deepDive: null
    },
    {
      id: 'distributed-tracing',
      title: 'Distributed Tracing',
      icon: 'git-commit',
      concept: 'Anfragen durch mehrere Services verfolgen um Latenz und Fehler zu lokalisieren',
      body: 'In einem Microservices-System besteht eine einzige Nutzeranfrage aus Dutzenden von Service-Aufrufen. Wenn die Gesamtlatenz 5 Sekunden beträgt – wo kommen die 5 Sekunden her? Distributed Tracing beantwortet diese Frage: Ein Trace zeigt die vollständige Kausalkette mit Timing für jeden Schritt.\n\nOpenTelemetry (OTEL) ist der offene Standard: einmal instrumentiert, kann man zu Jaeger, Tempo, Zipkin, Datadog, Honeycomb oder jedem anderen Backend exportieren. Der W3C TraceContext Header (traceparent) propagiert die Trace-ID automatisch zwischen Services wenn alle OTEL verwenden.',
      keyPoints: [
        'Span = eine atomare Operation mit Start-/Endzeit (DB-Query, HTTP-Call, Business-Logik)',
        'Trace = Baum von Spans für eine Anfrage – Root-Span ist der eingehende HTTP-Request',
        'traceparent Header: "00-traceId-spanId-flags" – wird zwischen Services weitergegeben',
        'Sampling: 100% Tracing ist teuer – 1% Random Sampling oder Tail-based (alle Traces mit Fehler behalten)',
        'Auto-Instrumentation: OTEL-Agent instrumentiert viele Frameworks automatisch (HTTP, DB, Redis) ohne Code-Änderung',
        'Trace-to-Log-Korrelation: traceId in jedem Log-Eintrag ermöglicht nahtlosen Wechsel Trace → Logs'
      ],
      tools: [
        { name: 'Jaeger', purpose: 'Open-Source Distributed Tracing System von Uber' },
        { name: 'Grafana Tempo', purpose: 'Skalierbare Trace-Speicherung integriert in Grafana' },
        { name: 'OpenTelemetry SDK', purpose: 'Standard-Instrumentierungs-Bibliothek für alle Sprachen' }
      ],
      commands: [
        { cmd: 'npm install @opentelemetry/sdk-node @opentelemetry/auto-instrumentations-node', desc: 'OTEL SDK für Node.js mit Auto-Instrumentierung installieren' }
      ],
      deepDive: null
    },
    {
      id: 'incident-management',
      title: 'Incident Management',
      icon: 'alert-octagon',
      concept: 'Produktionsfehler systematisch erkennen, beheben und daraus lernen',
      body: 'Incidents sind unvermeidlich – wie ein Team damit umgeht, definiert seine Reife. Ein Incident-Management-Prozess sorgt dafür, dass nicht alles vom Wissen und der Verfügbarkeit einer einzelnen Person abhängt. Incident Commander, klare Severity-Levels und Blameless Postmortems sind die drei Eckpfeiler.\n\nBlameless Postmortems sind die wichtigste Lernmethode in der Softwareentwicklung. Das Ziel ist nicht herauszufinden wer schuld ist, sondern was die systemischen Ursachen waren und wie man das System widerstandsfähiger macht. "Wer hat das verursacht?" ist die falsche Frage. "Was hat das System anfällig für diesen Fehler gemacht?" ist die richtige.',
      keyPoints: [
        'Incident Severity: P1 (Produktion down, alle Nutzer betroffen), P2 (Kern-Feature down), P3 (degradiert), P4 (Minor)',
        'Incident Commander: koordiniert Response – findet nicht selbst die Lösung, räumt die Bahn frei',
        'Status Page (Statuspage.io, Instatus): proaktive externe Kommunikation verhindert Support-Flut',
        'Blameless Postmortem: Innerhalb 48h nach Incident, 5-Whys-Root-Cause-Analysis, Action Items mit Owner',
        'Runbooks: "Wenn Alert X feuert, tue Y" – jeder Alert hat ein verlinktes Runbook',
        'Chaos Engineering (Chaos Monkey, LitmusChaos): Proaktiv Schwachstellen finden bevor die Realität es tut'
      ],
      tools: [
        { name: 'PagerDuty', purpose: 'Alert-Routing, On-Call-Rotation und Incident-Tracking' },
        { name: 'Statuspage / Instatus', purpose: 'Externe Status-Page für Nutzer-Kommunikation' },
        { name: 'FireHydrant', purpose: 'Incident-Management-Plattform mit automatisierten Runbooks' }
      ],
      commands: null,
      deepDive: null
    }
  ]
}

/* ══════════════════════════════════════════════════════════════════
   TOPIC 11 – DEVELOPMENT ENVIRONMENT & TOOLING
   ══════════════════════════════════════════════════════════════════ */
,{
  id: 'tooling',
  title: 'Dev Environment & Tooling',
  icon: 'wrench',
  tagline: 'Arbeitsumgebung meistern: IDE, Debugging, Linting und Shell-Produktivität',
  color: '#F97316',
  gradient: 'linear-gradient(135deg, #F97316 0%, #EA580C 50%, #C2410C 100%)',
  overview: 'Die Entwicklungsumgebung ist das tägliche Werkzeug – und wie bei jedem Handwerk macht der Unterschied zwischen einem gut konfigurierten und einem unkonfigurierten Werkzeug Stunden pro Woche aus. Ein fehlender Shortcut, ein nicht konfigurierter Debugger oder fehlende Linting-Regeln summieren sich zu echtem Produktivitätsverlust.\n\nGleichzeitig gilt: Tooling ist kein Selbstzweck. Der Ziel ist schnelleres, fehlerfreieres Entwickeln – nicht die perfekte Konfigurationsdatei. Ein pragmatisches Setup das zuverlässig funktioniert, schlägt immer eine überoptimierte Konfiguration die regelmäßig Probleme macht.',
  relatedTopics: ['git', 'devprocess', 'testing'],
  subareas: [
    {
      id: 'ide-setup',
      title: 'IDE-Setup & Konfiguration',
      icon: 'monitor',
      concept: 'Die Entwicklungsumgebung so einrichten, dass sie die eigene Arbeitsweise unterstützt statt behindert',
      body: 'VS Code hat sich als de-facto-Standard für die meisten Sprachen und Teams durchgesetzt. Die wichtigsten Produktivitäts-Features: Multi-Cursor-Editing, integriertes Terminal, Git-Integration, und das Extension-Ökosystem. Für Java/Kotlin/Scala ist IntelliJ IDEA die überlegene Wahl – das Refactoring-Tooling ist unerreicht.\n\nWorkspace-Settings (.vscode/settings.json) im Repository zu committen stellt sicher, dass alle Teammitglieder dieselbe Basis-Konfiguration haben: Einrückung, Formatierung, empfohlene Extensions. User-Settings bleiben persönlich (Themes, Font-Größe), Projekt-Settings werden geteilt.',
      keyPoints: [
        'Workspace Settings (.vscode/settings.json) committen: Einrückung, Formatierung und Sprach-Settings teilen',
        'Recommended Extensions (.vscode/extensions.json): VS Code schlägt sie neuen Team-Mitgliedern automatisch vor',
        'Keyboard Shortcuts auswendig lernen: Cmd/Ctrl+P (Datei öffnen), Cmd+Shift+P (Command Palette), F12 (Go to Definition), Shift+F12 (Find References)',
        'Multi-Cursor: Alt+Click oder Cmd+D (nächstes Vorkommen auswählen) – eliminiert viele "Find & Replace"-Aktionen',
        'Integrated Terminal mit Split-Panes: Shell direkt im Editor ohne Alt-Tab',
        'Remote Development (SSH, Container, WSL): IDE lokal, Code und Tools remote – beste Performance auf schwachen Maschinen'
      ],
      tools: [
        { name: 'VS Code', purpose: 'Universal-IDE für Web/TypeScript/Python/Go/Rust – kostenfrei, massives Extension-Ökosystem' },
        { name: 'IntelliJ IDEA / WebStorm', purpose: 'Beste Wahl für JVM-Sprachen und JavaScript – überlegenes Refactoring' },
        { name: 'Neovim + LazyVim', purpose: 'Terminal-basiert, extrem schnell – hohe Lernkurve, maximale Produktivität für Terminal-affine Entwickler' }
      ],
      commands: [
        { cmd: 'code --install-extension esbenp.prettier-vscode', desc: 'VS Code Extension über CLI installieren' },
        { cmd: 'code --list-extensions > .vscode/extensions-list.txt', desc: 'Installierte Extensions exportieren' }
      ],
      deepDive: null
    },
    {
      id: 'debugging',
      title: 'Debugging-Techniken',
      icon: 'bug',
      concept: 'Fehler systematisch eingrenzen und beheben statt per Zufall oder console.log-Orgie',
      body: 'Debugging ist eine Fertigkeit, keine Glückssache. Wer systematisch vorgeht – Hypothese aufstellen, testen, verfeinern – löst Bugs in Minuten statt Stunden. Die häufigste Fehlerquelle im Debugging: zu früh eine Lösung implementieren, bevor das Problem vollständig verstanden wurde.\n\nDer integrierte Debugger in VS Code ist mächtiger als die meisten Entwickler ahnen: Conditional Breakpoints (bricht nur unter bestimmten Bedingungen), Logpoints (loggt ohne Breakpoint-Pause), Watch Expressions (Ausdruck kontinuierlich beobachten) und die Debug Console. Remote Debugging und das Debuggen von Node.js-Prozessen, Docker-Containern oder Browser-Code direkt aus dem Editor heraus sind Standard-Features.',
      keyPoints: [
        'Conditional Breakpoints: "Brich nur wenn userId === 42" – erspart 1000 unnötige Haltepunkte',
        'Logpoints: console.log ohne Code-Änderung – schreibt in Debug-Console, kein Commit nötig',
        'Call Stack lesen: Zeigt den vollständigen Aufrufpfad – wo kam der Code her?',
        'Watch Expressions: Ausdrücke kontinuierlich auswerten während man durch Code steppt',
        'Step Into / Step Over / Step Out: granulare Kontrolle durch Code-Ausführung',
        'Remote Debugging: Node.js mit --inspect Flag, dann VS Code attached zu laufendem Prozess'
      ],
      tools: [
        { name: 'VS Code Debugger', purpose: 'Integrierter Debugger für Node.js, Python, Go, PHP – launch.json konfiguriert Targets' },
        { name: 'Chrome DevTools', purpose: 'Browser-Debugging: Network, Performance Profiler, Memory Snapshots, Source Maps' },
        { name: 'React DevTools / Vue DevTools', purpose: 'Component-State und -Props direkt im Browser inspizieren' }
      ],
      commands: [
        { cmd: 'node --inspect-brk src/index.js', desc: 'Node.js mit Debugger starten, am ersten Statement warten' },
        { cmd: 'node --inspect src/index.js', desc: 'Node.js mit Debugger starten, sofort ausführen (attach later)' }
      ],
      deepDive: {
        title: 'VS Code Debugger konfigurieren: Node.js, Browser und Docker',
        intro: 'Die launch.json Datei konfiguriert Debug-Targets für VS Code. Einmal richtig eingerichtet, debuggt man mit F5 – ohne Terminal-Befehle oder Workarounds. Hier die wichtigsten Konfigurationen für Alltagsszenarien.',
        sections: [
          {
            heading: 'launch.json: Die wichtigsten Debug-Konfigurationen',
            prose: 'Die launch.json liegt in .vscode/ und wird am besten ins Repository committed. Mehrere Konfigurationen sind möglich – beim Drücken von F5 erscheint ein Auswahlmenü.',
            codeBlock: {
              language: 'json',
              label: '.vscode/launch.json – Node.js, TypeScript und Chrome',
              code: `{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Node.js: aktuelles File",
      "type": "node",
      "request": "launch",
      "program": "\${file}",
      "console": "integratedTerminal"
    },
    {
      "name": "TypeScript: Dev Server",
      "type": "node",
      "request": "launch",
      "runtimeExecutable": "npm",
      "runtimeArgs": ["run", "dev"],
      "console": "integratedTerminal",
      "sourceMaps": true,
      "outFiles": ["\${workspaceFolder}/dist/**/*.js"]
    },
    {
      "name": "Jest: aktueller Test",
      "type": "node",
      "request": "launch",
      "program": "\${workspaceFolder}/node_modules/.bin/jest",
      "args": ["\${relativeFile}", "--runInBand", "--no-coverage"],
      "console": "integratedTerminal"
    },
    {
      "name": "Chrome: localhost:3000",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "\${workspaceFolder}/src"
    }
  ]
}`
            }
          },
          {
            heading: 'Conditional Breakpoints und Logpoints',
            prose: 'Rechtsklick auf einen Breakpoint → "Edit Breakpoint": Conditional Breakpoints stoppen nur wenn die Bedingung wahr ist. Logpoints schreiben in die Debug Console ohne den Code zu unterbrechen – ideal für Produktions-nahe Diagnose.',
            codeBlock: {
              language: 'javascript',
              label: 'Was conditional Breakpoints und Logpoints ersetzen',
              code: `// 🚫 Ohne Debugger: console.log Orgie
function processOrders(orders) {
  orders.forEach((order, i) => {
    console.log('Processing order', i, order);  // Überall hinzugefügt
    if (order.status === 'pending') {
      console.log('Found pending!', order);      // Muss wieder entfernt werden
      processPayment(order);
    }
  });
}

// ✅ Mit VS Code Debugger:
// Conditional Breakpoint auf "processPayment(order)":
//   Bedingung: order.amount > 1000
//   → Stoppt nur bei großen Bestellungen

// Logpoint auf der forEach-Zeile:
//   Nachricht: "Order {i}: {order.id} - {order.status}"
//   → Gibt in Debug Console aus, kein Code-Change`
            }
          }
        ],
        bestPractices: [
          'launch.json ins Repository committen – alle Teammitglieder profitieren von vorkonfigurierten Debug-Targets',
          'sourceMap: true für TypeScript-Debugging – direkt TypeScript-Code debuggen statt kompiliertes JS',
          'preLaunchTask für automatischen Build vor dem Debug-Start konfigurieren'
        ],
        pitfalls: [
          'Debuggen auf minifiziertem Code ohne Source Maps – absolut unleserlich',
          'Breakpoints auf falschen Stellen setzen weil async/await den Stack verwirrt – async call stacks in VS Code aktivieren',
          'console.log-Debugging als Default statt Debugger lernen – investiere einmal 30min, spare täglich 20min'
        ],
        furtherReading: [
          { title: 'VS Code Debugging Dokumentation', url: 'https://code.visualstudio.com/docs/editor/debugging' }
        ]
      }
    },
    {
      id: 'linting-formatting',
      title: 'Linting & Code Formatting',
      icon: 'check-circle',
      concept: 'Code-Stil automatisiert erzwingen – Diskussionen im Review durch Werkzeuge ersetzen',
      body: 'Linting und Formatting lösen ein Teamkultur-Problem durch Automatisierung: Statt Style-Diskussionen im Code Review entscheidet ein gemeinsam konfiguriertes Werkzeug. Die Investition von einer Stunde für das Setup spart hunderte Stunden an Review-Kommentaren über Einrückungen, Semikolons und Quote-Stile.\n\nDie moderne TypeScript-Stack-Empfehlung: ESLint für Code-Qualitätsregeln (unused variables, no-explicit-any, Sicherheitsregeln) und Prettier für reines Formatting. Beide haben klar unterschiedliche Verantwortlichkeiten und ergänzen sich. Biome ist eine aufstrebende Rust-basierte Alternative die beides kombiniert und 10–100× schneller ist.',
      keyPoints: [
        'ESLint prüft Code-Qualität: unused variables, potenzielle Bugs, Sicherheitsregeln – nicht Formatting',
        'Prettier formatiert: Einrückung, Zeilenlänge, Quotes, Semikolons – nicht Code-Qualität',
        'Format-on-Save in VS Code: editor.formatOnSave: true – kein manuelles Formatieren nötig',
        'Pre-commit Hooks mit Husky + lint-staged: nur geänderte Dateien linten und formatieren',
        '.editorconfig als universelle Basis: Tab-Größe und Zeilenende-Format für alle Editoren',
        'Biome: moderne All-in-One-Alternative zu ESLint+Prettier – 10-100x schneller, zero-config'
      ],
      tools: [
        { name: 'ESLint', purpose: 'Standard JavaScript/TypeScript Code-Qualitäts-Linter' },
        { name: 'Prettier', purpose: 'Opinionated Code Formatter – eliminiert alle Formatting-Diskussionen' },
        { name: 'Biome', purpose: 'Rust-basierter Linter+Formatter in einem – extrem schnell, zero-config' },
        { name: 'Husky + lint-staged', purpose: 'Pre-commit Hooks: Linting/Formatting vor jedem Commit erzwingen' }
      ],
      commands: [
        { cmd: 'npx eslint --fix src/', desc: 'ESLint-Fehler automatisch beheben wo möglich' },
        { cmd: 'npx prettier --write "src/**/*.{ts,tsx,json}"', desc: 'Alle Dateien mit Prettier formatieren' },
        { cmd: 'npx biome check --apply .', desc: 'Biome: Linting + Formatting in einem Schritt' }
      ],
      deepDive: null
    },
    {
      id: 'terminal-shell',
      title: 'Terminal & Shell Setup',
      icon: 'terminal',
      concept: 'Shell als produktives Werkzeug konfigurieren: Navigation, History und Aliase',
      body: 'Der Terminal ist für viele Entwickler der am wenigsten optimierte Teil der Arbeitsumgebung – obwohl sie Stunden pro Tag darin verbringen. Eine gut konfigurierte Shell mit sinnvollen Aliassen, Auto-Completion und fuzzy-search macht Entwicklungsarbeit spürbar schneller.\n\nZsh mit Oh My Zsh und dem powerlevel10k-Theme ist der Standard auf macOS und Linux. Auf Windows ist WSL2 (Windows Subsystem for Linux) die beste Wahl für eine vollwertige Linux-Shell. Starship ist ein modernes, schnelles Cross-Platform-Prompt das in jeder Shell funktioniert.',
      keyPoints: [
        'fzf (fuzzy finder): Ctrl+R für History-Suche, Ctrl+T für Datei-Suche – unersetzlich',
        'Aliase für häufige Befehle: gs="git status", gd="git diff", ll="ls -la"',
        'Zsh-Plugins: git (Shortcuts), z/zoxide (cd mit Lern-Funktion), syntax-highlighting',
        'tmux oder Zellij: Terminal-Multiplexer – mehrere Panels, persistente Sessions über SSH',
        'direnv: .envrc pro Verzeichnis lädt automatisch Umgebungsvariablen – kein manuelles export',
        'mise (früher rtx): Tool-Version-Manager für Node, Python, Go, Ruby – pro-Projekt-Versionen'
      ],
      tools: [
        { name: 'Oh My Zsh', purpose: 'Zsh-Konfigurations-Framework mit Plugins und Themes' },
        { name: 'fzf', purpose: 'Command-line fuzzy finder – History-Suche, Datei-Suche, Process-Kill' },
        { name: 'zoxide', purpose: 'Intelligente cd-Alternative – lernt häufige Verzeichnisse' },
        { name: 'mise / asdf', purpose: 'Runtime-Version-Manager: Node 20 im Projekt A, Node 18 im Projekt B' }
      ],
      commands: [
        { cmd: 'Ctrl+R', desc: 'Fuzzy-History-Suche (mit fzf): interaktive Suche in Command-History' },
        { cmd: 'z projekte', desc: 'Mit zoxide zum häufig besuchten Verzeichnis das "projekte" enthält springen' }
      ],
      deepDive: null
    },
    {
      id: 'git-hooks',
      title: 'Git Hooks & Pre-commit',
      icon: 'git-commit',
      concept: 'Qualitätsprüfungen automatisch vor jedem Commit ausführen lassen',
      body: 'Git Hooks sind Shell-Skripte die Git an definierten Punkten automatisch ausführt: pre-commit (vor dem Commit), commit-msg (Commit-Nachricht prüfen), pre-push (vor dem Push). Sie erzwingen Qualitätsstandards ohne CI abwarten zu müssen – Feedback in Sekunden statt Minuten.\n\nDer wichtigste Hook: pre-commit mit lint-staged. Nur die geänderten Dateien werden gelinted und formatiert – nicht das gesamte Projekt. Das hält den Hook unter 5 Sekunden auch in großen Projekten.',
      keyPoints: [
        'pre-commit Hook: Linting, Formatting, Tests für geänderte Dateien',
        'commit-msg Hook: Conventional Commits Format erzwingen (feat:, fix:, chore:)',
        'Husky: Git Hooks in package.json konfigurieren, automatisch installiert bei npm install',
        'lint-staged: Nur geänderte Dateien durch ESLint/Prettier schicken – schnell auch in großen Repos',
        'pre-commit (Python-Tool): Alternative zu Husky mit mehr eingebauten Hooks',
        'Hooks nicht umgehen: git commit --no-verify ist ein Code-Smell – das Problem lösen, nicht umgehen'
      ],
      tools: [
        { name: 'Husky', purpose: 'Git Hooks für npm-Projekte – automatisch installiert via prepare-Script' },
        { name: 'lint-staged', purpose: 'Linting/Formatting nur auf staged Files anwenden – schnell' },
        { name: 'commitlint', purpose: 'Conventional Commits Format im commit-msg Hook erzwingen' }
      ],
      commands: [
        { cmd: 'npx husky init', desc: 'Husky initialisieren und .husky/ Verzeichnis erstellen' },
        { cmd: 'echo "npx lint-staged" > .husky/pre-commit', desc: 'lint-staged als pre-commit Hook einrichten' }
      ],
      deepDive: null
    }
  ]
},

/* ══════════════════════════════════════════════════════════════════
   TOPIC 12 – FEHLERBEHANDLUNG & LOGGING
   ══════════════════════════════════════════════════════════════════ */
{
  id: 'errorhandling',
  title: 'Fehlerbehandlung & Logging',
  icon: 'alert-circle',
  tagline: 'Fehler robust abfangen, aussagekräftig melden und im Betrieb nachvollziehen',
  color: '#14B8A6',
  gradient: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 50%, #0F766E 100%)',
  overview: 'Fehlerbehandlung ist der Teil des Codes, der am häufigsten vernachlässigt wird – und am teuersten scheitert. Ein unbehandelter Fehler in Produktion, ohne aussagekräftige Fehlermeldung und ohne Kontext, kann Stunden für die Diagnose kosten. Ein gut strukturierter Fehler mit Stack Trace, User-Kontext und betroffener Operation ist in Minuten diagnostiziert.\n\nDie drei Ebenen guter Fehlerbehandlung: Fehler präzise typisieren (welcher Fehler ist das?), Fehler korrekt propagieren (wo soll er behandelt werden?), und Fehler informativ melden (was braucht der Entwickler zur Diagnose?).',
  relatedTopics: ['monitoring', 'testing', 'architecture'],
  subareas: [
    {
      id: 'error-patterns',
      title: 'Error Handling Patterns',
      icon: 'shield-alert',
      concept: 'Fehler strukturiert typisieren, propagieren und an der richtigen Stelle behandeln',
      body: 'Der häufigste Anfängerfehler: catch(error) { console.log(error); } – der Fehler wird verschluckt, die Applikation läuft weiter in undefiniertem Zustand. Die goldene Regel: Behandle einen Fehler nur, wenn du weißt WAS du tust. Sonst: propagiere ihn nach oben.\n\nIn TypeScript/JavaScript gibt es zwei Philosophien: Exceptions (traditionell: throw/catch) und Result Types (Rust/Go-Stil: { data, error } Tuple). Result Types machen Fehlerpfade explizit im Typsystem – der Aufrufer muss den Fehlerfall behandeln, er kann ihn nicht vergessen. NeverThrow und Effect sind Bibliotheken die dieses Pattern für TypeScript umsetzen.',
      keyPoints: [
        'Catch-and-rethrow mit zusätzlichem Kontext: catch(e) { throw new Error("Failed to save user", { cause: e }) }',
        'Fehler nie still schlucken: catch(e) {} ist fast immer falsch – logge oder re-throwe immer',
        'Error Boundary Pattern (React, Top-Level): Fehler in der View-Schicht abfangen ohne App-Crash',
        'Spezifische Fehlertypen catchen: catch(e) { if (e instanceof ValidationError) {...} else throw e }',
        'Result Type Pattern: { ok: true, data } | { ok: false, error } – Fehler sind explizit im Typsystem',
        'Fail Fast vs. Graceful Degradation: Kritische Fehler sofort crashen (Startup-Config), andere degradieren (Feature-Toggle off)'
      ],
      tools: [
        { name: 'neverthrow', purpose: 'Result-Type-Bibliothek für TypeScript – Railway Oriented Programming' },
        { name: 'zod', purpose: 'Schema-Validierung mit präzisen Fehlermeldungen – für Input-Validierung' }
      ],
      commands: null,
      deepDive: {
        title: 'Custom Error-Klassen und Error-Hierarchien in TypeScript',
        intro: 'Benutzerdefinierte Fehlerklassen ermöglichen präzises Fehler-Handling, maschinenlesbare Fehlercodes und strukturierte Fehlerinformationen. Sie sind die Basis für ein konsistentes API-Error-Format.',
        sections: [
          {
            heading: 'Custom Error-Hierarchie aufbauen',
            prose: 'Eine Basis-Klasse erbt von Error und alle Domain-Fehler erben davon. Jeder Fehlertyp hat einen Machine-readable Code (für API-Responses), einen HTTP-Status-Code und optionale Metadaten.',
            codeBlock: {
              language: 'typescript',
              label: 'Custom Error-Klassenhierarchie',
              code: `// Basis-Klasse für alle App-Fehler
class AppError extends Error {
  constructor(
    message: string,
    public readonly code: string,       // Maschinenlesbar: 'USER_NOT_FOUND'
    public readonly statusCode: number, // HTTP-Status: 404, 400, 500
    public readonly context?: Record<string, unknown> // Debugging-Kontext
  ) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor); // Sauberer Stack Trace
  }
}

// Domain-spezifische Fehler
class NotFoundError extends AppError {
  constructor(resource: string, id: string) {
    super(
      \`\${resource} mit ID '\${id}' nicht gefunden\`,
      'NOT_FOUND',
      404,
      { resource, id }
    );
  }
}

class ValidationError extends AppError {
  constructor(
    field: string,
    message: string,
    public readonly violations: string[]
  ) {
    super(message, 'VALIDATION_ERROR', 422, { field, violations });
  }
}

class ExternalServiceError extends AppError {
  constructor(service: string, originalError: Error) {
    super(
      \`Externer Service '\${service}' nicht erreichbar\`,
      'EXTERNAL_SERVICE_ERROR',
      502,
      { service }
    );
    this.cause = originalError; // Error Chaining (ES2022)
  }
}

// Verwendung
function getUser(id: string): User {
  const user = db.find(id);
  if (!user) throw new NotFoundError('User', id);
  return user;
}

// Global Error Handler (Express)
app.use((err: Error, req: Request, res: Response) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: { code: err.code, message: err.message, context: err.context }
    });
  }
  // Unerwarteter Fehler: 500 + loggen
  logger.error({ err, req }, 'Unexpected error');
  res.status(500).json({ error: { code: 'INTERNAL_ERROR', message: 'Internal Server Error' } });
});`
            }
          },
          {
            heading: 'Result Type Pattern als Alternative zu Exceptions',
            prose: 'In einigen Kontexten ist das Result-Type-Pattern eleganter als Exceptions: Der Fehlerpfad ist explizit im Rückgabetyp und kann nicht vergessen werden. Besonders wertvoll für Business-Logik die erwartet fehlschlagen kann (Zahlung abgelehnt, User existiert schon).',
            codeBlock: {
              language: 'typescript',
              label: 'Result Type: Fehler sind explizit im Typsystem',
              code: `type Result<T, E = Error> =
  | { ok: true; data: T }
  | { ok: false; error: E };

async function chargePayment(
  amount: number
): Promise<Result<Receipt, PaymentError>> {
  try {
    const receipt = await paymentGateway.charge(amount);
    return { ok: true, data: receipt };
  } catch (e) {
    return { ok: false, error: new PaymentError(e) };
  }
}

// Verwendung – TypeScript erzwingt Fehlerbehandlung
const result = await chargePayment(99.99);
if (!result.ok) {
  // Muss behandelt werden – kann nicht vergessen werden!
  showUserError(result.error.message);
  return;
}
showReceipt(result.data); // TypeScript weiß: hier ist data vorhanden`
            }
          }
        ],
        bestPractices: [
          'Error Cause (ES2022): throw new Error("msg", { cause: originalError }) – Fehler-Kette für Root-Cause-Analysis',
          'Jeder AppError hat einen maschinenlesbaren Code – Frontend kann spezifisch reagieren',
          'Fehlerklassen-Tests schreiben: sicherstellen dass der richtige Typ geworfen wird'
        ],
        pitfalls: [
          'new Error(JSON.stringify(obj)) – unleserlich und verliert Typ-Information',
          'Zu granulare Fehlertypen: 50 Fehlerklassen für 5 Fehlerszenarien ist Over-Engineering',
          'Sensitive Daten in Error-Messages: Passwörter, Tokens, PII nie in Fehlertexte'
        ],
        furtherReading: [
          { title: 'TypeScript Error Handling Best Practices', url: 'https://www.typescriptlang.org/docs/handbook/2/types-from-types.html' },
          { title: 'neverthrow: Railway Oriented Programming for TypeScript', url: 'https://github.com/supermacro/neverthrow' }
        ]
      }
    },
    {
      id: 'async-errors',
      title: 'Async Error Handling',
      icon: 'loader',
      concept: 'Fehler in asynchronem Code zuverlässig abfangen – Promise-Fallen vermeiden',
      body: 'Asynchrone Fehler sind die häufigste Quelle von unbehandelten Fehlern in Node.js-Anwendungen. Ein vergessenes await, ein fehlender catch auf einem Promise, oder ein unbehandelter Rejection-Handler lassen den Server mit einer kryptischen Fehlermeldung abstürzen.\n\nDie goldene Regel für async/await: Jede async-Funktion die await enthält muss in einem try/catch verpackt sein, oder die aufrufende Funktion muss mit .catch() abgesichert sein. In Express 5+ werden async Errors automatisch an den Error Handler weitergeleitet – in Express 4 braucht man einen Wrapper.',
      keyPoints: [
        'Promise.all() schlägt fehl wenn EIN Promise fehlschlägt – Promise.allSettled() für unabhängige Operationen',
        'Unhandled Promise Rejections in Node.js: process.on("unhandledRejection") als letzten Fallback',
        'async/await in Express 4: Error nicht automatisch weitergeleitet – Wrapper-Funktion notwendig',
        'try/catch mit async/await: nur innerhalb der async-Funktion – nicht über Boundaries hinweg',
        'Promise.race() mit Timeout-Promise für Deadline-Handling',
        'AbortController für cancellable async Operations (fetch, DB-Queries mit Timeout)'
      ],
      tools: [
        { name: 'express-async-errors', purpose: 'Patcht Express 4 um async Errors automatisch weiterzuleiten' },
        { name: 'p-queue', purpose: 'Promise-Queue mit Concurrency-Limit und Error-Aggregation' }
      ],
      commands: null,
      deepDive: null
    },
    {
      id: 'error-tracking',
      title: 'Error Tracking & Sentry',
      icon: 'search',
      concept: 'Produktionsfehler automatisch erfassen, gruppieren und priorisieren',
      body: 'console.error in Produktion ist keine Fehlerbehandlungsstrategie. Error Tracking Tools wie Sentry fangen Fehler automatisch ab, gruppieren identische Fehler, zeigen Stack Traces mit Source Maps, und benachrichtigen das Team sofort. Die wichtigste Metrik: Fehlerrate – nicht Absolute Anzahl.\n\nSentry verknüpft Fehler mit User-Kontext, Release-Version, Breadcrumbs (was hat der User vor dem Fehler getan?) und Environment. Das macht die Diagnose dramatisch schneller: "Diese Fehlermeldung tritt bei 0.1% der User auf, alle auf iOS 17, seit Release 2.3.1".',
      keyPoints: [
        'Source Maps für minifizierten Code: Sentry dekompiliert automatisch – direkt TypeScript-Zeile im Stack Trace',
        'Sentry.setUser(): User-Kontext für Fehler – wer ist betroffen? Wie viele User?',
        'Breadcrumbs: automatisch geloggter "Brotkrümelpfad" vor dem Fehler – was hat der User getan?',
        'Release-Tracking: Fehler einem spezifischen Deployment zuordnen – Regression sofort erkennbar',
        'Performance Monitoring: Transactions und Spans – Sentry kann auch Performance-Probleme tracken',
        'Error-Sampling in Produktion: 100% Fehler, 10% Performance-Traces – Kosten kontrollieren'
      ],
      tools: [
        { name: 'Sentry', purpose: 'De-facto-Standard für Error Tracking – Self-hosted oder Cloud' },
        { name: 'Bugsnag', purpose: 'Alternative zu Sentry mit Fokus auf Stabilität-Score' },
        { name: 'Rollbar', purpose: 'Error-Tracking mit "Deploys" und Telemetry-Integration' }
      ],
      commands: [
        { cmd: 'npx @sentry/wizard@latest -i nextjs', desc: 'Sentry automatisch in Next.js-Projekt einrichten' }
      ],
      deepDive: null
    },
    {
      id: 'structured-logging',
      title: 'Strukturiertes Logging',
      icon: 'list',
      concept: 'Logs als maschinenlesbare Datenstruktur statt Freitext – effizient durchsuchbar',
      body: 'Strukturiertes Logging in JSON-Format verwandelt Logs von unstrukturierten Textketten in durchsuchbare Datensätze. Anstatt "User 42 logged in from 192.168.1.1 at 14:30" schreibt man { userId: 42, event: "LOGIN", ip: "192.168.1.1", timestamp: "..." } – das kann über Millionen Einträge gefiltert, aggregiert und analysiert werden.\n\nDas wichtigste Feld in jedem Log-Eintrag: traceId / correlationId. Sie verbindet alle Logs einer einzigen HTTP-Anfrage – auch wenn sie über mehrere Services und Ebenen geht. Mit AsyncLocalStorage in Node.js wird die traceId automatisch propagiert ohne explizites Weitergeben.',
      keyPoints: [
        'Pino (Node.js): schnellster strukturierter Logger – 5-10x schneller als winston',
        'AsyncLocalStorage: traceId automatisch in allen Log-Einträgen eines Requests',
        'Log-Sampling: DEBUG-Logs für 1% der Requests in Produktion – Speicher kontrollieren',
        'Child-Logger: Logger mit vordefinierten Feldern: logger.child({ orderId: 123 })',
        'Sensitive Fields redactieren: Pino redact: ["user.password", "*.token"] – nie in Logs landen',
        'Lokale Logs als Pretty-Print, Produktions-Logs als JSON – pino-pretty nur in Development'
      ],
      tools: [
        { name: 'Pino', purpose: 'Schnellster strukturierter Logger für Node.js – JSON-native' },
        { name: 'Winston', purpose: 'Flexibler Logger mit vielen Transports – etablierter Standard' },
        { name: 'pino-pretty', purpose: 'Lesbare Ausgabe von Pino-JSON in der lokalen Entwicklung' }
      ],
      commands: [
        { cmd: 'node app.js | pino-pretty', desc: 'Pino-JSON-Logs als lesbares Format in der Entwicklung' }
      ],
      deepDive: null
    },
    {
      id: 'graceful-degradation',
      title: 'Graceful Degradation & Fallbacks',
      icon: 'life-buoy',
      concept: 'Teilausfälle abfangen statt den gesamten Service zu killen',
      body: 'Nicht jeder Fehler rechtfertigt einen kompletten Service-Ausfall. Graceful Degradation bedeutet: Wenn der Recommendations-Service ausfällt, zeige keine Empfehlungen – aber zeige trotzdem den Produktkatalog. Wenn der Cache nicht erreichbar ist, gehe direkt zur Datenbank. Diese Entscheidungen müssen explizit getroffen und implementiert werden.\n\nDie Entscheidung "Crash or Degrade?" hängt von der Fehlerart ab: Konfigurationsfehler beim Start (falsches Datenbankpasswort) → sofort crashen, damit der Deployment-Prozess den Fehler sieht. Laufzeitfehler (externe API timeout) → degradieren und loggen. Ein Health Check Endpoint kommuniziert den aktuellen Zustand explizit.',
      keyPoints: [
        'Default-Werte bei Fehlern: leere Liste statt null/undefined wenn Feature-Daten nicht laden',
        'Feature-Toggle-basierte Degradation: Feature Flag off wenn abhängiger Service down',
        'Health Check Endpoints: /health (Liveness) und /ready (Readiness) – Kubernetes braucht beide',
        'Startup vs. Runtime Errors: Startup-Fehler crashen (fail fast), Runtime-Fehler degradieren',
        'Timeout-Hierarchie: User-Request 5s → External API 2s → DB Query 1s',
        'Error-Budget für Abhängigkeiten: toleriere X% Fehler von externem Service Y'
      ],
      tools: [
        { name: 'Resilience4j / Polly', purpose: 'Circuit Breaker, Retry, Fallback – für Service-Ausfälle' }
      ],
      commands: null,
      deepDive: null
    }
  ]
},

/* ══════════════════════════════════════════════════════════════════
   TOPIC 13 – PERFORMANCE & OPTIMIERUNG
   ══════════════════════════════════════════════════════════════════ */
{
  id: 'performance',
  title: 'Performance & Optimierung',
  icon: 'gauge',
  tagline: 'Systeme schnell machen durch Messen, Verstehen und gezieltes Optimieren',
  color: '#EAB308',
  gradient: 'linear-gradient(135deg, #EAB308 0%, #CA8A04 50%, #A16207 100%)',
  overview: 'Performance-Optimierung hat eine eiserne Regel: Messen vor Optimieren. Wer ohne Profiling optimiert, optimiert fast immer die falsche Stelle. Die tatsächlichen Bottlenecks sind fast nie dort wo man sie vermutet. Amdahls Gesetz: Wenn 5% des Codes 95% der Laufzeit ausmachen, bringt Optimierung der anderen 95% maximal 5% Verbesserung.\n\nPerformance-Ziele müssen konkret sein: "Die App soll schneller werden" ist kein Ziel. "P95-Latenz des Checkout-Endpoints unter 200ms" ist ein Ziel. Ohne messbares Ziel weiß man nicht wann man fertig ist.',
  relatedTopics: ['databases', 'monitoring', 'architecture'],
  subareas: [
    {
      id: 'profiling',
      title: 'Profiling & Messung',
      icon: 'activity',
      concept: 'Den tatsächlichen Performance-Bottleneck mit Werkzeugen lokalisieren statt zu raten',
      body: 'Profiling ist das Werkzeug um herauszufinden wo Zeit und Ressourcen wirklich verbraucht werden. Node.js hat einen integrierten V8-Profiler, Browser-DevTools haben einen ausgereiften JavaScript-Profiler mit Flame Graphs, und Linux hat perf und brendan greggs FlameGraph-Tool für systemweites Profiling.\n\nFlame Graphs sind die mächtigste Darstellung von Profiling-Daten: Die X-Achse zeigt den Zeitanteil, die Y-Achse den Call Stack. Breite Blöcke oben im Flame Graph sind die Bottlenecks. Einmal gelesen, sind sie intuitiver als jede andere Darstellung.',
      keyPoints: [
        'CPU Profiling: wer verbraucht die meiste CPU-Zeit? – Flame Graph aus Chrome DevTools oder node --prof',
        'Memory Profiling: wer hält die meisten Objektreferenzen? – Heap Snapshot in Chrome DevTools',
        'Network Profiling: welche Requests blockieren? – Wasserfall in Chrome DevTools Network Tab',
        'Benchmark.js / Vitest bench: Micro-Benchmarks für Algorithmen-Vergleiche',
        'clinic.js (Node.js): automatische Performance-Diagnose – erkennt Event-Loop-Blocking, Memory Leaks',
        'Lighthouse: automatische Frontend-Performance-Bewertung mit konkreten Empfehlungen'
      ],
      tools: [
        { name: 'Chrome DevTools Performance Tab', purpose: 'JavaScript-Profiling im Browser mit Flame Graph' },
        { name: 'clinic.js', purpose: 'Node.js Performance-Diagnose: Doctor, Bubbleprof, Flame' },
        { name: 'Lighthouse / PageSpeed Insights', purpose: 'Automatische Web-Performance-Analyse' }
      ],
      commands: [
        { cmd: 'node --prof app.js && node --prof-process isolate-*.log', desc: 'Node.js V8-Profiling aktivieren und auswerten' },
        { cmd: 'npx clinic doctor -- node app.js', desc: 'Automatische Performance-Diagnose mit clinic.js' }
      ],
      deepDive: null
    },
    {
      id: 'frontend-perf',
      title: 'Frontend Performance',
      icon: 'monitor',
      concept: 'Lade- und Rendering-Geschwindigkeit für echte Nutzer optimieren',
      body: 'Googles Core Web Vitals sind der Standard für Frontend-Performance-Messung: LCP (Largest Contentful Paint, < 2.5s), INP (Interaction to Next Paint, < 200ms), CLS (Cumulative Layout Shift, < 0.1). Diese drei Metriken korrelieren direkt mit Nutzer-Zufriedenheit und SEO-Ranking.\n\nDie wirkungsvollsten Frontend-Optimierungen: Code Splitting (nur was gebraucht wird laden), Lazy Loading für Bilder und Off-Screen-Content, HTTP/2 Multiplexing, kritisches CSS inlinen, und Fonts preloaden. Bundle-Size-Analyse mit webpack-bundle-analyzer oder Vite-Plugins zeigt sofort welche Abhängigkeiten den größten Anteil haben.',
      keyPoints: [
        'Core Web Vitals: LCP < 2.5s (größter sichtbarer Inhalt), INP < 200ms (Interaktivität), CLS < 0.1 (Layout-Stabilität)',
        'Code Splitting: dynamic import() lädt Module nur bei Bedarf – React.lazy() für Route-level Splitting',
        'Tree Shaking: nur verwendete Exports bundlen – setzt Named Exports und ESM voraus',
        'Image Optimization: WebP/AVIF statt JPEG/PNG, srcset für Responsive Images, lazy loading',
        'Critical CSS inlinen: oberhalb-der-Fold-CSS direkt im <head> – verhindert render-blocking',
        'Resource Hints: <link rel="preload"> für kritische Fonts, <link rel="prefetch"> für nächste Route'
      ],
      tools: [
        { name: 'webpack-bundle-analyzer', purpose: 'Visualisiert Bundle-Zusammensetzung – findet unerwartete große Dependencies' },
        { name: 'Lighthouse CI', purpose: 'Core Web Vitals in der CI-Pipeline messen – Regression erkennen' },
        { name: 'Next.js / Nuxt', purpose: 'Meta-Frameworks mit eingebautem Bild-Optimierung, Code Splitting, SSR' }
      ],
      commands: [
        { cmd: 'npx lighthouse https://example.com --output html', desc: 'Lighthouse-Report für URL generieren' }
      ],
      deepDive: null
    },
    {
      id: 'caching',
      title: 'Caching-Strategien',
      icon: 'database',
      concept: 'Teure Berechnungen und Netzwerkzugriffe durch gezielte Zwischenspeicherung vermeiden',
      body: 'Caching ist das mächtigste Performance-Werkzeug – und das gefährlichste. Phil Karltons berühmtes Zitat gilt: "There are only two hard things in Computer Science: cache invalidation and naming things." Ein falsches Cache-Invalidierungs-Pattern zeigt Nutzern veraltete Daten oder erzeugt inkonsistente Systemzustände.\n\nDie Cache-Hierarchie: L1 In-Process Memory (Microsekunden, klein), L2 Distributed Cache Redis (< 1ms, geteilt), L3 CDN Edge Cache (geografisch nah, HTTP), L4 Origin Server (langsam, teuer). Jede Ebene hat ihre Trade-offs in Latenz, Invalidierbarkeit und Konsistenz.',
      keyPoints: [
        'Cache-aside Pattern: App prüft Cache, bei Miss lädt sie DB und befüllt Cache',
        'TTL (Time To Live) sorgfältig wählen: zu kurz = kein Cache-Effekt, zu lang = veraltete Daten',
        'Cache-Stampede vermeiden: bei gleichzeitigem Cache-Miss viele DB-Requests – Mutex-Lock oder Probabilistic Early Expiration',
        'HTTP-Caching: Cache-Control: max-age=3600, stale-while-revalidate=86400 – Browser und CDN nutzen',
        'ETag / If-None-Match: Server sendet nur neue Daten wenn sich etwas geändert hat – spart Bandwidth',
        'Memoization: Pure Functions das erste Ergebnis cachen – useCallback/useMemo in React'
      ],
      tools: [
        { name: 'Redis', purpose: 'Distributed Cache mit TTL, Pub/Sub, Atomic Operations' },
        { name: 'node-cache', purpose: 'In-Process-Cache für Node.js ohne externe Abhängigkeiten' },
        { name: 'Varnish / Nginx Proxy Cache', purpose: 'HTTP-Level Caching vor dem Application Server' }
      ],
      commands: [
        { cmd: 'redis-cli DEBUG SLEEP 0', desc: 'Redis-Verbindung testen' },
        { cmd: 'redis-cli --stat', desc: 'Redis Echtzeit-Statistiken: Hit-Rate, Speicher, Commands/sec' }
      ],
      deepDive: {
        title: 'Cache-Strategien und Invalidierung: Das schwierige Problem',
        intro: 'Caching ist eine Abwägung zwischen Performance und Korrektheit. Die richtige Strategie hängt davon ab, wie frisch die Daten sein müssen und wie teuer die Regenerierung ist.',
        sections: [
          {
            heading: 'Die wichtigsten Cache-Patterns',
            prose: 'Cache-Aside ist der universellste Pattern: Die Anwendung verwaltet den Cache selbst. Write-Through schreibt immer in Cache und DB gleichzeitig – konsistent aber langsamer. Write-Behind (Write-Back) schreibt erst in Cache, dann asynchron in DB – schnell aber Datenverlust-Risiko.',
            codeBlock: {
              language: 'typescript',
              label: 'Cache-Aside Pattern mit Redis',
              code: `class UserService {
  private readonly CACHE_TTL = 3600; // 1 Stunde

  async getUser(userId: string): Promise<User> {
    const cacheKey = \`user:\${userId}\`;

    // 1. Cache prüfen
    const cached = await redis.get(cacheKey);
    if (cached) {
      return JSON.parse(cached); // Cache Hit
    }

    // 2. Cache Miss: aus DB laden
    const user = await db.users.findById(userId);
    if (!user) throw new NotFoundError('User', userId);

    // 3. In Cache schreiben
    await redis.setex(cacheKey, this.CACHE_TTL, JSON.stringify(user));

    return user;
  }

  async updateUser(userId: string, data: Partial<User>): Promise<User> {
    const updated = await db.users.update(userId, data);

    // KRITISCH: Cache invalidieren nach Update!
    await redis.del(\`user:\${userId}\`);

    return updated;
  }
}`
            }
          },
          {
            heading: 'Cache-Stampede verhindern',
            prose: 'Wenn ein populärer Cache-Eintrag abläuft und viele gleichzeitige Requests ihn neu laden wollen, entstehen N gleichzeitige DB-Queries. Lösung: Nur ein Request regeneriert den Cache, die anderen warten.',
            codeBlock: {
              language: 'typescript',
              label: 'Mutex-basierter Cache mit Stampede-Schutz',
              code: `const locks = new Map<string, Promise<unknown>>();

async function getCached<T>(
  key: string,
  loader: () => Promise<T>,
  ttl: number
): Promise<T> {
  const cached = await redis.get(key);
  if (cached) return JSON.parse(cached);

  // Bereits jemand am Laden? Dessen Promise abwarten
  if (locks.has(key)) {
    await locks.get(key);
    const result = await redis.get(key);
    return JSON.parse(result!);
  }

  // Wir laden – Lock setzen
  const loadPromise = loader().then(async (data) => {
    await redis.setex(key, ttl, JSON.stringify(data));
    locks.delete(key);
    return data;
  });

  locks.set(key, loadPromise);
  return loadPromise as Promise<T>;
}`
            }
          }
        ],
        bestPractices: [
          'Cache-Keys strukturieren: "entity:id:field" (user:42:profile) – einfache Invalidierung per Pattern',
          'Cache-Hit-Rate monitoren: unter 80% ist der Cache wenig effektiv oder falsch dimensioniert',
          'Stale-While-Revalidate: veraltete Daten sofort zurückgeben, im Hintergrund aktualisieren'
        ],
        pitfalls: [
          'Caching vor Profiling: Cache wo kein Performance-Problem ist – unnötige Komplexität',
          'Zu lange TTLs: Nutzer sehen nach einem Update stundenlang alte Daten',
          'Cache Key Collision: zwei verschiedene Daten mit demselben Key – strukturierte Keys verwenden'
        ],
        furtherReading: [
          { title: 'Redis Caching Patterns', url: 'https://redis.io/docs/manual/patterns/' }
        ]
      }
    },
    {
      id: 'backend-perf',
      title: 'Backend Performance',
      icon: 'server',
      concept: 'Server-seitige Bottlenecks in Code, Queries und I/O erkennen und beheben',
      body: 'Die häufigsten Backend-Performance-Probleme: synchrones I/O das den Event Loop blockiert (in Node.js), N+1-Queries (im Datenbankkapitel ausführlich), fehlende Indizes, und Memory Leaks durch ungecleante Event Listeners oder wachsende In-Memory-Strukturen.\n\nNode.js-spezifisch: Der Event Loop ist single-threaded. Alles was CPU-intensiv ist (kryptografische Operationen, Bild-Skalierung, JSON-Parsing von Mega-Dateien) blockiert den Loop für alle anderen Requests. Lösung: Worker Threads für CPU-intensive Tasks, oder externe Dienste.',
      keyPoints: [
        'Event Loop Blocking in Node.js: crypto, JSON.parse großer Dateien, synchrone fs-Operationen vermeiden',
        'Worker Threads für CPU-intensive Operationen: Bild-Resizing, PDF-Generierung, Krypto',
        'Connection Pooling richtig dimensionieren: zu klein = Wartezeiten, zu groß = DB überlastet',
        'Response Streaming: große Antworten als Stream senden statt alles in Memory zu puffern',
        'Compression: gzip/brotli für HTTP-Responses – 60-90% kleinere Responses',
        'HTTP/2 Server Push: kritische Assets proaktiv an Client senden'
      ],
      tools: [
        { name: 'clinic.js Flame', purpose: 'Flame Graph für Node.js Event-Loop-Blocking-Analyse' },
        { name: 'autocannon', purpose: 'Node.js HTTP-Benchmarking-Tool' }
      ],
      commands: [
        { cmd: 'npx autocannon -c 100 -d 30 http://localhost:3000/api/users', desc: '100 gleichzeitige Verbindungen für 30s auf einen Endpoint' }
      ],
      deepDive: null
    },
    {
      id: 'memory-management',
      title: 'Memory Management',
      icon: 'cpu',
      concept: 'Memory Leaks erkennen, verstehen und verhindern',
      body: 'Memory Leaks in langlebigen Node.js-Prozessen sind besonders tückisch: Sie äußern sich erst nach Stunden oder Tagen durch langsam steigenden Speicherverbrauch und schließlich OOM-Kills. Die häufigsten Ursachen: Event Listeners die nicht entfernt werden, wachsende Caches ohne Eviction, und globale Variablen die Referenzen halten.\n\nChrome DevTools Heap Snapshots sind das mächtigste Werkzeug: Zwei Snapshots vor und nach einem Vorgang machen deutlich, welche Objekte im Speicher verbleiben die nicht sollten. Das Vergleichs-View zeigt genau welche Konstruktoren mehr Instanzen haben als erwartet.',
      keyPoints: [
        'Heap Snapshot Comparison: Snapshot vor und nach Aktion vergleichen – welche Objekte akkumulieren?',
        'Event Listener Leaks: addEventListener ohne removeEventListener in Klassen – WeakRef oder explizites Cleanup',
        'Closure Leaks: Closure hält Referenz auf äußere Variable die nicht mehr benötigt wird',
        'process.memoryUsage() regelmäßig monitoren: heapUsed wächst kontinuierlich = Leak-Verdacht',
        'Map vs WeakMap: WeakMap erlaubt Garbage Collection der Keys – für Metadaten zu Objekten',
        'Node.js --expose-gc: manuelle GC in Tests für isolierte Memory-Messungen'
      ],
      tools: [
        { name: 'clinic.js Heapprofiler', purpose: 'Heap-Allocation-Tracking für Node.js' },
        { name: 'memwatch-next', purpose: 'Memory Leak Detection im laufenden Node.js-Prozess' }
      ],
      commands: [
        { cmd: 'node --inspect app.js', desc: 'Node.js mit DevTools verbinden für Heap Snapshots' }
      ],
      deepDive: null
    }
  ]
},

/* ══════════════════════════════════════════════════════════════════
   TOPIC 14 – DOKUMENTATION
   ══════════════════════════════════════════════════════════════════ */
{
  id: 'documentation',
  title: 'Dokumentation',
  icon: 'book-open',
  tagline: 'Code, APIs und Entscheidungen so dokumentieren, dass andere (und das zukünftige Ich) produktiv bleiben',
  color: '#64748B',
  gradient: 'linear-gradient(135deg, #64748B 0%, #475569 50%, #334155 100%)',
  overview: 'Gute Dokumentation ist kein Selbstzweck – sie ist ein Multiplikator. Code der gut dokumentiert ist, kann von jedem Teammitglied gewartet werden, auch wenn der ursprüngliche Autor nicht mehr erreichbar ist. Eine README die neue Mitglieder in 30 Minuten produktiv macht, spart dem Team Stunden pro Onboarding.\n\nDer wichtigste Shift: Von "Was macht der Code" zu "Warum macht der Code das". Das WAS sieht man im Code selbst. Das WARUM ist das was verloren geht wenn der ursprüngliche Entwickler das Team verlässt – und es ist das was in Dokumentation gehört.',
  relatedTopics: ['devprocess', 'apis', 'architecture'],
  subareas: [
    {
      id: 'code-comments',
      title: 'Code-Kommentare & JSDoc',
      icon: 'message-square',
      concept: 'Kommentare die WARUM erklären – nicht WAS der Code sichtbar tut',
      body: 'Der häufigste Kommentar-Fehler: Das WAS kommentieren statt das WARUM. "// increment i by 1" über i++ ist nutzlos – das sieht jeder. "// Wir inkrementierten um 1 statt 2 weil die API 1-basiert ist" ist wertvoll – das steht nirgendwo im Code.\n\nJSDoc/TSDoc generiert typisierte API-Dokumentation direkt aus Code-Kommentaren. TypeScript-IDEs zeigen JSDoc-Kommentare als Hover-Info – das ist für öffentliche APIs und Bibliotheken unverzichtbar. Für interne Business-Logik reichen kurze Inline-Kommentare die das Warum erklären.',
      keyPoints: [
        'Kommentiere das WARUM: Warum diese Implementierung? Welche Alternative wurde verworfen und warum?',
        'TODO/FIXME/HACK Kommentare mit Issue-Link: "TODO(#234): Refactor wenn API v2 released"',
        'JSDoc @param, @returns, @throws für öffentliche APIs – IDE zeigt sie als Hover-Dokumentation',
        '@deprecated mit Migrations-Hinweis: @deprecated Verwende stattdessen newFunction()',
        'Sparsam kommentieren: zu viele Kommentare sind genauso schlimm wie zu wenige – Rauschen',
        'Kommentare synchron halten: ein Kommentar der den Code falsch beschreibt ist schlimmer als kein Kommentar'
      ],
      tools: [
        { name: 'TypeDoc', purpose: 'Generiert HTML-Dokumentation aus TSDoc-Kommentaren' },
        { name: 'JSDoc', purpose: 'Standard-Dokumentationsformat für JavaScript/TypeScript' }
      ],
      commands: [
        { cmd: 'npx typedoc --entryPoints src/index.ts --out docs/', desc: 'TypeDoc-Dokumentation generieren' }
      ],
      deepDive: null
    },
    {
      id: 'readme',
      title: 'README-Standards',
      icon: 'file-text',
      concept: 'Die README als Einstiegspunkt die einen neuen Entwickler in 30 Minuten produktiv macht',
      body: 'Eine gute README beantwortet genau vier Fragen: Was ist das Projekt und warum existiert es? Wie richte ich die Entwicklungsumgebung ein? Wie läuft Tests und Build? Wie trage ich bei? Diese vier Abschnitte – und sonst nichts – sind ausreichend für die meisten Projekte.\n\nDie häufigsten README-Fehler: zu lang (niemand liest sie), veraltet (schlimmer als keine), oder zu kurz (nutzlos). Docs-as-Code Prinzip: README und andere Markdown-Dokumente leben im Repository, werden mit PRs aktualisiert und sind versioniert. Wiki-Seiten veralten; Repo-Docs nicht.',
      keyPoints: [
        'Minimal-README: Was? Warum? Setup in <5 Befehlen. Tests laufen. Contribution Guide.',
        'Badges (CI-Status, Coverage, License) signalisieren auf einen Blick Projektgesundheit',
        'Screenshots/GIFs für UI-Projekte: ein Bild sagt mehr als hundert Zeilen Beschreibung',
        'CONTRIBUTING.md für non-triviale Contribution-Prozesse – hält README sauber',
        'CHANGELOG.md mit Keep a Changelog Format: Was hat sich in welcher Version geändert?',
        'Architecture Decision Records (ADRs) im /docs/adr/ Verzeichnis – Entscheidungen versioniert'
      ],
      tools: [
        { name: 'readme.so', purpose: 'Interaktiver README-Generator mit vorgefertigten Sections' },
        { name: 'markdownlint', purpose: 'Linter für konsistentes Markdown-Format' }
      ],
      commands: [
        { cmd: 'npx markdownlint-cli2 "**/*.md"', desc: 'Alle Markdown-Dateien auf Format-Fehler prüfen' }
      ],
      deepDive: {
        title: 'README-Template für professionelle Projekte',
        intro: 'Ein README-Template das bei allen wichtigen Projekten als Startpunkt dient. Felder die für das spezifische Projekt nicht relevant sind, einfach entfernen.',
        sections: [
          {
            heading: 'Das README-Template',
            prose: 'Dieses Template deckt alle wichtigen Aspekte ab ohne unnötig lang zu sein. Der erste Abschnitt muss in 3 Sätzen erklären was das Projekt ist – mehr nicht.',
            codeBlock: {
              language: 'markdown',
              label: 'README.md Template',
              code: `# Projektname

> Ein Satz was das Projekt macht und für wen.

[![CI](https://github.com/org/repo/workflows/CI/badge.svg)](...)
[![Coverage](https://codecov.io/gh/org/repo/badge.svg)](...)

## Überblick
Was tut diese Anwendung? Welches Problem löst sie? (2-3 Sätze)

## Schnellstart

\`\`\`bash
git clone git@github.com:org/repo.git && cd repo
cp .env.example .env       # Konfiguration anpassen
docker compose up -d       # DB + Redis starten
npm install && npm run dev # App starten
\`\`\`

Die App läuft auf http://localhost:3000

## Voraussetzungen
- Node.js 20+
- Docker Desktop

## Entwicklung

\`\`\`bash
npm test              # Tests einmalig
npm run test:watch    # Tests im Watch-Modus
npm run lint          # ESLint
npm run type-check    # TypeScript prüfen
\`\`\`

## Umgebungsvariablen
Kopiere \`.env.example\` → \`.env\`. Wichtige Variablen:

| Variable         | Beschreibung          | Standard         |
|------------------|-----------------------|------------------|
| DATABASE_URL     | PostgreSQL-Verbindung | postgresql://... |
| JWT_SECRET       | Secret für JWT        | –                |

## Architektur
Kurze Beschreibung der Systemstruktur.
Verweis auf \`/docs/architecture.md\` für Details.

## Contributing
Siehe [CONTRIBUTING.md](CONTRIBUTING.md).

## Lizenz
MIT`
            }
          }
        ],
        bestPractices: [
          'README beim ersten Commit anlegen, nicht "wenn Zeit ist" – es gibt nie Zeit',
          'Jede breaking change im Setup sofort in der README aktualisieren',
          'Regelmäßig prüfen: README nach Schema "neues Projekt-Mitglied führt README-Schritte durch" testen'
        ],
        pitfalls: [
          'Screenshots ohne Alt-Text und Datum – nach 6 Monaten zeigen sie nicht mehr die aktuelle UI',
          'Zu detaillierte Installations-Anleitungen für Basis-Tools (Homebrew, nvm) – Link zu deren Doku',
          'README als einzige Informationsquelle für komplexe Systemzusammenhänge – ADRs und Arch-Docs für Details'
        ],
        furtherReading: [
          { title: 'Make a README', url: 'https://www.makeareadme.com/' },
          { title: 'Keep a Changelog', url: 'https://keepachangelog.com/' }
        ]
      }
    },
    {
      id: 'api-docs',
      title: 'API-Dokumentation',
      icon: 'globe',
      concept: 'APIs so dokumentieren, dass Entwickler sie ohne Rückfragen korrekt verwenden können',
      body: 'API-Dokumentation ist das User Interface für Entwickler. Schlechte API-Docs bedeuten Support-Anfragen, falsche Implementierungen und Frustration. Gute API-Docs ermöglichen Integration ohne Rückfragen ans Team.\n\nOpenAPI 3.1 (früher Swagger) ist der de-facto-Standard für REST-API-Dokumentation. Die Spec kann manuell geschrieben werden (spec-first) oder aus Code-Annotationen generiert (code-first). Spec-first ist vorzuziehen: Es zwingt zum Nachdenken über das Interface vor der Implementierung – und dient gleichzeitig als Vertrag, als Mock-Server-Basis und als SDK-Generator.',
      keyPoints: [
        'OpenAPI Spec: maschinenlesbar, generiert Docs (Swagger UI, Scalar, Redoc), Mocks und Client-SDKs',
        'Spec-First: Interface designen bevor Code geschrieben wird – zwingt zu besserem API-Design',
        'Request/Response-Beispiele in der Spec: konkrete Beispiele sind wertvoller als abstrakte Typ-Definitionen',
        'Error-Responses vollständig dokumentieren: welche Status-Codes, welches Format, welche codes?',
        'Changelog in der API-Dokumentation: was hat sich zwischen v1 und v2 geändert?',
        'Interaktive Dokumentation (Swagger UI, Scalar): Try-it-out direkt in der Docs-Seite'
      ],
      tools: [
        { name: 'Scalar', purpose: 'Moderne API-Dokumentation aus OpenAPI – eleganter als Swagger UI' },
        { name: 'Redocly', purpose: 'Professionelle API-Dokumentations-Pipeline mit Linting' },
        { name: 'Stoplight', purpose: 'Visueller OpenAPI-Editor – spec-first ohne YAML-Kenntnisse' }
      ],
      commands: [
        { cmd: 'npx @redocly/cli preview-docs openapi.yaml', desc: 'Lokale Vorschau der API-Dokumentation' },
        { cmd: 'npx @redocly/cli lint openapi.yaml', desc: 'OpenAPI-Spec auf Fehler und Inkonsistenzen prüfen' }
      ],
      deepDive: null
    },
    {
      id: 'arch-docs',
      title: 'Architekturdokumentation & ADRs',
      icon: 'map',
      concept: 'Systemstruktur und Entscheidungsgründe für zukünftige Entwickler festhalten',
      body: 'Architecture Decision Records (ADRs) sind die wertvollste Dokumentationsform im Software-Lebenszyklus. Sie halten fest WARUM eine Entscheidung getroffen wurde – nicht was entschieden wurde (das steht im Code). In 6 Monaten weiß niemand mehr warum PostgreSQL statt MongoDB gewählt wurde, warum ein bestimmter Architektur-Pattern verwendet wird, oder warum eine Bibliothek ausgetauscht wurde. ADRs konservieren dieses Wissen.\n\nDas C4-Modell (Simon Brown) bietet vier Abstraktionsebenen für Systemdiagramme: System Context (Überblick), Container (deploybare Einheiten), Component (Module), und Code (Klassen). Jede Ebene hat ein anderes Publikum und einen anderen Detailgrad.',
      keyPoints: [
        'ADR-Format: Titel, Status (proposed/accepted/deprecated), Kontext, Entscheidung, Konsequenzen',
        'ADR versionieren: im Repository unter /docs/adr/ – bei Review wird die Entscheidung diskutiert',
        'Superseded ADRs nicht löschen: "Status: Superseded by ADR-012" – History erhalten',
        'C4 Level 1 (System Context): Wer interagiert mit dem System? Welche externen Systeme gibt es?',
        'C4 Level 2 (Container): Welche deploybare Einheiten gibt es? Wie kommunizieren sie?',
        'Diagramme als Code (Mermaid, PlantUML): in der README eingebettet, automatisch gerendert'
      ],
      tools: [
        { name: 'adr-tools', purpose: 'CLI zum Erstellen und Verwalten von ADRs' },
        { name: 'Mermaid', purpose: 'Diagramme als Markdown-Code – GitHub und GitLab rendern sie nativ' },
        { name: 'Structurizr', purpose: 'C4-Diagramme als Code mit automatischer Konsistenzprüfung' }
      ],
      commands: [
        { cmd: 'adr new "Verwende Cursor-Paginierung für alle List-Endpoints"', desc: 'Neues ADR anlegen' }
      ],
      deepDive: null
    },
    {
      id: 'developer-guides',
      title: 'Developer Guides & Onboarding',
      icon: 'users',
      concept: 'Wissen strukturiert weitergeben damit neue Teammitglieder schnell produktiv werden',
      body: 'Gutes Developer-Onboarding hat eine konkrete ROI: Jede Stunde, die in Onboarding-Dokumentation investiert wird, spart dem Team im Durchschnitt 10 Stunden Onboarding-Support. Ein neues Teammitglied sollte nach dem Lesen der Dokumentation selbstständig seinen ersten Beitrag leisten können – ohne einen erfahrenen Entwickler fragen zu müssen.\n\nRunbooks sind operative Guides für wiederkehrende Aufgaben: "Wie führe ich eine Datenbankmigration in Produktion durch?", "Was mache ich wenn der Deployment-Alert feuert?", "Wie resetzte ich den lokalen Entwicklungsstand?". Sie werden in Stresssituationen verwendet – sie müssen kurz, klar und getestet sein.',
      keyPoints: [
        'Onboarding-Checkliste: Day 1 (Setup), Day 2 (erstes Issue), Week 1 (erster PR)',
        'Glossar: projektspezifische Begriffe, Abkürzungen und Domain-Terme erklären',
        'Runbooks für häufige Operationen: Deployment, Datenbankzugang, Service-Restart',
        'Decision Log: wichtige Meeting-Entscheidungen mit Datum und Teilnehmern dokumentieren',
        'Architecture Overview Document: ein Dokument das das System in 30 Minuten lesbar macht',
        'Regelmäßig aktualisieren: Onboarding-Docs mindestens bei jedem Technologie-Wechsel reviewen'
      ],
      tools: [
        { name: 'Confluence / Notion', purpose: 'Team-Wikis für Prozess-Dokumentation und Guides' },
        { name: 'MkDocs / Docusaurus', purpose: 'Statische Dokumentations-Websites aus Markdown' }
      ],
      commands: null,
      deepDive: null
    }
  ]
},

/* ══════════════════════════════════════════════════════════════════
   TOPIC 15 – PROMPT ENGINEERING FÜR CLAUDE CODE
   ══════════════════════════════════════════════════════════════════ */
{
  id: 'promptengineering',
  title: 'Prompt Engineering für Claude Code',
  icon: 'bot',
  tagline: 'KI-gestützte Entwicklung meistern: Aufgaben strukturieren, Kontext geben, iterativ arbeiten',
  color: '#EC4899',
  gradient: 'linear-gradient(135deg, #EC4899 0%, #DB2777 50%, #BE185D 100%)',
  overview: 'Claude Code ist kein Zauberer der aus vagen Anfragen perfekten Code erzeugt – es ist ein hochqualifizierter Assistent der so gut ist wie die Aufgabe, die ihm gestellt wird. Der Unterschied zwischen einer mittelmäßigen und einer exzellenten KI-Interaktion liegt fast immer in der Qualität des Prompts, nicht in der KI-Fähigkeit.\n\nDie wichtigste Erkenntnis: Claude Code denkt wie ein sehr erfahrener Entwickler, der gerade zum Team gestoßen ist. Er braucht denselben Kontext, den auch ein neuer Senior-Entwickler brauchen würde: Was ist das Ziel? Welche Constraints gibt es? Was wurde schon versucht? Was ist der bestehende Code-Kontext?',
  relatedTopics: ['devprocess', 'architecture', 'documentation'],
  subareas: [
    {
      id: 'task-structuring',
      title: 'Aufgaben effektiv strukturieren',
      icon: 'list-ordered',
      concept: 'Aufgaben so formulieren, dass Claude Code präzise und zielgerichtet handeln kann',
      body: 'Eine gut strukturierte Aufgabe hat vier Bestandteile: Kontext (was ist die Ausgangslage?), Ziel (was soll erreicht werden?), Constraints (was sind die Grenzen?), und Output-Format (was soll zurückgegeben werden?). Das klingt banal – aber die meisten Prompts enthalten nur das Ziel und vergessen die anderen drei.\n\nDie Granularität der Aufgabe ist entscheidend. "Baue eine komplette E-Commerce-Anwendung" ist zu groß für eine produktive Interaktion. "Erstelle eine REST-Endpoint für die Produktsuche mit Pagination und Filter nach Kategorie" ist präzise genug. Als Faustregel: Wenn eine Aufgabe mehr als 2-3 Stunden Entwicklungsarbeit bedeuten würde, sollte sie in Teilaufgaben zerlegt werden.',
      keyPoints: [
        'Kontext-Ziel-Constraint-Format: "In diesem Express-Projekt (Kontext) möchte ich X implementieren (Ziel) ohne Y zu ändern (Constraint)"',
        'Granularität: Eine Aufgabe = eine logische Änderung – nicht "mache das ganze Feature"',
        'Negativbeispiele nennen: "nicht so wie in Datei X, sondern eher wie in Datei Y"',
        'Erwartetes Ergebnis beschreiben: "der Test in file.test.ts soll danach grün sein"',
        'Schrittweises Vorgehen: "Erkläre erst den Ansatz, dann implementiere"',
        'Plan-Mode nutzen: Komplexe Aufgaben erst planen lassen, dann nach Approval implementieren'
      ],
      tools: [
        { name: 'Claude Code Plan Mode (/plan)', purpose: 'Erst Implementierungsplan erstellen, dann nach Bestätigung ausführen' },
        { name: 'CLAUDE.md', purpose: 'Persistent instructions für alle Projektinteraktionen – Kontext einmalig definieren' }
      ],
      commands: [
        { cmd: '/plan', desc: 'Plan Mode aktivieren: Claude erstellt Implementierungsplan vor Ausführung' },
        { cmd: '/clear', desc: 'Konversationskontext zurücksetzen für saubere neue Aufgabe' }
      ],
      deepDive: {
        title: 'Prompt-Muster für häufige Entwicklungsaufgaben',
        intro: 'Bewährte Prompt-Strukturen für die häufigsten Entwicklungsszenarien: Neue Features, Refactoring, Debugging und Code-Review. Diese Muster funktionieren konsistent besser als Ad-hoc-Formulierungen.',
        sections: [
          {
            heading: 'Muster 1: Neues Feature implementieren',
            prose: 'Das beste Feature-Prompt enthält: Was bereits existiert (relevante Dateipfade), was genau gebaut werden soll, welche Patterns aus dem bestehenden Code übernommen werden sollen, und Akzeptanzkriterien.',
            codeBlock: {
              language: 'markdown',
              label: 'Feature-Prompt Template',
              code: `## Aufgabe: [Feature-Name]

### Bestehender Code
- Ähnliches Feature: \`src/features/orders/OrderService.ts\`
- Datenbank-Schema: \`src/db/schema.ts\` (Tabelle: products)
- Tests als Referenz: \`src/features/orders/__tests__/\`

### Was soll implementiert werden
[Präzise Beschreibung: ein Endpoint, eine Funktion, eine Komponente]

### Constraints
- Gleiche Patterns wie in OrderService (Repository Pattern, Custom Errors)
- Kein direkter DB-Zugriff aus dem Controller
- Tests müssen mitgeliefert werden

### Akzeptanzkriterien
- GET /api/products?category=electronics gibt gefilterte Produkte zurück
- Paginierung via cursor-Parameter
- Fehler bei ungültigem cursor: 400 mit code: INVALID_CURSOR`
            }
          },
          {
            heading: 'Muster 2: Debugging und Fehleranalyse',
            prose: 'Für Debugging-Aufgaben ist es entscheidend, den vollständigen Fehler-Kontext mitzugeben: Stack Trace, Testcase der fehlschlägt, und was bereits versucht wurde.',
            codeBlock: {
              language: 'markdown',
              label: 'Debugging-Prompt Template',
              code: `## Fehler zu debuggen

### Fehlermeldung / Stack Trace
\`\`\`
TypeError: Cannot read property 'id' of undefined
  at UserService.updateUser (src/services/UserService.ts:45:23)
  at POST /api/users/:id (src/controllers/UserController.ts:28:5)
\`\`\`

### Reproduzieren
\`\`\`bash
curl -X POST /api/users/999 -d '{"name": "Max"}'
\`\`\`

### Was ich bereits versucht habe
- User mit ID 999 existiert in der Test-DB
- Das user-Objekt war auf Line 40 noch definiert

### Relevante Dateien
- \`src/services/UserService.ts\` (besonders Methode updateUser)
- \`src/repositories/UserRepository.ts\``
            }
          },
          {
            heading: 'Muster 3: Refactoring',
            prose: 'Refactoring-Prompts müssen das Ziel (bessere Struktur) von der Einschränkung (kein geändertes Verhalten) klar trennen. Tests als Sicherheitsnetz explizit erwähnen.',
            codeBlock: {
              language: 'markdown',
              label: 'Refactoring-Prompt Template',
              code: `## Refactoring: [Was wird refaktoriert]

### Aktueller Zustand
[Dateiname und kurze Beschreibung des Problems]
- Problem: Die Klasse hat 5 verschiedene Verantwortlichkeiten (SRP-Verletzung)
- Konkret: UserService macht Email, Hashing, DB, Audit, Notification

### Ziel
- UserService nur noch als Orchestrator
- Separate Services für Email, Hashing, Audit
- Dependency Injection für alle Abhängigkeiten

### Was sich NICHT ändern darf
- Alle bestehenden Tests müssen nach dem Refactoring grün bleiben
- Öffentliches Interface von UserService (Methoden-Signaturen)
- Kein neues Verhalten, nur Struktur-Änderung

### Vorgehen
Bitte erst den Refactoring-Plan zeigen, dann nach meiner Bestätigung umsetzen.`
            }
          }
        ],
        bestPractices: [
          'Dateipfade immer relativ zum Repository-Root angeben: src/services/UserService.ts',
          'Bei langen Prompts: Kontext zuerst, Aufgabe am Ende – Claude Code liest alles, aber die letzte Anweisung dominiert',
          'CLAUDE.md für Projekt-weite Patterns: "Verwende immer Repository Pattern", "Tests mit vitest"'
        ],
        pitfalls: [
          '"Mach es besser" ohne Kriterium – was ist besser? Performance? Lesbarkeit? Testbarkeit?',
          'Zu viel Kontext auf einmal: 5 Dateien als Kontext statt der einen relevanten',
          'Aufgabe nicht abgrenzen: "und auch gleich..." führt zu größeren Änderungen als beabsichtigt'
        ],
        furtherReading: [
          { title: 'Claude Code Dokumentation', url: 'https://docs.anthropic.com/en/docs/claude-code' }
        ]
      }
    },
    {
      id: 'context-management',
      title: 'Kontext optimal bereitstellen',
      icon: 'database',
      concept: 'Den richtigen Kontext zur richtigen Zeit geben – weder zu viel noch zu wenig',
      body: 'Kontext ist das wertvollste Gut in einer KI-Interaktion. Zu wenig Kontext führt zu generischen Lösungen die nicht zum Projekt passen. Zu viel Kontext lenkt ab und verdünnt das Signal. Das Ziel: den minimalen Kontext angeben der notwendig ist um die richtige Lösung zu erzeugen.\n\nCLAUDE.md ist das mächtigste Werkzeug für persistenten Kontext: Projektstruktur, verwendete Technologien, Coding-Standards, wichtige Entscheidungen – einmal geschrieben, immer verfügbar. Ohne CLAUDE.md muss derselbe Kontext in jeder neuen Konversation erneut erklärt werden.',
      keyPoints: [
        'CLAUDE.md: Projekt-weite Regeln, Tech-Stack, Architektur-Entscheidungen – wird in jeder Konversation geladen',
        'Relevante Dateien explizit nennen statt alles offenlassen: "Schau dir src/models/User.ts an"',
        'Fehler-Kontext vollständig mitgeben: Stack Trace + Code-Zeile + was bereits versucht wurde',
        'Bestehende Patterns als Referenz: "Implementiere analog zu OrderService.ts"',
        'Negativ-Beispiele: "nicht so wie die alte Implementierung in legacy/UserService.ts"',
        'Session-Kontext nutzen: frühere Entscheidungen dieser Session müssen nicht wiederholt werden'
      ],
      tools: [
        { name: 'CLAUDE.md', purpose: 'Persistente Projekt-Instruktionen die in jeder Konversation geladen werden' },
        { name: '/memory', purpose: 'Memory-Verwaltung in Claude Code – eigene Erinnerungen verwalten' }
      ],
      commands: [
        { cmd: '/memory', desc: 'Gespeicherte Memory-Dateien anzeigen und bearbeiten' }
      ],
      deepDive: null
    },
    {
      id: 'iterative-ai',
      title: 'Iteratives Arbeiten mit KI',
      icon: 'refresh-cw',
      concept: 'KI-Assistenz als iterativen Prozess verstehen statt auf perfekte Einzel-Antworten zu hoffen',
      body: 'Der häufigste Fehler im Umgang mit KI-Assistenz: eine komplexe Aufgabe in einem Schritt lösen wollen. Effektives KI-gestütztes Entwickeln ist ein iterativer Dialog: Ziel setzen → ersten Schritt implementieren → reviewen → korrigieren → nächsten Schritt. Diese Iterationen sind schnell (30-120 Sekunden pro Runde) und erlauben feines Steuern.\n\nDas "Amplify, don\'t delegate"-Prinzip: Claude Code verstärkt die eigene Entwicklungsarbeit – es ersetzt nicht das Denken. Die besten Ergebnisse entstehen wenn der Entwickler die Architektur versteht und überprüft, und Claude Code die repetitive Implementierungsarbeit übernimmt.',
      keyPoints: [
        'Kleinstufige Iteration: eine Sache auf einmal implementieren, testen, dann weiter',
        'Plan-Approve-Execute Workflow: erst Plan lesen und verstehen, dann Ausführung freigeben',
        'Zwischenreviews: bei komplexen Features nach jedem Teilschritt den Code lesen',
        'Korrekturen konkret formulieren: "Das stimmt fast, aber die Validierung fehlt noch für den Fall X"',
        'Rückfragen nutzen: Claude Code fragt bei Unklarheiten – das ist ein Signal zur Präzisierung',
        'Tests als Verifikation: "Führe die Tests aus und zeige mir ob alles grün ist"'
      ],
      tools: [
        { name: 'Claude Code Plan Mode', purpose: 'Implementierungsplan vor Ausführung reviewen' },
        { name: 'TodoWrite in Claude Code', purpose: 'Komplexe Aufgaben werden intern in Teilschritte aufgeteilt' }
      ],
      commands: [
        { cmd: '/plan', desc: 'In Plan Mode wechseln für komplexe mehrstufige Aufgaben' }
      ],
      deepDive: null
    },
    {
      id: 'claude-features',
      title: 'Claude Code Features nutzen',
      icon: 'settings',
      concept: 'Die eingebauten Werkzeuge von Claude Code produktiv einsetzen',
      body: 'Claude Code hat eine Reihe von Features die über einfaches Code-Generieren hinausgehen: Plan Mode für komplexe Änderungen, CLAUDE.md für Projekt-Kontext, Memory für persistente Präferenzen, Hooks für automatisierte Qualitätsprüfungen, und MCP-Server für externe Tool-Integration.\n\nDer oft unterschätzte Plan Mode ist besonders wertvoll: Bei komplexen Features erstellt Claude Code zuerst einen detaillierten Implementierungsplan, der reviewed und approved werden muss, bevor Code geschrieben wird. Das verhindert große Fehl-Implementierungen die aufwändig zurückzurollen sind.',
      keyPoints: [
        'CLAUDE.md: Projektregeln, Tech-Stack, Verbote ("Nie direkt DB im Controller"), Präferenzen',
        'Plan Mode (/plan): Pflicht für Aufgaben die mehr als 3 Dateien ändern oder neue Architektur einführen',
        'Memory (/memory): Persönliche Präferenzen die über Projekte hinweg gelten',
        'Hooks: Shell-Befehle die bei Tool-Aufrufen automatisch ausgeführt werden – z.B. Tests nach Edit',
        'MCP Server: Externe Tools (GitHub, Jira, Datenbanken) direkt aus Claude Code ansprechen',
        'Slash Commands: /commit für automatisches Commit-Message-Generieren, /review für PR-Review'
      ],
      tools: [
        { name: 'CLAUDE.md', purpose: 'Persistente Projekt-Konfiguration für Claude Code' },
        { name: 'MCP (Model Context Protocol)', purpose: 'Standard-Protocol für externe Tool-Integration' }
      ],
      commands: [
        { cmd: '/init', desc: 'CLAUDE.md automatisch aus dem aktuellen Projekt generieren' },
        { cmd: '/compact', desc: 'Konversation zusammenfassen um Kontext-Fenster freizugeben' }
      ],
      deepDive: null
    },
    {
      id: 'ai-antipatterns',
      title: 'Häufige Fehler & Anti-Patterns',
      icon: 'x-circle',
      concept: 'Typische Fallstricke im KI-gestützten Entwickeln erkennen und vermeiden',
      body: 'KI-Assistenz kann Entwicklung beschleunigen – oder verlangsamen, wenn man in typische Fallen tappt. Das größte Risiko: Code akzeptieren ohne ihn zu verstehen. KI-generierter Code kann subtile Fehler enthalten, die erst unter Last, bei Edge Cases oder nach Monaten in Produktion sichtbar werden.\n\nDas "Vibe Coding"-Anti-Pattern: Prompt → Code annehmen → Prompt → Code annehmen, ohne den Code zu lesen. Das erzeugt kurzfristig schnelle Ergebnisse, aber langfristig unwartbaren Code den niemand (auch die KI nicht) zuverlässig verstehen oder ändern kann.',
      keyPoints: [
        'Code immer lesen und verstehen bevor er eingecheckt wird – "Black Box Acceptance" ist gefährlich',
        'KI-generierten Code testen: "Funktioniert auf den ersten Blick" ≠ korrekt für alle Edge Cases',
        'Über-Vertrauen in Vollständigkeit: Claude Code kann Dinge übersehen – insbesondere Sicherheit und Error Handling',
        'Zu große Aufgaben auf einmal: über 500 Zeilen Code ohne Zwischencheck zu generieren birgt hohes Risiko',
        'Kontext-Verlust nicht erkennen: lange Konversationen können frühe Entscheidungen "vergessen" – /clear und neu starten',
        'KI als Ersatz für Architektur-Denken: KI kann implementieren, aber die Architektur-Entscheidungen müssen vom Entwickler kommen'
      ],
      tools: [],
      commands: [
        { cmd: '/clear', desc: 'Kontext zurücksetzen wenn die Konversation zu lang und unübersichtlich wird' }
      ],
      deepDive: null
    }
  ]
}

  ] // end topics
}; // end APP_DATA
