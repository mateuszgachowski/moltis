// ── Crons page Polish strings ───────────────────────────────

export default {
	// ── Sidebar ─────────────────────────────────────────────
	sidebar: {
		cronJobs: "Zadania cykliczne",
		heartbeat: "Heartbeat",
	},

	// ── Heartbeat section ───────────────────────────────────
	heartbeat: {
		title: "Heartbeat",
		enable: "Włącz",
		runNow: "Uruchom teraz",
		running: "Uruchamianie\u2026",
		description: "Okresowe sprawdzanie AI, które monitoruje środowisko i raportuje status.",
		inactiveLabel: "Heartbeat nieaktywny:",
		blockedDisabled: "Heartbeat jest wyłączony. Włącz go, aby umożliwić ręczne uruchomienia.",
		blockedNoPrompt:
			"Heartbeat jest nieaktywny, ponieważ nie skonfigurowano promptu. Dodaj niestandardowy prompt lub napisz treść w HEARTBEAT.md.",
		blockedNoJob:
			"Heartbeat nie ma jeszcze aktywnego zadania cyklicznego. Zapisz ustawienia heartbeat, aby je odtworzyć.",
		lastLabel: "Ostatni:",
		nextLabel: "Następny:",
		// Schedule
		scheduleTitle: "Harmonogram",
		intervalLabel: "Interwał",
		modelLabel: "Model",
		modelDefaultPlaceholder: "(domyślny: {{model}})",
		modelServerDefault: "(domyślny serwera)",
		// Prompt
		promptTitle: "Prompt",
		customPromptLabel: "Niestandardowy prompt (opcjonalnie)",
		customPromptPlaceholder: "Pozostaw puste, aby użyć domyślnego promptu heartbeat",
		customPromptHint:
			"Pozostaw puste, aby użyć HEARTBEAT.md w katalogu głównym workspace. Jeśli ten plik istnieje, ale jest pusty/zawiera tylko komentarze, uruchomienia LLM heartbeat są pomijane, aby oszczędzać tokeny.",
		promptSourceLabel: "Efektywne źródło promptu:",
		promptSourceConfig: "niestandardowy prompt konfiguracji",
		promptSourceMd: "HEARTBEAT.md",
		promptSourceDefault: "brak (heartbeat nieaktywny)",
		maxResponseCharsLabel: "Maksymalna liczba znaków odpowiedzi",
		// Active Hours
		activeHoursTitle: "Godziny aktywności",
		activeHoursDescription: "Uruchamiaj heartbeat tylko w tych godzinach.",
		startLabel: "Początek",
		endLabel: "Koniec",
		timezoneLabel: "Strefa czasowa",
		timezoneLocal: "Lokalna ({{tz}})",
		// Sandbox
		sandboxTitle: "Piaskownica",
		sandboxDescription: "Uruchamiaj polecenia heartbeat w izolowanym kontenerze.",
		enableSandbox: "Włącz piaskownicę",
		sandboxImageLabel: "Obraz piaskownicy",
		sandboxImagePlaceholder: "Domyślny obraz",
		sandboxSearchPlaceholder: "Szukaj obrazów\u2026",
		// Recent Runs
		recentRunsTitle: "Ostatnie uruchomienia",
		noRunsYet: "Brak uruchomień.",
		// Token display
		tokenIn: "{{count}} wej.",
		tokenOut: "{{count}} wyj.",
	},

	// ── Cron Jobs section ───────────────────────────────────
	jobs: {
		title: "Zadania cykliczne",
		addJob: "+ Dodaj zadanie",
		noCronJobs: "Nie skonfigurowano zadań cyklicznych.",
		// Status bar
		statusRunning: "Uruchomiony",
		statusStopped: "Zatrzymany",
		jobCount: "{{count}} zadanie",
		jobCountPlural: "{{count}} zadań",
		enabledCount: "{{count}} włączonych",
		nextRun: "następne: {{time}}",
		// Table headers
		headerName: "Nazwa",
		headerSchedule: "Harmonogram",
		headerNextRun: "Następne uruchomienie",
		headerLastStatus: "Ostatni status",
		headerActions: "Akcje",
		headerEnabled: "Włączone",
		// Actions
		edit: "Edytuj",
		run: "Uruchom",
		history: "Historia",
		// Schedule formatting
		scheduleAt: "O {{time}}",
		scheduleEveryHours: "Co {{count}}h",
		scheduleEveryMinutes: "Co {{count}}m",
		scheduleEverySeconds: "Co {{count}}s",
		// Run history panel
		runHistoryTitle: "Historia uruchomień: {{name}}",
		noRunsYet: "Brak uruchomień.",
		// Delete confirmation
		deleteConfirm: "Usunąć zadanie '{{name}}'?",
	},

	// ── Modal (Add / Edit) ──────────────────────────────────
	modal: {
		addJobTitle: "Dodaj zadanie",
		editJobTitle: "Edytuj zadanie",
		nameLabel: "Nazwa",
		namePlaceholder: "Nazwa zadania",
		scheduleTypeLabel: "Typ harmonogramu",
		scheduleAtOption: "O (jednorazowe)",
		scheduleEveryOption: "Co (interwał)",
		scheduleCronOption: "Cron (wyrażenie)",
		everyPlaceholder: "Interwał w sekundach",
		cronPlaceholder: "*/5 * * * *",
		timezonePlaceholder: "Strefa czasowa (opcjonalnie, np. Europe/Warsaw)",
		payloadTypeLabel: "Typ ładunku",
		systemEventOption: "Zdarzenie systemowe",
		agentTurnOption: "Tura agenta",
		messageLabel: "Wiadomość",
		messagePlaceholder: "Tekst wiadomości",
		sessionTargetLabel: "Cel sesji",
		targetIsolated: "Izolowany",
		targetMain: "Główny",
		deleteAfterRun: "Usuń po uruchomieniu",
		create: "Utwórz",
	},
};
