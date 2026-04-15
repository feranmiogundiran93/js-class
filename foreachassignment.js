//Section A - forEach
//Question 1
const identifiers = [2, 4, 6, 8, 10]
identifiers.forEach(function(identifier){console.log(identifier * 2)})

//Question 2
const names = ["Esther!", "John!", "Ada!", "Mike!"];
names.forEach(function(name){console.log("Hello " + name)})

//Section B - Map
//Qustion 3
const numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(number => number ** 2)
console.log(squaredNumbers)

//Question 4
const prices = [100, 200, 300];
let discountedPrices = prices.map(price => price * (1 - 10/100))
console.log(discountedPrices)

//Section C - filter
//Question 5
const digits = [5, 12, 8, 20, 3];
let activeDigits = digits.filter((digit)=>{return digit > 10})
console.log(activeDigits)

//Question 6
const ages = [15, 22, 17, 30, 18];
let adults = ages.filter(function(age){return age >18})
console.log(adults)

//Question 7
const figures = [10, 15, 20, 25, 30];
let activeFigures = figures.filter(function(figure){return figure > 20})
let inactiveFigures = figures.filter(function(figure){return figure <= 20})
let squaredFigures = inactiveFigures.map(inactivefigure => inactivefigure ** 2)
console.log(activeFigures)
console.log(squaredFigures)