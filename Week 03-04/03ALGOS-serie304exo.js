function sevenBoom(array) {
    
array1 = array.toString().split("");   

if (array1.includes("7")) {
    console.log("Boom!");
    
   } else {
    console.log("There is no 7 in the array");
   }
}
sevenBoom([1, 2, 3, 4, 5, 6, 7]);
sevenBoom([8, 6, 33, 100]);
sevenBoom([2, 55, 60, 97, 86])