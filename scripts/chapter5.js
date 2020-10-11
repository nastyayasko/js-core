// 5.2

// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

// let a = +prompt('number 1');
// let b = +prompt('number 2');
// console.log( a + b );

// ---------------------------------

// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор,
// пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена».
// В этом случае функция должна вернуть null.

// function readNumber() {
//     let value;
//     do {
//         value = prompt('number')
//     }
//     while (!isFinite(value))
//     if (!value) return null;
//
//     return value;
// }
// readNumber()

// -------------------------------------

// 5.3

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
// ucFirst("вася") == "Вася";

// function ucFirst(str) {
//     const strArr = str.split('');
//     strArr[0] = strArr[0].toUpperCase()
//     return strArr.join('')
// }
// console.log(ucFirst('nastya'))

// -------------------------------------

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
//
// Функция должна быть нечувствительна к регистру:
//
// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

// function checkSpam(str) {
//     return str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')
// }
//
// console.log(checkSpam('buy ViAgRA now'))
// console.log(checkSpam('free xxxxx'))
// console.log(checkSpam("innocent rabbit"))

// -------------------------------------

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength,
// заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
// Например:
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
// truncate("Всем привет!", 20) = "Всем привет!"

// function truncate(str, maxlength) {
//     if (str.length > maxlength) {
//         return str.slice(0, maxlength - 1) + '…'
//     }
//     return str
// }
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))
// console.log(truncate("Всем привет!", 20))

// -------------------------------------

// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
// Например:
// alert( extractCurrencyValue('$120') === 120 ); // true

// function extractCurrencyValue(str) {
//     return +str.slice(1);
// }
//
// console.log( extractCurrencyValue('$120') === 120 );

// -------------------------------------

// 5.4

// Давайте произведём 5 операций с массивом.
//
// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать
// для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.
// Массив по ходу выполнения операций:
//
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

// const arr = ['Джаз', 'Блюз'];
// arr.push('Рок-н-ролл');
// arr[Math.floor((arr.length - 1) / 2)] = "Классика";
// arr.shift();
// arr.unshift('Рэп', 'Регги');

// -------------------------------------

// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

// function sumInput() {
//     const arr = []
//     let num;
//     do {
//        num = prompt('number');
//        if (isFinite(num)){
//            arr.push(+num)
//        }
//     } while (isFinite(num) && num !== ' ' && num)
//     return arr.reduce((a, b) => a + b)
// }
// console.log(sumInput())

// -------------------------------------

// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.
//
// Например:
// getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
// getMaxSubSum([2, -1, 2, 3, -9]) = 6
// getMaxSubSum([-1, 2, 3, -9, 11]) = 11
// getMaxSubSum([-2, -1, 1, 2]) = 3
// getMaxSubSum([100, -9, 2, -3, 5]) = 100
// getMaxSubSum([1, 2, 3]) = 6 (берём все)
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:
//
// getMaxSubSum([-1, -2, -3]) = 0

// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let currentSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         currentSum += arr[i];
//         maxSum = maxSum >= currentSum ? maxSum : currentSum;
//         if (currentSum < 0) currentSum = 0;
//     }
//     return maxSum;
// }
// console.log(getMaxSubSum([-1, 2, 3, -9, 11]))

// -------------------------------------

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// Примеры:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте
// всё как нужно и методом join соедините обратно.

// function camelize(str) {
//     const strArr = str.split('-')
//     for (let i = 1; i < strArr.length; i++) {
//         const currentArr = strArr[i].split('');
//         currentArr[0] = currentArr[0].toUpperCase()
//         strArr[i] = currentArr.join('')
//     }
//     return strArr.join('')
// }
//
// console.log(camelize("background-color"))
// console.log(camelize("list-style-image"))
// console.log(camelize("-webkit-transition"))

// -------------------------------------

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
// ищет в нём элементы между a и b и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять исходный.
//
// Например:
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4)
// alert( filtered ); // 3,1 (совпадающие значения)
// alert( arr ); // 5,3,8,1 (без изменений)

