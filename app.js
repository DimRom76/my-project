const sortByName = users => {
  //return [...users].sort((a,b) => a.friends.length - b.friends.length)
  return [...users].sort((a, b) => a.name.localeCompare(b.name));
};

users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
];

console.log(users);
console.log(sortByName(users));

//=========РАБОТА С ПЕРЕБОРОМ МАССИВА===================================
//Получим сортированный по алфавиту массив уникальных посещаемых предметов.
const students = [
  { name: 'Манго', score: 83, courses: ['математика', 'физика'] },
  { name: 'Поли', score: 59, courses: ['информатика', 'математика'] },
  { name: 'Аякс', score: 37, courses: ['физика', 'биология'] },
  { name: 'Киви', score: 94, courses: ['литература', 'информатика'] },
];

const uniqueSortedCourses = students
  .flatMap(student => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));

// в переменной names получился массив имён авторов в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING.
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 },
];
const MIN_BOOK_RATING = 8;

const names = [...books]
  .filter(el => el.rating > MIN_BOOK_RATING)
  .map(el => el.author)
  .sort((a, b) => a.localeCompare(b));
//=========РАБОТА С ПЕРЕБОРОМ МАССИВА===================================

// function makeVeryCounter() {
//   let x = 0;
//   return function () {
//     return x++;
//   };
// }

// let very = makeVeryCounter();

// function iam(input) {
//   if (input) {
//     let result = 'I am ' + 'very '.repeat(iam.sss()) + input;
//     very = makeVeryCounter();
//     iam.sss = very;
//     return result;
//   } else {
//     if (iam.sss === undefined) {
//       very = makeVeryCounter();
//       iam.sss = very;
//     }

//     console.dir(iam);
//     iam.sss();

//     return iam;
//   }
// }

// a = iam()();
// b = a()();

// console.log(a('www'));
// console.log(b('qqq'));

// console.log(iam()()('tall and ' + iam()('Mango')));

// function shapeTimesObjectIntoIterableArray(timesObject) {
//   if (!timesObject) {
//     return [];
//   }
//   // do stuff
//   // hint but not really: use Array.prototype.reduce

//   const timesArray = [];
//   const openClose = [];
//   // arrayTime[0] - день недели
//   // arrayTime[1] - массив с одним объектом
//   for (const [day, timeWork] of Object.entries(timesObject)) {
//     if (timeWork[0] === undefined) {
//       continue;
//     }

//     const strSearch = timeWork[0].open + timeWork[0].close;
//     const idx = openClose.indexOf(strSearch);
//     if (idx === -1) {
//       openClose.push(strSearch);
//       timeWork[0].days = [day];
//       timesArray.push(timeWork[0]);
//     } else {
//       console.log(timesArray);
//       timesArray[idx].days.push(day);
//     }
//   }

//   return timesArray;
// }

// // const timesArray = [
// //   {
// //     open: '07:00',
// //     close: '17:00',
// //     days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
// //   },
// // ];

// document.querySelector('.banner-container').classList.add();

// const timesObjects = {
//   monday: [{ open: '00:00', close: '23:00' }],
//   tuesday: [{ open: '00:00', close: '23:00' }],
//   wednesday: [],
//   thursday: [],
//   friday: [],
//   saturday: [],
//   sunday: [],
// };
// // const timesObjects = {
// //   monday: [{ open: '07:00', close: '17:00' }],
// //   tuesday: [{ open: '07:00', close: '17:00' }],
// //   wednesday: [{ open: '07:00', close: '17:00' }],
// //   thursday: [{ open: '07:00', close: '17:00' }],
// //   friday: [{ open: '07:00', close: '17:00' }],
// //   saturday: [],
// //   sunday: [],
// // };
// console.log(shapeTimesObjectIntoIterableArray(null));

//календари;
//jqueryui.com/datepicker/
// http://aryweb.nl/projects/mootools-datepicker/Test/

// https: function getAgeFromBirthday() {
//   var month = document.getElementById('b-month').value;
//   var day = document.getElementById('b-day').value;
//   var year = document.getElementById('b-year').value;

//   var b_date = new Date(year, month, day);

//   if (
//     b_date.getDate() != day ||
//     b_date.getMonth() != month ||
//     b_date.getFullYear() != year
//   ) {
//     alert('Пожалуйста, введите правильную дату рождения');

//     return false;
//   }

//   today = new Date();
//   today.setHours(0);
//   today.setMinutes(0);
//   today.setSeconds(0);

//   if (b_date > today) {
//     alert('Вы из будущего или ещё не родились');

//     return false;
//   }

//   alert(Math.floor((today - b_date) / 31556952000));
// }

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

// function sortArray(array) {
//   let arr = array
//     .filter(el => el % 2)
//     .slice()
//     .sort((a, b) => a - b);

//   ind = 0;
//   array.forEach((el, i) => {
//     if (el % 2) {
//       array[i] = arr[ind];
//       ind++;
//     }
//   });

//   return array;
// }

// console.log(sortArray([5, 3, 2, 8, 1, 4]));
// [1, 3, 2, 8, 5, 4];
