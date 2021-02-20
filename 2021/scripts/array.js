'use strict'

// // let arr = new Array();

// let arr = []; // более частый вариант

// console.log(arr);

// let array = [2, 3, 4, 2, 3];

// console.log(array);

// array.push(6);
// console.log(array);

// array.push(true);
// console.log(array);

// let last = array.pop();
// console.log(array, last);

// let removed = array.splice(5, 5);
// console.log(array, removed);  // [2, 3, 4, 2, 3] [6]

// // Отрицательное количество для удаления
// removed = array.splice(4, -7);   
// console.log(array, removed); // ничего не удалил, и это хорошо

// array.push(...[11, 12, 13]);
// console.log(array);

// let fruits = ['Яблоко', 'Апельсин', 'Груша'];

// // Цикл по цифровым индексам
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// // Цикл по значениям
// for (let fruit of fruits) {
//     console.log(fruit);
// }

// // Т.к. массив является объектом, можно использовать и вариант for..in
// // но это не очень хорошая идея, т.к. он медленнее др. способов
// for (let key in fruits) {
//     console.log(key, fruits[key]);
// }




// // При обращении по индексу за пределы массива с помощью [] возвращает undefined
// console.log(["апельсин", "яблоко", "банан"][10]) // undefined
// console.log(["апельсин", "яблоко", "банан"][-10]) // undefined




// // Метод Array.from() создаёт новый экземпляр Array из массивоподобного или итерируемого объекта,
// // например из Set
// console.log(Array.from(new Set(["апельсин", "яблоко", "банан"]))); // ["апельсин", "яблоко", "банан"]