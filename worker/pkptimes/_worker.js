export default {
  async fetch(request) {
    const base = "https://pkptimesset.blogspot.com"; // Blogger website
    const source = new URL(request.url);

    try {
      // Handle trailing * in path
      if (source.pathname.endsWith('*')) {
        source.pathname = source.pathname.slice(0, -1);
        return Response.redirect(source.toString(), 302);
      }

      // Handle push-sw.js from CDN
      if (source.pathname === '/push-sw.js') {
        return fetch('https://cdn.autopush.in/scripts/sw.js');
      }

      // Rewrite hostname to Blogger
      source.hostname = base.replace('https://', '');

      // Force ?m=1
      if (!source.searchParams.has('m')) {
        source.searchParams.set('m', '1');
      }

      // Fetch Blogger content
      let originalResponse = await fetch(source.toString());

      // Clone headers
      let newResponseHeaders = new Headers(originalResponse.headers);

      // Fix location header redirects
      if (newResponseHeaders.get("location")) {
        let location = newResponseHeaders.get("location");
        newResponseHeaders.set(
          "location",
          location
            .replace(source.protocol + "//", "https://")
            .replace(base.replace("https://", ""), "www.pkptimes.com")
        );
      }
      // ✅ Apply cache rules
      if (originalResponse.status === 200) {
      if (source.pathname === "/" || source.pathname === "") {
        // Homepage → 2 days
        newResponseHeaders.set("Cache-Control", "public, s-maxage=31536000, max-age=0");
      } else if (source.pathname.endsWith(".html")) {
        // HTML pages → 7 days
        newResponseHeaders.set("Cache-Control", "public, s-maxage=31536000, max-age=0");
      } else if (source.pathname.includes("/feeds/posts/default") || source.pathname.endsWith(".xml") || source.pathname.endsWith(".txt")) {
        // Feeds and XML/TXT → 700 sec
        newResponseHeaders.set("Cache-Control", "public, s-maxage=120, max-age=0");
      } else if (/\.(js|css|png|jpg|jpeg|gif|svg|webp|ico|woff2?|ttf|eot)$/i.test(source.pathname)) {
        // Static assets → 365 days
        newResponseHeaders.set("Cache-Control", "public, s-maxage=31536000, max-age=31536000, immutable");
      } else {
        // Other requests → 10 minutes
        newResponseHeaders.set("Cache-Control", "public, s-maxage=7200, max-age=0");
      }
      }  else {
        newResponseHeaders.set("Cache-Control", "public, s-maxage=0, max-age=0");
      }
      
      // Clone response for text replacement
      let responseClone = originalResponse.clone();
      let content = await responseClone.text();

      // Global hostname replace
      let modifiedContent = content.replace(
        /pkptimesset\.blogspot\.com/g,
        "www.pkptimes.com"
      );

      // Feed modified HTML into HTMLRewriter
      let rewrittenResponse = new Response(modifiedContent, {
        status: originalResponse.status,
        statusText: originalResponse.statusText,
        headers: newResponseHeaders,
      });

      const contentType = newResponseHeaders.get("content-type") || "";

      if (contentType.includes("text/html")) {
        return new HTMLRewriter()
          .on("#unused", new RemoveElement())
          // .on(".post-body.entry-content img", new LazyImageHandler())
          .on("body", new AppendScript()) // ✅ inject script at end of body
          .transform(rewrittenResponse);
      }

      // Non-HTML → just proxy
      return rewrittenResponse;

    } catch (err) {
      return new Response(
        `Proxy Error: ${err.message || "Unknown error"}`,
        { status: 500 }
      );
    }
  },
};
class AppendScript {
  element(el) {
    el.append('<script>runAfterPageLoad(pushjsonload);</script>', { html: true });
  }
}
class RemoveElement {
  element(el) {
    el.remove();
  }
}

class LazyImageHandler {
  element(el) {
    const originalSrc = el.getAttribute("src");
    if (!originalSrc) return;

    el.setAttribute("data-src", originalSrc);
    el.setAttribute(
      "src",
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgwIiBoZWlnaHQ9IjcyMCIgdmlld0JveD0iMCAwIDEyODAgNzIwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBzdHlsZT0iZmlsbDojZjdmN2Y3OyIvPjwvc3ZnPg=='
    );

    if (!el.hasAttribute("width")) el.setAttribute("width", "1280");
    if (!el.hasAttribute("height")) el.setAttribute("height", "720");
  }
}
