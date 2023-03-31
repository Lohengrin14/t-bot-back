import TelegramApi from 'node-telegram-bot-api';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import vacancyRouter from './router/vacancyRouter.js';
import errorMiddleware from './middlewares/error-middleware.js';
import resumeRouter from './router/resumeRouter.js';

dotenv.config();
const PORT = process.env.PORT || 7000;
const TOKEN = process.env.TELEGRAM_TOKEN;
const WEB_APP_URL = process.env.WEB_APP_URL;

const bot = new TelegramApi(TOKEN, { polling: true });
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/vacancy', vacancyRouter);
app.use('/api/resume', resumeRouter);
// app.use('/api/users', userRouter);
// app.use('/api/question', questionRouter);
// app.use('/api/answer', answerRouter);
// app.use('/api/current', currentRouter);
// app.use('/api/completed', completedRouter);
// app.use('/api/result', resultRouter);
app.use(errorMiddleware);
bot.on('message', (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  // console.log(msg);
  // bot.sendMessage(chatId, `Ты написал ${text}`, {
  //   reply_markup: {
  //     keyboard: [[{ text: 'Вакансии!' }]]
  //   }
  // });
  bot.sendMessage(chatId, `Добрый день! Выберите роль:`, {
    reply_markup: {
      inline_keyboard: [
        [
          // {
          //   text: 'Работник',
          //   // web_app: { url: WEB_APP_URL }
          //   login_url: { url: WEB_APP_URL }
          // },
          { text: 'Работодатель', web_app: { url: `${WEB_APP_URL}?q=123` } }
        ]
      ]
    }
  });
});

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {});
    app.listen(PORT, () => console.log(`Server started on PORT =${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
