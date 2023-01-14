const baseValue = parseInt (prompt('Enter base value of triangle: '))
const highValue = parseInt (prompt('Enter high value of triangle: '))

// calculate area
const roundValue = baseValue * 3
const areaValue = (baseValue * highValue) / 2

console.log (
    `The value of the triangle area is ${areaValue}`
)

console.log (
    `The value of the triangle is ${roundValue}`
)