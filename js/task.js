// class Car {
//  // Write code under this line
//   static getSpecs(car){
//   return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}'`
//     }

//   constructor(obj){
//   this.speed = 0;
//   this.price = obj.price;
//   this.maxSpeed = obj.maxSpeed;
//   this.isOn = false;
//   this.distance = 0;  
//   }
//   get price() {
//   return this.price;
//   }
//   set price(value) {
//   this._price = car;
//   }
//   turnOn() {
//   this._isOn = true;
//   }
//     turnOff() {
//       this.isOn = false;
//     this.speed = 0;
//   }
//     accelerate(value) {
//      if (this.speed + value < this.maxSpeed) {
//       this.speed += value;
//     } 
//   }
//     decelerate(value) {
//        if (this.speed - value > 0) {
//       this.speed = this.speed - value;
//     }
//   }
//     drive(hours) {
//       if ((this.isOn)) {
//       this.distance += hours * this.speed;
//     }
//   }
// }
 
// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

//  console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

//  console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

//  console.log(mustang.price); // 2000
// mustang.price = 4000;
//  console.log(mustang.price); // 4000

//  ФУНКЦИОНАЛЬНЫЕ МЕТОДЫ МАССИВОВ
// array.reduce((acc, element, idx, array)=>{}, 0||{}||[]) - что угодно

//      .map   (( - , element, idx, array)=>{}) - []

//      .filter(( - , element, idx, array)=>{}) - []
//      .find  (( - , element, idx, array)=>{}) - element

//     .forEach(( - , element, idx, array)=>{}) - ничего, замена цикла for()

//      .some  (( - , element, idx, array)=>{}) - true, если хотя бы один элемент соответствует условию
//      .every (( - , element, idx, array)=>{}) - true, если все соответствуют

//      .sort  ((a, b)=> a - b) - сортирует от меньшего к большему
//      .sort  ((a, b)=> b - a) - от большего к меньшему
//      .sort()                 - в алфавитном порядке
//      .sort().reverse()       - в обратном алфавитному порядку
// import data from '../data/objects.js'
// console.log(data)

// console.log(data.map(el=>{
//  return el.id
// }))