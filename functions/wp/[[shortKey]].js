export async function onRequestGet({ params, env }) {
  const shortKey = params.shortKey;

  // Handle missing shortKey
  if (!shortKey) {
    return new Response("⚠️ Short key is missing. Please use a valid link.", { status: 400 });
  }

  return new Response(shortKey, { status: 400 })

 // return shortKey;
}
