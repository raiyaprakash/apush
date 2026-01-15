export async function onRequestGet({ request, env }) {
  
    const url = new URL(request.url);

  // Handle missing shortKey
  if (!url) {
    return new Response("⚠️ Short key is missing. Please use a valid link.", { status: 400 });
  }

  return new Response(url, { status: 400 })

 // return shortKey;
}
