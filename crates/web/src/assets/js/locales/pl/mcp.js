// ── MCP page Polish strings ─────────────────────────────

export default {
	// ── Page header & intro ─────────────────────────────────
	title: "MCP",
	refresh: "Odśwież",
	introTitle: "MCP (Model Context Protocol)",
	introDescription:
		"narzędzia rozszerzają agenta AI o zewnętrzne możliwości \u2014 dostęp do plików, pobieranie stron, zapytania do baz danych, wyszukiwanie kodu i więcej.",
	flowAgent: "Agent",
	flowMoltis: "Moltis",
	flowLocalProcess: "Lokalny proces MCP",
	flowExternalApi: "Zewnętrzne API",
	introDetail:
		"Każde narzędzie działa jako <strong>lokalny proces</strong> na Twoim komputerze (uruchamiany przez npm/uvx). Moltis łączy się z nim przez stdio, a proces wykonuje zewnętrzne wywołania API w Twoim imieniu, używając Twoich tokenów. Żadne dane nie są wysyłane do zewnętrznych hostów MCP.",

	// ── Security warning ────────────────────────────────────
	securityTitle: "\u26a0\ufe0f Serwery MCP działają jako lokalne procesy \u2014 sprawdź przed włączeniem",
	securityPrivileges:
		"Każdy serwer MCP działa z <strong>pełnymi uprawnieniami systemowymi</strong>. Złośliwy lub skompromitowany serwer może czytać Twoje pliki, wykradać dane uwierzytelniające lub wykonywać dowolne polecenia \u2014 tak jak każdy lokalny proces.",
	securityReview:
		"<strong>Dokładnie sprawdź kod źródłowy</strong> każdego serwera MCP przed jego włączeniem. Instaluj tylko serwery od autorów, którym ufasz, i dbaj o ich aktualizację.",
	securityTokens:
		"Każdy włączony serwer dodaje również definicje narzędzi do kontekstu każdej sesji czatu, zużywając tokeny. Włączaj tylko serwery, których aktywnie potrzebujesz.",

	// ── Featured servers section ─────────────────────────────
	popularTitle: "Popularne serwery MCP",
	browseAll: "Przeglądaj wszystkie serwery na GitHub \u2192",
	configRequired: "wymagana konfiguracja",
	adding: "Dodawanie\u2026",
	confirm: "Potwierdź",

	// ── Featured server descriptions ────────────────────────
	featured: {
		filesystemDesc: "Bezpieczne operacje na plikach z konfigurowalnymi kontrolami dostępu",
		filesystemHint: "Ostatni argument to dozwolona ścieżka katalogu",
		memoryDesc: "System trwałej pamięci oparty na grafie wiedzy",
		githubDesc: "Integracja z GitHub API \u2014 repozytoria, issues, PR-y, wyszukiwanie kodu",
		githubHint: "Wymaga osobistego tokenu dostępu GitHub",
	},

	// ── Config form ─────────────────────────────────────────
	argumentsLabel: "Argumenty",
	envVarsLabel: "Zmienne środowiskowe (KLUCZ=WARTOŚĆ na linię)",

	// ── Install box (custom server) ─────────────────────────
	addCustomTitle: "Dodaj niestandardowy serwer MCP",
	stdioLocal: "Stdio (lokalny)",
	sseRemote: "SSE (zdalny)",
	commandLabel: "Polecenie",
	commandPlaceholder: "npx -y mcp-remote https://mcp.example.com/mcp",
	serverUrlLabel: "URL serwera",
	serverUrlPlaceholder: "https://mcp.example.com/mcp",
	nameLabel: "Nazwa:",
	editableAfterAdding: "(edytowalne po dodaniu)",
	hideEnvVars: "Ukryj zmienne środowiskowe",
	showEnvVars: "+ Zmienne środowiskowe",
	envVarsPlaceholder: "API_KEY=sk-...",

	// ── Server card ─────────────────────────────────────────
	edit: "Edytuj",
	restart: "Restart",
	toolCount: "{{count}} narzędzie",
	toolCountPlural: "{{count}} narzędzi",
	tokenEstimate: "~{{tokens}} tokenów",
	loadingTools: "Ładowanie narzędzi\u2026",
	noTools: "Ten serwer nie udostępnia narzędzi.",

	// ── Configured servers section ──────────────────────────
	configuredTitle: "Skonfigurowane serwery MCP",
	noServersConfigured:
		"Nie skonfigurowano narzędzi MCP. Dodaj jedno z popularnej listy powyżej lub wprowadź niestandardowe polecenie.",
	loadingServers: "Ładowanie serwerów MCP\u2026",

	// ── Toast messages ──────────────────────────────────────
	addedServer: 'Dodano narzędzie MCP "{{name}}"',
	failedToAdd: 'Nie udało się dodać "{{name}}": {{error}}',
	failedGeneric: "Nie powiodło się: {{error}}",
	restarted: 'Zrestartowano "{{name}}"',
	updated: 'Zaktualizowano "{{name}}"',
	failedToUpdate: "Nie udało się zaktualizować: {{error}}",
	removed: 'Usunięto "{{name}}"',
	removeConfirm: 'Spowoduje to zatrzymanie i usunięcie narzędzia MCP "{{name}}". Tej akcji nie można cofnąć.',
};
