

function countTrue(array) {
    let iteration = 0
for (let i = 0; i < array.length; i++) {
    if ( array[i] === true ) {
         iteration ++
         } 
    } ; 
console.log(iteration); 
}

countTrue([true, false, false, true, false]);
countTrue([false, false, false, false]);
countTrue([]);

// Autre option
//let iteration = array.filter(Boolean).length;
//console.log(iteration);