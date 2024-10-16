const buttons = document.querySelector(".container");
const title = document.querySelector("h1");



for (let i = 0; i < 100; i++ ) {
    
    const newButton = document.createElement("button");
    newButton.textContent = `I am button ${i}`;

    setTimeout(() => { 
    buttons.appendChild(newButton);
    }, 2000)
}

setTimeout(() => { 
    title.innerText = "There are a lot of buttons here!"
}, 4000)