
// VARIABLES
const hamburger = document.querySelector("p");
const navbar = document.querySelector(".navbar")
const cross = document.querySelector(".closebtn")

// MAKES HAMBURGER OPEN MENU
hamburger.addEventListener("click", () => {
    navbar.style.width = "250px"
})

// MAKES THE CROSS CLOSE THE MENU
cross.addEventListener('click',() => {
    navbar.style.width = "0";
})