export async function onRequestGet({ request }) {
  const incomingUrl = new URL(request.url);

  // Example incoming:
  // https://cdn.autopush.in/wp/studyexamnews.in/wp-includes/css/dist/block-library/style.min.css?ver=6.9

  const pathname = incomingUrl.pathname;

  if (!pathname.startsWith("/wp/")) {
    return new Response("⚠️ Invalid CDN path", { status: 400 });
  }

  // Remove "/wp/" prefix
  const targetPath = pathname.replace("/wp/", "");

  // Build final origin URL
  const targetUrl = `https://${targetPath}${incomingUrl.search}`;

  // Fetch original content
  const response = await fetch(targetUrl, {
    headers: {
      "User-Agent": request.headers.get("User-Agent") || "",
    },
  });

  // Return without cache
  return new Response(response.body, {
    status: response.status,
    headers: {
      ...response.headers,
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}
