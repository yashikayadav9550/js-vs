// Primitive

// 7 types : String , Number , Boolean  ,Null , Undefined , BigInt , Symbol

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id === anotherId)

// const bigNumber = 235464634n

// const score : Number = 100 (TypeScript)
// JavaScript is DYNAMICALLY TYPED LANGUAGE

// Reference (Non Primitive)

// Array , Objects , Functions

const heros = ["spiderman", "ironman"]
let myObj = {
    name : "yash",
    age : 33,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object