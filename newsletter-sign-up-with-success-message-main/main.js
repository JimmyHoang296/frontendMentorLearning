var subscribeBtn = document.getElementById("subscribeBtn")
var emailInput = document.getElementById("emailInput")
var dismissBtn = document.getElementById("dismissBtn")

var signUpForm = document.querySelector(".sign-up-form")
var message = document.querySelector(".message")
var inputDiv = document.querySelector(".input")

// handle submit

subscribeBtn.addEventListener('click',()=>{
    // email validation
    var email = emailInput.value
    if (validateEmail(email)){
        signUpForm.classList.toggle("hidden")
        message.classList.toggle("hidden")
        emailInput.value = ""
        inputDiv.classList.remove("err")
    }else{
        console.log('err')
        inputDiv.classList.add("err")
    }

})

dismissBtn.addEventListener('click',()=>{
    signUpForm.classList.toggle("hidden")
    message.classList.toggle("hidden")
})

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}