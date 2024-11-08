
let dayDif = (a, b)=> Math.round(Math.abs((a - b) / (24 * 60 * 60 * 1000)))

console.log(dayDif(new Date("2020-10-21"), new Date("2021-10-22")));
// Result : 366
