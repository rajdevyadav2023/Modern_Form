// Jai Shree Ganeshay Namah!
// Defining the rules for input fields
const nameRegex = /^[a-zA-Z ]{2,}$/;
const usernameRegex = /^\w+$/;
const emailRegex = /^\w+([.-]?\w)*@\w+([.-]?\w+)*(\w{2,})+$/
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/;
// Selecting all input fields 
const firstName = document.getElementById("f-name");
const lastName = document.getElementById("l-name");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("c-password");
// Validation function for first name
firstName.addEventListener("input", function(){
    if(nameRegex.test(this.value)){
        this.style.borderColor = "green";
    } else{
        this.style.borderColor = "red"
    }
});
firstName.addEventListener("blur", function(){
    if(this.value.length == 0){
        this.style.borderColor = "#f1f1f1";
    }
})
// -------------------------------------------
// Validation function for last name
lastName.addEventListener("input", function(){
    if(nameRegex.test(this.value)){
        this.style.borderColor = "green";
    } else{
        this.style.borderColor = "red"
    }
});
lastName.addEventListener("blur", function(){
    if(this.value.length == 0){
        this.style.borderColor = "#f1f1f1";
    }
})
// -------------------------------------------
// -------------------------------------------
// Validation function for username
username.addEventListener("input", function(){
    if(usernameRegex.test(this.value)){
        this.style.borderColor = "green";
    } else{
        this.style.borderColor = "red"
    }
});
username.addEventListener("blur", function(){
    if(this.value.length == 0){
        this.style.borderColor = "#f1f1f1";
    }
})
// -------------------------------------------
// Validation function for email
email.addEventListener("input", function(){
    if(emailRegex.test(this.value)){
        this.style.borderColor = "green";
    } else{
        this.style.borderColor = "red"
    }
});
email.addEventListener("blur", function(){
    if(this.value.length == 0){
        this.style.borderColor = "#f1f1f1";
    }
})
// -------------------------------------------
// Validation function for password
password.addEventListener("input", function(){
    if(passwordRegex.test(this.value)){
        this.style.borderColor = "green";
    } else{
        this.style.borderColor = "red"
    }
});
password.addEventListener("blur", function(){
    if(this.value.length == 0){
        this.style.borderColor = "#f1f1f1";
    }
})
// -------------------------------------------
// Validation function for confirm password
confirmPassword.addEventListener("input", function(){
    if(passwordRegex.test(this.value)){
        this.style.borderColor = "green";
    } else{
        this.style.borderColor = "red"
    }
});
confirmPassword.addEventListener("blur", function(){
    if(this.value.length == 0){
        this.style.borderColor = "#f1f1f1";
    } else if(this.value != password.value){
        this.style.borderColor = "red";
    } else {
        this.style.borderColor = "green";
    }
})
// -------------------------------------------