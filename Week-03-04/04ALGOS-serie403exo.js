/*function caesarCipher(str, num) {
   
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
   
    let final = ""
   
    num = num % 26  //Trouvé sur Stackflow
    
    for (let i = 0; i < str.length; i++) {
    
        let lettreActuelle = str[i].toLowerCase();
        if (alphabet.includes(lettreActuelle)) {
            
            let indexActuel = alphabet.indexOf(lettreActuelle)
            
            let indexNew = indexActuel + num
            
            if (indexNew >= 26) indexNew -= 26  //Trouvé sur StackFlow
            if (indexNew < 0) indexNew += 26    // Trouvé sur StackFlow
            
            let nouvLettre = alphabet[indexNew]

            final += nouvLettre
        } else {
            final += lettreActuelle
        }
  }


console.log(final);


}
*/
function caesarCipher(str, num) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let final = "";

    num = num % 26;

    str.split('').forEach(char => {
        let lettreActuelle = char.toLowerCase();

        if (alphabet.includes(lettreActuelle)) {
            let indexActuel = alphabet.indexOf(lettreActuelle);
            let indexNew = (indexActuel + num + 26) % 26; // Eviter les index négatifs

            final += alphabet[indexNew];
        } else {
            final += char;
        }
    });

    console.log(final);
}

caesarCipher("zoo keeper", 2); //----> "bqq mggrgt"
caesarCipher("bqq mggrgt", -2); //----> "zoo keeper"
caesarCipher("My name is Henrique", 3); //----> "pb qdph lv khqultxh "