// Destructuring allows us to create local variables and rename them, set default values.

// comes in the object we defined.

// const person = {
//     name: 'Seb',
//     age: 21,
//     location: {
//         city : 'Las Vegas',
//         temp : 88
//     }
// };

// // ES6 destructuring objects 

// const { name , age } = person;
// console.log(`${name} is ${age}`)

// // renamed temp into temperature 
// const { city , temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }


// const book = {
//     title: 'Ego is the enemy', 
//     author: 'Ryan Holiday', 
//     publisher: {
        
//     }
// }

// const { name: publisherName ='Self Published' } = book.publisher;

// if(publisherName) {
//     console.log(publisherName)
// }



//Array destructuring


const address = ['1299 S Juniper Street', 'Las Vegas', 'Nevada', '19147']

const [, city, state, zip] = address;

console.log(`You are in ${city}, ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75' ]

const [ product, , medium] = item;

console.log(`A medium ${product} is ${medium}`)