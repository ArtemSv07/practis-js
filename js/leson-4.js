// Створити невелику гру
// Спочатку на екрані з'являється якась фігура рандомного коліру в рандомному місті
// Натискаючі на фігуру, вона змінює свою форму, колір, місце розташування

// const forms = [
//   "width: 100px; height: 100px; border-width: 1px;",
//   "width: 100px; height: 100px; border-radius: 50%;",
//   "width: 150px; height: 100px; border-width: 1px;",
//   "width: 200px; height: 100px; border-radius: 100px / 50px; ",
//   "width: 150px; height: 100px; transform: skew(20deg)",
// ];

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function randomither(max) {
//   return Math.floor(Math.random() * max);
// }

// const randomElement = document.createElement("div");
// rand();
// document.body.appendChild(randomElement);

// randomElement.addEventListener('click', rand)

// function rand(){
//     randomElement.style.cssText = forms[randomither(forms.length-1)];
//     randomElement.style.backgroundColor = getRandomHexColor();
//     randomElement.style.position = "absolute";
//     randomElement.style.top = randomither(100) + "%";
//     randomElement.style.right = randomither(100) + "%";
// }

//===================================================================================

/*
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/

// const list = document.querySelector(".statList");
// const result = document.querySelector("#resultButton");
// const resultSection = document.querySelector("#resultSection")
// let counter = 0;
// let buttonClickCounter = {};

// list.addEventListener("click", handleCalculate)
// result.addEventListener("click", showResult)

// function showResult(){

//     let markup = `Загальна кількість ${counter}<br>`;

//     for(const [name, count] of Object.entries(buttonClickCounter)){
//         markup += `${name} натиснута ${count} разів <br>`;
//     }
//     resultSection.innerHTML = markup;
//     buttonClickCounter = {};
//     counter = 0;
// }

// function handleCalculate(event){
//     if(event.target.nodeName !== "BUTTON") return;

//     const buttonText = event.target.textContent;

//     counter += Number(event.target.dataset.number);

//     if(buttonClickCounter[buttonText]){
//         buttonClickCounter[buttonText] += 1;
//     }
//     else{
//         buttonClickCounter[buttonText] = 1;
//     }
// }

/////////////////////////////////////////////////////////////

// Створити червоний квадрат розміром 50 на 50 рх
// Додати кнопку "Зменшити", яка робить квадрат менше на 10 пікселів
// Додати кнопку "Збільшити", яка робить його більше на 10 пікселів.
// const div = document.createElement("div");
// const box = document.createElement("div");
// let size = 50;

// box.style.height = `${size}px`;
// box.style.width = `${size}px`;
// box.style.backgroundColor = "red";

// const butttonDecr = document.createElement("button");
// butttonDecr.textContent = "Зменшити";
// const butttonIncr = document.createElement("button");
// butttonIncr.textContent = "Збільшити";
// div.append(butttonDecr, butttonIncr, box);

// document.body.append(div);

// div.addEventListener("click", resize);

// function resize(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }

//   if (event.target.textContent === "Зменшити" && size > 0) size -= 10;
//   if (event.target.textContent === "Збільшити") size += 10;

//   box.style.height = `${size}px`;
//   box.style.width = `${size}px`;
// }
///////////////////////////////////////////////////////////////////////

//  При натисканні на будь-який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.
//  "Ви вибрали <product> за <price>".

// const table = document.querySelector("#productTable");
// table.addEventListener("click", chooseProduct);

// const productDetails = document.querySelector("#productDetails");

// function chooseProduct(event) {
//   if (event.target.nodeName !== "TD") return;

//   const parent = event.target.parentNode;
//   const product = parent.firstElementChild.textContent;
//   const price = parent.lastElementChild.textContent;
//   productDetails.textContent = `Ви вибрали ${product} за ${price}`;
// }



// Якщо імейл і пароль користувача збігаються, зберігай дані з форми при сабміті
// у локальне сховище і змінюй кнопку login на logout і роби поля введення
// недоступними для змін.

// При перезавантаженні сторінки, якщо користувач залогінений, ми маємо бачити logout-кнопку
// та недоступні для зміни поля з даними користувача.
// Клік по кнопці logout повертає все до початкового вигляду і видаляє дані користувача
// З локального сховища.

// Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// повідомляти про помилку.

const USER_DATA = {
  email: "user@mail.com",
  password: "secret",
};

const STORAGE_KEY = 'login-form'

const form = document.querySelector('.login-form');
const email = document.querySelector('[name=email]');
const password = document.querySelector('input[name=password]');
const btn = document.querySelector('.login-btn');

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault()
  if (btn.textContent === 'Logout') {
    localStorage.removeItem(STORAGE_KEY)
    form.reset()
    email.removeAttribute('readonly')
    password.removeAttribute('readonly')
    btn.textContent = 'Login'
    return;
  }
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === '' || passwordValue === '') {
    iziToast.warning({
      message: 'Ви забули ввести email та/або password',
  });
  return
  }

  if (emailValue !== USER_DATA.email || passwordValue !== USER_DATA.password) {
    iziToast.error({
      title: 'Помилка!',
      message: 'Неправильні email чи password',
  });
  return
  }

  const userData = {
    email: emailValue,
    password: passwordValue,
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userData))

  btn.textContent = 'Logout';
  email.setAttribute('readonly', true);
  password.setAttribute('readonly', true);
};

const savedData = localStorage.getItem(STORAGE_KEY)
if (savedData) {
  const parsedData = JSON.parse(savedData)
  email.value = parsedData.email || '';
  password.value = parsedData.password || '';

  btn.textContent = 'Logout';
  email.setAttribute('readonly', true);
  password.setAttribute('readonly', true);
}


