// ── Chat UI Polish strings ─────────────────────────────────

export default {
	// ── Input area ───────────────────────────────────────────
	placeholder: "Napisz wiadomość...",
	sendBtn: "Wyślij",
	micTooltip: "Kliknij, aby rozpocząć nagrywanie",
	micStarting: "Uruchamianie mikrofonu...",
	micStopAndSend: "Kliknij, aby zatrzymać i wysłać",
	voiceTranscribing: "Transkrybowanie...",
	voiceTranscribingMessage: "Transkrybowanie głosu...",

	// ── Slash commands ───────────────────────────────────────
	slashClear: "Wyczyść historię rozmowy",
	slashCompact: "Podsumuj rozmowę, aby zaoszczędzić tokeny",
	slashContext: "Pokaż kontekst sesji i informacje o projekcie",

	// ── Message labels ───────────────────────────────────────
	viaChannel: "przez {{label}}",
	provider: "Dostawca: {{name}}",
	allowed: "Dozwolone",
	denied: "Odmówiono",
	expired: "wygasło",
	queued: "W kolejce",

	// ── Sandbox / MCP labels ─────────────────────────────────
	sandboxed: "piaskownica",
	sandboxDirect: "bezpośrednio",
	sandboxDisabled: "wyłączony",
	sandboxUnavailable: "niedostępny",
	sandboxDisabledHint:
		"Piaskownice są wyłączone na wdrożeniach chmurowych bez środowiska uruchomieniowego kontenerów. Zainstaluj na VM z Docker lub Apple Container, aby włączyć tę funkcję.",
	sandboxToggleTooltip: "Przełącz tryb piaskownicy",
	sandboxImageTooltip: "Obraz piaskownicy",
	mcpEnabled: "MCP",
	mcpEnabledTooltip: "Narzędzia MCP włączone \u2014 kliknij, aby wyłączyć dla tej sesji",
	mcpDisabled: "MCP wył.",
	mcpDisabledTooltip: "Narzędzia MCP wyłączone \u2014 kliknij, aby włączyć dla tej sesji",
	mcpToggleTooltip: "Przełącz narzędzia MCP dla tej sesji",

	// ── Debug panel ──────────────────────────────────────────
	debugTooltip: "Pokaż informacje debugowania kontekstu",
	debugLabel: "Debug",
	contextTooltip: "Pokaż pełny kontekst LLM (prompt systemowy + historia)",
	contextLabel: "Kontekst",
	loadingContext: "Ładowanie kontekstu\u2026",
	failedToLoadContext: "Nie udało się załadować kontekstu",
	buildingContext: "Budowanie pełnego kontekstu\u2026",
	failedToBuildContext: "Nie udało się zbudować kontekstu",
	copyBtn: "Kopiuj",

	// ── Context card ─────────────────────────────────────────
	context: {
		title: "Kontekst",
		session: "Sesja",
		key: "Klucz",
		unknown: "nieznany",
		messages: "Wiadomości",
		model: "Model",
		defaultModel: "domyślny",
		providerLabel: "Dostawca",
		label: "Etykieta",
		toolSupport: "Obsługa narzędzi",
		enabled: "Włączona",
		disabled: "Wyłączona",
		project: "Projekt",
		projectName: "Nazwa",
		unnamed: "(bez nazwy)",
		directory: "Katalog",
		systemPrompt: "Prompt systemowy",
		charsCount: "{{count}} znaków",
		contextFiles: "Pliki kontekstu ({{count}})",
		noProject: "Brak projektu powiązanego z tą sesją",
		tools: "Narzędzia",
		toolsDisabledNoSupport: "Narzędzia wyłączone \u2014 model nie obsługuje wywoływania narzędzi",
		noTools: "Brak zarejestrowanych narzędzi",
		skillsAndPlugins: "Umiejętności i wtyczki",
		skillsDisabledNoSupport: "Umiejętności wyłączone \u2014 model nie obsługuje wywoływania narzędzi",
		pluginPrefix: "[Wtyczka] ",
		skillPrefix: "[Umiejętność] ",
		noSkillsOrPlugins: "Brak włączonych umiejętności lub wtyczek",
		mcpTools: "Narzędzia MCP",
		mcpToolsDisabledNoSupport: "Narzędzia MCP wyłączone \u2014 model nie obsługuje wywoływania narzędzi",
		mcpToolsDisabledSession: "Narzędzia MCP wyłączone dla tej sesji",
		toolCount: "{{count}} narzędzie",
		toolCount_plural: "{{count}} narzędzi",
		noMcpTools: "Brak uruchomionych narzędzi MCP",
		sandbox: "Piaskownica",
		backend: "Backend",
		mode: "Tryb",
		scope: "Zakres",
		workspaceMount: "Montowanie workspace",
		image: "Obraz",
		container: "Kontener",
		tokenUsage: "Użycie tokenów",
		input: "Wejście",
		output: "Wyjście",
		total: "Razem",
		contextLeft: "Pozostały kontekst",
		contextPct: "{{pct}}% z {{total}}",
	},

	// ── Compact card ─────────────────────────────────────────
	compact: {
		title: "Rozmowa skompresowana",
		beforeCompact: "Przed kompresją",
		messages: "Wiadomości",
		totalTokens: "Razem tokenów",
		contextUsage: "Użycie kontekstu",
		usageFormat: "{{pct}}% z {{total}}",
		afterCompact: "Po kompresji",
		summaryMessage: "1 (podsumowanie)",
		status: "Status",
		statusMessage: "Historia rozmowy zastąpiona podsumowaniem",
	},

	// ── Warnings ─────────────────────────────────────────────
	toolsDisabledWarning:
		"Narzędzia wyłączone \u2014 bieżący model nie obsługuje wywoływania narzędzi. Działa w trybie samego czatu.",
	unknown: "nieznany",
	unknownError: "nieznany błąd",
	done: "gotowe",
	compactingConversation: "Kompresowanie rozmowy\u2026",
	autoCompactContextLimit: "Kompresowanie rozmowy (osiągnięto limit kontekstu)\u2026",
	autoCompactFailed: "Automatyczna kompresja nie powiodła się: {{error}}",
	compactFailed: "Kompresja nie powiodła się",
	contextFailed: "Kontekst nie powiódł się",
	sandboxImageBuildStart: "Budowanie obrazu piaskownicy (instalowanie pakietów)\u2026",
	sandboxImageReady: "Obraz piaskownicy gotowy: {{tag}}",
	sandboxImageCached: "Obraz piaskownicy już w pamięci podręcznej: {{tag}}",
	sandboxImageBuildFailed: "Budowanie obrazu piaskownicy nie powiodło się: {{error}}",
	sandboxProvisionStart: "Przygotowywanie pakietów piaskownicy\u2026",
	sandboxProvisionDone: "Pakiety piaskownicy przygotowane",
	sandboxProvisionFailed: "Przygotowywanie piaskownicy nie powiodło się: {{error}}",
	sandboxHostInstallStart: "Instalowanie {{count}} pakietów na hoście\u2026",
	sandboxHostInstalledCount: "{{count}} zainstalowano",
	sandboxHostAlreadyPresentCount: "{{count}} już obecnych",
	sandboxHostReady: "Pakiety hosta gotowe ({{details}})",
	sandboxHostInstallFailed: "Instalacja pakietów hosta nie powiodła się: {{error}}",
	browserContainer: "kontener przeglądarki",
	browserImagePullStart:
		"Pobieranie obrazu kontenera przeglądarki ({{image}})\u2026 To może potrwać kilka minut przy pierwszym uruchomieniu.",
	browserImageReady: "Obraz kontenera przeglądarki gotowy: {{image}}",
	browserImagePullFailed: "Pobieranie obrazu kontenera przeglądarki nie powiodło się: {{error}}",
	downloadFailed: "Nie udało się pobrać {{modelName}}: {{error}}",
	downloadReady: "{{modelName}} gotowy",
	downloadingModel: "Pobieranie {{modelName}}\u2026",
	downloadProgressWithTotal: "{{downloaded}} / {{total}} MB",
	downloadProgressNoTotal: "{{downloaded}} MB",
	connectedToGateway: "Połączono z bramą moltis v{{version}} o {{time}}",
	statusHandshakeFailed: "uzgadnianie nie powiodło się",
	handshakeFailed: "Uzgadnianie nie powiodło się: {{reason}}",
	statusDisconnectedReconnecting: "rozłączono \u2014 ponowne łączenie\u2026",
	statusConnecting: "łączenie...",
	geolocationNotSupported: "Geolokalizacja nieobsługiwana",
	renderError: "Błąd renderowania: {{message}}",

	// ── Token bar ────────────────────────────────────────────
	tokenBar: {
		inLabel: " wej. / ",
		outLabel: " wyj. \u00b7 ",
		tokensSuffix: " tokenów",
		contextLeft: " \u00b7 Pozostały kontekst przed automatyczną kompresją: {{pct}}%",
		toolsDisabled: " \u00b7 Narzędzia: wyłączone",
	},

	// ── Share dialog ─────────────────────────────────────────
	share: {
		title: "Udostępnij migawkę sesji",
		hint: "Migawka jest zamrożona w tym momencie, późniejsze wiadomości czatu pozostają prywatne.",
		redactionWarning:
			"Dokładamy starań, aby usunąć klucze API i tokeny z udostępnionych wyników narzędzi, ale zawsze sprawdź przed udostępnieniem.",
		publicLink: "Link publiczny",
		publicBadge: "Otwarty",
		privateLink: "Link prywatny",
		privateBadge: "Wymagany klucz",
		linkReady: "Link udostępniania gotowy",
		privateHint: "To jest prywatny link udostępniania z osadzonym kluczem. Wyślij go tylko zaufanym osobom.",
		publicHint: "Ta migawka jest zamrożona w tym momencie.",
		linkCopied: "Link udostępniania skopiowany",
	},

	// ── Roles ────────────────────────────────────────────────
	roles: {
		you: "Ty",
		assistant: "Asystent",
		unknown: "nieznany",
	},

	// ── Full context panel ───────────────────────────────────
	fullContext: {
		chars: "znaków",
		toolCall: "wywołanie narzędzia",
		toolCall_plural: "wywołań narzędzi",
		id: "id",
		copied: "Skopiowano!",
		messagesSummary:
			"{{count}} wiadomości \xb7 prompt systemowy {{systemChars}} znaków \xb7 razem {{totalChars}} znaków",
	},

	// ── Queued messages ──────────────────────────────────────
	queuedMessages: {
		cancelAllTooltip: "Anuluj wszystkie w kolejce",
	},
};
