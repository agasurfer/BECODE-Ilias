function isPalindrome(mot) {
   
      mot = mot.toLowerCase().replace(/[^a-z]+/g,"")
      if (mot === mot.split("").reverse().join("")) {
        console.log(true);
        
      } else {
        console.log(false);
        
      }
}


isPalindrome("kayak") //true
isPalindrome("race car") //true
isPalindrome("hello world") //false
isPalindrome("Madam, I'm Adam") //true