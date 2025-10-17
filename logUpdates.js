import fs from "fs";
import https from "https";

const BOT_TOKEN = "8054216049:AAFJ4TX722L48-n-wqrprzumCfgpUusyOUM";
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`;
const LOG_FILE = "chatdata.txt";
const OFFSET_FILE = "last_update_id.txt";

// Load last update_id to avoid duplicates
let lastUpdateId = 0;
if (fs.existsSync(OFFSET_FILE)) {
  lastUpdateId = parseInt(fs.readFileSync(OFFSET_FILE, "utf-8")) || 0;
}

const url = `${TELEGRAM_API}?offset=${lastUpdateId + 1}`;

https.get(url, (res) => {
  let data = "";

  res.on("data", (chunk) => (data += chunk));
  res.on("end", () => {
    try {
      const json = JSON.parse(data);
      if (!json.ok || !json.result.length) return;

      const logs = json.result.map((update) => {
        const msg = update.message;
        if (!msg || !msg.text) return null;

        return {
          timestamp: new Date(msg.date * 1000).toISOString(),
          sender_id: msg.from.id,
          sender_name: msg.from.username || msg.from.first_name || "Unknown",
          message_id: msg.message_id,
          text: msg.text,
        };
      }).filter(Boolean);

      if (logs.length) {
        logs.forEach((entry) => {
          fs.appendFileSync(LOG_FILE, JSON.stringify(entry, null, 2) + ",\n");
        });

        const maxId = Math.max(...json.result.map((u) => u.update_id));
        fs.writeFileSync(OFFSET_FILE, String(maxId));
        console.log(`Logged ${logs.length} new message(s) to ${LOG_FILE}`);
      } else {
        console.log("No new messages to log.");
      }
    } catch (err) {
      console.error("Failed to parse Telegram response:", err);
    }
  });
}).on("error", (err) => {
  console.error("Request failed:", err);
});
