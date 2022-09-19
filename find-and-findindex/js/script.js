// const values = [100, 200, 300, 400, 500];

// const newArray = values.find((element, index, array) => {
//   // Return true if you find the element you want
//   // Return false if you haven't found the element you want
// });

//Parameters:
//element: the current element in the array that we are working with
//index(optional): the current index of where we are in the array
//array(optional): the original array 'filter' was called on

//the find()/fincIndex() function will search through an array for an item,
//but then stop searching when the item is found(unlike the filter() method where it continues searching through the whole array)

//example 1:
// const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const foundValue = values.find((currentValue, index) => {
//   console.log("current value: ", index);
//   if (currentValue === 3) {
//     return true;
//   }
// });
// console.log("found value: ", foundValue);
// The console logs the following:
// Current index:  0
// Current index:  1
// Current index:  2
// Current index:  3
// Found value: 3

//example 2: finding a temperature above a point:
const temperatures = [109.2, 115.2, 119.9, 120.8, 150.0, 175, 182];
const valueFound = temperatures.find((currentTemperature) => {
  if (currentTemperature >= 120) {
    return true;
  }
});
console.log(valueFound);
//returns 120.8(the first temperature found above 120)

//example 3: Find the first name available beginning with a specific letter
const users = [
  { name: "Kari", id: 19313 },
  { name: "Hans", id: 40202 },
  { name: "Joakim", id: 59230 },
  { name: "Inger", id: 14023 },
  { name: "Ellen", id: 76339 },
];

// const foundUser = users.find((user) => {
//   //find a name with 'j' as the first letter
//   if (user.name[0].toLowerCase() === "j") {
//     return true;
//   }
// });

// console.log(foundUser);
// Returns:
// {name: 'Joakim', id: 59230}

//destructured:
const foundUser = users.find(({ name }) => name[0].toLowerCase() === "j");
console.log(foundUser);

//example 4: find if a book is in stock:
const books = [
  { title: "Building a spaceship", inStock: false },
  { title: "Growing orchids", inStock: false },
  { title: "River fisher", inStock: false },
];

// const foundBook = books.find((book) => {
//   if (book.inStock === true) {
//     return true;
//   }
// });
// //foundBook will be undefined if no book was found
// if (foundBook === undefined) {
//   console.log("no books in stock!");
// } else {
//   console.log("first book in stock: ", foundBook);
// }
//returns: no books in stock!

//destructured:
const foundBook = books.find(({ inStock }) => inStock);
if (!foundBook) {
  console.log("No books in stock!");
} else {
  console.log("First book in stock: ", foundBook);
}
