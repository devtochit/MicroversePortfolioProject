const formName = document.getElementById('username');
const formText = document.getElementById('message');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', () => {
    const data = {
        name: formName.value,
        email: mail.value,
        message: formText.value,
    };
    localStorage.setItem('userData', JSON.stringify(data));
});

window.addEventListener('load', () => {
    const myData = JSON.parse(localStorage.getItem('userData'));

    formName.value = myData.name;
    formText.value = myData.message;
    mail.value = myData.email;
});

const $resetForm = document.getElementById('reset-btn');

$resetForm.addEventListener('click', () => {
    localStorage.clear();
    formName.value = '';
    mail.value = '';
    formText.value = '';
});