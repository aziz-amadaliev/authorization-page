const email = document.querySelector('.email');
const password = document.querySelector('.pwd');
const userName = document.querySelector('.user');
const result = document.querySelector(".result");
const togglePassword = document.querySelector('#togglePassword');
const signUp = document.querySelector('.signUpBtn');

const processSignUp = function(event) {
    event.preventDefault();

    if(userName.value === "" || email.value === "" || password.value === ""){
        result.innerHTML = 'User info missing';
        result.style.color = "red";
    } else {
        const userObj = {
            userName: userName.value,
            email: email.value,
            password: password.value,
        }
    
        console.log(userObj, 'obj data')

        const userJson = JSON.stringify(userObj);
        localStorage.setItem(email.value, userJson)

        console.log(userJson, 'json data')

        userName.value = "";
        email.value = "";
        password.value = "";
    
        result.innerHTML = 'User added';
        result.style.color = "green";

        setTimeout(() => {
            window.open('./index.html')
        }, 2000)
    }

}

signUp.addEventListener('click', processSignUp)

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});
  