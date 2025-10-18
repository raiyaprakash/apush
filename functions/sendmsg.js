export default {
  async fetch(request, env) {
    if (request.method === "POST") {
      try {
        const data = await request.json();
        const message = data.message || "No message provided";

        const TELEGRAM_BOT = '6170013080:AAGFwN-44dz21EMnR6jaXQnrBKnvclkXGes';
        const TELEGRAM_CHAT_ID = '-1001774121896';

        const telegramURL = `https://api.telegram.org/bot${TELEGRAM_BOT}/sendMessage`;

        const payload = {
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "Markdown",
          disable_web_page_preview: true, // ✅ disables link preview
        };

        const telegramResponse = await fetch(telegramURL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const result = await telegramResponse.json();

        // Return the exact Telegram response
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

    return new Response("Only POST requests are allowed", { status: 405 });
  },
};
