
const username = document.getElementById('username');
const email = document.getElementById('email');
const textBox = document.getElementById('message');

function storeData() {
    const formData = {
        username: username.value,
        email: email.value,
        message: textBox.value,
    };

    localStorage.setItem('formData', JSON.stringify(formData));
}

function getData() {
    if (!localStorage.getItem('formData')) {
        storeData();
    }

    const localData = JSON.parse(localStorage.getItem('formData'));
    username.setAttribute('value', localData.username);
    email.setAttribute('value', localData.email);
    textBox.textContent = localData.message;
}

getData();

username.addEventListener('change', storeData);
email.addEventListener('change', storeData);
textBox.addEventListener('change', storeData);