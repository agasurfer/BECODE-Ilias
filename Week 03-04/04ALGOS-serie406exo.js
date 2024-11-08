function calc(numArray, sum) {

    let array = []
    for (let i = 0; i < numArray.length; i++){
     for (let j = i+ 1; j < numArray.length; j++)  {
      if (numArray[i] + numArray[j] === sum) {
        array.push([numArray[j], numArray[i]])
      }
     }
    } console.log(array);
    
}

calc([1, 6, 4, 5, 3, 3], 7) // --> [[6,1], [3,4], [3,4]]
calc([10, 8, 4, 7, 12, 11, 6], 11)