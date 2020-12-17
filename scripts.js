const form =  document.getElementById('form');
const username =  document.getElementById('username');
const email =  document.getElementById('email');
const password =  document.getElementById('password');
const password2 =  document.getElementById('password2');

//Show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
};

// Show input sucess outline

function showSuccess (input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
};


// Check e-mail

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'O e-mail não é válido');
    }
};

// Check field length 

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `O campo precisa ter pelo menos ${min} caracteres`);
    } else if(input.value.length > max) {
        showError(input, `O campo só pode ter até ${max} caracteres`);
    } else {
        showSuccess(input);
    }
}

// Check required fields

function checkRequired(inputArr) {
    inputArr.forEach( function(input){
        if (input.value === '') {
            showError(input, 'O campo é obrigatório')
        } else {
            showSuccess(input)
        }
    })}


// Check matching passwords

function checkPasswordMatch(input1, input2) {
    if(input1.value === input2.value) {
        showSuccess(input);
    } else {
        showError(input2, 'As senhas devem ser iguais');
    }
};


//Event list

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordMatch(password, password2);
});