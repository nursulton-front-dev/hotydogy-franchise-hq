export interface LeadData {
  name: string;
  phone: string;
  city: string;
  budget: string;
  format?: string;
  language?: string;
  lang?: "ru" | "uz";
}

export type LeadPayload = LeadData;

export async function handleLeadSubmission(payload: LeadData): Promise<boolean> {
  const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const groupChatId = import.meta.env.VITE_TELEGRAM_GROUP_CHAT_ID;
  const adminIds = (import.meta.env.VITE_TELEGRAM_ADMIN_CHAT_IDS || '')
    .split(',')
    .map((id: string) => id.trim())
    .filter(Boolean);

  const sheetsUrl =
    import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL ||
    "https://script.google.com/macros/s/AKfycbzsDM0x0tXHdhd4Uam2FzcfkFDLhRnHLqwxqBO28kii5VLT691lg9LbbhA5CxNNlSmFYg/exec";

  // Compile list of unique recipient chat IDs (group + direct users)
  const recipients = Array.from(new Set([groupChatId, ...adminIds])).filter(Boolean);

  const now = new Date();
  const timestamp = new Intl.DateTimeFormat('ru-RU', {
    timeZone: 'Asia/Tashkent',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(now);

  const langCode = (payload.language || payload.lang || 'RU').toUpperCase();
  const langDisplay = langCode === 'UZ' ? '🇺🇿 O‘zbekcha (UZ)' : '🇷🇺 Русский (RU)';

  const telegramMessage = `
🌭 <b>НОВАЯ ЗАЯВКА НА ФРАНШИЗУ HOTY DOGY!</b>
━━━━━━━━━━━━━━━━━━
👤 <b>Имя:</b> ${payload.name || 'Не указано'}
📞 <b>Телефон:</b> ${payload.phone || 'Не указан'}
🌐 <b>Язык сайта:</b> ${langDisplay}
📍 <b>Город:</b> ${payload.city || 'Не указан'}
💰 <b>Бюджет:</b> ${payload.budget || 'Не указан'}
🏢 <b>Формат:</b> ${payload.format || 'Не выбран'}
⏰ <b>Время:</b> ${timestamp}
━━━━━━━━━━━━━━━━━━
<i>Заявка с официального сайта</i>
`.trim();

  // 1. Telegram Dispatch Promises
  const telegramPromises = (token && recipients.length > 0)
    ? recipients.map((chatId) =>
        fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: telegramMessage,
            parse_mode: 'HTML',
          }),
        })
      )
    : [];

  // 2. Google Sheets Webhook Promise
  const sheetsPayload = {
    date: timestamp,
    name: payload.name || '',
    phone: payload.phone || '',
    city: payload.city || '',
    budget: payload.budget || '',
    format: payload.format || 'Не указан',
    language: langCode,
  };

  const sheetsPromise = sheetsUrl
    ? fetch(sheetsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sheetsPayload),
        mode: 'no-cors',
      })
    : Promise.resolve();

  // Execute all dispatches concurrently
  const results = await Promise.allSettled([...telegramPromises, sheetsPromise]);

  // Return true if at least one delivery channel succeeded
  return results.some((res) => res.status === 'fulfilled');
}
