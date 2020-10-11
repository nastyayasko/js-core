// 4.1
// Напишите код, выполнив задание из каждого пункта отдельной строкой:
// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

// const user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// -------------------------

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// Должно работать так:
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }

// ---------------------------

// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
// const user = {
//     name: "John"
// };
// // это будет работать?
// user.name = "Pete"; //YES

// ----------------------------

// У нас есть объект, в котором хранятся зарплаты нашей команды:
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

// function getSum(obj) {
//     let result = 0;
//     for (let key in obj) {
//         result += obj[key];
//     }
//     return result;
// }

// -----------------------------

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// Например:
// // до вызова функции
//     let menu = {
//         width: 200,
//         height: 300,
//         title: "My menu"
//     };
// multiplyNumeric(menu);
//
// // после вызова функции
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
// P.S. Используйте typeof для проверки, что значение свойства числовое.

// function ultiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === "number") {
//             obj[key] *= 2;
//         }
//     }
// }

// 4.4

// Создайте объект calculator (калькулятор) с тремя методами:
//
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
//     let calculator = {
//     // ... ваш код ...
// };
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// const calc = {
//     a: 0,
//     b: 0,
//     read: function (a, b) {
//         this.a = a;
//         this.b = b;
//     },
//     sum: function () {
//         return this.a + this.b;
//     },
//     mul: function () {
//         return this.a * this.b;
//     },
// }
// calc.read(2, 3)
// console.log(calc.sum())
// console.log(calc.mul())

// --------------------------------

// Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:
// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//     },
//     down() {
//         this.step--;
//     },
//     showStep: function() { // показывает текущую ступеньку
//         alert( this.step );
//     }
// };
// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
// ladder.up().up().down().showStep(); // 1
// Такой подход широко используется в библиотеках JavaScript.

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep: function() { // показывает текущую ступеньку
//         alert( this.step );
//         return this;
//     }
// };
// ladder.up().up().down().showStep();

// 4.6

// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
// Например:
//
// let calculator = new Calculator();
// calculator.read();
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// function Calculator() {
//     this.a = 0;
//     this.b = 0;
//     this.read = function (a, b) {
//         this.a = a;
//         this.b = b;
//     }
//     this.sum = function () {
//         return this.a + this.b;
//     };
//     this.mul = function () {
//         return this.a * this.b;
//     };
// }
//
// let calculator = new Calculator();
// calculator.read(2, 3);
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// ---------------------------------

// Напишите функцию-конструктор Accumulator(startingValue).
// Объект, который она создаёт, должен уметь следующее:
// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.
//
// Ниже вы можете посмотреть работу кода:
// let accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert(accumulator.value); // выведет сумму этих значений

// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function () {
//         this.value = this.value + +prompt('number')
//     }
// }
// let accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert(accumulator.value); // выведет сумму этих значений