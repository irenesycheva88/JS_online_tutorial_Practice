'use strict'

console.clear();

// // Результат сравнения имеет логический тип, и его можно присвоить
// // Другими словами, операторы сравнения возвращают значения логического типа
// console.log((2 > 1), typeof (2 > 1));

// let result = 5 > 4;
// console.log(result, typeof result);

// // СРАВНЕНИЕ СТРОК - т.е. когда ОБА ОПЕРАНДА СТРОКИ
// // использование "алфавитного" или "лексикографического" порядка

// console.log('Я' > 'А');
// console.log('Коты' > 'Кода');
// console.log('2' > '12'); // true

// // Если строки начинаются одинако, но одна из них кончается, то она меньше
// console.log('Коты' > 'Кот');
// console.log('Коты' < 'кот');
// console.log('Сонный' > 'Сон');


// // Имеет значение регистр символов
// console.log('а' > 'А'); // 'а' имеет бОльший Unicode-код, чем'А'

// // СРАВНЕНИЕ РАЗНЫХ ТИПОВ
// // При сравнениие значений РАЗНЫХ типов JS приводит их к ЧИСЛУ
// // по правилам численного преобразования

// console.log('2' > 1); // true
// console.log('01' == 1); // true
// console.log(2 > '12'); // false

// console.log(true == 1); // true
// console.log(false == 0); // true

// // В следующем примере 2 значения равны (== возвращает true),
// // но при этом при приобразовании к Boolean одно из них true, 
// // а другое - false
// // Просто, сравнение ипользует числ. преобразование, 
// // а Boolean - др. набор правил
// let a = 0;
// console.log('Boolean(a)', Boolean(a)); // false

// let b = "0";
// console.log('Boolean(b)', Boolean(b)); // true

// console.log('a == b', a == b); // true


// // СТРОГОЕ СРАВНЕНИЕ ===
// // Обычное сравнение == имеет проблемы:
// console.log(0 == false); // true - не отличает 0 от false
// console.log('' == false); // true - не отличает '' от false

// // Оператор строгого сравнения === проверяет равенство без привидения типов,
// // т.е. если операнды имеют разные типы, то проверка сразу прекращается
// console.log(0 === false); // false
// console.log('' === false); // false
// // Есть еще оператор строгого неравенства, к-й работает аналогично
// console.log('' !== false); // true


// // СРАВНЕНИЕ с null и undefined !!! ОНО ОСОБОЕ
// // 1. При строгом равенстве (и неравенстве)
// console.log(null === undefined); // false, т.к. типы различны
// console.log(null !== undefined); // true, т.к. типы различны

// // 2. При нестрогом равенстве:
// // ЭТИ ЗНАЧЕНИЯ РАВНЫ ДРУГ ДРУГУ И НЕ РАВНЫ НИКАКИМ ДРУГИМ ЗНАЧЕНИЯМ 
// // (кроме самих себя) - это СПЕЦИАЛЬНОЕ правило языка JS
// console.log(null == undefined); // true
// console.log(null != undefined); // false

// // Думаю, в примерах ниже также работает транзитивность и коммутативность 
// // правила undefined == null
// console.log(undefined == undefined); // true
// console.log(null == null); // true

// // 3. При использовании др. операторов сравнения (<, <=, >, >=) 
// // и мат. операторов (+ (кроме случая, когда 2-й операнд строка), -, *, /)
// // значение null и undefined преобразуются к числам (как все другие примитивы, 
// // ну кроме, быть может BigInt, там, наверняка, нужно явное преобразование)
// // при этом undefined становится NaN, a null становится 0

// // А т.к. NaN в любом сравнении даёт false (кроме != и !== с самим собой (последние два примера)):
// console.log(NaN > 5); // false
// console.log(NaN == 5); // false
// console.log(NaN < 5); // false
// console.log(NaN === 5); // false
// console.log(NaN == NaN);  // false ДАЖЕ ТАК!!!
// console.log(NaN === NaN); // false И ДАЖЕ ТАК!!!
// console.log(NaN != NaN);  // true - ну хоть это true
// console.log(NaN !== NaN); // true - ну хоть это true

// // а undefined по числов. преобразованию приводится к NaN, 
// то получаем следующие результаты при сравнениях больше/меньше/больше и равно/меньше и равно

// console.log(undefined > 5); // == NaN > 5 == false
// console.log(undefined < 5); // == NaN < 5 == false
// console.log(undefined >= 5); // == NaN > 5 == false
// console.log(undefined <= 5); // == NaN < 5 == false
// console.log(undefined === 5); // false

// // И как было сказано выше, правила числов. преобразований 
// // не применимо к undefined при нестрогом равенстве ==. 
// // Здесь работает другое правило: только равенство null == undefined возвращает true,
// // остальные равенства, которые содержат либо один null, либо один undefined,
// // возвращают false
// console.log(undefined == 5); // false
// console.log(null == 5); // false
// console.log(null == NaN); // false
// console.log(undefined == null); // true


// Из-за этих правил можно наблюдать странные результаты с т. зрения мат-ки
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// ...И то, что undefined неравно никакому другому значению, кроме null
// и себя
console.log(undefined > 0); // false - undefined по числов. преобразованию приводится к NaN
console.log(undefined == 0); // false
console.log(undefined < 0); // false - undefined по числов. преобразованию приводится к NaN

