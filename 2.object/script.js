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
    isEnabled: true,
    height: 190,
    fullName: function() {
        // return this.firstName + " " + this.lastName
        return `${this.firstName} ${this.lastName}`
    },
    favoColors: ["yellow","green","blue"]
}

let person2 = { firstName: "Åberg" }

// var json = JSON.stringify(person)
// console.log(json)

// person.firstName
// console.log(person.face.eyes)

// person['firstName']
// console.log(person['firstName'])
// console.log(person.height)

// let firstName = person.firstName
// let lastName = person.lastName
// console.log(firstName)
// console.log(lastName)

//destructing objects
// let {firstName: fName, lastName: lName} = person
// console.log(fName)
// console.log(lName)

// function in js object
// person.fullName()
// console.log(person.fullName())

// let json = JSON.stringify(person)
// console.log(json)

let json = '{ "firstName": "Albin", "lastName": "Hellman"}'
var res = JSON.parse(json)

let user = {
    
    firstName : person2.firstName
}

console.log(user)

console.log(person.favoColors[1])