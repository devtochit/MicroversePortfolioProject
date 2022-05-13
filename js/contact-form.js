const form = document.querySelector('.formidable');
const username = document.getElementById('username');
const email = document.getElementById('email');
const MessageBox = document.getElementById('message');
const inputArr = [ username,email,textBox ]



const isEmailValid = function(input){
    const re = /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
          if (re.test(String(input.value).toLocaleLowerCase().trim())){
              showSuccess( input)
          }else{
              showError ( input, 'Email is not valid ')
          }
};

    const message = function(input) {
    const errorMessage = input.name.replace(/-p/, ' P');
    return errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
}

 const  showError =(input, message )=>{
     let formControl = input.parentElement;
     formControl.classList=' form-container error';
     const small = formControl.querySelector('small')
     small.innerText = message;
 }
 const showSuccess=( input )=>{
  let formControl=input.parentElement;
 formControl.classList =' form-container success'
 }


 const checkRequired= function(inputArr){ 
    inputArr.forEach( input =>{
  if( input.value.trim()===''){
     showError(input, `${ message(input)} is required.`);
     return
  } else {
      showSuccess(input )
  }
    })

 }


 const checkLength = function(input, min, max) {
    if (input.value.trim().length < min) {
        showError(input, `${message(input)} must contain ${min} characters`);
    } else if (input.value.trim().length > max) {
        showError(input, `${message(input)} must be less than ${max} characters`);
    } else{
        showSuccess(input);
    }
}




 form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkRequired(inputArr)
    isEmailValid (email) 

 })






















































 