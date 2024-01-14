// Створіть масив styles з елементами 'Джаз' і 'Блюз'
//Додайте в кінець 'Рок-н-ролл'
//Заменіть значення 'Блюз' на 'Класика'

// Напишіть функцію logItems (array), яка приймає
// масив і використовує цикл for, який для кожного елемента
//буде виводити повідомлення у форматі:
//<номер елемента> - <значення елемента>
//Нумерація має починатись з 1

// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// // styles[1] = 'Класика';

// const index = styles.indexOf('Блюз');
// // styles[index] = 'Класика';
// styles.splice(index, 1, 'Класика')

// console.log(styles);

// function logItems (array) {
//     for(let i = 0; i < array.length; i++){
//         console.log(`${i + 1} - ${array[i]}`);
//     }
// }

// logItems(styles)





// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі,
// якщо є - виводить повідомлення "Доступ дозволено"
// в іншому випадку - "Користувач не знайден"

//const logins = ["Peter", "John", "Igor", "Sasha"];

////function checkLogin() {
//    const login = prompt('enter your login');
//    if (logins.includes(login)) {
//        return "Доступ дозволено";
//    }
//    else {
//        return "Користувач не знайден";
//    }
//
//}

//console.log(checkLogin())


// Наступна функція повертає true, якщо параметр age більше 18.
// В іншому випадку вона запитує підтвердження через confirm і повертає його результат:
//  const age = prompt("Enter your age");

// function checkAge() {
//             return age < 18 ? confirm ("Your age > 18") : true;
    
  
// }

// console.log(checkAge());

//Напишіть функції для роботи з масивом
//add(name) додає ім'я до кінця колекції
//remove(name) видаляє ім'я із колекції
//update(oldName, newName) змінює ім'я на нове

const names = ["Alla", "Petro", "Max", "Olena", "Boris"];

function add(name) {
    if (names.includes(name)) {
        return "try another name"
    }
    names.push(name)
    return "name added"
}
console.log(add("Natalka"))

function remove(name) {
    const del = names.indexOf(name)
    if (del === -1) {
     return 'not found. input next'
    }
    names.splice(del, 1)
    return 'Name deleted'
}
console.log(remove('Petro'))

function update(oldName, newName) {
    const change = names.indexOf(oldName)
    if (change === -1) {
       return 'not found. input next'
    }
    names.splice(change, 1, newName)
return 'name changed'
}
console.log(update("Max", "Alex"))

console.log(names)