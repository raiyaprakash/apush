export async function onRequestPost(context) {
  try {
    const data = await context.request.json();
    const message = data.message || "No message provided";

    // 🔒 Hide secrets in environment variables (recommended)
    const TELEGRAM_BOT = context.env.TELEGRAM_BOT || '6170013080:AAGFwN-44dz21EMnR6jaXQnrBKnvclkXGes';
    const TELEGRAM_CHAT_ID = context.env.TELEGRAM_CHAT_ID || '-1001774121896';

    const telegramURL = `https://api.telegram.org/bot${TELEGRAM_BOT}/sendMessage`;

    const payload = {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: "Markdown",
      disable_web_page_preview: true, // ✅ disable link preview
    };

    const telegramResponse = await fetch(telegramURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await telegramResponse.json();

    return new Response(JSON.stringify(result), {
      status: telegramResponse.status,
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    return new Response(
      JSON.stringify({ ok: false, error: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// Optional: handle GET or other methods
export async function onRequest(context) {
  return new Response("Only POST requests are allowed", { status: 405 });
}
