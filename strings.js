//length of a string
let stringText = "This is a class on string methods"
let array = ["Esther", "Aanuoluwapo", "Oluwaferanmi"]
console.log(stringText.length)
console.log(array.length)

//case
let capitalLetter = stringText.toUpperCase()
let smallLetter = stringText.toLowerCase()
console.log(capitalLetter)
console.log(smallLetter)
//console.log(stringText.toUpperCase())
//console.log(stringText.toLowerCase())
//console.log(stringText)

//trim
let Str = " Hello World! "
let trimmedStr = Str.trim()
let frontTrimmedStr = Str.trimStart()
let endTrimmedStr = Str.trimEnd()
console.log(trimmedStr)
console.log(frontTrimmedStr)
console.log(endTrimmedStr)
//console.log(Str.trim())
//console.log(Str.trimStart())
//console.log(Str.trimEnd())

let signupName = " Esther"
let signinName = "Esther"
if(signupName.trim() === signinName){console.log("Welcome back, Esther!")}else{console.log("Invalid login Info")}

let userName = " Feranmi ";
if(userName.trim() === "Feranmi"){console.log("login successful");}

//idexOf and includes
let user_email = "bamisioluwaferanmi@gmail.com"
let email_index = user_email.indexOf("o")
console.log(email_index)
//console.log(user_email.indexOf("k"))

//includes
let email_contains_at = user_email.includes("@")
console.log(email_contains_at)
//console.log(user_email.includes("Ruth"))

//startsWith and endsWith
let studentName = "techcrush Esther 6"
let starts = studentName.startsWith("techcrush")
console.log(starts)
//console.log(studentName.startsWith("techcrush"))

let ends = studentName.endsWith("6")
console.log(ends)
//console.log(studentName.endsWith("6"))

//slice and substring
let testString = "my name is Esther!"
let slicedString = testString.slice(-15)
let substringString = testString.substring(-10,10)
console.log(slicedString)
console.log(substringString) 
//console.log(testString.slice(0,10))
//console.log(testString.substring(0,10))

//replace an replaceAll
let text = "Esther is a techie. Esther loves coding and Esther loves teaching"
let replacedText = text.replace("Esther", "She")
let replacedAllText = text.replaceAll("Esther", "She")
console.log(replacedText)
console.log(replacedAllText)
//console.log(text.replace('Esther', "She"))
//console.log(text.replaceAll("Esther", "She"))

//classwork
//Given this string:
const msg = " Hello, WORLD! ";
let msgtrimmed = msg.trim()
console.log(msgtrimmed)
console.log(msgtrimmed.startsWith("Hello"))
console.log(msgtrimmed.endsWith("WORLD!"))
console.log(msgtrimmed.toLowerCase())
console.log(msgtrimmed.indexOf("WORLD"))
console.log(msgtrimmed.replace("WORLD", "Nigeria"))
console.log(msgtrimmed.replaceAll("L", "1"))
console.log(msgtrimmed.slice(3,8))

//split
const sentence = "Languages: Javascript, Python, Java, C++"
let splitSentence = sentence.split("")
console.log(splitSentence)
//console.log(sentence.split(""))

let example = "she is a girl , she is a teacher, she is eating"
let splitExample = example.split("is")
console.log(splitExample)
//console.log(example.slice(4,6))
//console.log(example.indexOf("is"))
//console.log(example.includes("a"))
//console.log(example.startsWith("she"))
//console.log(example.endsWith("eating"))
//console.log(example.replaceAll("is","wants"))