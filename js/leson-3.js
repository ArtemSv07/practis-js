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


const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
  ];

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
