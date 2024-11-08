function areaOfCountry(country, num) {
const area = (num / 148940000) * 100
console.log(`${country} is ${area.toFixed(2)}% of the total world's landmass`);

}

areaOfCountry("Russia", 17098242);
areaOfCountry("USA", 9372610);
areaOfCountry("Iran", 1648195);