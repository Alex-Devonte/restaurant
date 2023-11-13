import burger from './images/about-burger.jpg';

function createHome() {
    const home = document.createElement('div');
    home.id = 'home-content';

    const aboutHeading = document.createElement('h1');
    aboutHeading.textContent = 'About';
    home.appendChild(aboutHeading);

    const aboutText = document.createElement('p');
    aboutText.textContent = 'Fake Burger Spot is a fake restaurant created in 2023. We serve specialty fake burgers, fake fries, and fake shakes as well!';
    home.appendChild(aboutText);

    const burgerImage = new Image();
    burgerImage.src = burger;
    burgerImage.alt = 'About Burger';
    burgerImage.classList.add('about-burger');
    home.appendChild(burgerImage);
  
    return home;
}


function displayHome() {
    const main = document.getElementById('main-content');
    main.textContent = '';
    main.appendChild(createHome());
}

export default displayHome;