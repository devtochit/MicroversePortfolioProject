
const nameField = formStorage.elements.name;
const emailField = formStorage.elements.email;
const messageField = formStorage.elements.message;
const formStorage = ''
function dataStorage() {
    const userData = {
        name: nameField.value,
        emailAddress: emailField.value,
        message: messageField.value,
    };
    localStorage.setItem('formData', JSON.stringify(userData));
}

function inputValues() {
    const formData = JSON.parse(localStorage.getItem('formData'));
    if (formData !== null) {
        nameField.value = formData.name;
        emailField.value = formData.emailAddress;
        messageField.value = formData.message;
    }
}

window.addEventListener('load', inputValues);

for (let n = 0; n < formStorage.length; n += 1) {
    formStorage[n].addEventListener('change', () => {
        dataStorage();
    });
}