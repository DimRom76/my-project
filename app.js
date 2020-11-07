// function numberToPower(number, power) {
//   if (power === 0) {
//     return 1;
//   }
//   let mult = number;
//   for (let index = 0; index < power - 1; index++) {
//     mult *= number;
//   }
//   return mult;
// }

// numberToPower(4, 2);
// assertEquals(hero(10, 5), true)

// // ЗАМЫКАНИЕ

// let a = 10;

// const createCounter = function () {
//   /*
//    * Локальная переменная privateValue доступна только в замыкании.
//    * Получить к ней доступ во внешнем коде невозможно.
//    */
//   let privateValue = 0;

//   const increment = function () {
//     privateValue += 1;
//     console.log(privateValue);
//   };

//   return {
//     increment,
//   };
// };

// const counterA = createCounter();
// counterA.increment(); // 1
// counterA.increment(); // 2

// const counterB = createCounter();
// counterB.increment(); // 1
// counterB.increment(); // 2
// counterB.increment(); // 3

//     КЛАССЫ В JS

// class Car {
//   // Write code under this line
//   static getSpecs(car) {
//     return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`;
//   }
//   constructor(settings) {
//     const { maxSpeed, price, speed = 0, isOn = false, distance = 0 } = settings;

//     this.speed = speed;
//     this._price = price;
//     this.maxSpeed = maxSpeed;
//     this.isOn = isOn;
//     this.distance = distance;
//   }
//   get price() {
//     return this._price;
//   }
//   set price(value) {
//     this._price = value;
//   }
//   turnOn() {
//     this.isOn = true;
//   }
//   turnOff() {
//     this.isOn = false;
//   }
//   accelerate(value) {
//     this.speed += value;
//     this.speed = this.speed > this.maxSpeed ? this.maxSpeed : this.speed;
//   }
//   decelerate(value) {
//     this.speed -= value;
//     this.speed = this.speed < 0 ? 0 : this.speed;
//   }
//   drive(hours) {
//     this.distance += this.isOn ? hours * this.speed : 0;
//   }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// console.log( mustang.PI);

// console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// // console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// // console.log(mustang.price); // 2000
// mustang.price = 4000;
// // console.log(mustang.price); // 4000

// static get PI() {
//     return 3.14;
//   }
// }

// фильтруем объект по возврасту и возвращаем новый объект с полями найм и емаил

// const getUsersWithAge = (array, min, max) => array
//  .filter(({age}) => age > min && age < max)
//  .map(({name, email}) => ({name, email}));

//  console.log(getUsersWithAge(users, 20, 30));

// 6 - 10
// Получи массив всех умений всех пользователей(поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// const getSortedUniqueSkills = (array) =>
// {
// let newArray = array.reduce( (acc, {skills}) => [...acc, ...skills], []);

// let uniqueArray = newArray.filter(function(item, pos) {
//     return newArray.indexOf(item) == pos;
// });
//   return uniqueArray.sort();
// }

// const getSortedUniqueSkills = (array) => array
//     .reduce((skills, user) => skills.concat(user.skills), [])
//     .filter((item, i, skills) =>
//        skills.indexOf(item) === i)
//  .sort()
// ;

// const getSortedUniqueSkills = array =>
//   array.reduce((newArray, { skills }) => {
//     const newSkill = skills.filter(el => !newArray.includes(el));
//     console.log(newSkill);
//     return [...newArray, ...newSkill];
//   }, []).sort();

//  console.log(getSortedUniqueSkills(users));

function sortArray(array) {
  let arr = array
    .filter(el => el % 2)
    .slice()
    .sort((a, b) => a - b);

  ind = 0;
  array.forEach((el, i) => {
    if (el % 2) {
      array[i] = arr[ind];
      ind++;
    }
  });

  return array;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
// [1, 3, 2, 8, 5, 4];
