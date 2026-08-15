export const GOOGLE_SHEETS_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbzsDM0x0tXHdhd4Uam2FzcfkFDLhRnHLqwxqBO28kii5VLT691lg9LbbhA5CxNNlSmFYg/exec";

export interface LeadSubmissionPayload {
  name: string;
  phone: string;
  city: string;
  budget: string;
  format: string;
  lang?: "ru" | "uz";
}

/**
 * Sends form submission payload to the Google Sheets Webhook endpoint.
 * Configuration: POST method, application/json Content-Type, no-cors mode.
 */
export async function sendGoogleSheetsWebhook(
  payload: LeadSubmissionPayload
): Promise<void> {
  const body = JSON.stringify({
    name: payload.name,
    phone: payload.phone,
    city: payload.city,
    budget: payload.budget,
    format: payload.format,
  });

  await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
}

/**
 * Sends a Telegram notification with the lead details if bot credentials are configured.
 */
export async function sendTelegramNotification(
  payload: LeadSubmissionPayload
): Promise<void> {
  const botToken =
    import.meta.env.VITE_TELEGRAM_BOT_TOKEN ||
    (typeof process !== "undefined" ? process.env.TELEGRAM_BOT_TOKEN : undefined);
  const chatId =
    import.meta.env.VITE_TELEGRAM_CHAT_ID ||
    (typeof process !== "undefined" ? process.env.TELEGRAM_CHAT_ID : undefined);

  if (!botToken || !chatId) {
    console.info(
      "[LeadSubmission] Telegram notification skipped (no credentials provided). Payload:",
      payload
    );
    return;
  }

  const message =
    `🚀 *Новая заявка на франшизу HOTY DOGY*\n\n` +
    `👤 *Имя:* ${payload.name}\n` +
    `📞 *Телефон:* ${payload.phone}\n` +
    `🏙 *Город:* ${payload.city}\n` +
    `💰 *Бюджет:* ${payload.budget}\n` +
    `🏪 *Формат:* ${payload.format}\n` +
    `🌐 *Язык:* ${payload.lang || "ru"}`;

  try {
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
      }),
    });
  } catch (error) {
    console.error("[LeadSubmission] Failed to send Telegram notification:", error);
  }
}

/**
 * Submits lead data to both Google Sheets Webhook and Telegram notification in parallel.
 */
export async function submitLeadForm(
  payload: LeadSubmissionPayload
): Promise<void> {
  await Promise.allSettled([
    sendGoogleSheetsWebhook(payload),
    sendTelegramNotification(payload),
  ]);
}
