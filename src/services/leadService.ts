export interface LeadData {
  name: string;
  phone: string;
  city: string;
  budget: string;
  format?: string;
  lang?: "ru" | "uz";
}

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

  const timestamp = new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Tashkent' });

  const telegramMessage = `
🌭 <b>НОВАЯ ЗАЯВКА НА ФРАНШИЗУ HOTY DOGY!</b>
━━━━━━━━━━━━━━━━━━
👤 <b>Имя:</b> ${payload.name || 'Не указано'}
📞 <b>Телефон:</b> ${payload.phone || 'Не указан'}
📍 <b>Город / Локация:</b> ${payload.city || 'Не указан'}
💰 <b>Планируемый бюджет:</b> ${payload.budget || 'Не указан'}
🏢 <b>Формат точки:</b> ${payload.format || 'Не выбран'}
⏰ <b>Время (Ташкент):</b> ${timestamp}
━━━━━━━━━━━━━━━━━━
<i>Заявка с официального лендинга</i>
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
  const sheetsPromise = sheetsUrl
    ? fetch(sheetsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...payload,
          date: timestamp,
        }),
        mode: 'no-cors',
      })
    : Promise.resolve();

  // Execute all dispatches concurrently
  const results = await Promise.allSettled([...telegramPromises, sheetsPromise]);

  // Return true if at least one delivery channel succeeded
  return results.some((res) => res.status === 'fulfilled');
}
