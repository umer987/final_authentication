let password = document.querySelector("#pass")
let email = document.querySelector(".aill")
let loginn =document.querySelector("#logg")
let createa =document.querySelector("#cretaa")

loginn.addEventListener("click", function loggg() {
    if (password.value == "semi" && email.value == "umershakir987@gmail.com") {
        window.location.href="loggedinn.html";
    }
    else if(password.value == "shahmir" && email.value == "shahmir123@gmail.com"){
        window.location.href="shahmir.html";

    }
    else{
        alert("OOPS! INCORRECT CREDENTILS")
    }
})


