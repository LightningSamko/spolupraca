// data/config.js
// =====================================
// Konfigurácia pre webhook a nastavenia
// =====================================

// ⚠️ Vlož sem svoj Discord webhook URL
const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/xxxxxxxxxxxxxxxxxxxxx";

if (typeof window !== "undefined") {
  window.DISCORD_WEBHOOK = DISCORD_WEBHOOK;
}
