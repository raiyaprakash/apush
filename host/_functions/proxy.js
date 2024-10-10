export async function onRequest(context) {
    // Extract the request object from context
    const { request } = context; 

    // Modify the request URL to point to www.fastrojgar.com
    const url = new URL(request.url);

    // Ensure the proxy only happens for /host/ paths
    if (url.pathname.startsWith('/host/')) {
        // Change the hostname to fetch content from www.fastrojgar.com
        url.hostname = "www.fastrojgar.com";

        // Remove /host/ from the path to forward the correct path to fastrojgar.com
        url.pathname = url.pathname.replace('/host/', '/');

        // Fetch the content from the modified URL
        let originalResponse = await fetch(url.toString());

        // Clone the original response to modify its body
        let content = await originalResponse.text();

        // Replace instances of www.fastrojgar.com with cdn.autopush.in/host in the HTML
        let modifiedContent = content.replace(/www\.fastrojgar\.com/g, 'cdn.autopush.in/host');

        // Return the modified content as the new response
        return new Response(modifiedContent, {
            status: originalResponse.status,
            headers: {
                ...Object.fromEntries(originalResponse.headers),
                'content-type': 'text/html; charset=UTF-8' // Ensure correct
