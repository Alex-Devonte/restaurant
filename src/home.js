function createHome() {
    const home = document.createElement('h1');
    home.textContent = "Homepage";
    return home;
}

function displayHome() {
    const main = document.getElementById("main-content");
    main.textContent = '';
    main.appendChild(createHome());
}

export default displayHome;