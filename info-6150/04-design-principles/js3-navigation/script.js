function init() {
    const pages = [
        {
            url: 'index.html',
            title: 'Index',
        },
        {
            url: 'about.html',
            title: 'About this website',
        },
        {
            url: 'contact.html',
            title: 'Contact us',
        },
        {
            url: 'legal.html',
            title: 'Legal information',
        },
    ];
    
    const ulNode = document.querySelector("nav > ul");
    for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        ulNode.insertAdjacentHTML("beforeEnd", `<li><a href="${page.url}">${page.title}</a></li>`);
    }
}
