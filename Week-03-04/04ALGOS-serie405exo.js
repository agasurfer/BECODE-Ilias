function permute(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        [array[i], array[array.length - 1 - i]] = [array[array.length - 1 - i], array[i]];
    }
    console.log(array);
    
}






permute([1, "résilience", 42, "Baldur's Gate",27])