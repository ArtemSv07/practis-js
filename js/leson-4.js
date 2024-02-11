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

const list = document.querySelector(".statList");
const result = document.querySelector("#resultButton");
const resultSection = document.querySelector("#resultSection")
let counter = 0;
let buttonClickCounter = {};

list.addEventListener("click", handleCalculate)
result.addEventListener("click", showResult)



function showResult(){

    let markup = `Загальна кількість ${counter}<br>`;
    
    for(const [name, count] of Object.entries(buttonClickCounter)){
        markup += `${name} натиснута ${count} разів <br>`;
    }
    resultSection.innerHTML = markup;
    buttonClickCounter = {};
    counter = 0;
}

function handleCalculate(event){
    if(event.target.nodeName !== "BUTTON") return;

    const buttonText = event.target.textContent;

    counter += Number(event.target.dataset.number);

    if(buttonClickCounter[buttonText]){
        buttonClickCounter[buttonText] += 1;
    }
    else{
        buttonClickCounter[buttonText] = 1;
    }
}



