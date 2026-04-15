let item1 = "milk"
let item2 = "milo"
let item3 = "rice"
//creating an array in a square bracket
let items = ["milk", "milo", "rice"]
console.log(items[0])
console.log(items.length)

//forEach
let fruits = ["apple", "banana", "orange", "grape", "mango"]
fruits.forEach(function(fruit){console.log("i eat " + fruit)})
//named or declarative function means you have to mention the keyword "function"

let names = ["esther", "john", "doe", "jane", "smith"]
names.forEach(function(name){console.log("expel " + name)})


//map methods
let scores = [90, 80, 70, 60, 50]
let newscores = scores.map(score => {return score + 5})
//arrow function uses this (=>)
console.log(newscores)

let students = ["esther", "john", "doe", "jane", "smith"]
//let nameTag = students.map(student => "TECH_CRUSH_2026_COHORT_6 " + student) //arrow or fat arrow function
//console.log(nameTag)

let nameTag = students.map(function(tag){return "TECH_CRUSH_2026_COHORT_6 + tag"}) //named function
console.log(nameTag)

//filter method
let jambScores = [200, 250, 300, 150, 180, 280, 290, 100]
let passed = jambScores.filter((score)=>{return score >= 200})
console.log(passed)

let ages = [18, 25, 30, 15, 20, 35, 40]
let adults = ages.filter(function(age){return age >=18})
console.log(adults)

//learning github
