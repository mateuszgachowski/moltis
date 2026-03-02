// ── Projects page Polish strings ────────────────────────────

export default {
	title: "Repozytoria",
	description:
		"Projekty wiążą sesje z katalogiem kodu. Gdy sesja jest powiązana z projektem, pliki kontekstu (CLAUDE.md, AGENTS.md) są ładowane automatycznie i można wstrzyknąć niestandardowy prompt systemowy. Włącz auto-worktree, aby dać każdej sesji własną gałąź git do izolowanej pracy.",
	autoDetectDescription:
		'<strong class="text-[var(--text)]">Automatyczne wykrywanie</strong> skanuje typowe katalogi w folderze domowym (<code class="font-mono text-xs">~/Projects</code>, <code class="font-mono text-xs">~/Developer</code>, <code class="font-mono text-xs">~/src</code>, <code class="font-mono text-xs">~/code</code>, <code class="font-mono text-xs">~/repos</code>, <code class="font-mono text-xs">~/workspace</code>, <code class="font-mono text-xs">~/dev</code>, <code class="font-mono text-xs">~/git</code>) i worktree Superset (<code class="font-mono text-xs">~/.superset/worktrees</code>) w poszukiwaniu repozytoriów git i dodaje je jako projekty.',
	clearAllHint: "Wyczyść wszystko usuwa tylko wpisy repozytoriów z Moltis, nie kasuje niczego z dysku.",
	noProjectsConfigured: "Nie skonfigurowano projektów. Dodaj katalog powyżej lub użyj automatycznego wykrywania.",
	confirmClearAll: "Wyczyścić wszystkie repozytoria z Moltis? To usuwa je tylko z listy i nie kasuje plików na dysku.",
	confirmClearAllButton: "Wyczyść wszystko",
	autoDetect: "Automatyczne wykrywanie",
	detecting: "Wykrywanie\u2026",
	clearAll: "Wyczyść wszystko",
	clearing: "Czyszczenie\u2026",
	autoDetectTooltip: "Skanuj typowe lokalizacje w poszukiwaniu repozytoriów git i dodaj je jako projekty",
	clearAllTooltip: "Usuń wszystkie wpisy repozytoriów z Moltis bez kasowania plików na dysku",
	pathInput: {
		directory: "Katalog",
		placeholder: "/ścieżka/do/projektu",
	},
	badges: {
		auto: "auto",
		worktree: "worktree",
		setup: "setup",
		teardown: "teardown",
		image: "obraz",
	},
	card: {
		systemPromptPrefix: "Prompt systemowy: ",
		editProject: "Edytuj projekt",
		edit: "edytuj",
		removeProject: "Usuń projekt",
	},
	editForm: {
		label: "Etykieta",
		labelPlaceholder: "Nazwa projektu",
		directory: "Katalog",
		directoryPlaceholder: "/ścieżka/do/projektu",
		systemPrompt: "Prompt systemowy (opcjonalnie)",
		systemPromptPlaceholder: "Dodatkowe instrukcje dla LLM przy pracy nad tym projektem...",
		setupCommand: "Polecenie konfiguracji",
		setupCommandPlaceholder: "np. pnpm install",
		teardownCommand: "Polecenie zamykania",
		teardownCommandPlaceholder: "np. docker compose down",
		branchPrefix: "Prefiks gałęzi",
		branchPrefixPlaceholder: "domyślnie: moltis",
		sandboxImage: "Obraz piaskownicy",
		sandboxImagePlaceholder: "Domyślny (ubuntu:25.10)",
		autoWorktree: "Automatycznie twórz git worktree na sesję",
	},
};
