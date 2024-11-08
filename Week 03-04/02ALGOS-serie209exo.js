function reverseWords(phrase) {
let array = phrase.trim().split(" ");
    
   let arraySansEspace = [];

   for (let i = 0; i < array.length; i++) {
    if (array[i] !== "") {
        arraySansEspace.push(array[i]);
    }
}

 let arrayRev = arraySansEspace.reverse();  
 let final = arrayRev.join(" ");
    

    console.log(final);
    
    
}


reverseWords(" the sky is blue");
reverseWords("hello   world!  ");
reverseWords("a good example");
