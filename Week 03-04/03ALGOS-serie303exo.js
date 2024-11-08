function isSmooth(str) {
  
    const array = str.split(" ")

for (let i = 0; i < array.length - 1; i++) {
    if(array[i][array[i].length - 1] !== array[i+1][0]) {
        console.log(false);
        return false;
        
    } else {
        console.log(true);
        return true;
    }
}

  
};

isSmooth("Marta appreciated deep perpendicular right trapezoids");
isSmooth("Someone is outside the doorway");
isSmooth("She eats super righteously");
