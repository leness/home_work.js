// Your task is to create functionisDivideBy(or is_divide_by)
// to check if an integer number is divisible by each out of two arguments.

// // Ваше завдання - створити функцію isDivideBy(або is_divide_by),
// //     щоб перевірити, чи ціле число ділиться на кожен з двох аргументів.

//     function isDivideBy(number, a, b) {
//   return [a, b].every(i => number % i === 0);
// }

// // (-12, 2, -6)  ->  true
// // (-12, 2, -5)  ->  false

// // (45, 1, 6)    ->  false
// // (45, 5, 15)   ->  true

// // (4, 1, 4)     ->  true
// // (15, -5, 3)   ->  true


// const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;

// // -----------------------------------

// function isDivideBy(number, a, b) {
//   return [a, b].every(i => number % i === 0)
//     }
// // -----------------------------------

// let isDivideBy = (number, a, b) => {
//   if (number % a === 0 && number % b === 0) {
//     return true
//   } else {
//     return false
//   }
// }