document.querySelectorAll("a").forEach(e=>{const t=e.getAttribute("href");t&&(t.includes("wa.me")||t.includes("whatsapp")||t.includes("t.me")||t.includes("x.com")||t.includes("telegram")||t.includes("youtube")||t.includes("facebook")||t.includes("instagram")||t.includes("gmail"))&&e.setAttribute("href","#")});



const replaceText = () => {
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT
    );

    let node;

    while (node = walker.nextNode()) {
        if (node.nodeValue.includes('govtvacancyalert@gmail.com')) {
            node.nodeValue = node.nodeValue.replaceAll(
                'govtvacancyalert@gmail.com',
                'send@autopush.in'
            );
        }
    }
};

replaceText();
