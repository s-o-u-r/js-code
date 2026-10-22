// # Primitive (call by value)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const userName= "sourish"
const score= 100
const scoreValue= 100.3
const isLoggedIn = false
const outTemp = null
let userEmail;
const id = Symbol('123')
const anotherId= Symbol('123')
console.log(id == anotherId)

const bigNumber= 3436758235n

// Reference (non primitive)

// Array, Objects, Functions

const heros = ["superman", "spiderman", "ironman", "falcon"]

let myObj={
    name: "sourish",
    age: 20,
}

let myfunc=function(){
    console.log("hello world");
}