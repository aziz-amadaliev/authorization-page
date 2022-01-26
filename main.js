const email = document.querySelector('.email');
const password = document.querySelector('.pwd');
const submit = document.querySelector(".btn");
const result = document.querySelector(".result");
const togglePassword = document.querySelector('#togglePassword');
const signUpElement = document.querySelector('.createSignUpBtn')
const signUp = document.querySelector('.signUpBtn');

const processSignIn = function(event) {
    event.preventDefault();

    console.log(email.value, 'line 12')
    console.log(password.value, 'line 13')

    const userEmailJson = localStorage.getItem(email.value);
    console.log(userEmailJson, 'user email info')

    const userDataObj = JSON.parse(userEmailJson);
    console.log(userDataObj, 'user data')

    while (signUpElement.firstChild) {
        signUpElement.removeChild(signUpElement.firstChild); //to remove child elements when submit clicked
    }

    if (email.value === "") {
        result.innerHTML = 'Enter email address';
        result.style.color = "red";
    } else if (userDataObj === null){
        result.innerHTML = 'User not found';
        result.style.color = "red";
        const signUpTag = document.createElement('a')
        signUpTag.innerText = "Sign Up"
        signUpTag.href = "./sign-up.html";
        signUpTag.target = "_blank";
        signUpTag.classList.add("signUpTag");
        signUpElement.appendChild(signUpTag)
    } else if (email.value === userDataObj.email && password.value === userDataObj.password) {
        result.innerHTML = 'Login Successful!';
        result.style.color = "green";
        setTimeout(() => {
            window.open('https://www.seytech.co/')
        }, 1500)
        
    } else {
        result.innerHTML = 'Wrong password';
        result.style.color = "red";
    }

}

submit.addEventListener("click", processSignIn)

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});

