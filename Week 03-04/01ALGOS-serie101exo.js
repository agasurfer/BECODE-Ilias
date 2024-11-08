function myFunction(age) {
    while (age >= 0 && Number.isInteger(age) ) {
        return age * 365
    }

}
console.log(myFunction(65));
console.log(myFunction(0));
console.log(myFunction(20));

