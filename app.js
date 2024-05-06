let btnSignUp = document.querySelector(".btnSignUp")
let backBtn = document.querySelector(".backBtn")
let containerSignIn = document.querySelector(".containerSignIn")
let containerSignUp = document.querySelector(".containerSignUp")

btnSignUp.addEventListener("click", function () {

    containerSignIn.style.display = 'none';
    containerSignUp.style.display = 'contents';

})

backBtn.addEventListener("click", function () {

    containerSignIn.style.display = 'contents';
    containerSignUp.style.display = 'none';

})