// function filterRange(arr, a, b) {
//     const newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= a && arr[i] <= b) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4)
// alert( filtered ); // 3,1 (совпадающие значения)
// alert( arr ); // 5,3,8,1 (без изменений)

// -------------------------------------

// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех,
// которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.
//
// Например:
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// alert( arr ); // [3, 1]

// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < a || arr[i] > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }
//
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// console.log( arr ); // [3, 1]

// -------------------------------------

// Сортировать в порядке по убыванию
// let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию
// arr.sort((a,b) => b - a)
// alert( arr ); // 8, 5, 2, 1, -10

// -------------------------------------

// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
//
// function copySorted(arr) {
//     return arr.slice().sort()
// }
//
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

// -------------------------------------

// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.
// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО»
// (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
//
// Пример использования:

// let calc = new Calculator;
//
// alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции.
// Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
// let powerCalc = new Calculator;
//
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// let result = powerCalc.calculate("2 ** 3");
//
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Например, давайте добавим умножение *, деление / и возведение в степень **:
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.

// function Calculator() {
//     this.calculations = {
//         '+': (a, b) => a + b,
//         '-': (a, b) => a - b,
//     }
//     this.calculate = function (str) {
//         const arr = str.split(' ');
//         return this.calculations[arr[1]](+arr[0], +arr[2]);
//     }
//     this.addMethod = function (operator, func) {
//         this.calculations[operator] = func;
//     }
// }

// -------------------------------------

// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
// Например:

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [ vasya, petya, masha ];
//
// // let names = /* ... ваш код */
// let names = users.map(user => user.name)
//
// alert( names ); // Вася, Петя, Маша

// -------------------------------------

// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName,
// где fullName – состоит из name и surname.
// Например:

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
// let users = [ vasya, petya, masha ];

// let usersMapped = /* ... ваш код ... */
// let usersMapped = users.map(user => ({
//     id: user.id,
//     fullName: `${user.name} ${user.surname}`
// }))

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин
// Итак, на самом деле вам нужно трансформировать один массив объектов в другой.
// Попробуйте использовать =>. Это небольшая уловка.

// -------------------------------------

// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
// Например:

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let arr = [ vasya, petya, masha ];
//
// sortByAge(arr);
//
// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя
//
// function sortByAge(users) {
//     return users.sort((a, b) => a.age - b.age)
// }

// -------------------------------------

// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

// let arr = [1, 2, 3];
//
// console.log(shuffle(arr));
// // arr = [3, 2, 1]
//
// console.log(shuffle(arr));
// // arr = [2, 1, 3]
//
// console.log(shuffle(arr));
// // arr = [3, 1, 2]
// ...
// Все последовательности элементов должны иметь одинаковую вероятность.
// Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д.,
// с равной вероятностью каждого случая.
// function randomInteger(min, max) {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }
//
// function shuffle(arr) {
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         const index = randomInteger(0, arr.length - 1);
//         newArr.push(...arr.splice(index, 1));
//     }
//     arr.push(...newArr);
//     return arr;
// }

// -------------------------------------

// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
// Например:

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
//
// let arr = [ vasya, petya, masha ];
//
// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
//
// function getAverageAge(users) {
//     return users.map(user => user.age).reduce((a, b) => a + b) / users.length
// }

// -------------------------------------

// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
// Например:

// function unique(arr) {
//     /* ваш код */
//     const uniqueStrs = [];
//     arr.forEach(str => {
//         if (!uniqueStrs.includes(str)) {
//             uniqueStrs.push(str);
//         }
//     })
//     return uniqueStrs;
// }
//
// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
// ];
//
// alert( unique(strings) ); // кришна, харе, :-O

// -------------------------------------

// 5.7

// Допустим, у нас есть массив arr.
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
// Например:

// function unique(arr) {
// /* ваш код */
//     return Array.from(new Set(arr));
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
// "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//
// alert( unique(values) ); // Hare,Krishna,:-O
// P.S. Здесь мы используем строки, но значения могут быть любого типа.
// P.P.S. Используйте Set для хранения уникальных значений.

// -------------------------------------

// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
// Например:
// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
// Например:

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
// function aclean(arr) {
//     const map = new Map();
//     for (let i = 0; i < arr.length; i++) {
//         const letters = arr[i].toLowerCase().split("").sort().join("");
//         map.set(letters, arr[i]);
//     }
//     return Array.from(map.values());
// }
//
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// alert( aclean(arr) );

// -------------------------------------

// 5.10

// У нас есть объект:

// let user = {
//     name: "John",
//     years: 30
// };
// Напишите деструктурирующее присваивание, которое:
//
// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример переменных после вашего присваивания:
//
// let user = { name: "John", years: 30 };
//
// // ваш код должен быть с левой стороны:
// // ... = user
// const { name, years: age, isAdmin = false } = user
//
// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

// -------------------------------------

// У нас есть объект salaries с зарплатами:
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

// function topSalary(salaries) {
//     let maxSalary = 0;
//     let maxName;
//     for(const [name, salary] of Object.entries(salaries)) {
//         if (maxSalary < salary) {
//             maxSalary = salary;
//             maxName = name;
//         }
//     }
//     return maxName;
// }

// -------------------------------------

// 5.11

// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
// Для вывода используйте alert.
// let d = new Date(2012, 1, 20, 3, 12);

// -------------------------------------

// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате:
// «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
// Например:

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getWeekDay(date) );        // нужно вывести "ВТ"
//
// function getWeekDay(date) {
//     switch (date.getDay()) {
//         case 0:  return 'ВС';
//         case 1:  return 'ПН';
//         case 2:  return 'ВТ';
//         case 3:  return 'СР';
//         case 4:  return 'ЧТ';
//         case 5:  return 'ПТ';
//         case 6:  return 'СБ';
//     }
// }

// -------------------------------------

// В Европейских странах неделя начинается с понедельника (день номер 1),
// затем идёт вторник (номер 2) и так до воскресенья (номер 7).
// Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getLocalDay(date) );       // вторник, нужно показать 2
//
// function getLocalDay(date) {
//     return date.getDay() || 7;
// }

// -------------------------------------

// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое
// и getDateAgo(new Date(), 2) – восемнадцатое.
// Функция должна надёжно работать при значении days=365 и больших значениях:

// let date = new Date(2015, 0, 2);
//
// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
// // P.S. Функция не должна изменять переданный ей объект date.
//
// function getDateAgo(date, days) {
//     date.setDate(date.getDate() - days);
//     return date.getDate();
// }

// -------------------------------------

// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца.
// Иногда это 30, 31 или даже февральские 28/29.
// Параметры:
// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

// function getLastDayOfMonth(year, month) {
//     const date = new Date(year, month + 1, 0);
//     return date.getDate()
// }

// -------------------------------------

// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

// function getSecondsToday() {
//     const date = new Date;
//     let today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
//     return (date - today)/1000
// }
// console.log(getSecondsToday())

// -------------------------------------

// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
// Например, если сейчас 23:00, то:
// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

// function getSecondsToTomorrow() {
//     const date = new Date;
//     let tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
//     return (tomorrow - date)/1000
// }
// console.log(getSecondsToTomorrow())

// -------------------------------------

// Напишите функцию formatDate(date), форматирующую date по следующему принципу:
// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm".
// А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
// Например:

// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
// // вчерашняя дата вроде 31.12.2016, 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );
//
// function formatDate(date) {
//     const dif = (new Date() - date)/1000;
//     if (dif < 1) {
//         return 'прямо сейчас'
//     } else if (dif < 60) {
//         return dif + ' сек. назад'
//     } else if (dif < 3600) {
//         return dif/60 + ' мин. назад'
//     } else {
//         const day = '0' + date.getDate();
//         const month = '0' + (date.getMonth() + 1);
//         const year = date.getFullYear() + '';
//         const hour = '0' + date.getHours();
//         const min = '0' + date.getMinutes();
//         return `${day.slice(-2)}.${month.slice(-2)}.${year.slice(-2)} ${hour.slice(-2)}:${min.slice(-2)}`
//     }
//
// }

// 5.12

// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
// let user = {
//     name: "Василий Иванович",
//     age: 35
// };
//
// console.log(JSON.stringify(user))
