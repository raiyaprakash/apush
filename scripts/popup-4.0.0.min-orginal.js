class LaraPush{bottomButtonIframe=document.createElement("iframe");backdropIframe=document.createElement("iframe");popupIframe=document.createElement("iframe");currentDateTime=Math.floor(new Date().getTime()/1e3);constructor(t,o){this.options=t,this.data=o,this.writeInLog("options",{options:t}),this.writeInLog("data",{data:o}),this.init()}writeInLog(...t){window.larapushLogger&&console.log("LaraPush Log ::",...t)}async waitForXSeconds(t){return new Promise(o=>{setTimeout(()=>{o()},1e3*t)}).catch(()=>{this.writeInLog("Error in waitForXSeconds")})}registerServiceWorker=async()=>{if("serviceWorker"in navigator)try{try{var t;for(t of(await navigator.serviceWorker.getRegistrations())){var o=t.active.scriptURL;(o.includes("OneSignalSDKWorker.js")||o.includes("sw2.php")||o.includes("firebase-messaging-sw.js")||o.includes("sw.enot.js")||o.includes("service-worker-loader.js.php"))&&(await t.unregister()?console.log("Service Worker: Unregistered "+o+" successfully."):console.log("Service Worker: Unregistration of "+o+" failed."))}}catch(a){console.error("Error:",a)}var i=await navigator.serviceWorker.register(location.origin + "/push-sw.js",{scope:location.origin});return i.installing?console.log("Service worker installing"):i.waiting?console.log("Service worker installed"):i.active&&console.log("Service worker active"),i}catch(e){console.error("Registration failed with "+e)}};async initRegistration(){if("granted"==await this.getPermission()&&null!=localStorage.getItem("notification_token"))this.writeInLog("Token is already with larapush");else{await Notification.requestPermission();var t=await this.registerServiceWorker();this.writeInLog("sw",t);let o=!1;for(;!o;)await this.waitForXSeconds(.1),o=t.active;let a="";a=document.querySelector("#larapush-custom-segment")?document.querySelector("#larapush-custom-segment").value:window.location.href,t.active.postMessage({command:"amp-web-push-subscribe",url:a})}}async getPermission(){var t=(await navigator.serviceWorker.getRegistrations()).filter(t=>t.scope==location.origin);let o=await Notification.permission;return"granted"==o?0<t.length?"granted":"granted_default":"default"==o?"default":"denied"}async setNotificationPermissionChangeListener(){"permissions"in navigator&&navigator.permissions.query({name:"notifications"}).then(t=>{t.onchange=()=>{let o=t.state;"prompt"==t.state&&(o="default"),this.notificationPermissionChangeHandler(o)}})}async notificationPermissionChangeHandler(t){this.writeInLog("Notification Permission Changed",t),this.popup("hide"),"enable"==this.data.lockPageContent&&"granted"!=t||this.backdrop("hide"),this.updateBottomButtonContent(t),this.updateBackdropContent(t),"granted"==t&&this.initRegistration(),"granted_default"==t&&navigator.serviceWorker.getRegistrations().then(t=>{for(var o of(this.writeInLog("Unsubscribed"),t))o.unregister(),this.writeInLog("registration state","unregistered"),this.writeInLog("registration unregistered",o)})}isMobile(){return window.innerWidth<=480}isDesktop(){return!this.isMobile()}isCustomPopupIsEnabled(){return!!(this.isMobile()&&"enable"==this.data.mobile||this.isDesktop()&&"enable"==this.data.desktop)}isPageLockEnabled(){return"enable"==this.data.lockPageContent}async requestPermission(){this.popup("hide"),!this.isPageLockEnabled()&&this.isCustomPopupIsEnabled()||this.backdrop("show"),this.isCustomPopupIsEnabled()||await this.waitForXSeconds(1),Notification.requestPermission().then(()=>{"enable"!=this.data.lockPageContent&&this.backdrop("hide")})}async showPopupAndRequestPermission(){let t=async()=>{"default"==await this.getPermission()?this.isCustomPopupIsEnabled()?this.isPageLockEnabled()?this.backdrop("show"):(null==await this.readData("notification_rejected")||this.currentDateTime-parseInt(await this.readData("notification_rejected"))>parseInt(this.data.reappear))&&(await this.waitForXSeconds(this.data.delay),"enable"==this.data.backdrop&&this.backdrop("show"),this.popup("show")):(await this.waitForXSeconds(this.data.delay),this.requestPermission()):"granted"==await this.getPermission()?this.initRegistration():"denied"==await this.getPermission()?"enable"==this.data.lockPageContent?this.backdrop("show"):this.writeInLog("Notifications are blocked"):"granted_default"==await this.getPermission()&&this.writeInLog("Notifications permissions granted denied manually")};"complete"===document.readyState?await t():document.onreadystatechange=async()=>{"complete"===document.readyState&&await t()}}async loadBottomButtonAndPoweredBy(){"enable"==this.data.bottomButton&&await this.bottomButton("show"),console.log("\n%c %c%cPowered by %cLara%cPush%c\nCheck out https://larapush.com\n","font-size: 1px; margin-right: 5px; padding: 20px 0 4px 27px; background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA0CAYAAAAnpACSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ+SURBVHgBzZpvUhNNEMafmX1ZXxAUT2C4Ad4g3sAbGKqU8I1wAsIJiJ8kaJXxBHID8ATqCcwNSIkgWpBxemM227Oz7Ga3N8Wvij8zNQn7pGee6ekBWASvzzexADTqZue8AR1+iH7WTP1iTLhvv2/++1krCnVC0TDh97h9O36O92tnqIl6IzMOD1k7UC9QI/WJef2zZePOH14FPdTIf6gLrfgaMThAf3mIGqlHDEUFaMw61BAry7VGhZCfZpEVO1FR4wP01Chub1++QOd8HcLIi5lYcGPWYaNytDpgYxQOcfVA3KplxUw2xhbru73dYu3pFFSmY38XzQxkxaQ3xgHbV9wpqPUhBJETs/2DbLjF+pQ+YO3UFDRNvLpoQgg5MSrgnzJZ8VHCin1TkAj0BwghI8ZnxVoP2BgTnma8uoHtqw4EqC4my4qTUXHFGoz4eLMvYdUCkQlfIs+KXbEwdi2Zs0THOq7CytGpJibKitFlfeZmj4+5TO87x6s9Gw1uDgr7Vc881cT4rPj40Unc8omlKUgcWcs2OOHv96CSGZQXM9nwWqzPb8VJBmwKar3H1081qy4vRqtPTs8g14pdsTRej9+wviAoneaUE+Oz4nRUXCvmYqdc3/RS0Zm8/9yUEzOvFfvEThk8GSFwzECrwzJWPb8YnzvlWbEr1uWtdTcBq55PDK2DseF/ZOpO8ZgCYn2krXp3Xque76RJ7qSQDP8Je1DvvmPHFHGoG/sVYIjZB7H+zw23UJDipSa3bBS9Wm+w6dO+pH2iBUnmKE8Vn2Zmyd3QBoWy4qrMYdXFxETupJqzjkJWLIS16slZKZdiayZVNjIf0V8Zxm2fFXN3qkhA2cZJ3qj8NdO+2rUPligT2Qftr2zETdoPfoVfkBSjzFYhBxPm7mkWrYMcK74OrdgSVlwDd0+zdNnoDEcPB3GzyBFggWRHxpsoKu75eUeABZMtxpu+s/wr/wiwYPxiJu7UituU1boPmjoCmDd35l8LwO9m7Uva6Ru4vwyx/OcZek9YYSQdmdSecS9p+LJqHplJ/nWK+y+GGNnobCSj41jzUtPO/SEQZa8lSKY8CaI1h4zDVoVM4XfYRCIzkLugpempFU9GaYP93x686G5m51fD5vktGM1dUvDSVu7mTOMlaxuzh/7aLA2aOF0X7QsbIb0b9weaXncGkUcQw8mqqdDn4/dN1ynPNiGEjJhoCiUx3zLHUgFDRetySgNCyIi5vuaFcKjHKM4IQsiIoU+b1742M0tFUc6nEtd/6iuEELxsGn9MtOiMc5oSRG33RGrMZ0g9AqTYsRUYo92j8xC3NmdTY7tOlp5aH+7YzHsmkKKp9TOpnE5ODLFz0U3tI3dB9p3leiWQFUO0L3psH8mC7jyPH3YhiPw/NfTXOlENICpq+LDpi7K7vrAQQj4ySWgdjcm5jF34tLfor3i3KuZeLn8BhqKiBhlzh3UAAAAASUVORK5CYII=') 0 50% / 25px 25px no-repeat;","","color: dodgerblue; font-size: 18px;","color: dodgerblue; font-size: 18px;","color: dodgerblue; font-size: 18px; font-weight: 900;","color: dodgerblue; font-style: italic")}async updateBottomButtonContent(t){if("enable"==this.data.bottomButton){if("default"==t||"granted_default"==t)await this.bottomButton("show"),await this.bottomButtonTopbox("hide"),await this.bottomButtonSidebox("Click to Allow Notifications.");else if("granted"==t&&("enable"==this.data.buttonToUnsubscribe?(await this.bottomButton("show"),await this.bottomButtonTopbox(null,'<a href="https://cdn.autopush.in/uploads/notification_message.png" target="_blank" id="enable_notifications"><img src="https://cdn.autopush.in/uploads/notification_message.png" width="200px" style="margin-bottom: 10px" class="enable_notifications"></a><button class="unsubscribe_button">Unsubscribe</button>'),await this.bottomButtonSidebox("You've allowed the notifications."),this.writeInLog("setting event listener for unsubscribe button"),this.bottomButtonIframe.contentWindow.document.body.querySelector(".unsubscribe_button").addEventListener("click",async()=>{await this.bottomButtonTopbox("hide"),this.notificationPermissionChangeHandler("granted_default")})):await this.bottomButton("hide")),"denied"==t){let o="";o=this.isMobile()?'Click here to learn how to unblock notifications.<a href="https://cdn.autopush.in/uploads/enable_notifications_mobile.gif" target="_blank" id="enable_notifications"><img src="https://cdn.autopush.in/uploads/enable_notifications_mobile.gif" width="200px" style="margin-top: 10px" class="enable_notifications"></a>':'Click here to learn how to unblock notifications.<a href="https://cdn.autopush.in/uploads/enable_notifications.png" target="_blank" id="enable_notifications"><img src="https://cdn.autopush.in/uploads/enable_notifications.png" width="200px" style="margin-top: 10px" class="enable_notifications"></a>',await this.bottomButton("show"),await this.bottomButtonTopbox(null,o),await this.bottomButtonSidebox("You've blocked the notifications.")}}}async updateBackdropContent(t){"enable"==this.data.lockPageContent&&("granted"==t?await this.backdrop("hide"):(await this.backdrop("show"),this.backdropIframe.contentWindow.document.body.querySelector(".lock").classList.remove("hide"),this.backdropIframe.contentWindow.document.body.querySelector(".backdrop").style.backdropFilter="blur(5px)",this.backdropIframe.contentWindow.document.body.querySelector(".backdrop").style.background="rgba(0, 0, 0, 0.7)","default"==t&&(this.backdropIframe.contentWindow.document.body.querySelector(".default").classList.remove("hide"),this.backdropIframe.contentWindow.document.body.querySelector(".blocked").classList.add("hide")),"denied"==t&&(this.backdropIframe.contentWindow.document.body.querySelector(".default").classList.add("hide"),this.backdropIframe.contentWindow.document.body.querySelector(".blocked").classList.remove("hide"))))}async bottomButtonSidebox(t=""){this.bottomButtonIframe.contentWindow.document.getElementsByClassName("lp_text")[0].innerHTML=t}async bottomButtonTopbox(t=null,o=""){return"show"===t?(this.bottomButtonIframe.contentWindow.document.getElementsByClassName("lp_top-box-container")[0].style.height="auto",this.bottomButtonIframe.contentWindow.document.getElementsByClassName("lp_top-box-container")[0].style.overflow="visible",this.bottomButtonIframe.style.height="377px"):"hide"===t?(this.bottomButtonIframe.contentWindow.document.getElementsByClassName("lp_top-box-container")[0].style.height="0px",this.bottomButtonIframe.contentWindow.document.getElementsByClassName("lp_top-box-container")[0].style.overflow="hidden",this.bottomButtonIframe.style.height="87px"):"toggle"===t&&(await this.bottomButtonTopbox()?await this.bottomButtonTopbox("hide"):await this.bottomButtonTopbox("show")),this.bottomButtonIframe.contentWindow.document.getElementsByClassName("lp_popup-body")[0].innerHTML=o,"auto"==this.bottomButtonIframe.contentWindow.document.getElementsByClassName("lp_top-box-container")[0].style.height}async bottomButton(t=null){if("show"==t){if(await this.bottomButton()||"disable"==this.data.bottomButton)return;this.bottomButtonIframe.setAttribute("style","outline: none !important;visibility: visible !important;resize: none !important;box-shadow: none !important;overflow: visible !important;background: none !important;opacity: 1 !important;filter: alpha(opacity=100) !important;-ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity 1) !important;-mz-opacity: 1 !important;-khtml-opacity: 1 !important;border: 0 !important;padding: 0 !important;margin: 0 !important;-moz-transition-property: none !important;-webkit-transition-property: none !important;-o-transition-property: none !important;transition-property: none !important;transform: none !important;-webkit-transform: none !important;-ms-transform: none !important;display: block !important;z-index: 2147483645 !important;background-color: transparent !important;cursor: none !important;float: none !important;border-radius: unset !important;pointer-events: auto !important;clip: auto !important;color-scheme: light !important;position: fixed !important;top: auto !important;right: auto !important;left: 0px !important;bottom: 0px !important;height: 87px;width: 380px !important;");let o=async()=>{var t=await this.getPermission();"default"==t?await this.requestPermission():"granted_default"==t?(await this.requestPermission(),await this.notificationPermissionChangeHandler("granted")):(await this.bottomButtonTopbox("toggle"),await this.updateBottomButtonContent(t))};this.bottomButtonIframe.onload=async()=>{var t=this.bottomButtonIframe.contentDocument||this.bottomButtonIframe.contentWindow.document;t.open(),t.write('<!doctypehtml><html lang=en><meta charset=UTF-8><meta content="IE=edge"http-equiv=X-UA-Compatible><meta content="width=device-width,initial-scale=1"name=viewport><link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700&display=swap"rel=stylesheet><title>Document</title><style>.lp_body{font-family:Inter;font-size:16px;font-weight:400;-webkit-user-select:none;-ms-user-select:none;user-select:none}.lp_body .lp_container{position:fixed;bottom:100px;left:20px;display:flex;flex-direction:column}.lp_body .lp_container .lp_sidebox{position:absolute;width:0;bottom:-84px;left:44px;display:flex;overflow:hidden;transition:width 50ms}.lp_body .lp_container .lp_sidebox .lp_text{display:inline-block;white-space:nowrap;background:#000;border-radius:5px;color:#fff;padding:10px}.lp_body .lp_container .lp_sidebox .lp_arrow-left{width:0;height:0;border-top:10px solid transparent;border-bottom:10px solid transparent;border-right:10px solid #000;margin-top:12px;display:inline-block}.lp_body .lp_container .lp_top-box-container{transition:height 50ms;height:0;overflow:hidden}.lp_body .lp_container .lp_top-box-container .lp_top-box{background:#fff;color:#000;border-radius:5px;border:2px solid #ececec;box-shadow:0 20px 25px rgba(0,0,0,.11)}.lp_body .lp_container .lp_top-box-container .lp_top-box .lp_heading{text-align:center;padding:15px;border-bottom:2px solid #ececec}.lp_body .lp_container .lp_top-box-container .lp_top-box .lp_popup-body{padding:15px;width:200px}.lp_btn svg{position:absolute;fill:#0067f5}.lp_btn{display:flex;justify-content:center;align-items:center;cursor:pointer;position:absolute;bottom:-67px;left:16px;-webkit-tap-highlight-color:transparent}.lp_container:hover .lp_sidebox{width:500px}.lp_arrow-bottom{width:0;height:0;border-left:15px solid transparent;border-right:15px solid transparent;border-top:15px solid #fff;margin-left:20px;margin-top:-1px}.unsubscribe_button{background:#0067f5;border-radius:5px;color:#fff;width:100%;border:0;font-size:16px;padding:10px;cursor:pointer}</style><div class=lp_body><div class=lp_container><div class=lp_sidebox><div class=lp_arrow-left></div><div class=lp_text></div></div><div class=lp_top-box-container><div class=lp_top-box><div class=lp_heading>Manage Notifications</div><div class=lp_popup-body></div></div><div class=lp_arrow-bottom></div></div><div class=lp_btn><svg fill=none height=50 viewBox="0 0 109 109"width=50 xmlns=http://www.w3.org/2000/svg><rect height=109 rx=54.5 width=109 /><circle cx=54 cy=55 r=41 stroke=white stroke-width=4 /><path d="M71.5999 45.95C71.3131 42.563 69.9089 39.3673 67.608 36.8653C65.3071 34.3632 62.2401 32.6966 58.889 32.1275C59.06 30.161 58.8605 26 54.5 26C50.1395 26 49.94 30.161 50.111 32.1275C46.7598 32.6966 43.6928 34.3632 41.3919 36.8653C39.091 39.3673 37.6868 42.563 37.4 45.95V63.05L31.7 68.75V71.6H77.2999V68.75L71.5999 63.05V45.95ZM54.5 83C56.7676 83 58.9423 82.0992 60.5457 80.4958C62.1492 78.8923 63.05 76.7176 63.05 74.45H45.95C45.95 76.7176 46.8508 78.8923 48.4542 80.4958C50.0576 82.0992 52.2323 83 54.5 83Z"fill=white /></svg></div></div></div>'),t.close(),this.bottomButtonIframe.contentWindow.document.body.querySelector(".lp_btn").addEventListener("click",o),this.bottomButtonIframe.contentWindow.document.querySelector(".lp_btn > svg").style.fill=this.data.themeColor,this.updateBottomButtonContent(await this.getPermission())};var a=document.body.children[Math.floor(Math.random()*document.body.children.length)];document.body.insertBefore(this.bottomButtonIframe,a)}else{if("hide"==t)return await this.bottomButton()?void this.bottomButtonIframe.remove():void 0;"toggle"==t&&(await this.bottomButton()?await this.bottomButton("hide"):await this.bottomButton("show"))}return document.contains(this.bottomButtonIframe)}getReferralUrl(){return"https://larapush.com?utm_source=notification&utm_medium=referral&utm_source="+window.location.host+"&utm_ref="+this.options.referralCode}async backdrop(t=null){if("show"==t){if(await this.backdrop())return;this.backdropIframe.setAttribute("style","outline: none !important;visibility: visible !important;resize: none !important;box-shadow: none;overflow: visible !important;background: none !important;opacity: 1 !important;filter: alpha(opacity=100) !important;-ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity 1) !important;-mz-opacity: 1 !important;-khtml-opacity: 1 !important;border: 0 !important;padding: 0 !important;margin: 0 !important;-moz-transition-property: none !important;-webkit-transition-property: none !important;-o-transition-property: none !important;transition-property: none !important;transform: none !important;-webkit-transform: none !important;-ms-transform: none !important;display: block !important;z-index: 2147483646 !important;background-color: transparent !important;cursor: none !important;float: none !important;border-radius: unset;pointer-events: auto !important;clip: auto !important;color-scheme: light !important;position: fixed !important;top: 0px !important;right: 0px !important;left: auto !important;bottom: auto !important;height: 100vh;width: 100vw;");let o=()=>{};this.backdropIframe.onload=async()=>{var t=this.backdropIframe.contentDocument||this.backdropIframe.contentWindow.document;t.open(),t.write('<!doctypehtml><html lang=en><meta charset=UTF-8><meta content="IE=edge"http-equiv=X-UA-Compatible><meta content="width=device-width,initial-scale=1"name=viewport><title>Document</title><style>.poweredByLarapush{position:fixed;right:0;top:2px;z-index:99999999;cursor:pointer}.backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;background:#000000bd;z-index:99999998}.lock{color:#fff;display:inline-block;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.contentLocked{font-family:Arial,Helvetica,sans-serif!important;width:500px;max-width:80vw;text-align:center;margin-top:15px;font-size:20px}.unlockButton{border:0;font-size:20px;margin-top:15px}.ulbtn{display:flex;flex-direction:column;align-items:center;padding:9px 21px;font-family:-apple-system,BlinkMacSystemFont,Roboto,sans-serif;border-radius:6px;border:none;color:#fff;background:linear-gradient(180deg,#4b91f7 0,#367af6 100%);background-origin:border-box;box-shadow:0 .5px 1.5px rgba(54,122,246,.25),inset 0 .8px 0 -.25px rgba(255,255,255,.2);user-select:none;-webkit-user-select:none;touch-action:manipulation;cursor:pointer}.ulbtn:focus{box-shadow:inset 0 .8px 0 -.25px rgba(255,255,255,.2),0 .5px 1.5px rgba(54,122,246,.25),0 0 0 3.5px rgba(58,108,217,.5);outline:0}.contentBox{display:flex;flex-direction:column;align-content:center;align-items:center}.hide{display:none}.hideOnMobile{display:block}.showOnMobile{display:none}@media only screen and (max-width:470px){.hideOnMobile{display:none}.showOnMobile{display:block}}.imageToEnable{width:500px;object-fit:cover;margin-top:15px;max-width:80vw}.branding{font-size:12px;font-family:Arial;letter-spacing:.04em;color:rgb(255 255 255 / 90%);padding:6px 15px}.brand-text{font-size:12px;font-family:Arial;letter-spacing:.04em;color:#fff;font-weight:700}</style><div class="branding poweredByLarapush">Notifications Powered by <span class=brand-text>LaraPush</span></div><div class=backdrop><div class="hide lock"><div class=contentBox><svg fill=none height=50px viewBox="0 0 24 24"width=50px xmlns=http://www.w3.org/2000/svg><path d="M13 15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15C11 14.4477 11.4477 14 12 14C12.5523 14 13 14.4477 13 15Z"stroke=#fff stroke-width=2 /><path d="M15 9C16.8856 9 17.8284 9 18.4142 9.58579C19 10.1716 19 11.1144 19 13L19 15L19 17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21L12 21L9 21C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17L5 15L5 13C5 11.1144 5 10.1716 5.58579 9.58579C6.17157 9 7.11438 9 9 9L12 9L15 9Z"stroke=#fff stroke-width=2 stroke-linejoin=round /><path d="M9 9V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V9"stroke=#fff stroke-width=2 stroke-linejoin=round stroke-linecap=round /></svg></div><div class="contentBox hide default"><div class=contentLocked>This page content is locked<br>Please click on below button to unlock.</div><div class=unlockButton><button class=ulbtn role=button>UNLOCK NOW!</button></div></div><div class="contentBox hide blocked"><div class=contentLocked>This page content is locked<br>Please allow as shown below to unlock.</div><img class="imageToEnable hideOnMobile"src=https://cdn.autopush.in/uploads/enable_notifications.png> <img class="imageToEnable showOnMobile"src=https://cdn.autopush.in/uploads/enable_notifications_mobile.gif></div></div></div>'),t.close(),this.isCustomPopupIsEnabled()&&!this.isPageLockEnabled()?this.backdropIframe.contentWindow.document.body.querySelector(".poweredByLarapush").remove():this.backdropIframe.contentWindow.document.body.querySelector(".poweredByLarapush").addEventListener("click",o),this.backdropIframe.contentWindow.document.body.querySelector(".ulbtn").addEventListener("click",()=>{this.requestPermission()});var t=await this.getPermission();this.updateBackdropContent(t)};var a=document.body.children[Math.floor(Math.random()*document.body.children.length)];this.isCustomPopupIsEnabled()||(this.backdropIframe.style.height="30px",this.backdropIframe.style.width="240px",this.backdropIframe.style.borderRadius="2px"),document.body.insertBefore(this.backdropIframe,a)}else{if("hide"==t)return await this.backdrop()?void this.backdropIframe.remove():void 0;"toggle"==t&&(await this.backdrop()?await this.backdrop("hide"):await this.backdrop("show"))}return document.contains(this.backdropIframe)}async popup(t=null){if("show"!=t)return"hide"==t?await this.popup()&&void 0!==this.data.popup?void this.popupIframe.remove():void 0:("toggle"==t&&(await this.popup()?await this.popup("hide"):await this.popup("show")),document.contains(this.popupIframe));{if(await this.popup())return;this.popupIframe.setAttribute("style","outline: none !important;visibility: visible !important;resize: none !important;overflow: visible !important;background: none !important;opacity: 1 !important;filter: alpha(opacity=100) !important;-ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity 1) !important;-mz-opacity: 1 !important;-khtml-opacity: 1 !important;border: 0 !important;padding: 0 !important;margin: 0 !important;-moz-transition-property: none !important;-webkit-transition-property: none !important;-o-transition-property: none !important;transition-property: none !important;-webkit-transform: none !important;-ms-transform: none !important;display: block !important;z-index: 2147483647 !important;background-color: transparent !important;cursor: none !important;float: none !important;pointer-events: auto !important;clip: auto !important;color-scheme: light !important;position: fixed !important;top: 0px !important;left: 50% !important;right: 0px !important;bottom: auto !important;width: 435px !important;max-width: 435px !important;transform: translate(-50%, 0) !important;box-shadow: none !important;border-radius: 0 0 2px 2px !important;"),this.isMobile()&&"bottom"==this.data.mobileLocation&&this.popupIframe.setAttribute("style",this.popupIframe.getAttribute("style")+"top: auto !important;left: 0px !important;right: auto !important;bottom: 0px !important;width: 100% !important;transform: none !important;"),this.isMobile()&&"top"==this.data.mobileLocation&&this.popupIframe.setAttribute("style",this.popupIframe.getAttribute("style")+"top: 0px !important;left: 0px !important;right: auto !important;bottom: auto !important;width: 100% !important;transform: none !important;"),this.isMobile()&&"center"==this.data.mobileLocation&&this.popupIframe.setAttribute("style",this.popupIframe.getAttribute("style")+"top: 50% !important;left: 50% !important;right: auto !important;bottom: auto !important;width: 100% !important;transform: translate(-50%, -50%) !important;");let o=async()=>{this.popup("hide"),this.backdrop("hide"),await this.writeData("notification_rejected",this.currentDateTime.toString())},a=()=>{this.requestPermission()};this.popupIframe.onload=async()=>{var t=this.popupIframe.contentDocument||this.popupIframe.contentWindow.document;t.open(),t.write('<html lang=en><meta charset=UTF-8><meta content="IE=edge"http-equiv=X-UA-Compatible><meta content="width=device-width,initial-scale=1"name=viewport><title>Document</title><style>body{background-color:transparent;margin:0;display:flex;justify-content:center}#larapush-optin{-webkit-user-select:none;-ms-user-select:none;user-select:none}#larapush-optin .larapush-optin--mr-10{margin-right:10px}#larapush-optin .larapush-optin--mt-5{margin-top:5px}#larapush-optin .larapush-optin--mt-15{margin-top:15px}#larapush-optin .larapush-optin--mb-5{margin-bottom:5px}#larapush-optin .larapush-optin--line-clamp{display:block;display:-webkit-box;-webkit-box-orient:vertical;position:relative;line-height:1.25;word-break:break-word;overflow:hidden;text-overflow:ellipsis;padding:0}#larapush-optin .larapush-optin--line-clamp-2{line-height:1.25em!important}@supports (-webkit-line-clamp:1){#larapush-optin .larapush-optin--line-clamp:after{display:none!important}}#larapush-optin .larapush-optin--line-clamp-2{-webkit-line-clamp:2;max-height:calc(1em * 1.5 * 2)}#larapush-optin .row{display:flex}#larapush-optin .row--space-btwn{justify-content:space-between}#larapush-optin .row--flex-end{justify-content:flex-end}#larapush-optin .col{display:flex;flex-direction:column}#larapush-optin .col--content-center{justify-content:center}@-webkit-keyframes larapushSlideInDown{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:visible}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes larapushSlideInDown{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:visible}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-webkit-keyframes larapushSlideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}100%{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes larapushSlideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}100%{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes larapushFadeIn{0%{opacity:0}100%{opacity:1}}@keyframes larapushFadeIn{0%{opacity:0}100%{opacity:1}}#larapush-optin.larapush-optin--preview-container{position:fixed;z-index:99999999;box-sizing:border-box;color:rgba(0,0,0,.87);font-family:Arial,"Helvetica Neue",sans-serif!important}#larapush-optin.larapush-optin--dialog-box{background:#fff;box-shadow:0 0 20px rgb(0 0 0 / 10%);padding:16px 13px 0 13px;margin:0 15px 15px 15px;width:calc(100% - 26px);max-width:380px;-webkit-animation-name:larapushSlideInDown;animation-name:larapushSlideInDown;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;transform:translate3d(0,-100%,0);-webkit-transform:translate3d(0,-100%,0);animation-delay:.5s;-webkit-animation-duration:.8s;animation-duration:.8s;display:none}#larapush-optin.larapush-optin--dialog-box.show{display:block}#larapush-optin.larapush-optin--dialog-box .larapush-optin--icon-wrapper{width:50px;height:50px}#larapush-optin.larapush-optin--dialog-box .larapush-optin--icon-wrapper .larapush-optin--icon{max-height:50px;margin-top:-3px}#larapush-optin.larapush-optin--dialog-box .larapush-optin--content{width:100%}#larapush-optin .larapush-optin--content .larapush-optin--title span{color:#454545;font-size:16px;word-break:break-word;letter-spacing:.15px;font-weight:400;font-family:Arial,Helvetica,sans-serif!important}#larapush-optin .larapush-optin--content .larapush-optin--message span{color:#666;font-size:13px;letter-spacing:.15px;font-weight:400;font-family:Arial,Helvetica,sans-serif!important}#larapush-optin .larapush-optin--ctas-container .larapush-optin--cta{box-sizing:border-box;text-transform:unset;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;line-height:36px;border-radius:4px;font-size:14px;padding:0 13px;letter-spacing:.75px;min-width:100px;max-width:100%;overflow:hidden;text-overflow:ellipsis;font-family:Arial,Helvetica,sans-serif!important;transition:all ease-in .3s;flex-grow:1}#larapush-optin.larapush-optin--dialog-box .larapush-optin--ctas-container .larapush-optin--cta.larapush-optin--cta-later{background-color:#fff!important;color:#666!important}#larapush-optin.larapush-optin--dialog-box .larapush-optin--ctas-container .larapush-optin--cta.larapush-optin--cta-allow{background-color:#007bff;color:#fff!important;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}#larapush-optin.larapush-optin--dialog-box .larapush-optin--branding-wrapper{width:auto;line-height:1}#larapush-optin.larapush-optin--dialog-box .larapush-optin--branding-wrapper .larapush-optin--branding-text{text-decoration:none;font-size:12px;font-weight:400;font-family:Arial,Helvetica,sans-serif!important;letter-spacing:.4px;color:#747474}.top#larapush-optin.larapush-optin--dialog-box{border-radius:0 0 10px 10px}@media screen and (max-width:480px){.top#larapush-optin.larapush-optin--dialog-box{padding:15.75px 10.5px 0 10.5px;margin:0 0 15px 0;-webkit-animation-name:larapushSlideInDown;animation-name:larapushSlideInDown;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;transform:translate3d(0,-100%,0);-webkit-transform:translate3d(0,-100%,0);animation-delay:.5s}.center#larapush-optin.larapush-optin--dialog-box{padding:15.75px 10.5px 0 10.5px;margin:15px 15px 15px 15px;-webkit-animation-name:larapushFadeIn;animation-name:larapushFadeIn;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;opacity:0;animation-delay:.5s;transform:unset;-webkit-transform:unset;border-radius:10px 10px 10px 10px}.bottom#larapush-optin.larapush-optin--dialog-box{width:100%;margin:15px 0 0 0;bottom:0;left:unset;top:unset;padding:15.75px 10.5px 15.75px 10.5px;-webkit-animation-name:larapushSlideInUp;animation-name:larapushSlideInUp;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;transform:translate3d(0,100%,0);-webkit-transform:translate3d(0,100%,0);animation-delay:.5s;border-radius:10px 10px 0 0}#larapush-optin .larapush-optin--content .larapush-optin--title span{font-size:16px}#larapush-optin .larapush-optin--content .larapush-optin--message span{font-size:13px}#larapush-optin .larapush-optin--ctas-container .larapush-optin--cta{min-width:85px;max-width:100%}}</style><div class="larapush-optin--dialog-box larapush-optin--preview-container"id=larapush-optin><div class="row row--space-btwn"><div class="larapush-optin--mr-10 col col--content-center larapush-optin--icon-wrapper"><img alt="Default Opt-in Icon"class=larapush-optin--icon width=40></div><div class=larapush-optin--content><div class=larapush-optin--title><span class="larapush-optin--line-clamp larapush-optin--line-clamp-2 larapush-optin-heading"></span></div><div class="larapush-optin--message larapush-optin--mt-5"><span class="larapush-optin--line-clamp larapush-optin--line-clamp-2 larapush-optin-subheading"></span></div></div></div><div class="row row--flex-end larapush-optin--ctas-container larapush-optin--mb-5 larapush-optin--mt-15"><button class="larapush-optin--cta larapush-optin--cta-later larapush-optin--mr-10"></button> <button class="larapush-optin--cta larapush-optin--cta-allow"></button></div><div class="row row--flex-end izbranding larapush-optin--branding-wrapper larapush-optin--branding-wrapper-dialog-box"style="justify-content:center;margin:5px 0 0 0"><a class="larapush-optin--branding-text larapush-optin--branding-text-dialog-box"id=poweredBy target=_blank><img src=https://cdn.autopush.in/uploads/powered_by_larapush.png style=height:25px></a></div></div>'),t.close(),this.data.popup=this.popupIframe.contentWindow.document.body.querySelector("#larapush-optin"),this.isMobile()?this.data.popup.classList.add(this.data.mobileLocation):this.data.popup.classList.add("top"),this.data.popup.querySelector(".larapush-optin--icon").src=this.data.logo,this.data.popup.querySelector(".larapush-optin-heading").innerHTML=this.data.heading,this.data.popup.querySelector(".larapush-optin-subheading").innerHTML=this.data.subheading,this.data.popup.querySelector(".larapush-optin--cta-allow").style.background=this.data.themeColor,this.data.popup.querySelector(".larapush-optin--cta-allow").innerHTML=this.data.allowText,this.data.popup.querySelector(".larapush-optin--cta-later").innerHTML=this.data.denyText,this.data.denyText||(this.data.popup.querySelector(".larapush-optin--cta-later").style.display="none"),this.data.popup.querySelector(".larapush-optin--cta-later").addEventListener("click",o),this.data.popup.querySelector(".larapush-optin--cta-allow").addEventListener("click",a),this.data.popup.classList.add("show"),this.popupIframe.style.height=this.popupIframe.contentWindow.document.body.querySelector("#larapush-optin").clientHeight+30+"px"},t=document.body.children[Math.floor(Math.random()*document.body.children.length)],document.body.insertBefore(this.popupIframe,t)}}openDatabase=()=>new Promise((t,o)=>{var a=indexedDB.open("autopushDataBase",1);a.onupgradeneeded=t=>{t.target.result.createObjectStore("myObjectStore",{keyPath:"id"})},a.onsuccess=o=>{t(o.target.result)},a.onerror=t=>{o(t.target.error)}});writeData=async(t,o)=>{let a=(await this.openDatabase()).transaction("myObjectStore","readwrite");return a.objectStore("myObjectStore").put({id:t,data:o}),new Promise((t,o)=>{a.oncomplete=()=>{t()},a.onerror=()=>{o(a.error)}})};readData=async t=>{let o=(await this.openDatabase()).transaction("myObjectStore","readonly").objectStore("myObjectStore").get(t);return new Promise((t,a)=>{o.onsuccess=()=>{t(o.result?o.result.data:null)},o.onerror=()=>{a(o.error)}})};async init(){if(!window.LaraPushLoaded){window.LaraPushLoaded=!0,await this.registerServiceWorker();let t=setInterval(async()=>{if(null!=document.body){clearInterval(t);try{this.loadBottomButtonAndPoweredBy(),this.setNotificationPermissionChangeListener(),(null==await this.readData("notification_rejected")||this.currentDateTime-parseInt(await this.readData("notification_rejected"))>parseInt(this.data.reappear))&&this.showPopupAndRequestPermission()}catch(o){console.log(o)}}},100)}}}let larapushInterval=setInterval(()=>{"function"==typeof LoadLaraPush&&(LoadLaraPush(),clearInterval(larapushInterval)),window.LaraPushLoaded&&clearInterval(larapushInterval)},500);
function LoadLaraPush(){if("function"==typeof LaraPush)try{new LaraPush({referralCode:"GHJKUY"},{logo:null,heading:null,subheading:null,themeColor:"#000000",allowText:null,denyText:null,desktop:"disable",mobile:"disable",mobileLocation:null,delay:"2",reappear:"0",bottomButton:"disable",buttonToUnsubscribe:null,lockPageContent:"disable",backdrop:"enable",popup_type:"default-prompt"})}catch(e){console.error("Failed to initialize LaraPush:",e)}else console.error("LaraPush is not defined or not a function")}LoadLaraPush();