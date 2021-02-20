'use strict'

console.clear();

// // Унарный минус
// let x = 1;
// x = -x
// console.log(x);   // -1



// // Бинарные операторы
// // Напр., бинарный минус
// let x = 1, y = 3;
// console.log(x - y); // -2



// // Взятие остатка %
// console.log(5 % 2); // 1
// console.log(8 % 3); // 2

// // Операнды могут быть нецелыми и отрицательными
// console.log(8.5 % 3); // 2.5
// console.log(8.5 % 3.5); // 1.5
// console.log(-8.5 % 3.5); // -1.5 не как в Python!!! Там 2.0
// console.log(8.5 % -3.5); // 1.5 не как в Python!!! Там -2.0
// console.log(-8.5 % -3.5); // -1.5 как в Python

// console.log(-7 % 3); // -1 не как в Python!!! Там 2



// // Возведение в степень
// console.log(2 ** 3); // 8
// console.log(2 ** 4); // 16

// // Операнды могут быть нецелыми и отрицательными
// console.log(4 ** 0.5);  // 2
// console.log(8 ** (1/3)); // 2 - куб. корень

// console.log(8 ** -(1/3)); // 0.5
// console.log(0.125 ** -(1/3)); // 2



// // Сложение строк с помощью бин. +

// let s = "моя" + "строка";  // объединяет строки
// console.log(s);       // 'моястрока'

// // Если хоть один операнд строка, то второй тоже преобразуется в строку
// console.log('1' + 2);  // '12'
// console.log(1 + '2');  // '12'

// console.log(2 + 2 + '1'); // '41', a не '221'



// // Др. арифметич. бин. операторы: *, /, -, ** и т.д. работают ТОЛЬКО С ЧИСЛАМИ, п.э. всегда пытаются ПРЕОБРАЗОВАТЬ НЕЧИСЛО (строку, null, Boolean, undefined) в ЧИСЛО
// console.log(6 - '2');    // 4
// console.log('6' / '2');  // 3
// console.log(7 % '2');    // 1
// console.log('6' / '2w'); // == 6 / NaN == NaN


// console.log(true / 5);  // == 1 / 5 == 0.2
// console.log(5 / true);  // 5
// console.log('5' / true);  // 5
// console.log(5 / +true);  // 5 явное преобразование в число с помощью унар. + 
// console.log(false / 5); // == 0 * 5 == 0
// console.log(5 / false); // == 5 / 0 == Infinity
// console.log(5 / "false"); // == 5 / NaN == NaN, т.е. не сможет получить число из этой строки (как и в Python)
// console.log(5 / +"false"); // NaN
// console.log(5 / +false); // Infinity

// console.log(5 / null); // == 5 / 0 == Infinity
// console.log(5 + null); // == 5 + 0 == 5

// console.log("  \t \n  " / true); // "  \t \n  2"
// console.log("  \t \n  " - 2); // == 0 - 2 == -2
// console.log("  \t \n  " + 2); // "  \t \n  2"


// console.log(true + 'fff'); // "truefff"

// // C BigInt
// // Ещё пробы с BigInt ниже
// // console.log(22 + 22n);  // TypeError: Cannot mix BigInt and other types, use explicit conversions



// // Привидение к числу, унарный +

// // Не влияет на числа (Number) (в том числе и спец. числовые значения)
// let x = 1;
// console.log(x, +x);  // 1
// let y = -2;
// console.log(y, +y);  // -2

// console.log(6.2, +6.2); // 6.2
// console.log(NaN, +NaN); // NaN
// console.log(Infinity, +Infinity);  // Infinity
// console.log(-Infinity, +-Infinity);  // -Infinity

// // BigInt - ОШИБКА, т.о. + не может сконвертировать BigInt
// // Ещё пробы с BigInt ниже
// console.log(345336n, +345336n);  // TypeError: Cannot convert a BigInt value to a number

// // Преобразует НЕ ЧИСЛА в числа, то же самое, что и Number(...)
// console.log(+true); // 1
// console.log(+"");   // 0
// console.log(+undefined);  // NaN
// console.log(+NaN);  // NaN - не влияет же на числа, и в том числе на спец. числовые значения
// console.log(+null); // 0
// console.log(+'3244'); // 3244

// // Строки
// console.log('dfggg', +'dfggg'); // NaN - не смог получить число из данной строки
// console.log(' \t56  \n  ', +' \t56  \n  '); // 56 - смог
// console.log('Строка с пробельными символами (пробелы, табы, \n)', +' \t  \n  ');   // 0 - смог

