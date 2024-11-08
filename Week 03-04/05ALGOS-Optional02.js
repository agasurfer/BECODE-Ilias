const capitalize = (str)=> (str.split(" ").map(element => element.charAt(0).toUpperCase() + element.slice(1)).join(" "))


console.log(capitalize("belgium"));
// Result : "Belgium"

console.log(capitalize("brazil"));
// Result : "Brazil"

console.log(capitalize("brussels"));
// Result : "Brussels"
