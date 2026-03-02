// ── Skills page Polish strings ──────────────────────────────

export default {
	// ── Page header ─────────────────────────────────────────
	title: "Umiejętności",
	refresh: "Odśwież",
	emergencyDisable: "Wyłączenie awaryjne",
	description: "Umiejętności oparte na SKILL.md odkryte ze ścieżek projektu, osobistych i zainstalowanych.",
	howToWriteSkill: "Jak napisać umiejętność?",

	// ── Emergency disable ───────────────────────────────────
	emergencyDisableConfirm: "Wyłączyć wszystkie umiejętności zewnętrzne teraz?",
	disableAll: "Wyłącz wszystkie",
	emergencyDisableFailed: "Wyłączenie awaryjne nie powiodło się: {{error}}",
	disabledCount: "Wyłączono {{count}} umiejętności",

	// ── Connection ──────────────────────────────────────────
	notConnected: "Nie połączono z bramą.",

	// ── Install ─────────────────────────────────────────────
	installPlaceholder: "właściciel/repo lub pełny URL (np. anthropics/skills)",
	install: "Zainstaluj",
	installing: "Instalowanie\u2026",
	installingSource: "Instalowanie {{source}}...",
	installMayTakeWhile: "To może chwilę potrwać (pobieranie + skanowanie).",
	installedSuccess: "Zainstalowano {{source}} ({{count}} umiejętności)",
	failedGeneric: "Nie powiodło się: {{error}}",

	// ── Loading ─────────────────────────────────────────────
	loadingSkills: "Ładowanie umiejętności\u2026",

	// ── Featured section ────────────────────────────────────
	featuredTitle: "Polecane repozytoria",

	// ── Repos section ───────────────────────────────────────
	reposTitle: "Zainstalowane repozytoria",
	noRepos: "Brak zainstalowanych repozytoriów.",
	enabledCount: "{{enabled}}/{{total}} włączonych",
	sha: "sha {{sha}}",
	sourceChanged: "źródło zmienione",
	orphanedOnDisk: "osierocone na dysku",
	remove: "Usuń",
	removing: "Usuwanie...",
	searchSkillsIn: "Szukaj umiejętności w {{source}}\u2026",
	orphanedRepoHint: "Osierocone repozytorium: zainstaluj ponownie, aby przywrócić metadane",
	noMatchingSkills: "Brak pasujących umiejętności.",

	// ── Enabled skills table ────────────────────────────────
	enabledTitle: "Włączone umiejętności",
	colName: "Nazwa",
	colDescription: "Opis",
	colSource: "Źródło",
	deletedSkill: "Usunięto {{name}}",
	disabledSkill: "Wyłączono {{name}}",
	cannotDisableUnknownSource: "Nie można wyłączyć: nieznane źródło umiejętności.",
	deleteSkillConfirm: 'Usunąć umiejętność "{{name}}"? Spowoduje to usunięcie pliku SKILL.md.',
	disabling: "Wyłączanie...",
	deleting: "Usuwanie...",

	// ── Skill detail panel ──────────────────────────────────
	protected: "Chroniona",
	protectedCannotDelete: "Umiejętność {{name}} jest chroniona i nie można jej usunąć z interfejsu",
	trustAndEnable: "Zaufaj i włącz",
	trustSkillConfirm: 'Zaufać umiejętności "{{name}}" z {{source}}?',
	trustFailed: "Zaufanie nie powiodło się: {{error}}",
	failedToLoad: "Nie udało się załadować: {{error}}",
	skillMdSource: "Źródło SKILL.md",

	// ── Metadata ────────────────────────────────────────────
	author: "Autor: {{name}}",
	commit: "Commit:",
	commitAge: "Wiek commita: {{days}} dni",
	viewSource: "Zobacz źródło",
	allowedTools: "Dozwolone narzędzia: {{tools}}",

	// ── Badges ──────────────────────────────────────────────
	blocked: "zablokowana",
	eligible: "kwalifikuje się",
	noDeps: "brak zadeklarowanych zależności",
	untrusted: "niezaufana",
	enabled: "włączona",

	// ── Missing deps ────────────────────────────────────────
	missing: "Brakujące: {{deps}}",
	installVia: "Zainstaluj przez {{kind}}",
	installDepConfirm:
		"Zainstalować zależność dla {{name}}?\n\n{{preview}}\n\nKontynuuj tylko jeśli ufasz tej umiejętności i jej źródłu.",
	installedDep: "Zainstalowano zależność dla {{name}}",
	installFailed: "Instalacja nie powiodła się: {{error}}",

	// ── Commit warning ──────────────────────────────────────
	recentCommitWarning: "Ostrzeżenie o ostatnim commicie:",
	recentCommitMessage:
		"Ta umiejętność została zaktualizowana {{days}} dni temu. Traktuj niedawne aktualizacje jako wysoce ryzykowne i sprawdź różnice przed zaufaniem/włączeniem.",

	// ── Drift warning ───────────────────────────────────────
	driftWarning: "Źródło zmieniło się od ostatniego zaufania; sprawdź aktualizacje przed ponownym włączeniem.",

	// ── Security warning ────────────────────────────────────
	securityTitle: "\u26a0\ufe0f Umiejętności uruchamiają kod na Twoim komputerze \u2014 traktuj każdą jako niezaufaną",
	securityIntro:
		"Umiejętności to instrukcje tworzone przez społeczność, które agent AI wykonuje <strong>z pełnymi uprawnieniami systemowymi</strong>. Popularność lub liczba pobrań nie oznacza, że umiejętność jest bezpieczna. Złośliwa umiejętność może nakazać agentowi:",
	threat1:
		"Wykonywanie dowolnych poleceń powłoki na Twoim komputerze (instalowanie malware, kryptominerów, backdoorów)",
	threat2:
		"Odczytywanie i wykradanie wrażliwych danych \u2014 kluczy SSH, tokenów API, ciasteczek przeglądarki, danych uwierzytelniających, zmiennych środowiskowych",
	threat3: "Modyfikowanie lub usuwanie plików w całym systemie plików, w tym innych projektów",
	threat4: "Wysyłanie Twoich danych na zdalne serwery przez curl/wget bez Twojej wiedzy",
	securityReview:
		"Dokładnie sprawdź kod źródłowy każdej umiejętności przed jej włączeniem. Przeczytaj pełny SKILL.md i wszystkie skrypty, do których się odwołuje \u2014 to są dokładne instrukcje, które agent wykona w Twoim imieniu. Nie ufaj umiejętności tylko dlatego, że jest popularna, ma dużo pobrań lub pojawia się na liście rankingowej.",
	securitySandbox:
		"Z włączonym trybem piaskownicy (Docker, Apple Container lub cgroup), wykonywanie poleceń jest izolowane, a szkody, jakie może wyrządzić złośliwa umiejętność, są znacznie ograniczone.",
	dismiss: "Odrzuć",
	disableAllThirdParty: "Wyłącz wszystkie umiejętności zewnętrzne",

	// ── Featured skill descriptions ─────────────────────────
	featuredOpenClaw: "Umiejętności społeczności z ClawdHub",
	featuredAnthropic: "Oficjalne umiejętności agenta Anthropic",
	featuredVercelAgent: "Kolekcja umiejętności agenta Vercel",
	featuredVercelSkills: "Zestaw umiejętności Vercel",
};
