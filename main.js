
var analytics_run = false;
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
