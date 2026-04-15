//Substring and Slice
const str = "Nigeria is awesome";
let substringStr = str.substring(0,7)
let slicedStr = str.slice(11,18)
let slicedStri = str.slice(8,10)
console.log(substringStr)
console.log(slicedStr)
console.log(slicedStri)

//Split
const names = "John,Jane,Doe";
let splitSentence = names.split(",")
let joinSentence = splitSentence.join(" ")
console.log(splitSentence)
console.log(joinSentence)
const path = "/user/home/docs";
let splitPath = path.split("/")
let indexPath = splitPath[2]
console.log(splitPath)
console.log(indexPath)

//Mix
const email = "user@example.com";
let userEmail = email.split("@")
let userIndex = userEmail[0]
console.log(userIndex)
let endswithEmail = email.endsWith(".com")
let replaceEmail = email.replace("@","AT")
console.log(endswithEmail)
console.log(replaceEmail)