/* DATA TYPES  */

/* OBJECT - obkect innehåller ett eller flera värden */
// person = {}
// var person = {}
// let person = {}
// const person = {}
// console.log(typeof person)

// används för klasser, objekt och json
// använder sig av key:value pairs

// JS Object
//var person = {
 //   firstName: 'Albin',
//    lastname: 'Hellman'
// }

//convert to json
// let json = JSON.stringify(person)
// console.log(json)

// JSON Object
// var json = '{ "firstName": "Albin", "lastName": "Hellman"}'


// conver to js object
// var person = JSON.parse(json)
// console.log(person)

var person = {
    firstName: 'Albin',
    lastName: "Hellman",
    age: 19,
    face: {
        hair: "blond",
        eyes: "grön"
    },
    isEnabled: true
}

// var json = JSON.stringify(person)
// console.log(json)

person.firstName
console.log(person.face.eyes)