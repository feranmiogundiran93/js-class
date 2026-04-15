//Assignment: Online Bookstore

const customerName = "Feranmi";
const customerAge = 27;
const bookTitle = "The awakening of a dying Dream";
let bookPrice = 15000;
let quantity = 15;
const isStudent = false;
console.log(customerName)
console.log(customerAge)
console.log(bookTitle)
console.log(bookPrice)
console.log(quantity)
console.log(isStudent)

//Arithmetic Operators
//let bookPrice = 15000;
//let quantity = 15;
let totalPrice = bookPrice * quantity;
console.log(totalPrice)

//Comparison Operators
let isAdult = customerAge >= 18;
let isbuyingManyBooks = quantity > 3;
let isBookFiveThousand = bookPrice === 5000;
console.log(isAdult)
console.log(isbuyingManyBooks)
console.log(isBookFiveThousand)

//Non-primitive data type
const customerOrder = {customerName: "Feranmi", bookTitle: "The awakening of a dying Dream", quantity: 15, totalPrice: bookPrice * quantity}
console.log(customerOrder)
