/* DATA TYPES  */

/* OBJECT - obkect innehåller ett eller flera värden */
// person = {}
// var person = {}
// const person = {}

// används för klasser, objekt och json
// använder sig av key:value pairs

// JS Object
var person = {
    firstName: 'Albin',
    lastname: 'Hellman'
}

//convert to json
let json = JSON.stringify(person)
console.log(json)

// JSON Object
var json = '{ "firstName": "Albin", "lastName": "Hellman"}'


// conver to js object
var person = JSON.parse(json)
console.log(person)

