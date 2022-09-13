//original array
// const arrayValues = [2, 3, 4, 5, 6];

// //new array called newArray that contains the result from the 'map' method:
// const newArray = arrayValues.map(/*code here*/);

//callback functions:

//1: anonymous function (most used):
//function keyword:
// const values = [100, 200, 400, 600];
// const newValues = values.map(function (element, index, array) {
//   //modify and return element
//   return element;
// });
// console.log(newValues);

//arrow function:
// const values = [100, 200, 400, 600];
// const newValues = values.map((element, index, array) => {
//   //modify and return element
//   return element;
// });
// console.log(newValues);

//2: separate callback function:
// const values = [100, 200, 400, 600];
// function callbackFunction(element, index, array) {
//   //modify and return element
//   return element;
// }
// const newValues = values.map(callbackFunction);
// console.log(newValues);
