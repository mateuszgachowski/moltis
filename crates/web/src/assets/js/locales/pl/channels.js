// ── Channels page Polish strings ────────────────────────────

export default {
	// ── Page & tabs ─────────────────────────────────────────
	title: "Kanały",
	tabs: {
		channels: "Kanały",
		senders: "Nadawcy",
	},
	addTelegramBot: "+ Dodaj bota Telegram",

	// ── Channel card ────────────────────────────────────────
	card: {
		defaultName: "Telegram",
		unknownStatus: "nieznany",
		editTitle: "Edytuj {{name}}",
		removeTitle: "Usuń {{name}}",
		noActiveSession: "Brak aktywnej sesji",
		sessionInfo: "{{label}} ({{count}} wiad.)",
		removeConfirm: "Usunąć {{name}}?",
		fallbackName: "kanał",
	},

	// ── Empty states ────────────────────────────────────────
	empty: {
		noBotsConnected: "Brak połączonych botów Telegram.",
		addBotHint: 'Kliknij "+ Dodaj bota Telegram", aby połączyć go za pomocą tokenu od @BotFather.',
		noChannelsConfigured: "Nie skonfigurowano kanałów.",
	},

	// ── Senders tab ─────────────────────────────────────────
	senders: {
		accountLabel: "Konto:",
		noMessagesYet: "Nie otrzymano jeszcze wiadomości dla tego konta.",
		colSender: "Nadawca",
		colUsername: "Nazwa użytkownika",
		colMessages: "Wiadomości",
		colLastSeen: "Ostatnio widziany",
		colStatus: "Status",
		colAction: "Akcja",
		otpCopied: "Kod OTP skopiowany",
		otpPrefix: "OTP: ",
		allowed: "Dozwolony",
		denied: "Odmówiony",
		approve: "Zatwierdź",
		deny: "Odmów",
	},

	// ── Allowlist input ─────────────────────────────────────
	allowlistPlaceholder: "Wpisz nazwę użytkownika i naciśnij Enter",

	// ── Add channel modal ───────────────────────────────────
	add: {
		modalTitle: "Dodaj bota Telegram",
		helpHeading: "Jak utworzyć bota Telegram",
		helpStep1: "1. Otwórz {{link}} w Telegramie",
		helpStep2: "2. Wyślij /newbot i postępuj zgodnie z instrukcjami, aby wybrać nazwę i nazwę użytkownika",
		helpStep3: "3. Skopiuj token bota (wygląda jak 123456:ABC-DEF...) i wklej go poniżej",
		helpSeeMore: "Zobacz {{link}} po więcej szczegółów.",
		botFather: "@BotFather",
		telegramBotTutorial: "Poradnik bota Telegram",
		botUsernameLabel: "Nazwa użytkownika bota",
		botUsernamePlaceholder: "np. moj_asystent_bot",
		botTokenLabel: "Token bota (od @BotFather)",
		botTokenPlaceholder: "123456:ABC-DEF...",
		connectingBtn: "Łączenie\u2026",
		connectBtn: "Połącz bota",
		failedToConnect: "Nie udało się połączyć bota.",
	},

	// ── Edit channel modal ──────────────────────────────────
	edit: {
		modalTitle: "Edytuj bota Telegram",
		saveChangesBtn: "Zapisz zmiany",
		failedToUpdate: "Nie udało się zaktualizować bota.",
	},

	// ── Shared form labels ──────────────────────────────────
	form: {
		dmPolicyLabel: "Polityka wiadomości prywatnych",
		dmPolicyOpen: "Otwarta (każdy)",
		dmPolicyAllowlist: "Tylko lista dozwolonych",
		dmPolicyDisabled: "Wyłączona",
		mentionModeLabel: "Tryb wzmianek w grupach",
		mentionModeMention: "Musi @wspomnieć bota",
		mentionModeAlways: "Zawsze odpowiadaj",
		mentionModeNone: "Nie odpowiadaj w grupach",
		defaultModelLabel: "Domyślny model",
		modelDefault: "(domyślny: {{model}})",
		modelServerDefault: "(domyślny serwera)",
		dmAllowlistLabel: "Lista dozwolonych DM",
	},
};
