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

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі.

const num = Number(prompt("Введдіть число від 1 до 4"))
let result = ""
switch (num) {
   case 1: 
      result = 'зима'
      break;
   case 2:
      result = 'весна'
      break;
   case 3: 
   result = 'літо'
      break;
      case 4:
      result = 'осінь'
      break;
   default:
      result = "спробуйте ще раз ввести число від 1 до 4"
      
}
console.log (result)