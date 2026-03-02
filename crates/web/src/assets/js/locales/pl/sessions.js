// ── Sessions Polish strings ─────────────────────────────────

export default {
	// Welcome card
	welcome: {
		greeting: "Cześć!",
		greetingWithName: "Cześć, {{name}}!",
		noProviders: {
			title: "Nie skonfigurowano dostawców LLM",
			description: "Skonfiguruj co najmniej jednego dostawcę, aby rozpocząć czatowanie.",
		},
	},

	// Session list
	list: {
		newSession: "Nowa sesja",
		clearAll: "Wyczyść",
		clearAllConfirm: "Usunąć {{count}} sesję? Sesje Main, Telegram i cron zostaną zachowane.",
		clearAllConfirmPlural: "Usunąć {{count}} sesji? Sesje Main, Telegram i cron zostaną zachowane.",
		clearing: "Czyszczenie\u2026",
	},

	// Session header
	header: {
		fork: "Rozgałęź",
		forkTooltip: "Rozgałęź sesję",
		share: "Udostępnij",
		shareTooltip: "Udostępnij migawkę",
		clear: "Wyczyść",
		clearTooltip: "Wyczyść sesję",
		clearing: "Czyszczenie\u2026",
		delete: "Usuń",
		deleteTooltip: "Usuń sesję",
		deleteConfirm: "Usunąć tę sesję?",
		deleteWorktreeConfirm: "Worktree ma niezatwierdzone zmiany. Wymusić usunięcie?",
		renameTooltip: "Kliknij, aby zmienić nazwę",
	},

	// Session item (list)
	item: {
		activeTelegram: "Aktywna sesja Telegram",
		inactiveTelegram: "Sesja Telegram (nieaktywna)",
		fork: "rozgałęzienie@{{point}}",
	},

	// Session metadata (footer)
	meta: {
		tokenUsage: "{{inTokens}} wej. / {{outTokens}} wyj.",
		modelProvider: "{{provider}} / {{model}}",
	},

	// Session actions
	actions: {
		clearFailed: "Czyszczenie nie powiodło się",
	},

	// Share
	share: {
		linkCopied: "Link udostępniania skopiowany",
		privateNotice: "Prywatny link zawiera klucz, udostępnij go tylko zaufanym osobom",
		createFailed: "Nie udało się utworzyć linku udostępniania",
	},

	// Search
	search: {
		noResults: "Brak wyników",
		placeholder: "Szukaj sesji\u2026",
	},

	// Projects
	projects: {
		allSessions: "Wszystkie sesje",
		noMatching: "Brak pasujących projektów",
		filterTooltip: "Filtruj sesje wg projektu",
	},
};
