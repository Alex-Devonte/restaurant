import fakeBurger from './images/fake-burger.jpg';
import fakeBurgerClassic from './images/fake-burger-classic.jpg';
import fakeBurgerMeal from './images/fake-burger-meal.jpg';
import coconutShake from './images/coconut-shake.jpg';
import oreoShake from './images/oreo-shake.jpg';
import strawberryShake from './images/strawberry-shake.jpg';

function createMenu() {
    const menuItems = [
        { name: 'Fake Burger', image: fakeBurger },
        { name: 'Fake Burger Classic', image: fakeBurgerClassic },
        { name: 'Fake Burger Meal', image: fakeBurgerMeal },
        { name: 'Coconut Shake', image: coconutShake },
        { name: 'Oreo Shake', image: oreoShake },
        { name: 'Strawberry Shake', image: strawberryShake },
      ];

    const menu = document.createElement('div');
    menu.id = 'menu-content';

    const menuItemContainer = document.createElement('div');
    menuItemContainer.className = 'menu-item-container';

    //Loop through the items to create each menu-item div
    menuItems.forEach((item) => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';

        const itemName = document.createElement('h2');
        itemName.className = 'item-name';
        itemName.textContent = item.name;
        menuItem.appendChild(itemName);

        const itemImg = new Image();
        itemImg.src = item.image;
        itemImg.alt = item.name;
        itemImg.className = 'item-img';
        menuItem.appendChild(itemImg);
    
        menuItemContainer.appendChild(menuItem);
    });

    menu.appendChild(menuItemContainer);

    return menu;
}

function displayMenu() {
    const main = document.getElementById('main-content');
    main.textContent = '';
    main.appendChild(createMenu());
}


export default displayMenu;