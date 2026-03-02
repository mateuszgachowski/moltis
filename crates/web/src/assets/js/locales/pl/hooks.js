// ── Hooks page Polish strings ───────────────────────────────

export default {
	// ── Page header & intro ─────────────────────────────────
	title: "Hooki",
	reloading: "Przeładowywanie\u2026",
	introDescriptionBody:
		"uruchamiają polecenia powłoki w odpowiedzi na zdarzenia cyklu życia (wywołania narzędzi, wiadomości, sesje itp.). Znajdują się w",
	introDescriptionSuffix: "katalogach.",
	introHookMdPrefix: "Każdy hook to katalog zawierający plik",
	introHookMdMiddle:
		"z frontmatterem TOML (zdarzenia, polecenie, wymagania) i opcjonalną dokumentacją. Edytuj treść poniżej i kliknij",
	introHookMdSuffix: "aby zaktualizować.",
	flowEvent: "Zdarzenie",
	flowHookScript: "Skrypt hooka",
	flowResult: "Kontynuuj / Modyfikuj / Blokuj",

	// ── Empty & loading states ──────────────────────────────
	emptyStatePrefix: "Nie odkryto hooków. Utwórz",
	emptyStateSuffix: "aby rozpocząć.",
	loadingHooks: "Ładowanie hooków\u2026",

	// ── Status badges ───────────────────────────────────────
	statusIneligible: "Niekwalifikujący się",
	statusActive: "Aktywny",

	// ── Source badges ───────────────────────────────────────
	sourceProject: "Projekt",
	sourceUser: "Użytkownik",
	sourceBuiltin: "Wbudowany",

	// ── Card detail labels ──────────────────────────────────
	eventsLabel: "Zdarzenia:",
	commandLabel: "Polecenie:",
	priorityLabel: "Priorytet: {{value}}",
	timeoutLabel: "Limit czasu: {{value}}s",
	clickToCopyPath: "Kliknij, aby skopiować ścieżkę",

	// ── Card stats ──────────────────────────────────────────
	callCount: "{{count}} wywołań",
	callCountTitle: "Wywołania",
	failedCount: "{{count}} nieudanych",
	avgLatency: "{{value}}ms śr.",

	// ── Missing requirements ────────────────────────────────
	missingOs: "System operacyjny nieobsługiwany",
	missingBins: "Brakujące: {{bins}}",
	missingEnv: "Zmienne: {{vars}}",

	// ── Tabs ────────────────────────────────────────────────
	tabPreview: "Podgląd",
	tabSource: "Źródło",

	// ── Built-in card ───────────────────────────────────────
	viewSourceOnGitHub: "Zobacz źródło na GitHub \u2197",

	// ── Toasts ──────────────────────────────────────────────
	hookEnabled: 'Hook "{{name}}" włączony',
	hookDisabled: 'Hook "{{name}}" wyłączony',
	failedAction: "Nie powiodło się: {{error}}",
	savedHook: 'Zapisano "{{name}}"',
	failedToSave: "Nie udało się zapisać: {{error}}",
	pathCopied: "Ścieżka skopiowana",
	hooksReloaded: "Hooki przeładowane",
	reloadFailed: "Przeładowanie nie powiodło się: {{error}}",
	unknownError: "nieznany błąd",
};
