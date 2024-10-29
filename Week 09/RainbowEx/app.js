let body = document.querySelector("body");

let bodyChange = (color,delay) => {

return new Promise(resolve => {
    setTimeout(() => {
        body.style.backgroundColor = color
  resolve();
}, delay)
})
}

bodyChange("blue", 1000)

    .then(() => {
        return bodyChange("red", 1000)
    })

    .then(() => {
        return bodyChange("cyan", 1000)
    })

    .then(() => {
        return bodyChange("violet", 1000)
    })

    .then(() => {
        return bodyChange("green", 1000)
    })

    .then(() => {
        return bodyChange("purple", 1000)
    })