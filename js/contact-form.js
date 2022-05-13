const form = document.querySelector('.formidable');
const username = document.getElementById('username');
const email = document.getElementById('email');
const textBox = document.getElementById('message');
const errorMessage = document.getElementById("error-message")
const inputArr = [username, email, textBox]


const isRequired = (value) => value !== '';
const checkEmail = function (input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let valid = false;
    const emailVal = input.value.trim();
    if (!isRequired(emailVal)) {
        showError(input, 'Email cannot be blank.');
        errorMessage.innerHTML = 'Email cannot be blank';
    } else if (!re.test(emailVal)) {
        showError(input, 'Email is not valid.');
        errorMessage.innerHTML = 'Email is not valid ';
    } else if (input.value !== email.value.toLowerCase()) {
        showError(input, 'Email must be in lowercase');
        errorMessage.innerHTML = 'Email must be in lowercase';
    } else {
        showSuccess(input);
        valid = true;

    }
    return valid;
}



const message = function (input) {
    const errorMessage = input.name.replace(/-p/, ' P');
    return errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
}

const showError = (input, ) => {
    let formControl = input.parentElement;
    formControl.classList = ' form-container error';
     
}
const showSuccess = (input) => {
    let formControl = input.parentElement;
    formControl.classList = ' form-container success'
}




const checkRequired = function (inputArr) {
    inputArr.forEach(input => {
        if (input.value.trim() === '') {
            showError(input, `${message(input)} is required.`);
            return
        } else {
            showSuccess(input)
        }
    })

}


const checkLength = function (input, min, max) {
    if (input.value.trim().length < min) {
        showError(input, `${message(input)} must contain ${min} characters`);
    } else if (input.value.trim().length > max) {
        showError(input, `${message(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}




form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkRequired(inputArr)
    checkEmail(email);
    checkLength(username, 5, 25)
    checkLength(textBox, 5, 45)

    if (checkRequired) {
        form.submit();
    }
})
