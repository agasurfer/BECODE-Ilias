const btn = document.querySelector(".button");
const modal = document.querySelector(".modal");
const overlay = document.querySelector("#overlay");
const cross = document.querySelector(".close")

btn.addEventListener("click", () => {
     modal.style.display = "flex";
    modal.style.flexDirection = "column";
    modal.style.justifyContent = "center";
    modal.style.alignContent = "center";
    
    overlay.style.display = "block";

    document.body.style.overflow = "hidden"

    

});

cross.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflow = "visible"

});

overlay.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflow = "visible"

});

