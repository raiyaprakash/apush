if (window.location.hostname === "www.mediresponse.org" || window.location.hostname === "www.newsyhunt.com" || window.location.hostname === "www.indiakasamachar.com" || window.location.hostname === "teacherupdate.com" || window.location.hostname === "gyanbar.net" || window.location.hostname === "taazanaukari.com" || window.location.hostname === "www.updatemarts.in" || window.location.hostname === "www.gurujiportal.com") {
    function protectactive() {
        if (!document.getElementById("mxAds_stl")) {
            var e = document.createElement("style");
            e.id = "mxAds_stl", e.innerHTML = `
ins.adsbygoogle2{pointer-events:none!important}body div.fc-message-root,ins.adsbygoogle-noablate,ins.adsbygoogle-noablate2[data-vignette-loaded],ins.adsbygoogle-noablate[data-anchor-shown=true]{display:none!important}
        `, document.head.appendChild(e)
        }
        setInterval(function () {
            document.body.style.overflow = 'auto';
            document.querySelectorAll("ins.adsbygoogle2").forEach(function (e) {
                e.style.pointerEvents = "none"
            }), document.querySelectorAll("ins.adsbygoogle-noablate2[data-vignette-loaded]").forEach(function (e) {
                e.style.display = "none"
            }), document.querySelectorAll("ins.adsbygoogle-noablate2[data-vignette-loaded]").forEach(function (e) {
                e.style.display = "none"
            }), document.querySelectorAll("div.fc-message-root").forEach(function (e) {
                e.style.display = "none";e.remove();
            })
        }, 1e3)
    }

    protectactive();
}
