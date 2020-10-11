// 8.1

// У нас есть объекты:

// let head = {
//     glasses: 1
// };
//
// let table = {
//     pen: 3,
//     __proto__: head //
// };
//
// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table //
// };
//
// let pockets = {
//     money: 2000,
//     __proto__: bed //
// };
// С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся
// по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать
// значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).


// -------------------------------------

// 8.3

// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.
// После этого должен работать такой код:
// Function.prototype.defer = function(ms) {
//     setTimeout(this, ms);
// };
//
// function f() {
//     alert("Hello!");
// }
// f.defer(1000); // выведет "Hello!" через 1 секунду

// -------------------------------------

// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку,
// откладывающую вызов функции на ms миллисекунд.
// Например, должно работать так:
// Function.prototype.defer = function(ms) {
//     return function (...args) {
//         setTimeout(() => this.apply(this, args), ms);
//     }
// };
// function f(a, b) {
//     alert( a + b );
// }
//
// f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
// Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.

// -------------------------------------

// Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ/значение.
// Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой.
// Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.
// Вот так это должно работать:

// let dictionary = Object.create(null, {
//     toString: {
//         value() {
//             return Object.keys(this).join();
//         }
//     }
// });
//
// // ваш код, который добавляет метод dictionary.toString
//
// // добавляем немного данных
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ
//
// // только apple и __proto__ выведены в цикле
// for(let key in dictionary) {
//     alert(key); // "apple", затем "__proto__"
// }
//
// // ваш метод toString в действии
// alert(dictionary); // "apple,__proto__"

