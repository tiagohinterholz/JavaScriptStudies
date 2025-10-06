function show(){
    const contatList = document.getElementById('contact-list'); // retorna um elemento
    console.log(contatList);

    const listElements = document.getElementsByTagName('li'); // retorna HTMLCollection
    console.log(listElements);

    const contactInputs = document.getElementsByClassName('contact-input'); // retorna HTMLCollection
    console.log(contactInputs);

    const contact1 = document.getElementsByName('contact1'); // retorna NodeList
    console.log(contact1);

    const contacts = document.querySelectorAll('#contact-list > li > label'); // retorna NodeList
    console.log(contacts);

    const firstContact = document.querySelector('#contact-list > li > label'); // retorna o primeiro elemento

}