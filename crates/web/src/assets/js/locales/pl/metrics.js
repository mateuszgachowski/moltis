// ── Metrics page Polish strings ─────────────────────────

export default {
	// ── Page chrome ────────────────────────────────────────
	title: "Monitoring",
	tabs: {
		overview: "Przegląd",
		charts: "Wykresy",
	},

	// ── Live indicator ─────────────────────────────────────
	live: "Na żywo",

	// ── Loading & error states ─────────────────────────────
	loadingMetrics: "Ładowanie metryk\u2026",
	metricsDisabled: "Metryki nie są włączone. Włącz je w moltis.toml z [metrics] enabled = true",

	// ── Empty states ───────────────────────────────────────
	noActivityTitle: "Brak aktywności",
	noActivityDescription:
		"Metryki pojawią się tutaj po rozpoczęciu korzystania z moltis. Spróbuj wysłać wiadomość lub uruchomić narzędzie, aby zobaczyć dane.",
	collectingTitle: "Zbieranie danych\u2026",
	collectingDescription:
		"Wykresy historyczne pojawią się tutaj po zebraniu kilku punktów danych. Zwykle zajmuje to około 20\u201330 sekund.",

	// ── Time range selector ────────────────────────────────
	timeRange: {
		fiveMin: "5 min",
		oneHour: "1 godz.",
		twentyFourHours: "24 godz.",
		sevenDays: "7 dni",
	},

	// ── Section headings ───────────────────────────────────
	sections: {
		system: "System",
		llmUsage: "Użycie LLM",
		toolsMcp: "Narzędzia i MCP",
		byProvider: "Wg dostawcy",
		prometheus: "Endpoint Prometheus",
	},

	// ── Metric card titles ─────────────────────────────────
	cards: {
		uptime: "Czas działania",
		connectedClients: "Połączeni klienci",
		activeSessions: "Aktywne sesje",
		httpRequests: "Żądania HTTP",
		completions: "Uzupełnienia",
		inputTokens: "Tokeny wejściowe",
		outputTokens: "Tokeny wyjściowe",
		cacheTokens: "Tokeny pamięci podręcznej",
		toolExecutions: "Wykonania narzędzi",
		toolsActive: "Aktywne narzędzia",
		mcpToolCalls: "Wywołania narzędzi MCP",
		mcpServers: "Serwery MCP",
	},

	// ── Metric card subtitles (interpolated) ───────────────
	errorsCount: "{{count}} błędów",
	cacheRead: "odczyt: {{value}}",

	// ── Chart titles ───────────────────────────────────────
	charts: {
		tokenUsageTotal: "Użycie tokenów (łącznie)",
		inputTokensByProvider: "Tokeny wejściowe wg dostawcy",
		outputTokensByProvider: "Tokeny wyjściowe wg dostawcy",
		requests: "Żądania",
		connections: "Połączenia",
		toolActivity: "Aktywność narzędzi",
	},

	// ── Chart series labels ────────────────────────────────
	series: {
		time: "Czas",
		inputTokens: "Tokeny wejściowe",
		outputTokens: "Tokeny wyjściowe",
		httpRequests: "Żądania HTTP",
		llmCompletions: "Uzupełnienia LLM",
		wsActive: "Aktywne WebSocket",
		activeSessions: "Aktywne sesje",
		toolExecutions: "Wykonania narzędzi",
		mcpCalls: "Wywołania MCP",
	},

	// ── Provider table headers ─────────────────────────────
	table: {
		provider: "Dostawca",
		completions: "Uzupełnienia",
		inputTokens: "Tokeny wejściowe",
		outputTokens: "Tokeny wyjściowe",
		errors: "Błędy",
	},

	// ── Prometheus section ─────────────────────────────────
	prometheusDescription:
		"Scrapuj ten endpoint za pomocą Prometheus lub zaimportuj do Grafana w celu zaawansowanej wizualizacji.",
};
