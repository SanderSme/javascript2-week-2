//Looping through an object:
//If we want to loop through an array, we simply use the for loop method.
//When looping through an object, we can not use the for loop, because the keys in an object is not in a specific order
//we then have to use the for...in method:
// const person = {
//   firstName: "Ola",
//   lastName: "Nordmann",
//   module: "JavaScript",
// };

// for (const key in person) {
//   // Use the key to access the value from the key/value pair
//   console.log("key:", key, "value:", person[key]);
// }
// Returns:
// key: firstName value: Ola
// key: lastName value: Nordmann
// key: module value: JavaScript

//Object.keys():
//This method returns an array containing the keys in an object.
//syntax:
// const myObject = {
//   // Key/value pairs here
// };

// Object.keys(myObject);

//example 1:

// const person = {
//   firstName: "Ola",
//   lastName: "Nordmann",
//   module: "JavaScript",
// };

// const keysArray = Object.keys(person);

// console.log(keysArray);
// Returns:
// ['firstName', 'lastName', 'module']

//This method is important because we can now use our array methods like map(), filter(), and reduce()

//forEach():
//Example 1:
//The forEach() method is for when we want to loop, but dont need a new array being returned
// const person = {
//   firstName: "Ola",
//   lastName: "Nordmann",
//   module: "JavaScript",
// };

// Object.keys(person).forEach((key) => {
//   console.log(`key: ${key}, value: ${person[key]}`);
// });
// Logs:
// key: firstName, value: Ola
// key: lastName, value: Nordmann
// key: module, value: JavaScript

//map() method:
//In this example, we use map to create a new array.
//Each element in the array will contain the key and value
//for each of the key/value pairs.
// const person = {
//   firstName: "Ola",
//   lastName: "Nordmann",
//   module: "JavaScript",
// };
// // .map will return a new array that contains the same number
// // of elements as there were in the initial array
// const keysAndValues = Object.keys(person).map((key) => {
//   return `key: ${key}, value: ${person[key]}`;
// });
// console.log(keysAndValues);
// Logs:
// 0: "key: firstName, value: Ola"
// 1: "key: lastName, value: Nordmann"
// 2: "key: module, value: JavaScript"

//Object.values()
//The Object.values() method can be seen as the oposite of Object.keys()
//it returns an array with only the values of an object
// const person = {
//   firstName: "Ola",
//   lastName: "Nordmann",
//   module: "JavaScript",
// };

// console.log(Object.values(person));
// Returns:
// ['Ola', 'Nordmann', 'JavaScript']

//Object.entries():
//returning an array with both the keys and the values
// const person = {
//   firstName: "Ola",
//   lastName: "Nordmann",
//   module: "JavaScript",
// };

// Object.entries(person).forEach((keyValuePair) => {
//   console.log(keyValuePair);
// });
// Returns:
// ['firstName', 'Ola']
// ['lastName', 'Nordmann']
// ['module', 'JavaScript']
