function arrayOfMultiples (num, length) {
let array = []

for (let i = 1; i <= length; i++) {
    array = (num * i) 
    console.log(array);
    
}
}

arrayOfMultiples(7, 5)
arrayOfMultiples(12, 10)
arrayOfMultiples(17, 6)