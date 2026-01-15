export async function onRequestGet({ params, request }) {
  const path = params.path?.join("/") || "";

  // ❌ If path is missing
  if (!path) {
    return new Response("❌ File path missing", { status: 400 });
  }

  // 🌐 Origin base URL (your VPS / origin server)
  const ORIGIN = "https://cdn.autopush.in/wp";

  // 🔗 Preserve query string (?ver=6.9 etc.)
  const url = new URL(request.url);
  const originURL = `${ORIGIN}/${path}${url.search}`;

  try {
    // 📡 Fetch from origin
    const response = await fetch(originURL, {
      headers: {
        "User-Agent": "Cloudflare-Worker-CDN",
        "Accept": "*/*",
      },
      cf: {
        cacheEverything: true,
        cacheTtl: 86400 * 7, // 7 days
      },
    });

    // ❌ Origin error handling
    if (!response.ok) {
      return new Response("❌ File not found on origin", { status: 404 });
    }

    // 📦 Clone headers
    const headers = new Headers(response.headers);

    // 🚀 Force CDN caching
    headers.set(
      "Cache-Control",
      "public, max-age=604800, immutable"
    );

    headers.set("X-CDN", "Cloudflare-Worker");
    headers.set("Access-Control-Allow-Origin", "*");

    return new Response(response.body, {
      status: response.status,
      headers,
    });

  } catch (error) {
    return new Response("🔥 CDN Fetch Error", { status: 500 });
  }
}
