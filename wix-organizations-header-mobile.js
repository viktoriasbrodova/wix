    const IMAGE_URL = 'https://static.wixstatic.com/media/7d8007_c7b4e0962e424e94b199dc069e9c240b~mv2.png';
    const createLogo = () => {
      const imageElement = document.createElement('img');
      imageElement.src = IMAGE_URL;
      imageElement.id = 'header-logo';
      return imageElement;
    };

    const createBurgerMenu = () => {
      const burgerMenu = document.createElement('div');
      const burgerItem = document.createElement('span');
      const burgerItem2 = document.createElement('span');
      const burgerItem3 = document.createElement('span');
      const burgerItem4 = document.createElement('span');
      
      burgerMenu.addEventListener('click',function(){
        burgerMenu.classList.toggle('open');
        document.getElementById('mobile-menu-items').classList.toggle('open');
      });
      
      burgerMenu.appendChild(burgerItem);
      burgerMenu.appendChild(burgerItem2);
      burgerMenu.appendChild(burgerItem3)
      burgerMenu.appendChild(burgerItem4);
      burgerMenu.id = 'burger-menu-organisations';
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

    const createMenu = () => {
      const menuContainerWrapper = document.createElement('div');
      const menuContainer = document.createElement('ul');
      menuContainerWrapper.setAttribute('id', 'mobile-menu-items')
      menuContainer.appendChild(createMenuItem('About', '/about'));
      menuContainer.appendChild(createMenuItem('Case Studies', '/case-studies'));
      menuContainer.appendChild(createMenuItem('Donate', '/donate'));
      menuContainer.appendChild(createMenuItem('Contact', '/contact'));
      menuContainerWrapper.appendChild(menuContainer);
      
      return menuContainerWrapper;
    }

    const createHeader = () => {
      const headerContainer = document.createElement('div');
      headerContainer.id = 'header';

      headerContainer.appendChild(createImageContainer());
      headerContainer.appendChild(createBurgerMenu());
      headerContainer.appendChild(createMenu());

      return headerContainer;
    };

    const createImageContainer = () => {
      const imageContainer = document.createElement('a');
      imageContainer.href = "https://communitybridges.co.uk/organisations-homepage";
      imageContainer.id = 'logo-wrapper';
      imageContainer.appendChild(createLogo());
      return imageContainer;
    };

    const createStyle = () => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `

    @media only screen and (min-width: 768px) {
        #header {
        display: none !important;
        
        }
     }
     
     #mobile-menu-items {
       width: 100%;
       background:grey;
       min-height: 100vh;
       overflow: hidden;
       position: absolute;
       background: rgba(0,0,0,.6);
       visibility: hidden;
       opacity: 0;
       transition: visibility 0s, opacity 0.2s linear;
       top: 0;
     }
     
     #mobile-menu-items ul {
        width: 80%;
        padding: 0;
        margin: 0;
        padding-top: 81px;
        flex-basis: 100%;
        display: flex;
        flex-direction: column;
        background:white;
        margin-left: 20%;
        list-style: none;
        align-self: stretch;
        min-height: 99vh;
        z-index: 5;
        position: absolute;
        top: 0;
        right: 0;
        
     }
     
     #mobile-menu-items.open {
      display: block;
      visibility: visible;
      opacity: 1;
     }
     
     #mobile-menu-items a {
     font-size: 20px;
     line-height: 50px;
     color: #000000;
     text-decoration: none;
     }
     
      #mobile-menu-items a.selected {
      color: rgb(240,130,255);
      }

     
      #header {
        background: white;
        height: 67px;
        text-align: center;
        margin: 0;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
        
      #logo-wrapper {
        display: flex;
        align-items: center;
        height:100%;
      }
      
      #logo-wrapper img{
        width: 110px;
        height: 49px;
        object-fit: cover;
        object-position: 50% 50%;
        margin-left: auto;
        margin-right: auto;
      }
        
        
  #burger-menu-organisations {
    margin: 0;
    padding: 0;
    width: 22px;
    height: 20px;
    position: absolute;
    top: 20px;
    right: 20px;
    float: right;
    z-index: 999;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
}

#burger-menu-organisations span {
  margin:0;
  padding: 0;
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: #000000;
  border-radius: 2px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

/* Burger Icon */

#burger-menu-organisations span:nth-child(1) {
  top: 0;
}

#burger-menu-organisations span:nth-child(2),#burger-menu-organisations span:nth-child(3) {
  top: 0;
  bottom: 0;
  margin: auto;
}

#burger-menu-organisations span:nth-child(4) {
  bottom: 0;
}

#burger-menu-organisations.open span:nth-child(1) {
  top: 18px;
  width: 0%;
  left: 50%;
}

#burger-menu-organisations.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#burger-menu-organisations.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#burger-menu-organisations.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
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
        this.appendChild(createStyle());   this.appendChild(createImageContainer());
        this.appendChild(createHeader());
    }
}

customElements.define('wix-organizations-header-mobile', WixOrganizationsHeaderMobile);
