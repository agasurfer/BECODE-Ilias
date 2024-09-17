function convert(num) {
    
arrayTemp = num.toLowerCase().split("")
nombre = []
if (arrayTemp.includes("c")) {
    for (let i = 0; i < arrayTemp.length ; i++) {
    if ((!isNaN(arrayTemp[i]))){
        nombre.push(arrayTemp[i])
    }
    } let resultat = nombre.join("");
    
    let celTofar = () => { return (resultat * 9/5) + 32}
    console.log(`${Math.round(celTofar())}°F`);
    }
else if (arrayTemp.includes("f")) {
    for (let i = 0; i < arrayTemp.length ; i++) {
        if ((!isNaN(arrayTemp[i]))){
            nombre.push(arrayTemp[i])
        }
        } let resultat = nombre.join("");
        let farToCel = () => { return (resultat - 32) * 5/9}
        console.log(`${Math.round(farToCel())}°C`);
        

    } 
else if (!isNaN(nombre)) {
    console.log("Error");
    
    }
}

convert("35°C");
convert("19°F");
convert("33");


let celTofar = (x) => { return (x * 9/5) + 32}

let farToCel = (x) => { return (x - 32) * 5/9}

/*function convert(temp) {
    temp = temp.toLowerCase();  
    let x = parseFloat(temp);  
    
    if (temp.includes("c")) {
        let celToFar = (x * 9/5) + 32;
        console.log(`${Math.round(celToFar)}°F`);
    } 
    else if (temp.includes("f")) {
        let farToCel = (x - 32) * 5/9;
        console.log(`${Math.round(farToCel)}°C`);
    } 
    else {
        console.log("Error");
    }*/