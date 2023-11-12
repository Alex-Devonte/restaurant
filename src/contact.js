function createContact() {
    const contact = document.createElement('h1');
    contact.textContent = "Contact Page";
    return contact;
}

function displayContact() {
    const main = document.getElementById("main-content");
    main.textContent = '';
    main.appendChild(createContact());
}


export default displayContact;