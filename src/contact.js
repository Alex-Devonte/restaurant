function createContact() {
    const contact = document.createElement('div');
    contact.id = 'contact-content';

    const contactHeading = document.createElement('h1');
    contactHeading.textContent = "Contact Us!";
    contact.appendChild(contactHeading);

    const contactPhone = document.createElement('p');
    contactPhone.textContent = '555-555-5555';
    contact.appendChild(contactPhone);

    const contactEmail = document.createElement('p');
    contactEmail.textContent = 'fakeburger@gmail.com';
    contact.appendChild(contactEmail);

    const contactAddress = document.createElement('p');
    contactAddress.textContent = '124 Fake Street';
    contact.appendChild(contactAddress);
    
    return contact;
}

function displayContact() {
    const main = document.getElementById('main-content');
    main.textContent = '';
    main.appendChild(createContact());
}


export default displayContact;