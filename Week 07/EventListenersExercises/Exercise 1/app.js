const btnHello = document.querySelector("button");

const btnGdbye = btnHello.nextElementSibling
/* btn.addEventListener("click", () => {
    if (btn.innerText === "Hello") {
        alert("Oh my God! You again!!!")
    } else if (btn.innerText === "Goodbye") {
        alert("Thank God ! I thought you'd' never leave !")
    }
        
    
}) */

    btnHello.addEventListener("click", () => {
        alert("Oh my God! You again!!!")
    });

    btnGdbye.addEventListener("click", () => {
        alert("Thank God ! I thought you'd' never leave !")
    });