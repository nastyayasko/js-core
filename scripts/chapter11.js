// 11.2

// Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.
// Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд,
// так чтобы мы могли добавить к нему .then:
//
// function delay(ms) {
//     // ваш код
//     return new Promise(resolve => setTimeout(resolve, ms))
// }
//
// delay(3000).then(() => alert('выполнилось через 3 секунды'));

// -------------------------------------

// 11.8

// Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:

// function loadJson(url) {
//     return fetch(url)
//         .then(response => {
//             if (response.status == 200) {
//                 return response.json();
//             } else {
//                 throw new Error(response.status);
//             }
//         })
// }
// async function loadJson(url) {
//     let res = await fetch(url);
//     if (res.status === 200) {
//         let json = await res.json();
//         return json;
//     }
//     throw new Error(res.status);
// }
// loadJson('no-such-user.json') // (3)
//     .catch(alert); // Error: 404

// -------------------------------------

// Ниже пример из раздела Цепочка промисов, перепишите его, используя async/await вместо .then/catch.
// В функции demoGithubUser замените рекурсию на цикл: используя async/await, сделать это будет просто.

// class HttpError extends Error {
//     constructor(response) {
//         super(`${response.status} for ${response.url}`);
//         this.name = 'HttpError';
//         this.response = response;
//     }
// }

// function loadJson(url) {
//     return fetch(url)
//         .then(response => {
//             if (response.status == 200) {
//                 return response.json();
//             } else {
//                 throw new HttpError(response);
//             }
//         })
// }

// async function loadJson(url) {
//     let response = await fetch(url);
//     if (response.status === 200) {
//         return response.json();
//     } else {
//         throw new HttpError(response);
//     }
// }

// Запрашивать логин, пока github не вернёт существующего пользователя.
// function demoGithubUser() {
//     let name = prompt("Введите логин?", "iliakan");
//
//     return loadJson(`https://api.github.com/users/${name}`)
//         .then(user => {
//             alert(`Полное имя: ${user.name}.`);
//             return user;
//         })
//         .catch(err => {
//             if (err instanceof HttpError && err.response.status == 404) {
//                 alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
//                 return demoGithubUser();
//             } else {
//                 throw err;
//             }
//         });
// }

// async function demoGithubUser() {
//     let user;
//     while(true) {
//         let name = prompt("Введите логин?", "iliakan");
//         try {
//             user = await loadJson(`https://api.github.com/users/${name}`);
//             break;
//         } catch(err) {
//             if (err instanceof HttpError && err.response.status === 404) {
//                 alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
//             } else {
//                 throw err;
//             }
//         }
//     }
//     alert(`Полное имя: ${user.name}.`);
//     return user;
// }
//
// demoGithubUser();

// -------------------------------------

// Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?

// async function wait() {
//     await new Promise(resolve => setTimeout(resolve, 1000));
//
//     return 10;
// }
//
// function f() {
//     // ...что здесь написать?
//     // чтобы вызвать wait() и дождаться результата "10" от async–функции
//     // не забывайте, здесь нельзя использовать "await"
//     wait().then(res => console.log(res));
// }