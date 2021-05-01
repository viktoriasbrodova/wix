    // function init() {
    //     createHeaderHtml();
    //     createLogo();
    //     createBurgerMenu();
    //     createBurgerMenuItems();
    //     createModal();
    //     setCurrentPage();
    // }

    const IMAGE_URL = 'https://static.wixstatic.com/media/271797_d3b89d37795e45d48cdfe31a64c9fafa~mv2.pngBKU';
    const H2_TEXT = 'This is a Custom Element (Corvid)';
    const H3_1_TEXT = 'View its code by selecting its Corvid file in the Site Structure.';
    const H3_2_TEXT = 'Explore this code and use it as a reference to create your own element.';
    const DEBUG_TEXT = 'Loading the code for Custom Element \'wix-default-custom-element\'. To debug this code, open wixDefaultCustomElement.js in Developer Tools.';

    const createLogo = () => {
    const imageElement = document.createElement('img');
    imageElement.src = IMAGE_URL;
    imageElement.id = 'header-logo';
    return imageElement;
    };

    const createBurgerMenu = () => {
    const burgerMenu = document.createElement('div');
    // headerContainer.textContent = H2_TEXT;
    burgerMenu.id = 'header-container';
    return burgerMenu;
    };

    const createMenuItem = (text, link) => {
    const menuItem = document.createElement('li');
    const linkItem = document.createElement('a');
    linkItem.innerHTML = text;
    linkItem.setAttribute('href', link);
    menuItem.appendChild(linkItem);
    return menuItem;
    };

    const createHeader = () => {
    const headerContainer = document.createElement('div');
    headerContainer.id = 'header';
    headerContainer.appendChild(createBurgerMenu());
    headerContainer.appendChild(createMenuItem('About', '/about'));
    headerContainer.appendChild(createMenuItem('Case Studies', '/case-studies'));
    headerContainer.appendChild(createMenuItem('Donate', '/donate'));
    headerContainer.appendChild(createMenuItem('Contact', '/contact'));

    return headerContainer;
    };

    const createImageContainer = () => {
    const imageContainer = document.createElement('div');
    imageContainer.id = 'logo-wrapper';
    imageContainer.appendChild(createLogo());
    return imageContainer;
    };

    const createStyle = () => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `

    @media only screen and (min-width: 768px) {
        wix-organizations-header-mobile {
        display: block !important;
        }
    }
        `;
    return styleElement;
    };

    class WixOrganizationsHeaderMobile extends HTMLElement {
    constructor() {
        super();
        console.log(DEBUG_TEXT);
    }

    connectedCallback() {
        this.appendChild(createStyle());
        this.appendChild(createImageContainer());
        this.appendChild(createHeader());
    }
    }

customElements.define('wix-organizations-header-mobile', WixOrganizationsHeaderMobile);
