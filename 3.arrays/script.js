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

//const multiarray = ["text", 12, true]
//const people = [
//    { firstName: "Albin", age: 19, status: true },
//    { firstName: "Åberg", age: 70, status: false },
//    { firstName: "Marcus", age: 17, status: true },
//]

//const numberarray = [1,2,3,4,5]

// console.log(objarray[1])
// console.log(multiarray[1])
// console.log(numberarray[1])

// people.forEach(function(value, index) {
//    console.log(value.firstName, index)
// })

//let names = ['Albin','Manfred Olle','Hellman']

//.unshift() - lägg till i början av en array
// names.unshift('zoar)

//.shift() - ta bort första värdet i en array
// names.shift()

//.push() - lägg till i slutet av en array
// names.push('zoar')

//.pop() - ta bort sista värdet i en array
// names.pop()

//.sort() - sorterar arrayen i A-Z ordning
// names.sort()

// .reverse() - vänder på hela arrayn.
// names.reverse()

//nestlad array - .sort().reverse() etc.
// names.push('Zoar')
// names.sort().reverse()

//delete - tar bort ett värde från en specifik position
//delete names[1]


//splice() - tar bort/lägg till ett värde från en specifik position
// names.splice(2,0, "Marcus")     //lägger till
// names.splice(1, 1)             //tar bort


//indexOf() - hitta ett specifikt index att ett värde
// names.indexOf('Björn')
//console.log(names.indexOf('Björn'))

// exmpel på att ta bort A
// let index = names.indexOf('Björn')
// delete names[index]

//.length - hur många värden innehåller arrayen
//console.log(names.length)



// .forEach() - loopar igenom hela arrayen
//names.forEach(function(name, index)  {
//    console.log(index, name)
//})


// med arrow-functions (lambda functions/lambda expression)
//names.forEach(function(name,index)  {
//    console.log(index, name)
//})

//names.forEach(function(name) {
//    console.log(name)
// })

//names.forEach(function (name) {
 //   console.log(name)})


 // for loop - det gamla sättet att loopa igenom en array

 //for (var i=0; i < names.length; i++) {
 //    console.log(names[i]);
 //}
 // .map
 //let people = [
 //    { firstName: "Albin", lastName: "Hellman"},
 //    { firstName: "Marcus", lastName: "Hellman"},
//     { firstName: "Björn", lastName: "Hellman"},
//     { firstName: "Anna", lastName: "Allansson"},
 //]

 //let firstNames = people.map(function(person) {
 //    return person.firstName
 //})
 //console.log(firstnames)

 //.filter
 //let specificpeople = people.filter(function(person) {
 //    return person.lastName == "Hellman"
 //})
 //console.log(specificpeople)


 //.reduce