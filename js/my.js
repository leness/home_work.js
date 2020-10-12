function getAllPropValues(array, prop) {
  "use strict";
  // Write code under this line
  const names = [];
  const quantitys = [];

  for (const props of array) {
    
    names.push(props.name);
    quantitys.push(props.quantity);
  }
  return names;
  return quantitys;
}

// Объекты и ожидаемый результат
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Радар", price: 1280, quantity: 2 },
  { name: "Радар", price: 1320, quantity: 1 },
  { name: "Сканер", price: 2700, quantity: 1 },
  { name: "Сканер", price: 2500, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

console.log(getAllPropValues(products, "name"));
// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity"));
// [4, 2, 1, 1, 3, 7, 2]

console.log(getAllPropValues(products, "category"));
//  []
// function getAllPropValues(array, prop) {
//   "use strict";
//   // Write code under this line
//   function getAllPropValues(array, prop) {
//     "use strict";
//     // Write code under this line
//     for (const props of array) {
//       console.log(array);
//       console.log(array.name);
//     }
//   }

//   // Объекты и ожидаемый результат
//   const products = [
//     { name: "Радар", price: 1300, quantity: 4 },
//     { name: "Радар", price: 1280, quantity: 2 },
//     { name: "Радар", price: 1320, quantity: 1 },
//     { name: "Сканер", price: 2700, quantity: 1 },
//     { name: "Сканер", price: 2500, quantity: 3 },
//     { name: "Дроид", price: 400, quantity: 7 },
//     { name: "Захват", price: 1200, quantity: 2 },
//   ];

//   console.log(getAllPropValues(products, "name"));
//   // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

//   console.log(getAllPropValues(products, "quantity"));
//   // [4, 2, 1, 1, 3, 7, 2]

//   console.log(getAllPropValues(products, "category"));
//   //  []

//   //   for (let i = 0; i < products.length; i += 1) {
//   //     let arr = Object.entries(products[i]);

//   //     products[i] = array;

//   //     const index = products[i][0].indexOf(prop);
//   //     let newArr = [];

//   //     newArr.push(products[i][0][1]);

//   //     console.log(newArr);
//   //   }

//   //   return newArr;
// }

// // Объекты и ожидаемый результат
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Радар", price: 1280, quantity: 2 },
//   { name: "Радар", price: 1320, quantity: 1 },
//   { name: "Сканер", price: 2700, quantity: 1 },
//   { name: "Сканер", price: 2500, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// console.log(getAllPropValues(products, "name"));
// // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity"));
// // [4, 2, 1, 1, 3, 7, 2]

// console.log(getAllPropValues(products, "category"));
// //  []
