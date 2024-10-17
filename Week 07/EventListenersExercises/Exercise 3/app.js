const btn = document.querySelector("button");
const text = document.querySelector("h1")

btn.addEventListener("click",() => {
    btn.parentElement.style.backgroundColor = `rgb(${Math.round(Math.random()* 255) }, ${Math.round(Math.random()* 255) }, ${Math.round(Math.random()* 255) })`
    text.innerText = btn.parentElement.style.backgroundColor
})