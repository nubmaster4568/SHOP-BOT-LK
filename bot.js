
const TelegramBot = require('node-telegram-bot-api');
const token = '7487928760:AAFNzDJaONyEZT9aAVp2uTK-JB-a1VAbSBw';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id; // Corrected variable name
  bot.sendMessage(chatId, 'SHOP', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'SHOP',
            web_app: { url: `https://lk-rt5d.onrender.com/index.html?userId=${chatId}` }
          }
        ]
      ]
    }
  });
});