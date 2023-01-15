const baseValue = parseInt(prompt("Enter base value of triangle: "));
const highValue = parseInt(prompt("Enter high value of triangle: "));

// calculate area
const perimeterValue = baseValue * 3;
const areaValue = (baseValue * highValue) / 2;

console.log(`The area value of the triangle is ${areaValue}`);

console.log(`The perimeter value of the triangle is ${perimeterValue}`);
