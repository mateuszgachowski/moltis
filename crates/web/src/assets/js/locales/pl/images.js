// ── Images/Sandboxes page Polish strings ────────────────

export default {
	// ── Page-level ──────────────────────────────────────────
	title: "Piaskownice",
	description:
		"Obrazy kontenerów buforowane przez moltis do wykonywania w piaskownicy. Możesz usuwać pojedyncze obrazy lub wyczyścić wszystkie. Buduj niestandardowe obrazy z bazy z pakietami apt.",
	appleContainerNote:
		"Apple Container zapewnia izolowane wykonywanie w VM, ale nie obsługuje budowania obrazów. Docker (lub OrbStack) jest wymagany obok Apple Container do budowania i buforowania niestandardowych obrazów. Polecenia w piaskownicy działają przez Apple Container; budowanie obrazów używa Docker.",
	sandboxDisabledHint:
		"Piaskownice są wyłączone na wdrożeniach chmurowych bez środowiska uruchomieniowego kontenerów. Zainstaluj na VM z Docker lub Apple Container, aby włączyć tę funkcję.",
	noCachedImages: "Brak buforowanych obrazów.",

	// ── Prune ──────────────────────────────────────────────
	pruneAll: "Wyczyść wszystkie",
	pruning: "Czyszczenie\u2026",

	// ── Default image selector ─────────────────────────────
	defaultImage: {
		title: "Domyślny obraz",
		description:
			"Bazowy obraz używany dla nowych sesji i projektów, chyba że zostanie nadpisany. Pozostaw puste, aby użyć wbudowanego domyślnego (ubuntu:25.10).",
	},

	// ── Image row ──────────────────────────────────────────
	deleteImage: "Usuń obraz",

	// ── Build section ──────────────────────────────────────
	build: {
		title: "Zbuduj niestandardowy obraz",
		imageNameLabel: "Nazwa obrazu",
		baseImageLabel: "Bazowy obraz",
		packagesLabel: "Pakiety (oddzielone spacją lub nową linią)",
		buildButton: "Zbuduj",
		building: "Budowanie\u2026",
		buildingImage: "Budowanie obrazu\u2026",
		checkingPackages: "Sprawdzanie pakietów w bazowym obrazie\u2026",
		noPackages: "Podaj co najmniej jeden pakiet.",
		builtTag: "Zbudowano: {{tag}}",
		errorPrefix: "Błąd: {{message}}",
		allPresent: "Wszystkie żądane pakiety są już obecne w {{base}}: {{packages}}. Budowanie obrazu nie jest potrzebne.",
		alreadyInBase: "Już w {{base}}: {{present}}. Instalowanie tylko: {{missing}}.",
	},

	// ── Backend labels ─────────────────────────────────────
	backend: {
		appleContainer: "Apple Container (izolacja VM)",
		docker: "Docker",
		cgroup: "cgroup (systemd-run)",
		restrictedHost: "Ograniczony host (env + rlimits)",
		wasm: "Wasmtime (izolacja WASM)",
		none: "Brak (wykonywanie na hoście)",
		containerBackendLabel: "Backend kontenerów:",
	},

	// ── Recommendations ────────────────────────────────────
	recommendation: {
		noRuntimeMacos:
			"Nie wykryto środowiska uruchomieniowego kontenerów. Zainstaluj Apple Container (macOS 26+) dla izolacji w VM lub zainstaluj Docker jako alternatywę.",
		noRuntimeLinux:
			"Nie wykryto środowiska uruchomieniowego kontenerów. Zainstaluj Docker do wykonywania w piaskownicy lub upewnij się, że systemd jest dostępny dla izolacji cgroup.",
		noRuntimeGeneric:
			"Nie wykryto środowiska uruchomieniowego kontenerów. Zainstaluj Docker do wykonywania w piaskownicy.",
		macosDockerTip:
			"Apple Container zapewnia silniejszą izolację na poziomie VM na macOS 26+. Zainstaluj go do automatycznego użycia (moltis preferuje go nad Docker). Uruchom: brew install container",
		linuxDockerTip:
			"Docker to dobry wybór na Linux. Dla lżejszej izolacji bez obciążenia Docker, obsługiwana jest również izolacja cgroup systemd.",
		restrictedHostTip:
			"Używanie ograniczonego wykonywania na hoście (czyszczenie env, rlimits). Dla silniejszej izolacji zainstaluj Docker lub Apple Container.",
		wasmTip:
			"Używanie piaskownicy WASM z izolacją systemu plików. Dla izolacji na poziomie kontenerów zainstaluj Docker lub Apple Container.",
	},

	// ── Alert labels ───────────────────────────────────────
	alertWarning: "Ostrzeżenie: ",
	alertTip: "Wskazówka: ",
};
