let password2 = document.querySelector("#pass")
let email2 = document.querySelector("#aill")
let crea =document.querySelector("#oklll")
let gsirth =document.querySelector("#poiu")
let lohbutti =document.querySelector("#logg")
let newpassword=""
let newmail =""








lohbutti.addEventListener("click", function loki() {
    
    newpassword+=password2.value
    newmail+=email2.value
    
    
    console.log(newpassword,newmail)
    



let b= email2.value
let c =password2.value

 
if (c == newpassword && b == newmail) {
    window.location.href="loggedinn.html";
}
else{
    alert("OOPS! INCORRECT CREDENTILS")
}





})

// })





  
