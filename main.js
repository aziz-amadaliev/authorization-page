const email = document.querySelector("#email");
const password = document.querySelector("#pwd");
const submit = document.querySelector(".btn");

const processSignIn = function() {
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    console.log(localStorage.getItem("password"), "line8");
    console.log(email.value, "line9")

    const emailInStorage = localStorage.getItem("email")
    console.log(emailInStorage, 'line11')
}

//console.log(localStorage.length)

submit.addEventListener("click", processSignIn)
