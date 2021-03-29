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

// let arr1 = [1, 2, 3];
// let arr2 = [1, 3, 5];
// let arr3 = arr1 + arr2; 
// console.log(arr3);  // херня, возвращает строку '1,2,31,3,5'

// // А что сможет lodash???
// let arr4 = _.sum(arr1, arr2); 
// console.log(arr4); // 6!!! Вот это ответ!!!

// // А, ну я туплю
// let arr5 = new Array(...arr1, ...arr2); 
// // // Без new тоже сработало:
// // let arr5 = Array(...arr1, ...arr2); 
// console.log(arr5); // [1, 2, 3, 1, 3, 5]

// // Отсортируем
// // на самом деле метод sort меняет arr5 на месте, нет смысла в новой переменной sortedArr5
// let sortedArr5 = arr5.sort((a, b) => a - b); 
// console.log(sortedArr5); // [1, 1, 2, 3, 3, 5]
 
// console.log(arr5[5 / 2]);  // undefined, т.к. такого элемента нет. Логично
// console.log(arr5[6 / 2]); // 3 - т.к. arr5 уже отсортирован на месте
// console.log(6 / 2);

// // Все действия в одну строку
// // let nums = (new Array(...arr1, ...arr2)).sort((a, b) => a - b);
// let nums = (Array(...arr1, ...arr2)).sort((a, b) => a - b);   // или без опратора new. ??? Непонятно, почему
//                                     // JS без разницы использую ли я new или нет при создании массива???
// console.log(nums);

// var findMedianSortedArrays = function(nums1, nums2) {
//     let nums = []
//     nums.push(...nums1, ...nums2);
//     nums.sort((a, b) => a - b);
//     return (nums.length % 2 === 1) ? nums[(nums.length - 1) / 2] : (nums[(nums.length) / 2 - 1] + nums[(nums.length) / 2]) / 2;
// };

// console.log(findMedianSortedArrays([], [1]));

// console.log(new Array(...[], ...[1])); // [empty], length == 1, т.к. было передано только одно число
// console.log(new Array(...[1], ...[])); // [empty], length == 1, т.к. было передано только одно число
// console.log(new Array(...[])); // []
// console.log([]);
// console.log(...[]);  // вообще эта строчка не выводится
// console.log();      // и эта тоже не выводится
// console.log(null);
// // let a = (...[]);  // Uncaught SyntaxError: Unexpected token '...'
// // console.log(a);

