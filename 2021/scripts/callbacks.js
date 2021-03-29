'use strict'

// // Передадим ф-ю callback вторым аргументом, чтобы вызвать её, когда
// // скрипт загрузится (т.е. по событию load)
// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src
//     script.onload = () => callback(script);
//     document.head.append(script);
// }

// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
//     console.log(`Скрипт ${script} загрузился`);
//     console.log(_); // ф-я, объявленная в загруж. скрипте
// });


// // Немного отступлю от темы
// // Интересно, а наоборот будет работать? - Работает.
// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src
//     document.head.append(script);
//     script.onload = () => callback(script);
// }

// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
//     console.log(`Скрипт ${script} загрузился2`);
//     console.log(_); // ф-я, объявленная в загруж. скрипте
// });

// // function loadScript() {
// //     console.log('Ещё одно определение ф-и loadScript');
// // };

// // И только оно будет актуальным на момент запуска скрипта
// // loadScript(); // 3 раза выведется 'Ещё одно определение ф-и loadScript'

// // А так? - И так работает.
// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     document.head.append(script);
//     script.onload = () => callback(script);
//     script.src = src
// }

// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
//     console.log(`Скрипт ${script} загрузился3`);
//     console.log(_); // ф-я, объявленная в загруж. скрипте
// });


// // ПЕРЕХВАТ ОШИБОК
// // Колбэк с первым аргументом-ошибкой (error-first callback)
// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src
//     script.onload = () => callback(script);
//     script.onerror = () => callback(new Error(`Не удалось загрузить скрипт ${scr}`));
//     document.head.append(script);
// }

// loadScript('/scripts/comparison.js', function(error, script) {
//     if (error) {
//         // обрабатываем  ошибку
//     } else {
//         // скрипт успешно загружен 
//     }
// });


// // АДСКАЯ ПИРАМИДА ВЫЗОВОВ
// // Для одного или двух вложенных вызовов это рабочий способ написания
// // асинхронного кода , но для нескольких асинхронных действий, к-е
// // надо выполнить друг за другом, код выглядит хуже:
// loadScript('1.js', function(error, script) {
//     if (error) {
//         handleError(error);
//     } else {
//         // скрипт успешно загружен
//         loadScript('2.js', function(error, script) {
//             if (error) {
//                 handleError(error);
//             } else {
//                 // скрипт успешно загружен
//                 loadScript('2.js', function(error, script) {
//                     if (error) {
//                         handleError(error);
//                     } else {
//                         //...и т.д., пока все скрипты не б. загружены
//                     }
//                 });
//             }
//         });
//     }
// });



