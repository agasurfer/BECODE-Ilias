function findBrokenKeys(a, b){

    let array = [];

for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i] && !array.includes(a[i])) {
        array.push(a[i])
    } 
} console.log(array);

}

findBrokenKeys("happy birthday", "hawwy birthday");
findBrokenKeys("starry night", "starrq light");
findBrokenKeys("beethoven", "affthoif5");