import { Bot } from "grammy";
import dotenv from "dotenv";

dotenv.config({ path: "token.env" });

const bot = new Bot(process.env.BOT_TOKEN as string);

console.log("🤖 Бот запускається...");

// Команди для Jacky

bot.command("start", (ctx) => {
  ctx.reply(
    "👋 Привіт! Я Jacky! Перший та тестовий ТГ-Бот.\n\n" +
    "Я вмію відповідати на повідомлення та виконувати команди.\n" +
    "Напиши /help, щоб побачити список команд."
  );
});

bot.command("help", (ctx) => {
  ctx.reply(
    "📋 Доступні команди:\n\n" +
    "/start — привітання\n" +
    "/help — цей список\n" +
    "/about — про бота\n" +
    "Просто напиши будь-яке повідомлення — я відповім!"
  );
});

bot.command("about", (ctx) => {
  ctx.reply(
    "ℹ️ Про мене:\n\n" +
    "Мене звати Jacky, я простенький ТГ-Бот, створений для домашнього завдання та покращення навичок програмування ботів та писання логіки.\n" +
    "Використовується Bun + grammY.\n" +
    "Я був написаний розробником під псевдонімом NathanV_V."
  );
});


// Тут йде опрацювання текстової інформації!

bot.on("message:text", async (ctx) => {
  const text = ctx.message.text.toLowerCase().trim()

  if (["hello", "hi", "привіт", "добрий день"].includes(text)) {
    await ctx.reply("Привіт! Радий тебе бачити 👋");
    return;
  }
  if (["Як справи?", "Як ти?", "Чо как?"].includes(text)) {
    await ctx.reply("Непогано, скоріш за все не так добре як в тебе!👋");
    return;
  }
  if (["Хто ти?", "Що ти вмієш?", "Які твої можливості?"].includes(text)) {
    await ctx.reply("Я Jacky, ТГ-Бот. Я вмію відповідати на подібні питання, видавати список команд які ти можеш задати мені. Нажаль так як це перша та тестова версія, мої можливості і вміння дуже низькі");
    return;  
  }
  if (text.includes("help") && !text.startsWith("/")) {
    await ctx.reply("Хочеш список команд? Напиши /help");
    return;
  }

  //Відповідь на питання та запити які я не продумав так як мені лень -_-
  await ctx.reply(`Я отримав твоє повідомлення: "${ctx.message.text}", але нажаль не можу його зрозуміти через простенький AI.`);
});

// Запускаю Jacky
bot.start();

console.log("✅ Jacky успішно стартонув! Якщо потрібно зупинити його то Натисни Ctrl+C.");
