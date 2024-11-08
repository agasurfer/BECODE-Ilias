
const removeDuplicates = (array)=> console.log([...new Set(array)])

removeDuplicates([4, 9, 5, 1, 3, 2, 4, 1, 8]);
// Result : [4, 9, 5, 1, 3, 2, 8]

removeDuplicates(["hello", "world", "goodbye", "world"]);
// Result : ['hello', 'world', 'goodbye']

removeDuplicates([true, true, false, true, true, false]);
// Result : [true, false]


// Trouvé sur Stackoverflow, très pratique Set