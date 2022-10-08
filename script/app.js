let email = {},
  password = {},
  signInButton;
function handleFloatingLabel() {
  console.log('🌈');
  document.querySelector('.js-input').addEventListener('blur', function () {
    if (this.value.length > 0) {
      document.querySelector('.js-label').classList.add('is-floating');
      console.log('test');
    } else {
     document.querySelector('.js-label').classList.remove('is-floating');
    }
  });
}

function handlePasswordSwitcher() {
  document.querySelector('.js-chec').addEventListener('change', function () {
    // console.log("test")
    if (document.querySelector('.js-pas').type == 'password') {
      document.querySelector('.js-pas').type = 'text';
    } else {
      document.querySelector('.js-pas').type = 'password';
    }
  });
}

function checkemail(){
    if (isValidEmailAddress(email.input.value)) {
        email.input.removeEventListener('input', checkemail);
        removeErrors(email)
        email.errorMessage.innerText=''
}}

function checkpas(){
    console.log(password.input.value>1)
    if (isValidPassword(password.input.value)) {
        password.input.removeEventListener('input', checkpas);
        removeErrors(password)
        password.errorMessage.innerText = '';
}}

function enableListeners() {
  // console.log(email)
  password.input.addEventListener('blur', function () {
    if (!(isValidPassword(password.input.value))) {
      password.errorMessage.innerText = 'invaled';
      password.input.addEventListener('input',checkpas)
      addErrors(password);
    } 
  });
  email.input.addEventListener('blur', function () {
    // console.log('test');
    if (!isValidEmailAddress(email.input.value)) {
      if (isEmpty(email.input.value)) {
        email.errorMessage.innerText = 'Pleas fill in your email';
        email.input.addEventListener('input',checkemail)
        addErrors(email);
      } else {
        email.input.addEventListener('input',checkemail)
        email.errorMessage.innerText = 'Invalid emailaddress';
        addErrors(email);
      }
    }
  });
  signInButton.addEventListener('click', function (e) {
    e.preventDefault();
    if(isValidEmailAddress(email.input.value) && isValidPassword(password.input.value) && !isEmpty(email.input.value)){
        console.log(`email: ${email.input.value} password: ${password.input.value}`)
    }
  });
}

const addErrors =function (parant){
    parant.field.classList.add('has-error');
}

const removeErrors=function(parant){
    parant.field.classList.remove('has-error');
}

const isValidEmailAddress = function (emailAddress) {
  // Basis manier om e-mailadres te checken.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = function (fieldValue) {
  return !fieldValue || !fieldValue.length;
};

const isValidPassword = function (paswoord) {
  return paswoord.length > 1;
};

function getDOMElements() {
  password.input = document.querySelector('.js-pas');
  password.field = document.querySelector('.js-pas-field');
  password.errorMessage = document.querySelector('.js-pas-msg');

  email.input = document.querySelector('.js-mail');
  email.field = document.querySelector('.js-mail-field');
  email.errorMessage = document.querySelector('.js-mail-msg');

  signInButton = document.querySelector('.js-sign-in-button');
  enableListeners();
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('Script loaded!');
  handleFloatingLabel();
  //handlePasswordSwitcher();
  //getDOMElements();
})