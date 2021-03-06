//
//Object Destructuring
//

// const person = {
//     name: 'Manjunaths',
//     age: 23,
//     location: {
//         city: 'Kundapura',
//         temp: 28
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;

// if(city && temperature){
//     console.log(`It's ${temperature} nin ${city}`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Manjunath Poojary',
//     publisher : {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;

// if(publisherName){
//     console.log(publisherName);
// }

//
//Array Destructuring
//

const address = ['Navunda', 'Kundapura', 'Karnataka', '576224'];
const [, city, state='New York'] = address;
console.log(`You are in ${city}, ${state}`);


const item = ['Coffee (hot)','$2.00','$2.50','$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} is ${mediumPrice}`);
