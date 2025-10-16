import fs from "fs";
import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";

dotenv.config();

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const ADMIN_ID = parseInt(process.env.ADMIN_TELEGRAM_ID || "0");

if (!BOT_TOKEN || !ADMIN_ID) {
  console.error("Missing BOT_TOKEN or ADMIN_ID in .env");
  process.exit(1);
}

const bot = new TelegramBot(BOT_TOKEN, { polling: true });

// Store user chat IDs for replies
const userChats = new Map();

bot.on("message", (msg) => {
  const senderId = msg.from.id;
  const senderUsername = msg.from.username || senderId;
  const chatId = msg.chat.id;
  const messageText = msg.text;

  // Save chat ID for reply mapping
  userChats.set(senderId, chatId);

  // Log message to hidden file
  const logEntry = `[${new Date().toISOString()}]\nFrom ${senderUsername} (${senderId}):\n${messageText}\n---\n`;
  fs.appendFileSync("chatdata.txt", logEntry);

  // Forward to admin
  if (senderId !== ADMIN_ID) {
    bot.sendMessage(ADMIN_ID, `📩 Message from @${senderUsername}:\n${messageText}`);
  }
});

// Admin reply command: /reply <user_id> <message>
bot.onText(/\/reply (\d+) (.+)/, (msg, match) => {
  if (msg.from.id !== ADMIN_ID) return;

  const targetId = parseInt(match[1]);
  const replyText = match[2];
  const targetChatId = userChats.get(targetId);

  if (targetChatId) {
    bot.sendMessage(targetChatId, `🛡 Admin Reply:\n${replyText}`);
    bot.sendMessage(ADMIN_ID, `✅ Reply sent to ${targetId}`);
  } else {
    bot.sendMessage(ADMIN_ID, `❌ No active chat found for user ${targetId}`);
  }
});
