var imya = prompt(' Bведите своё имя ');

console.log(' Меня зовут ' + imya);

var age = +prompt('Введите свой возраст')

console.log(' Мне ' + age);

var exercise1 = +prompt('Решите пример ' + '20 + 3 = ?');
console.log('Пример 1.' +  ' 20 + 3 = ' + (20 + 3)  + ' Правильный ответ: ' + exercise1);

var exercise2 = +prompt('Решите пример ' + '20 - 3 = ?');
console.log('Пример 2.' +  ' 20 - 3 = ' + (20 - 3)  + ' Правильный ответ: ' + exercise2);

var exercise3 = +prompt('Решите пример ' + '5 * 3 = ?');
console.log('Пример 3.' +  ' 20 * 3 = ' + (5 * 3)  + ' Правильный ответ: ' + exercise3);

var exercise4 = +prompt('Решите пример ' + '15 / 3 = ?');
console.log('Пример 4.' +  ' 20 / 3 = ' + (15 / 3)  + ' Правильный ответ: ' + exercise4);

var exercise5 = +prompt('Решите пример ' + '10 % 5 = ?');
console.log('Пример 5.' +  ' 20 + 3 = ' + (10 % 5)  + ' Правильный ответ: ' + exercise5);

alert('Откройте консоль для просмотра');

/* Задание 2 */

var X, Y, Z, res;

X = prompt('Введите первое число');
Y = prompt('Введите второе число');
Z = prompt('Введите третье число');

res = (X + Y + Z) / 3;

alert('Среднее арифметическое: ' + res);