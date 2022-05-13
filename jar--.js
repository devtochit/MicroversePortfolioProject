const form = document.querySelector('.form');
const fullName = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const error = document.querySelector('#error-message');

const isRequired = (value) => value !== '';
const isBetween = (length, min, max) => !(length < min || length > max);

const isEmailValid = (email) => {
    const re = /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
    return re.test(email);
};

const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    const error = formField.querySelector('small');
    error.textContent = '';
};

const checkFullName = () => {
    let valid = false;
    const min = 3;
    const max = 25;
    const username = fullName.value.trim();

    if (!isRequired(username)) {
        showError(fullName, 'Name cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(fullName, `Name must be between ${min} and ${max} characters.`);
    } else {
        showSuccess(fullName);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const emailVal = email.value.trim();
    if (!isRequired(emailVal)) {
        showError(email, 'Email cannot be blank.');
        error.innerHTML = 'Email cannot be blank';
    } else if (!isEmailValid(emailVal)) {
        showError(email, 'Email is not valid.');
        error.innerHTML = 'Email is not valid';
    } else if (email.value !== email.value.toLowerCase()) {
        showError(email, 'Email must be in lowercase');
        error.innerHTML = 'Email must be in lowercase';
    } else {
        showSuccess(email);
        valid = true;
    }
    return valid;
};

const checkMessage = () => {
    let valid = false;
    const min = 10;
    const max = 500;
    const msgVal = message.value.trim();

    if (!isRequired(msgVal)) {
        showError(message, 'Message cannot be blank.');
    } else if (!isBetween(msgVal.length, min, max)) {
        showError(message, `Message must be between ${min} and ${max} characters.`);
    } else {
        showSuccess(message);
        valid = true;
    }
    return valid;
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const isUsernameValid = checkFullName();
    const isEmailValid = checkEmail();
    const isMessageValid = checkMessage();
    const isFormValid = isUsernameValid && isEmailValid && isMessageValid;

    if (isFormValid) {
        form.submit();
    }
});

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};

form.addEventListener(
    'input',
    debounce((e) => {
        switch (e.target.id) {
            case 'name':
                checkFullName();
                break;
            case 'email':
                checkEmail();
                break;
            case 'message':
                checkMessage();
                break;
            default:
                break;
        }
    }),
);
