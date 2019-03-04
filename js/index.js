const siteContent = {
    nav: {
        "img-src": "img/logo.png",
        items: ["Services", "Product", "Vision", "Features", "About", "Contact"]
    },
    cta: {
        h1: "DOM Is Awesome",
        button: "Get Started",
        img: "img/header-img.png"
    },
    mainContent: {
        top: [
            {
                title: "Features",
                content:
          "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
            },
            {
                title: "About",
                content:
          "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
            }
        ],
        middleImg: "img/mid-page-accent.jpg",
        bottom: [
            {
                title: "Services",
                content:
          "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
            },
            {
                title: "Product",
                content:
          "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
            },
            {
                title: "Vision",
                content:
          "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
            }
        ]
    },
    contact: {
        h4: "Contact",
        address: "123 Way 456 Street Somewhere, USA",
        phone: "1 (888) 888-8888",
        email: "sales@greatidea.io"
    },
    footer: {
        copyright: "Copyright Great Idea! 2018"
    }
};

const { cta } = siteContent;

const logo = document.getElementById("logo-img");
function setLogo() {
    logo.setAttribute("src", siteContent.nav["img-src"]);
}

setLogo();

// Navbar
const nav = document.getElementsByTagName("a");
function setNav() {
    for (let i = 0; i < nav.length; i++) {
        nav[i].innerText = siteContent.nav.items[i];
    }
}

setNav();

// Header
const header = document.getElementsByClassName("cta")[0];
const headerText = header.getElementsByTagName("h1")[0];
const headerButton = header.getElementsByTagName("button")[0];
const ctaImg = document.getElementById("cta-img");

function setHeader() {
    headerText.innerText = cta.h1;
    headerButton.innerText = cta.button;
    ctaImg.setAttribute("src", cta.img);
}

setHeader();

// Main Content Div
const mainContent = document.getElementsByClassName("main-content")[0];

// Top Content
const topContent = mainContent.getElementsByClassName("top-content")[0];

function setTopContent() {
    let topTitles = topContent.getElementsByTagName("h4");
    let topP = topContent.getElementsByTagName("p");

    for (let i = 0; i < topTitles.length; i++) {
        topTitles[i].innerText = siteContent.mainContent.top[i].title;
        topP[i].innerText = siteContent.mainContent.top[i].content;
    }
}

setTopContent();

// Middle Image
const middleImg = document.getElementsByClassName("middle-img")[0];
function setMiddleImg() {
    middleImg.setAttribute("src", siteContent.mainContent.middleImg);
}
setMiddleImg();

// Bottom Content
const bottomContent = document.getElementsByClassName("bottom-content")[0];
function setBottomContent() {
    let bottomTitles = bottomContent.getElementsByTagName("h4");
    let bottomP = bottomContent.getElementsByTagName("p");

    for (let i = 0; i < bottomTitles.length; i++) {
        bottomTitles[i].innerText = siteContent.mainContent.bottom[i].title;
        bottomP[i].innerText = siteContent.mainContent.bottom[i].content;
    }
}
setBottomContent();

const contact = document.getElementsByClassName("contact")[0];

function setContact() {
    contact.getElementsByTagName("h4")[0].innerText = siteContent.contact.h4;
    contact.getElementsByTagName("p")[0].innerText = siteContent.contact.address;
    contact.getElementsByTagName("p")[1].innerText = siteContent.contact.phone;
    contact.getElementsByTagName("p")[2].innerText = siteContent.contact.email;
}
setContact();

const footer = document.getElementsByTagName("footer")[0];

function setFooter() {
    footer.getElementsByTagName("p")[0].innerText = siteContent.footer.copyright;
}

setFooter();
