//map()
// const names = [
//   { firstName: "Ola", lastName: "Nordmann" },
//   { firstName: "John", lastName: "Doe" },
//   { firstName: "Mario", lastName: "Rossi" },
//   { firstName: "Jan", lastName: "Jansen" },
// ];

// console.log("before map:", names);

//return:
//["ola normann", "john doe"....]:
// const newNames = names.map((person) => {
//   //modify and return person(element)
//   return `${person.firstName} ${person.lastName}`;
// });
// console.log("after map:", newNames);

//destructured:
// const newNames = names.map(({ firstName, lastName }) => {
//   return `${firstName} ${lastName}`;
// });
// console.log("after map:", newNames);

//example 2:
const triangles = [
  {
    base: 100,
    height: 200,
  },
  {
    base: 50,
    height: 100,
  },
  {
    base: 600,
    height: 700,
  },
];

//calculate the area of the triangles inside the given triangles array
//use map() to return an array
//Return: [10000, 2500, 2.1x10^5]
// const areas = triangles.map(
//   (triangles) => (triangles.base * triangles.height) / 2
// );
// console.log(areas);

const areas = triangles.map((triangles) => {
  return (triangles.base * triangles.height) / 2;
});
console.log(areas);
