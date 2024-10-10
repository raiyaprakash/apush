export async function onRequest(context) {
    // Fetch the original Blogger content
    const { request } = context; 
    const url = new URL(request.url);
    url.hostname = "www.fastrojgar.com"; // Proxy the Blogger website

    // Fetch the response from the Blogger site
    let originalResponse = await fetch(url.toString());

    // Clone the original response to modify its body but keep the headers intact
    let content = await originalResponse.text(); // Get the response body as text

    // Replace all occurrences of fastrojgar.com with ipl.fast-rojgar.workers.dev
    let modifiedContent = content.replace(/www\.fastrojgar\.com/g, 'ipl.fast-rojgar.workers.dev');

    // Return the modified content as a new response
    return new Response(modifiedContent, {
        status: originalResponse.status,
        headers: {
            ...Object.fromEntries(originalResponse.headers), // Copy over original headers
            'content-type': 'text/html; charset=UTF-8' // Ensure correct content type
        }
    });
}
