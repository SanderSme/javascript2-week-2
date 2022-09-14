//example 1:
// const numbers = [2, 4, 55, 66];

// const filteredNumbers = numbers.filter((number) => {
//   //return in the new array all numbers greater or equal to 4
//   if (number >= 4) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(filteredNumbers);

//shorter, but less understanding:
// const filteredNumbers = numbers.filter((number) => number >= 4);

// console.log(filteredNumbers);

// //Task: filter values >= 100
// const values = [0, 23, 55, 66, 777, 100, 500, 250];

// // const filteredValues = values.filter((value) => value >= 100);

// // console.log(filteredValues);

// //Or:

// const filteredValues = values.filter((value) => {
//   if (value >= 100) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(filteredValues);

//Example 3:
// const people = [
//   { name: "Kari", age: 28 },
//   { name: "Astrid", age: 32 },
//   { name: "Hans", age: 22 },
//   { name: "Inger", age: 19 },
//   { name: "Liv", age: 42 },
//   { name: "Kristoffer", age: 12 },
//   { name: "Anne", age: 12 },
//   { name: "Martin", age: 17 },
//   { name: "Joakim", age: 45 },
//   { name: "Ellen", age: 7 },
// ];

// const filteredPeople = people.filter(({ age }) => age >= 22);
// console.log(filteredPeople);

//Example 4: filter the games that have multiplayer and the rating of 8 or higher
// const games = [
//     { title: "Mayhem Fighter", isMultiplayer: true, rating: 8 },
//     { title: "Build-a-farm", isMultiplayer: true, rating: 9 },
//     { title: "Ghost Story", isMultiplayer: false, rating: 8 },
//     { title: "Fast Car Racer", isMultiplayer: true, rating: 7 },
//     { title: "Elf and Dwarf RPG", isMultiplayer: false, rating: 8 },
//   ];

//   const filteredGames = games.filter(
//     (games) => games.isMultiplayer === true && games.rating >= 8
//   );
//   console.log(filteredGames);
//destructured:
const games = [
  { title: "Mayhem Fighter", isMultiplayer: true, rating: 8 },
  { title: "Build-a-farm", isMultiplayer: true, rating: 9 },
  { title: "Ghost Story", isMultiplayer: false, rating: 8 },
  { title: "Fast Car Racer", isMultiplayer: true, rating: 7 },
  { title: "Elf and Dwarf RPG", isMultiplayer: false, rating: 8 },
];

const filteredGames = games.filter(
  ({ isMultiplayer, rating }) => isMultiplayer === true && rating >= 8
);
console.log(filteredGames);
