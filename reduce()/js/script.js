//Reduce
// Example 1: calculate the total of some array with values with reduce method
const values = [2, 4, 6, 7, 9];

const sum = values.reduce((total, item) => {
  total += item; //total = total + item
  //0(initial value of total) = 0 + 2
  //total is 2
  //total = 2 + 4
  //total is 6
  //total = 6 + 6
  //total is 12
  //total = 12 + 7
  //total is 19
  //total = 19 + 9
  //total is 28
  return total;
}, /*initial value of total:*/ 0);
console.log(sum);
//output: 28

//task 1: calculate the total number of cars in the garages with the reduce method
const garages = [
  {
    make: "bmw",
    cars: 10,
  },
  {
    make: "tesla",
    cars: 20,
  },
  {
    make: "opel",
    cars: 40,
  },
  {
    make: "volkswagen",
    cars: 1,
  },
];

const totalCars = garages.reduce((total, { cars }) => {
  total += cars;
  return total;
}, 50);
console.log(totalCars);

//Example 2: get the total cost of in-stock products
//to calculate total cost you need to multiply price * quantity
//use reduce() method

const products = [
  {
    title: "pudding",
    isInStock: true,
    quantity: 2,
    price: 20,
    currency: "NOK",
  },
  {
    title: "cheese",
    isInStock: false,
    quantity: 0,
    price: 200,
    currency: "NOK",
  },
  {
    title: "milk",
    isInStock: true,
    quantity: 20,
    price: 100,
    currency: "NOK",
  },
  {
    title: "eggs",
    isInStock: true,
    quantity: 1000,
    price: 10,
    currency: "NOK",
  },
];

// const sumOfProductsInStock = products.reduce((total, currentProduct) => {
//   if (currentProduct.isInStock === true) {
//     total += currentProduct.quantity * currentProduct.price;
//   }
//   return total;
// }, 0);
// console.log(sumOfProductsInStock);

const sumOfProductsInStock = products.reduce((total, currentProduct) => {
  currentProduct.isInStock === true
    ? (total += currentProduct.quantity * currentProduct.price)
    : null;
  return total;
}, 0);
console.log(sumOfProductsInStock);
