import loadPage from "./pageLoad";
import displayHome from "./home";
import displayMenu from "./menu";
import displayContact from "./contact"; 

import './styles/style.css';

loadSite();

//Hook the tabbed nav elements with event listeners for switching main content
function setupNav() {
    const home = document.querySelector('#home'); 
    const menu = document.querySelector('#menu');
    const contact = document.querySelector('#contact');

    home.className = 'active';


    const tabs = [home, menu, contact];

    //Loop through tabs to properly set active class based on page
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            //Remove active class from the other tabs
            tabs.forEach(tab => tab.classList.remove('active'));

            tab.className = 'active';

            switch (tab) {
                case home:
                    displayHome();
                    break;

                case menu:
                    displayMenu();
                    break;

                case contact:
                    displayContact();
                    break;
                default:
                    break;
            }
        });
    });
}

function loadSite() {
    loadPage();
    setupNav();

    //Start the page with the homepage already loaded
    displayHome();
}
