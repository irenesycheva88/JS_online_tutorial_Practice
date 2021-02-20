'use strict'


// let john = { name: "John" };
// console.log(john);

// let obj = {}; // попробуем использовать Object
// obj[john] = 123; // возьмём объект john как ключ
// console.log(obj); // '[object Object]': 123 - вот как это записано!!! Получили строковый ключ
//                   // Т.к. объект obj все ключи автоматически преобразует к строке

// let map = new Map(); // теперь проделаем то же самое с Map
// map.set(john, 123);
// console.log(map);


// // Object.entries: Map из Object 
// let obj = {
//     name: "John",
//     age: 30
//   };
  
// let map = new Map(Object.entries(obj));
// console.log('Object.entries(obj) возвращает', Object.entries(obj));
// console.log(obj, map);


// // Мои пробы: получить Map сразу из массива объектов
// // Это очень странная моя идея, у которой получилась странная реализацию
// // Но интересно было поэкспериментировать с Map и Object.entries 
// let array = [
//     {name: 'test', price: 200},
//     {name: 'test1', price: 300},
//     {name: 'test', price: 100},
//     {name: 'test', price: 600}
//   ]

//   console.log(array.map(obj => Object.entries(obj)));
//   let map2 = new Map(array.map(obj => Object.entries(obj)));
//   console.log(array);
//   console.log(map2);