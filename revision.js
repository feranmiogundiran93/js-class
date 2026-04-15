let str ="coding is fun"
//extract the word "coding"
let word = str.slice(0,6)
console.log(word)

let fun = str.substring(10,13)
console.log(fun)

let is = str.slice(7,9)
console.log(is)

//split
const colors = "red, green, blue";
const comma = colors.split(",")
console.log(comma)
const joined = comma.join("-")
console.log(joined)

const url = "/api/v1/users";
const slash = url.split("/")
const v1Index = slash[2]
console.log(slash)
console.log(v1Index)