// // null
// console.log(null, +null); // 0

// // undefined
// console.log(undefined, +undefined); // NaN

// // bool
// console.log(true, +true);  // 1
// console.log(false, +false); // 0

// // При попытке сконвертировать ф-ю в число
// console.log(console.log, +console.log); // NaN

// // 
// let apples = '2';
// let oranges = '3';

// console.log(apples + oranges);  // '23'
// console.log(+apples + +oranges); // 5
// console.log(Number(apples) + Number(oranges));  // 5



// // Присваивание (=) возвращает значение
// let a = 1;
// let b = 2;

// let c = 3 - (a = b + 1);

// console.log(a); // 3
// console.log(c); // 0


// // Присваивание по цепочке
// let a, b, c;

// a = b = c = 2 + 2;

// console.log(a); // 4
// console.log(b); // 4
// console.log(c); // 4

// // Но лучше присваивать в отдельной строчке для читаемости
// c = 3;
// a = c;
// b = c;

// console.log(a);
// console.log(b);
// console.log(c);



// // Сокращенная арифметика (и побитовые операции) с присваиванием
// let n = 2;
// n += 5;   // n == 7
// n *= 2;   // n == 14

// console.log(n);

// // Приоритет такой же как и с обычным присваиванием
// let k = 2;
// k *= 3 + 5  // то же, что и k *= 8

// console.log(k);  // k == 16



// Инкремент/декремент

// let counter = 2;

// counter++;
// console.log(counter);

// counter--;
// console.log(counter);

// // 5++;  // SyntaxError: Invalid left-hand side expression in postfix operation

// // Префиксная и постфиксная форма инк./декрем.
// let counter2 = 1;
// let a = ++counter2;
// console.log(a);   // 2
// console.log(counter2);  // 2

// counter2 = 1;
// a = counter2++;
// console.log(a);   // 1
// console.log(counter2);  // 2

// let counter3 = 0;
// counter3++;
// ++counter3;
// console.log(counter3);   // 2, обе строки сделали одно и то же

// // Инкремен./декрем. в ЛЮБЫХ выражениях
// let counter4 = 1;
// console.log(2 * ++counter4);  // 4
// counter4 = 1;
// console.log(2 * counter4++);  // 2

// // ...но лучше использовать стиль "одна строка - одно действие"
// let counter5 = 1;
// console.log(2 * counter5);
// counter5++;



// // Побитовые операции
// console.log(2 | 1); // OR 3
// console.log(2 & 1); // AND 0
// console.log(2 >> 1); // RIGHT SHIFT  1
// console.log(2 >>> 1); // RIGHT SHIFT 1



// // Оператор "запятая" (имеет очень низкий приоритет, даже ниже =, п.э. в примере есть скобочки)
// let b, c;
// let a = (b = 1 + 2, c = 3 + 4);  // возвращаетcя результат только последнего выражения
// console.log(a); // 7
// console.log(b); // 3
// console.log(c); // 7

// let a;
// a = (1 + 2, 3 + 4);
// console.log(a); // 7

// a = 1 + 2, 3 + 4;
// console.log(a); // 3

// (a = 1 + 2), 3 + 4;
// console.log(a); // 3


// // Ещё пробы с BigInt
// // console.log(345336n, +345336n);  // TypeError: Cannot convert a BigInt value to a number
// // console.log(22 + +22n); // TypeError: Cannot convert a BigInt value to a number
// // console.log(22 + 22n);  // TypeError: Cannot mix BigInt and other types, use explicit conversions
// // НО!!! С ЯВНЫМ ПРЕОБРАЗОВАНИЕМ
// console.log(345336n, Number(345336n));  // 345336
// console.log(22 + Number(22n)); // 44!!!

// // Ну и если оба BigInt, то всё норм
// console.log('11n + 22n', 11n + 22n);  // 33n

// console.log(Number('22n')); // NaN
// // console.log(BigInt('22n')); // SyntaxError: Cannot convert 22n to a BigInt
// console.log(BigInt('22'), typeof(BigInt('22'))); // 22 - тип bigint
// console.log(BigInt(22), typeof(BigInt(22))); // 22 - тип bigint
// console.log(BigInt(22n), typeof(BigInt(22n))); // 22 - тип bigint
// console.log(BigInt(''), typeof BigInt(''));  // 0 - тип bigint
// console.log(Number(BigInt('22'))); // 22
// console.log(Number(BigInt(22)));  // 22
// console.log(Number(22n));  // 22









