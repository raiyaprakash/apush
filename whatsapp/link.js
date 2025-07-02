function WhatsAppLinkschange(finalwa) {
    const links = document.querySelectorAll('a.whatsapp');
    links.forEach(link => {
        if (link.href.includes('whatsapp.com')) {
            link.href = finalwa;
        }
    });
}

const groupLinks = [
"https://chat.whatsapp.com/EsdQMH0qkQ5Ky3Bw6setLT", // Education News Group No. 71
"https://chat.whatsapp.com/DF87eRFLXPdDVOqWd2SZe6", // Education News Group No. 79
"https://chat.whatsapp.com/DFt2KJKzLQo7censnqHV5z", // Education News Group No. 61
"https://chat.whatsapp.com/C0bPJL1Lr8M9PgR3rkjWm0", // Education News Group No. 54
"https://chat.whatsapp.com/HAYkkBxs2Rh6W0YW3eP7nx", // Education News Group No. 74
"https://chat.whatsapp.com/BWfb2l5KEA19QU8l6nvVux", // Education News Group No. 63
"https://chat.whatsapp.com/C9mtSBsIERd0GMtLmXak6W", // Education News Group No. 55
"https://chat.whatsapp.com/LOH5exUvJhWCgXx7nsDOEP", // Education News Group No. 77
"https://chat.whatsapp.com/GwxI4DnlcLT4J95dZi2lS4", // Education News Group No. 85
"https://chat.whatsapp.com/E7QkaqtXBFjCxWshxa9C9Q", // Education News Group No. 67
"https://chat.whatsapp.com/Je1UOhrjMNyJ82tRQooVPG", // Education News Group No. 73
"https://chat.whatsapp.com/HHKdjowVbMX6w9ZRvl1hCC", // Education News Group No. 68
"https://chat.whatsapp.com/BRErBT5WWWD0gl65cVPWdk", // Education News Group No. 57
"https://chat.whatsapp.com/C853tEUdSLZIT6vnuAjvCb", // Education News Group No. 62
"https://chat.whatsapp.com/JAiejikmjDTCg35VzyyAwH", // Education News Group No. 82
"https://chat.whatsapp.com/GtymNHKtX4gEKCMpDGiaV6", // Education News Group No. 53
"https://chat.whatsapp.com/JkXdAJv4AgzFuChEQL9iZx", // Education News Group No. 56
"https://chat.whatsapp.com/BSMw3E9YKfSH1FyonTVJdk", // Education News Group No. 80
"https://chat.whatsapp.com/IWUflrNw8e7A2tAcYI86rq", // Education News Group No. 78
"https://chat.whatsapp.com/DRPe2RaoTxP5NHooC5z2FJ", // Education News Group No. 84
"https://chat.whatsapp.com/E9MRF7EkbhcEYzMKzYEgkH", // Education News Group No. 69
"https://chat.whatsapp.com/BgUzr4Vy2rK1TdJRmdmSMS", // Education News Group No. 75
"https://chat.whatsapp.com/CVPSzEdwHig7ATchrNRXWN", // Education News Group No. 83
"https://chat.whatsapp.com/CsWfSxoKK6SJdVldmDFJgo", // Education News Group No. 50
"https://chat.whatsapp.com/DjIWAftrS4WJejkC9uMaFu", // Education News Group No. 64
"https://chat.whatsapp.com/E9m4sudWyK13hacEwZJwAZ", // Education News Group No. 59
"https://chat.whatsapp.com/BzxwWuGJsIu0V0unFnPraQ", // Education News Group No. 52
"https://chat.whatsapp.com/FZN76nqdQm3JJE9tvBVX3Z", // Education News Group No. 76
"https://chat.whatsapp.com/IKn4dmG5ZQu2DzTKJyvcUR", // Sarkari Result GP No. 100
"https://chat.whatsapp.com/Bb7ux6ENKPx18Czf7krnQ6", // Education News Group No. 51
"https://chat.whatsapp.com/Hjx6kfaKOnzDpAvFPlojpd", // Education News Group No. 70
"https://chat.whatsapp.com/CGTmND3p9hM4N1kh1tLCQa", // Education News Group No. 60
"https://chat.whatsapp.com/JQIKHD7ItQXLRkkKwyk8qw", // Education News Group No. 65
"https://chat.whatsapp.com/FWp5vAXTzbgDFXKi21HN5V", // Education News Group No. 81
"https://chat.whatsapp.com/EydSbyjgftH9JTadbSl29x", // Education News Group No. 58
"https://chat.whatsapp.com/IMMwFi9fTwfCwR0nmm2rpr", // Education News Group No. 72
"https://chat.whatsapp.com/GQ2DLzY1BU1CAk7cjcjToc", // Education News Group No. 66

 ];

 function getRandomIndex(array) {
   const randomIndex = Math.floor(Math.random() * array.length);
   return array[randomIndex];
 }

WhatsAppLinkschange(getRandomIndex(groupLinks));
