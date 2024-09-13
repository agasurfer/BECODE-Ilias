function possibleBonus(a, b){
    
if (a + 6 >= b && a !== b && a < b) {
    console.log(true);
    
} else if (a +6 < b) {
    console.log(false);
    
} else if (a === b) {
    console.log(false);
    
} else if (a > b) {
    console.log(false);
    }
}
    


possibleBonus(3, 7);
possibleBonus(1, 9);
possibleBonus(5, 3);
possibleBonus(3, 3);