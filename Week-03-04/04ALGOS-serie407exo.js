function fibonacci(num) {
   let array = [1, 1]
    for (let i = 2; i < num; i ++ ) {
        array.push(array[i - 1] + array[i - 2]) 
    } 
    console.log(array);
  
} 



fibonacci(4) //----> [1, 1, 2, 3]
fibonacci(9) //----> [1, 1, 2, 3, 5, 8, 13, 21, 34]
fibonacci(6) //----> [1, 1, 2, 3, 5, 8]
