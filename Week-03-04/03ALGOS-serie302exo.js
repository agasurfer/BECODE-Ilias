function reverseOdd(str) {

    let array = str.split(" ");

let newArray = []

for (let i = 0; i < array.length; i++) {
    if (array[i].length % 2 !== 0) {
       
    newArray.push(array[i].split("").reverse().join(""));
       
    } else if (array[i].length % 2 === 0) {
       newArray.push(array[i]);
    } 
    }console.log(newArray.join(" "));
}

reverseOdd("Bananas");
reverseOdd("One two three four");
reverseOdd("Make sure uoy only esrever sdrow of ddo length");