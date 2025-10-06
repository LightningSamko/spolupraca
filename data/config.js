// data/config.js
// =====================================
// Konfigurácia pre webhook a nastavenia
// =====================================

// ⚠️ Vlož sem svoj Discord webhook URL
const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1424694766754336820/tKhv59jNqZfuYbV60xZkH6Gnd837IUPJH6xXFeIUGxGXut-DLOpN_LZpdURBdHL0wyHg";

if (typeof window !== "undefined") {
  window.DISCORD_WEBHOOK = DISCORD_WEBHOOK;
}
