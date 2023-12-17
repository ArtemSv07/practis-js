////////////////////////// task-1 ////////////////////////////

//Використовуя функцію if...else,
//напишіть код, який буде питати:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
//то показати через alert: "Вірно!"
//в противному випадку відобразити:"Не знаєте? ECMAScript!"

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const answer = prompt("Яка офіційна назва JavaScript?");

// if (answer === "ECMAScript") {
//     alert("Вірно!");
// } else {
//     alert("Не знаєте? ECMAScript!");
// };
////////////////////////////////////////////////

//Напишіть программу, яка отримує від користувача
//число (кількість хвилин) и виводить у консоль
//рядок у форматі годин та хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const answer = prompt("Ввидіть число");
// let hours = parseInt(answer / 60);
// let minutes = answer % 60;
// hours = String(hours).padStart(2, 0);
// minutes = String(minutes).padStart(2, 0);

// console.log(`${hours}:${minutes}`);

//////////////////////////////////////////////////////////////////////////////

//Напишіть цикл, який виводить в консоль
//числа от max до min по зменьшенню
//Виведіть в консоль суму усіх парних чисел
// const min = 2;
// const max = 15;
// let total = 0;

// for(let i = max; i >= min; i--){
//     console.log(i);
//     if(i % 2 === 0){
//         total += i;
//     }
// }

//console.log(total);

// function total(min, max){
//     let total = 0;

//     for(let i = max; i >= min; i--){
//         console.log(i);
//         if(i % 2 === 0){
//             total += i;
//         }
//     }

//     return total;
// }

// console.log(total(2, 15));
// console.log(total(4, 7));
// console.log(total(11, 20));
// console.log(total(1, 3));

//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

// function checkNum(){
//    const num = prompt("Введіть число")

//    if(num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
//    if(num % 3 === 0) return "fizz";
//    if(num % 5 === 0) return "buzz";
// }

// console.log(checkNum());

function checkNum(){


  const num = prompt("Введіть число")
  for(let i = 1; i <= num; i++){
    if(i % 3 === 0 && i % 5 === 0) {console.log(`${i} is fizzbuzz`)}
    else if(i % 3 === 0) {console.log(`${i} is fizz`)}
    else if(i % 5 === 0) {console.log(`${i} is buzz`)}
    else {console.log(`${i} is not fizz and buzz`)}
  }
}

checkNum();

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі.

// const num = Number(prompt("Введдіть число від 1 до 4"))
// let result = ""
// switch (num) {
//    case 1:
//       result = 'зима'
//       break;
//    case 2:
//       result = 'весна'
//       break;
//    case 3:
//    result = 'літо'
//       break;
//       case 4:
//       result = 'осінь'
//       break;
//    default:
//       result = "спробуйте ще раз ввести число від 1 до 4"

// }
// console.log (result)

// ---------------------------------

//Напишіть код, який буде питати
//логін за допомогою prompt и логіровати результат
//в консоль браузера

//Якщо користувач вводить "Адмін",
//то prompt запрашує пароль.
//Якщо ничого не ввели чи нажата клавіша Esc
//вивести строку "Скасовано"
//В противному випадку вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введен пароль "Я головний",
//то вивести рядок "Вітаю!"
//в іншому випадку виводити рядок "Невірний пароль!"

// const login = prompt("Введіть логін");
// console.log(login);
// if (login === "Адмін") {
//   const password = prompt("Введіть пароль");
//   //   if (password === "Я головний") {
//   //     alert("Вітаю!");
//   //   } else {
//   //     alert("Невірний пароль!");
//   //   }
//   alert(password === "Я головний" ? "Вітаю!" : "Невірний пароль!");
// } else if (login === "" || login === null) {
//   alert("Скасовано");
// } else {
//   alert("Я вас не знаю");
// }





// -------------------------------------------- //

// В змінній minuteValue є число від 0 до 59.
// Визначте до якої чверті години входить
// це число(в першу, другу, треттю чи четверту).

// const minuteValue = Math.floor(Math.random() * (59 - 0) + 0);

// if(minuteValue <= 15) {
//   console.log(`${minuteValue} - перша чверть`)
// } else 
// if(minuteValue <= 30) {
//   console.log(`${minuteValue} - друга чверть`)
// } else
// if(minuteValue <= 45) {
//   console.log(`${minuteValue} - третя чверть`)
// } else {
//   console.log(`${minuteValue} - четверта чверть`)
// }


