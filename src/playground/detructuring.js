// const persone = {
//     age: 39,
//     location: {
//         city: 'paris',
//         temp: 92
//     }
// }
// const { name: firstName = 'Broly', age } = persone
// console.log(`${firstName} is ${age}`);
// const { temp: temperature, city } = persone.location
// if (temperature && city) {
//     console.log(`Its ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// }
// const { name: publisherName = 'self-publisher' } = book.publisher
// console.log(publisherName)

//
//Array destructuring
//

const adress = ['1299 S Juniper street', 'paris', 'ile-defrance', '75000'];
const [, city, state,] = adress;
console.log(`You are in ${city} ${state}`);

const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75'];
const [coffeHot, , mediumPrice, ,] = item;

console.log(`A medium ${coffeHot} cost ${mediumPrice}`);

