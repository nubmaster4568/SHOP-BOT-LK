

const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const app = express();
const port = process.env.PORT || 3000;

const token = '7407786779:AAFFXMUn6bSxP8ngAiU6CyeSmkaEAQ6h9S8k';
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
app.get('/', (req, res) => {
    res.send('Telegram Bot is running');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
