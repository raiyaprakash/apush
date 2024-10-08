function organic_traffic_track(){var e,r;document.referrer&&-1!==document.referrer.indexOf("google")&&((e=new FormData).append("chat_id","-1002000366447"),e.append("disable_web_page_preview","true"),e.append("text","Referrer: "+document.referrer+" || URL: "+window.location.href),r=window.atob("aHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdDYxNzAwMTMwODA6QUFHRndOLTQ0ZHoyMUVNblI2amFYUW5yQktudmNsa1hHZXMvc2VuZE1lc3NhZ2U="),fetch(r,{method:"POST",mode:"no-cors",body:e}).then(e=>{console.log("Data sent successfully!")}).catch(e=>{console.error("Error:",e)}))}organic_traffic_track();
// Function to send live traffic data to the server
function sendTrafficData() {
    const trafficData = {
        page: window.location.pathname,
        domain : window.location.origin // Include the domain in the traffic data
    };

    // Send data to the server using fetch
    fetch('https://api.autopush.in/track/live_traffic.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(trafficData)
    }).then(response => response.text()).then(data => {
       // console.log('Server response:', data);
    }).catch(error => {
        console.error('Error:', error);
    });
}

sendTrafficData();

function editpost() {
const adminlogin = localStorage.getItem("adminlogin");
if (adminlogin) {
    var element = document.querySelector('.editpost');
    if (element) {
        var idValue = element.getAttribute('id');

        var matches = idValue.match(/edit-(\d+)-(\d+)-(\d+)/);
        var type = matches[1];
        var blogId = matches[2];
        var postId = matches[3];
        var aTag = `<a href="https://draft.blogger.com/blog/${type}/edit/${blogId}/${postId}" title="edit" target="_blank" style="color: #fff;padding: 0 15px;background: #000000;margin: 2px;font-size: 12px;text-decoration: none;line-height: 22px;text-align: center;position: fixed;z-index: 999;top: 20%;right: 0;">Edit</a>`;
        element.innerHTML = aTag;
    }
}
}
editpost();
