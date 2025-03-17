export const onRequest = async ({ request }) => {
  // Extract the requested URL and Referer header
  const url = new URL(request.url);

  // Get the 'js' parameter value
  const jsParam = url.searchParams.get("js");
    if (!jsParam) {
    return new Response("Error 404", { status: 400 });
  }
  const referer = request.headers.get("Referer") || "";

  // List of allowed domains
  const allowedDomains = ["web.whatsapp.com", "fastrojgar.in"];

  // Check if the request is from an allowed domain
  const isFromAllowedDomain = allowedDomains.some(domain => referer.includes(domain));

  // Determine which script to return
  if (isFromAllowedDomain) {
    return fetch("https://cdn.autopush.in/wa/"+jsParam);
  }
  else {
    return fetch("https://cdn.autopush.in/wa/error.js");
  }
};
