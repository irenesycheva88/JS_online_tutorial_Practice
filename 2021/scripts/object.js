'use strict'

// // Доступ к атрибуту через точку (.) требует, чтобы имя атрибута соответствовало правилам именования переменных
// // Если его имя не соответствует этим правилам (например, это имя содержит только цифры, как индексы в массивах),
// // то использовать квадр. скобки [] и, если имя содержит пробелы (или как в примере с user[return]), 
// // поместить его в любые кавычки: user["two words"], user["return"]:
// console.log(user);
// //console.log(user.1);  // вот так не получилось вызвать, ругался на скобку: SyntaxError: missing ) after argument list
// console.log(user[1]);   // 1
// console.log(user["1"]);   // 1
// console.log(user.true); // 2
// console.log(user[true]); // 2
// console.log(user["true"]); // 2
// console.log(user.undefined); // 3
// console.log(user[undefined]); // 3
// console.log(user["undefined"]); // 3
// console.log(user.null); // 4
// console.log(user[null]); // 4
// console.log(user.return); // NaN
// console.log(user["return"]); // NaN
// // console.log(user[return]); // SyntaxError: Unexpected token 'return'
// console.log(user["return"]); // NaN
// // console.log(user."two words"); // SyntaxError: Unexpected string
// // console.log(user.two words); // SyntaxError: missing ) after argument list
// // console.log(user[two words]) // SyntaxError: Unexpected identifier
// console.log(user["two words"]) // 5555
// console.log(user[`two words`]) // 5555 - даже такие кавычки норм
// // user[3]('Я тут');  // TypeError: Illegal invocation
// // user["3"]('Я тут') // TypeError: Illegal invocation

// console.log(1 in user);  // true
// console.log('1' in user); // true
// console.log(true in user); // true


// console.log(new Object(5));
// console.log(typeof(new Object(5)));


// // TypeError: user is not iterable
// for (let key of user) {
//     console.log(attr, typeof(key), user[key], typeof(user[key]));
// }

// for (let key in user) {
//     console.log(key, typeof(key), user[key], typeof(user[key]));
// }


// // Метод Object.keys() возвращает массив строковых элементов, соответствующих именам ПЕРЕЧИСЛЯЕМЫХ (???)
// // (видимо, всех, которые не Symbol, но может, есть и ещё какое-то исключение) свойств, 
// // найденных непосредственно в самом объекте. 
// // Порядок свойств такой же, как и при ручном перечислении свойств в объекте через цикл (for in ???).

// let obj = {
//     name: 'test',
//     age: 34,
//     country: 'RF'
//   }

// console.log(Object.keys(obj));
// console.log(...Object.entries(obj));

// console.log(Object.keys({}));