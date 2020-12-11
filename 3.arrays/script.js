/* ARRAYS - en lista med ett eller flera värden */

// names = []
// var names = []
// let names = []
//const names = []

// const name = "Albin"
// name = "Åberg"  //detta funkar inte att göra så här.

// const names = ["Albin"]
// names[0] = "Albin" // detta fungerar 

// const person = { firstName: "Albin"}
// person.firstName = "Albin"  //detta fungerar

// console.log(names)
// console.log(person.firstName)

// const names = ["Albin","Åberg","Björn","Anders"]
// console.log(names)
// console.log(names.length)
// console.log(names.indexOf("Albin"))

const multiarray = ["text", 12, true]
const people = [
    { firstName: "Albin", age: 19, status: true },
    { firstName: "Åberg", age: 70, status: false },
    { firstName: "Marcus", age: 17, status: true },
]

const numberarray = [1,2,3,4,5]

// console.log(objarray[1])
// console.log(multiarray[1])
// console.log(numberarray[1])

// people.forEach(function(value, index) {
//    console.log(value.firstName, index)
// })

let names = ['C','A','B']

//.unshift() - lägg till i början av en array
// names.unshift(0)

//.shift() - ta bort första värdet i en array
// names.push(0)

//.push() - lägg till i slutet av en array
// names.push(0)

//.pop() - ta bort sista värdet i en array
// names.pop()

//.sort() - sorterar arrayen i A-Z ordning
// names.sort()

// .reverse() - vänder på hela arrayn.
// names.reverse()

//nestlad array - .sort().reverse() etc.
names.push('Z')
names.sort().reverse()






names.forEach(value => console.log(value))