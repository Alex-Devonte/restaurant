function createNav() {
    const nav = document.createElement('nav');

    const home = document.createElement('button');
    home.textContent = 'Home';
    home.id = 'home';

    const menu = document.createElement('button');
    menu.textContent = 'Menu';
    menu.id = 'menu';

    const contact = document.createElement('button');
    contact.textContent = 'Contact';
    contact.id = 'contact';
    
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    return nav;
}

//Create main element for displaying content from the modules
function createMain() {
    const main = document.createElement('main');
    main.id = 'main-content';

    return main;
}

//Have the initial page load contain the nav and main elements
function loadPage() {
    const container = document.querySelector('#content');
    const nav = createNav();
    const main = createMain();

    container.appendChild(nav);
    container.appendChild(main);
}

export default loadPage;

