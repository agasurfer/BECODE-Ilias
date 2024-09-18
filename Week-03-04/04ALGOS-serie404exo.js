function reverse(str) {
    const array = str.split(" ");  
    const reversedArray = array.map(element => element.split("").reverse().join(""));
    const reversedStr = reversedArray.join(" ").toLowerCase();  
    console.log(reversedStr);
}

reverse("This string of words");