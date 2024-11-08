function ransomNote(noteText, magazineText) {
    let noteArray = noteText.split(" ");
    let magazineArray = magazineText.split(" ");
    
    
    
    for (let i = 0; i < noteArray.length; i++) {
        
    let indexMot = magazineArray.indexOf(noteArray[i])
        if (indexMot === -1) {
            return false;
            
        } else{ 
        magazineArray.splice(indexMot, 1)
        }
}
   return true;
   
}


console.log(ransomNote("this is a secret note to you from a secret admirer","puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you"
 )); //false
 console.log(ransomNote("this is a note to you from a secret admirer","puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you"
 ));  //true
 console.log(ransomNote("secret","puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you"
 )); //true
 console.log(ransomNote("this is a secret note to you from a secret admirer","puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my secret advice to you"
 )); //true
 console.log(ransomNote("this is a cabaret sauvage a secret admirer","puerto rico is a great place you must hike far from town to find a secret")); //false
//false


