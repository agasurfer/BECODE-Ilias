const btns = document.querySelectorAll("button");

btns.forEach((btn) => {

    btn.addEventListener("click",() => {

     if (btn.innerText === "Open tab") { 
     
        btn.nextElementSibling.classList.remove("hidden")
        btn.innerText = "Close tab"
     
            
    }

    else if (btn.innerText === "Close tab") {
            btn.nextElementSibling.classList.add("hidden")
            btn.innerText = "Open tab"
        } 
    })
})