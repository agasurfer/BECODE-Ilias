function detectWord(mot) {

    let motCache = ""
    
    for (let i = 0; i < mot.length; i++) {
       
       let minuscule = mot.charAt(i)
      
       if (minuscule === minuscule.toLowerCase()) {
        motCache += minuscule
        } 
    }
    console.log(motCache);
    
}

detectWord("MLSQDJKFjSDFaDFQSvQDaSQLDKFsJGFcRLIrDFQiLFpKQJTtJQ")