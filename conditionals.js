//if-else statements
let userAge = 16;
if (userAge >= 18){console.log("welcome to club 9ja")}else{console.log("sorry, you are not allowed to enter")}

let gender = "male";
if (gender === "female"){console.log("welcome to the female section")}else if (gender === "male"){console.log("welcome to the male section")}else if (gender === "other"){console.log("welcome to the others section")}else {console.log("we do not know where you belong")}

let username = "eranmi";
let password = "123";
if (username === "feranmi" && password === "password123"){console.log("login successful")}else if (username === "feranmi" || password === "password123"){console.log("username or password incorrect")}else {console.log("login declined")}

let voterAge = 15;
if (voterAge >= 18){console.log("eligible to vote")}else{console.log("ineligible to vote")}