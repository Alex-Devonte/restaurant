import loadPage from "./pageLoad";
import displayHome from "./home";
import displayMenu from "./menu";
import displayContact from "./contact"; 

import './styles/style.css';

loadSite();

//Hook the tabbed nav elements with event listeners for switching main content
function setupNav() {
    const home = document.querySelector('#home').addEventListener('click', displayHome);
    const menu = document.querySelector('#menu').addEventListener('click', displayMenu);
    const contact = document.querySelector('#contact').addEventListener('click', displayContact);
}

function loadSite() {
    loadPage();
    setupNav();

    //Start the page with the homepage already loaded
    displayHome();
}
