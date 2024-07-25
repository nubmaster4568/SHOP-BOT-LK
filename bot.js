

const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const app = express();
const port = process.env.PORT || 3000;

const token = '7405985844:AAH9O_b2L11JrSDn9wLUxxpuaeXafKYsfPk';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
      console.log(chatId)
// Corrected variable name
  bot.sendMessage(chatId, 'SHOP', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'SHOP',
            web_app: { url: `https://lk-1uev.onrender.com/index.html?userId=${chatId}` }
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
