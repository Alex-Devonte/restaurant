function createMenu() {
    const menu = document.createElement('h1');
    menu.textContent = "Menu Page";
    return menu;
}

function displayMenu() {
    const main = document.getElementById("main-content");
    main.textContent = "";
    main.appendChild(createMenu());
}


export default displayMenu;