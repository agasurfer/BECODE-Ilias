

let body = document.querySelector("body");

let generateBG = (color) => {
    let delay = Math.floor(Math.random() * 1000); 

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (delay < 500) { 
                body.style.backgroundColor = color;
                resolve();
            } else {
                reject();
            }
        }, delay);
    });
};

const rainbow = async () => {
    try { 
        await generateBG("blue");
        await generateBG("yellow");
        await generateBG("red");
        await generateBG("cyan");
        await generateBG("violet");
        await generateBG("green");
        await generateBG("purple");
    } catch(error) { 
        console.log("A wild Error appears");
    }
};

rainbow();
