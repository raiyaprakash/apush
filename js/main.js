const bpkc={get:e=>(e=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([.$?*|{}()[\]\\/+^])/g,"$1")+"=([^;]*)")))?decodeURIComponent(e[1]):void 0,set:(e,o,n={})=>{(n={path:"/",...n}).expires instanceof Date&&(n.expires=n.expires.toUTCString());let t=unescape(encodeURIComponent(e))+"="+unescape(encodeURIComponent(o));for(var c in n){t+="; "+c;var p=n[c];!0!==p&&(t+="="+p)}document.cookie=t}};

function timer(timeset) {
    let count = timeset;
    const timeElem = document.getElementById("tp-time");
    let interval = 2000;
    let counter;

    // Start countdown
    function startCountdown() {
        counter = setInterval(() => {
            if (timeElem) {
                count--;
                if (count <= 0) {
                    document.querySelector('.pkheader').innerHTML =
                        "<button class='tp-btn-2 tp-blue' onclick='scrollToTarget()'>Next</button>";
                    clearInterval(counter);
                    document.removeEventListener("visibilitychange", handleVisibility);
                    return;
                }
                timeElem.innerHTML = count;
            }
        }, interval);
    }

    // Stop countdown
    function stopCountdown() {
        clearInterval(counter);
    }

    // Handle tab visibility
    function handleVisibility() {
        if (document.visibilityState === "hidden") {
            stopCountdown();
        } else if (document.visibilityState === "visible") {
            startCountdown();
        }
    }

    // Start the countdown and attach visibility handler
    startCountdown();
    document.addEventListener("visibilitychange", handleVisibility);
}

  function scrollToTarget() {
    var cookie_link_id = bpkc.get("user_id");
    var cookie_step_id = Number(bpkc.get("upage_is"));
    var StepsToGo = Number(bpkc.get("page_is"));
    document.querySelector('.pkfooter').scrollIntoView({ behavior: "smooth" });
    document.querySelector('.pkheader').innerHTML = "<button class='tp-btn-2 tp-blue'>Scroll Down</button>";
        if (cookie_step_id + 1 >= StepsToGo) {
            var next_target = cookie_link_id;
        if (!cookie_link_id.includes("s.sharelink")) {
            var next_target = `https://r.sharelinks.in/link/?url=${encodeURIComponent(cookie_link_id)}`;
        }
        document.querySelector('.pkfooter').innerHTML = '<a class="tp-btn-2 tp-blue" style="text-decoration: none;" href="'+next_target+'" onclick="savecookie()" rel="nofollow noopener external" target="_blank">Open</a>';
    } else {
        document.querySelector('.pkfooter').innerHTML = '<a class="tp-btn-2 tp-blue" style="text-decoration: none;" href="'+getRandomUrl()+'" onclick="savecookie()">Open</a>';
    }
  }

function getRandomUrl() {
  const urls = [
    '/union-bank-personal-loan/',
    '/bandhan-bank-personal-loan/',
    '/idbi-bank-personal-loan/',
    '/bank-of-baroda-personal-loan/',
  ];
  const randomIndex = Math.floor(Math.random() * urls.length);
  return urls[randomIndex];
}

if (null != bpkc.get("user_id")) {
    var cookie_link_id = bpkc.get("user_id");
    var cookie_step_id = Number(bpkc.get("upage_is"));
    var StepsToGo = Number(bpkc.get("page_is"));
    var next_status = cookie_step_id + 1;
    var currentStep = `${next_status}/${StepsToGo}`;
    
    const pkheader = document.querySelector('.pkheader');
    if (pkheader) {
        document.querySelector('.pkhinsert').innerHTML = `<div style="font-size: 12px;margin: 0;line-height: normal;"><strong>You are <span style="color:red;">${currentStep}</span>.</strong></div>`;
        pkheader.innerHTML += '<button id="nextbtn" class="tp-btn-2 tp-blue" onclick="runtimer()">Open</button>';
    }

document.querySelector('.footerinsert').innerHTML = '<ins class="adsbygoogle" data-ad-client="ca-pub-7512648770861868" data-ad-format="auto" data-ad-slot="2202878236" data-full-width-responsive="true" style="display:block"></ins>';
(adsbygoogle = window.adsbygoogle || []).push({});


    function runtimer() {
    document.querySelector('.pkheader').innerHTML = '<button class="tp-btn-2 tp-blue">Wait... <span id="tp-time">10</span></button>';
    timer(10);
}

    function savecookie() {
        var cookie_step_id = Number(bpkc.get("upage_is"));
        var next_status = cookie_step_id + 1;
        bpkc.set("upage_is", next_status, {
            secure: 1,
            "max-age": 600
        });

        if (cookie_step_id + 1 >= StepsToGo) {
            bpkc.set("upage_is", 1, {
                secure: 1,
                "max-age": 0
            });
            bpkc.set("page_is", 1, {
                secure: 1,
                "max-age": 0
            });
            bpkc.set("user_id", 1, {
                secure: 1,
                "max-age": 0
            });

        }

    }
}
