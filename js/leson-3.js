//Створити статистику - об'єкт, у якому вказується кількість тегів
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const statistic = {};

// tweets.flatMap(tweet => tweet.tags).forEach(tag => {
//     if(statistic[tag]){
//         statistic[tag]++;
//     }
//     else{
//         statistic[tag] = 1;
//     }
// });

// const statistic = tweets.flatMap(tweet => tweet.tags).reduce((acc, tag) =>
//  ({...acc,
//     [tag]: acc[tag]?acc[tag] + 1:1
//     }),
//  {})

// console.log(statistic);


// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
//   ];

// Отримати масив всіх тегів, при цьому не повинно бути
// повторювань і вони мають бути відсортовані в алфавітному порядку.



// const getSorted = array => array
// .flatMap(element => element.tags)
// .filter((element, index, array) => array.indexOf(element) === index)
// .toSorted((a, b) => a.localeCompare(b));

// console.log(getSorted(tweets));


// const getSorted = (array, prop) => array
// .flatMap(element => element[prop])
// .filter((element, index, array) => array.indexOf(element) === index)
// .toSorted((a, b) => typeof a === "number" ? a - b : a.localeCompare(b));

// console.log(getSorted(tweets, "tags"));


// Напишіть функцію, яка розгортає масив у зворотному порядку.
// Будь ласка, не використовуйте array.reverse(), щоб зробити завдання цікавішим.

// const data = [10, 20, 30, 40, 50, 60];

// function reverse(array){
//   return array.reduce((acc, item) => [item, ...acc], [])

//   // const newArr = [];
//   // for (let i = array.length - 1; i >= 0; i--) {
//   //   newArr.push(array[i])
//   // }
//   // return newArr;
// };

// console.log(reverse(data));

// /3. Напиши класс Notes який управляє коллекцієй нотаток у
//властивості items.
//Нотатка це  об'єкт з властивостями text, priority
//Додай класу статичну властивість Priopity,
//в якій буде зберігатись об'єкт з пріорітетами ("hight", "middle", "low").
//Додай методи addNote(note), removeNote(noteText)
//updatePriority(noteText, newPriority)

class Notes {
  static Priority = {
    HIGHT: "hight",
    MIDDLE: "middle",
    LOW: "low",
  }
  constructor() {
    this.items = [];
}
  addNote(note) {
    this.items.push(note);
}
  removeNote(noteText) {
    this.items = this.items.filter(note => note.text !== noteText)  
  }
  
  updatePriority(noteText, newPriority) {
    const note = this.items.find(note => note.text === noteText)
    if (note) {
      note.priority = newPriority
    }
  }
  
}

const notes = new Notes();
notes.addNote({ text: "Hello, World", priority: Notes.Priority.HIGHT})
notes.addNote({ text: "I studied English", priority: Notes.Priority.LOW})
notes.addNote({ text: "I have e motobike", priority: Notes.Priority.MIDDLE })
notes.removeNote("Hello, World")
notes.updatePriority("I studied English", Notes.Priority.HIGHT)



console.log(notes)
