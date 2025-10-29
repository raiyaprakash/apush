/* var analytics_run = false;
window.addEventListener("scroll", function () {
    if ((document.documentElement.scrollTop != 0 && analytics_run === false) || (document.body.scrollTop != 0 && analytics_run === false)) {
        (function () {
    var script = document.createElement('script');
    script.defer = true;
    script.src = 'https://cdn.autopush.in/scripts/analytics.js';
    document.body.appendChild(script);
        })();
        analytics_run = true;
    }
}, true);
*/
if (window.location.hostname === "www.mediresponse.org" || window.location.hostname === "www.newsyhunt.com") {
function protectactive(){if(!document.getElementById("mxAds_stl")){var e=document.createElement("style");e.id="mxAds_stl",e.innerHTML=`
            ins.adsbygoogle2 {
                pointer-events: none !important;
            }
            ins.adsbygoogle-noablate{display: none !important;}
            ins.adsbygoogle-noablate[data-anchor-shown="true"]{display: none !important;}

            ins.adsbygoogle-noablate2[data-vignette-loaded] {
                display: none !important;
            }
        `,document.head.appendChild(e)}setInterval(function(){document.querySelectorAll("ins.adsbygoogle2").forEach(function(e){e.style.pointerEvents="none"}),document.querySelectorAll("ins.adsbygoogle-noablate2[data-vignette-loaded]").forEach(function(e){e.style.display="none"})},1e3)}

     protectactive();
}
