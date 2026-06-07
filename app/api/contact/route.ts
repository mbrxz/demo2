import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, contact, service, comment } = body as {
      name: string;
      contact: string;
      service: string;
      comment: string;
    };

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      // Telegram not configured — still return success so form works without env vars
      return Response.json({ ok: true });
    }

    const date = new Date().toLocaleString("ru-RU", {
      timeZone: "Europe/Moscow",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const text = [
      "🌸 *Новая заявка — ÉCLAT Beauty*",
      "",
      `👤 *Имя:* ${name}`,
      `📱 *Контакт:* ${contact}`,
      `💆 *Услуга:* ${service || "Не указана"}`,
      `💬 *Комментарий:* ${comment || "Нет"}`,
      `📅 *Дата и время:* ${date}`,
    ].join("\n");

    const res = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    const data = (await res.json()) as { ok: boolean };
    return Response.json({ ok: data.ok });
  } catch {
    return Response.json({ ok: false }, { status: 500 });
  }
}
