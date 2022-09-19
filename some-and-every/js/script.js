//some() will check an array to see if at least one of its
//elements passes the given condition. If it does, it will
//break out of the some() method and return true. If nothing
//matches the condition, then it will return false.
//some() is ideal for finding if an array contains a value.
//This is very similar functionality to the find() array method,
//however, the key difference is that some() will return a boolean
//whereas find() will either return the element if found or undefined.

// const values = [100, 200, 300, 400, 500];
// const newArray = values.some((element, index, array) => {
//   // Return true if it matches your condition. If it does, it will stop iterating and return true for the result of the array
//   // Return false if the condition is not matched
//   if (element >= 300) {
//     return true;
//   }
// });
// console.log(newArray);
// //returns true

//example 1: condition matches
// const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const didMatchCondition = values.some((value, index) => {
//   console.log({ index, value });
//   if (value >= 3) {
//     return true;
//   }
// });

// console.log("didMatchCondition:", didMatchCondition);
// Return/output:
// index: 0 value: 0
// index: 1 value: 1
// index: 2 value: 2
// index: 3 value: 3
// didMatchCondition: true

//example 2: condition doesn't match
// const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const didMatchCondition = values.some((value, index) => {
//   console.log({ index, value });
//   if (value >= 100) {
//     return true;
//   }
// });

// console.log("didMatchCondition:", didMatchCondition);
// Return/output:
// index: 0 value: 0
// index: 1 value: 1
// index: 2 value: 2
// index: 3 value: 3
// index: 4 value: 4
// index: 5 value: 5
// index: 6 value: 6
// index: 7 value: 7
// index: 8 value: 8
// index: 9 value: 9
// didMatchCondition: false

//Practical example(example 3):
//we have a list of modules with a name, and a isComplete boolean.
// const modules = [
//   { name: "Introduction to Programming", isComplete: true },
//   { name: "HTML", isComplete: true },
//   { name: "CSS", isComplete: false },
//   { name: "JavaScript", isComplete: true },
// ];

// const isSomeCoursesFinished = modules.some((currentModule, index) => {
//   console.log("index", index);
//   return currentModule.isComplete === true;
// });
// console.log(isSomeCoursesFinished);
//returns index:0, true

//every():
//every() will check if each of the values in an array matches
//the given condition. If all elements match the condition,
//it will return true. If it finds an element that does not match
//the condition, it will immediately break out of the every() array
//method and return false. In short, every() will check to ensure
//that every element in the array matches the given condition

//Syntax:
// const values = [100, 200, 300, 400, 500];

// const newArray = values.every((element, index, array) => {
//   // Return true if it matches your condition and every() will keep looping
//   // Return false if the condition is not matched and it will immediately break out, and return false as the final result. This is because not "every" value is valid.
// });

//Example 1: conditions met
// const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const didAllMatchCondition = values.every((value, index) => {
//   console.log("index:", index, "value:", value);
//   if (value >= 0) {
//     return true;
//   }
// });

// console.log("didAllMatchCondition:", didAllMatchCondition);
// index: 0 value: 0
// index: 1 value: 1
// index: 2 value: 2
// index: 3 value: 3
// index: 4 value: 4
// index: 5 value: 5
// index: 6 value: 6
// index: 7 value: 7
// index: 8 value: 8
// index: 9 value: 9
// didAllMatchCondition: true

//Example 2: conditions not met:
// const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const didAllMatchCondition = values.every((value, index) => {
//   console.log("index:", index, "value:", value);
//   if (value <= 3) {
//     return true;
//   }
// });

// console.log("didAllMatchCondition:", didAllMatchCondition);
// index: 0 value: 0
// index: 1 value: 1
// index: 2 value: 2
// index: 3 value: 3
// index: 4 value: 4
// didAllMatchCondition: false

//Practical example:
const modules = [
  { name: "Introduction to Programming", isComplete: true },
  { name: "HTML", isComplete: true },
  { name: "CSS", isComplete: false },
  { name: "JavaScript", isComplete: true },
];

const isCourseFinished = modules.every((currentModule) => {
  return currentModule.isComplete === true;
});

console.log(isCourseFinished);
// Returns:
// false
