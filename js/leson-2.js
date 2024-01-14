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

// const names = ["Alla", "Petro", "Max", "Olena", "Boris"];

// function add(name) {
//     if (names.includes(name)) {
//         return "try another name"
//     }
//     names.push(name)
//     return "name added"
// }
// console.log(add("Natalka"))

// function remove(name) {
//     const del = names.indexOf(name)
//     if (del === -1) {
//      return 'not found. input next'
//     }
//     names.splice(del, 1)
//     return 'Name deleted'
// }
// console.log(remove('Petro'))

// function update(oldName, newName) {
//     const change = names.indexOf(oldName)
//     if (change === -1) {
//        return 'not found. input next'
//     }
//     names.splice(change, 1, newName)
// return 'name changed'
// }
// console.log(update("Max", "Alex"))

// console.log(names)

//4. Створіть об'єкт calculator з трьомя методами
//read(a, b) - приймає два аргумента і зберігає їх
//як властивості об'єкта
//sum() повертає сумму збереженних значень (з перевіркою на наявніст властивостей в об'єкті)
//mult() перемножає збереженні значення і повертає результат

// const calculator = {
//     read(a, b){
//         this.a = a;
//         this.b = b;
//     },
//     sum(){
//         console.log(this.a + this.b)
//         return  Number.isNaN(this.a + this.b) ? "No exist" : this.a + this.b;
//     },
//     mult(){
//         return  Number.isNaN(this.a * this.b) ? "No exist" : this.a * this.b;
//     }
// }
// //calculator.read(5, 10);
// console.log(calculator.mult());
// console.log(calculator.sum());

//5. Напишіть скрипт керування особистим кабінетом інтернет банка
//Є об'єкт account в якому необхідно реалізувати
//методи для работи з балансом та історією транзакцій

//Типів транзакцій всього два.
//Можна покласти або зняти гроші з рахунка
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

//Кожна транзакція це об'єкт з властивостями id, type, amount

const account = {
  //поточний баланс рахунка
  balance: 0,

  //Історія транзакцій
  transactions: [],

  //Метод створює і повертає об'єкт транзакцій
  //Приймає сумму і тип транзакцій
  createTransaction(type, amount) {
    return {
      type,
      amount,
    };
  },

  //Метод відповідає за додавання сумми к балансу.
  //Приймає сумму транзакціи.
  //Визиває createTransaction для створення об'єкта транзакціи
  //після чого додає його в історію транзакцій
  deposit(amount) {
    this.balance += amount;
    const newTransaction = this.createTransaction(Transaction.DEPOSIT, amount);
    // newTransaction.id = Math.random();
    // this.transactions.push(newTransaction)
    this.transactions.push({ ...newTransaction, id: Math.random() });
  },

  //Метод відповідає за зняття сумми з балансу.
  //Приймає сумму транзакціи.
  //Визиває createTransaction для створення об'єкта транзакціи
  //після чого додає йогого в історю транзакцій
  //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
  //що недостатньо коштів на рахунку
  withdraw(amount) {
    if (amount > this.balance) {
      return "Not money";
    }
    this.balance -= amount;
    const newTransaction = this.createTransaction(Transaction.WITHDRAW, amount);
    this.transactions.push({ ...newTransaction, id: 1 });
  },

  //Метод повертає поточний баланс
  getBalance() {
    return `Your balance ${this.balance}`;
  },

  //Метод шукає і повертає об'єкт транзакціи по id
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (id === transaction.id) {
        return transaction;
      }
    }
    return "not found";
  },

  //Метод повертає кількіств коштів вказаного типу
  //транзакціи зі всієї історії транзакцій
  getTransactionType(type) {
    let sum = 0;
    for (const transaction of this.transactions) {
      if (type === transaction.type) {
        sum += transaction.amount;
      }
    }
    return sum;
  },
};

account.deposit(30);
account.deposit(59);
account.withdraw(24);
console.log(account.withdraw(139));
console.log(account.getBalance());
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionType(Transaction.DEPOSIT));

console.log(account);
