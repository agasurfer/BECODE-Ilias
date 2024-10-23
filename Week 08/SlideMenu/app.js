const hamburger = document.querySelector("p");
const navbar = document.querySelector(".navbar")
const cross = document.querySelector(".closebtn")

hamburger.addEventListener("click", () => {
    navbar.style.width = "250px"
})

cross.addEventListener('click',() => {
    navbar.style.width = "0";
})