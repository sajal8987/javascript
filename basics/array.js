//Storing a collection of multiple items under a single variable name 

const arr1 = [0,1,2,3,4,5]
//console.log(arr1[2]); 

const arr2 = new Array(1,2,3,4,5);
//console.log(arr2)

//Array methods 

//arr1.push(6)
//console.log(arr1)
//console.log(typeof(arr1))

//arr1.pop()
//console.log(arr1)

//arr1.unshift(10)
//console.log(arr1)

//arr1.shift()
//console.log(arr1)

//Some Questionative methods

//console.log(arr1.includes(4))
//console.log(arr1.indexOf(5))


//Slice:Original ko manipulate nhii karta;
//Splice:Original ko manipulate kar deta hai

let pizza = [1,2,3,4,5]
let newPizza = pizza.slice(1,3)
console.log(newPizza)

//let newPizza2 = pizza.splice(0,2)
//console.log(newPizza2)


//Some Other Methods

//var arr3 = arr1.concat(arr2)
//console.log(arr3)

//var arr3 = [...arr1,...arr2]
//console.log(arr3)

// Special type of array

//var arr4 = [1,2,3,[1,2,4,[2,9,8]],120]
//var arr5 = arr4.flat(Infinity);
//console.log(arr5)

//console.log(Array.isArray("hitesh"))
//console.log(Array.from("hitesh"))
//console.log(Array.from({name:"hitesh"}))

// let Score1 = 410;
// let Score2 = 410;
// let Score3 = 410;

// console.log(Array.of(Score1,Score2,Score3))