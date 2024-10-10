export async function onRequest(context) {
    // Fetch the original Blogger content
    const { request } = context; 
    const url = new URL(request.url);
    url.hostname = "www.fastrojgar.com"; // Proxy the Blogger website

    // Fetch the response from the Blogger site
    let originalResponse = await fetch(url.toString());

    // Clone the original response to modify its body
    let content = await originalResponse.text(); // Get the response body as text

    // Replace all occurrences of www.fastrojgar.com with cdn.autopush.in/host
    let modifiedContent = content.replace(/www\.fastrojgar\.com/g, 'cdn.autopush.in/host');

    // Return the modified content as a new response
    return new Response(modifiedContent, {
        status: originalResponse.status,
        headers: {
            ...Object.fromEntries(originalResponse.headers), // Copy original headers
            'content-type': 'text/html; charset=UTF-8' // Ensure correct content type
        }
    });
}
