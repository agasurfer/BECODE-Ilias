function oddishOrEvenish(num) {
   let sum = 0 
   while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
     } if (sum % 2 === 0) {
    console.log("Evenish");
     } else {
    console.log("Oddish");
     }
}


oddishOrEvenish(43);
oddishOrEvenish(373);
oddishOrEvenish(4433);