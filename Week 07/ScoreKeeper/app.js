let scoreP1 = document.querySelector(".scoreP1");
let scoreP2 = document.querySelector(".scoreP2");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const rst = document.querySelector(".rst");

scoreP1.innerHTML = 0
scoreP2.innerHTML = 0

const check = () => {
    if (parseInt(scoreP1.innerHTML) + parseInt(scoreP2.innerHTML) === 5){
    
        btn1.removeEventListener("click",addp1)
        btn2.removeEventListener("click",addp2)

       if (parseInt(scoreP1.innerHTML) > parseInt(scoreP2.innerHTML)) {
        scoreP1.style.color = "green"
        scoreP1.style.fontSize = "5rem"
        scoreP2.style.color = "red"
        scoreP2.style.fontSize = "5rem"
       } else if (parseInt(scoreP1.innerHTML) < parseInt(scoreP2.innerHTML)) {
        scoreP1.style.color = "red"
        scoreP1.style.fontSize = "5rem"
        scoreP2.style.color = "green"
        scoreP2.style.fontSize = "5rem"
       } 
    } 

}

const addp1 = () => {
    scoreP1.innerHTML = parseInt(scoreP1.innerHTML) + 1
    check()
}

const addp2 = () => {
    scoreP2.innerHTML = parseInt(scoreP2.innerHTML) + 1
    check()
}

btn1.addEventListener("click",addp1)
btn2.addEventListener("click",addp2)

rst.addEventListener("click", () => {
    scoreP1.innerHTML = 0
    scoreP2.innerHTML = 0
    scoreP1.style.color = "black"
    scoreP1.style.fontSize = "1rem"
    scoreP2.style.color = "black"
    scoreP2.style.fontSize = "1rem"
    btn1.addEventListener("click",addp1)
    btn2.addEventListener("click",addp2)
    

}
)

