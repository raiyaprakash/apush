function WhatsAppLinkschange(finalwa) {
    const links = document.querySelectorAll('a.pkchange');
    links.forEach(link => {
        if (link.href.includes('whatsapp.com')) {
            link.href = finalwa;
        }
    });
}

const groupLinks = [
"https://chat.whatsapp.com/EsdQMH0qkQ5Ky3Bw6setLT", // Education News Group No. 71
"https://chat.whatsapp.com/DF87eRFLXPdDVOqWd2SZe6", // Education News Group No. 79

 ];

 function getRandomIndex(array) {
   const randomIndex = Math.floor(Math.random() * array.length);
   return array[randomIndex];
 }

WhatsAppLinkschange(getRandomIndex(groupLinks));
