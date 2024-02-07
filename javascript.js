// // LOOPS
// // WHILE LOOPS
// // while("expression"){
// // statements to be executed if expression is true
// //}

// var countingNumbers = 0

// //while(countingNumbers < 10){
// //    console.log("Counting Number:" + countingNumbers);
// //    countingNumbers++;
// //}

// //DO WHILE LOOP
// // do{
// //     console.log("Counting Number:" + countingNumbers);
// //     countingNumbers++;
// // }while(countingNumbers < 6)

// //FOR LOOP
// // for ("initialization"; "test condition"; "increament"){
// //     statement to be executed if expression is true
// // }

// // for (gold = 0; gold <= 5; gold++){
// //     console.log("Gold coins: "+ gold);
// // }

// const number = 8;
// for (i=1; i<=12; i++){
//     let resultAnswer = number * i;
//     console.log(`${number} x ${i} = ${resultAnswer}`)
// }
// // JAVASCRIPT FUNCTION

// function myFunction ( ){
//     //statements
// }
// function myFirstFunction (){
//     console.log("I am an amazing javascript developer")
// }
// myFirstFunction()
// function mySecondFunction (name){
//     console.log(name + " is very beautiful")
// }
// mySecondFunction("Winnie");

// function street (sex, complexion){
//     let output;
//     output = `Adaobi is ${sex} and is ${complexion}`;
//     console.log(output)
//     return output;
// }
// street("female","fair")

// function area(length,breadth){
//     const area = length * breadth;
//     console.log(`${area} cm`)
// }
// area(10,5)

// function celsiusConverter(c){
//     var F = (9/5 * c)+32;
//     console.log(`${c} degree celsius is equal to ${F} fahrenheit`)
// }
// celsiusConverter(20)

// var myArray = [1, 2, 'billionaire', "me" ]
// console.log(myArray)
// var yourArray = [1, "His", "My", "us"]
// arryResult = myArray.concat(yourArray)
// console.log(arryResult)

// console.log(typeof myArray)
// console.log(myArray.toString())
// console.log(myArray.join(' | '))
// myArray.unshift('month')
// console.log(myArray)
// myArray.pop()
// console.log(myArray)

// // OBJECTS IN JAVASCRIPT
// var Student = {
//     firstName : "Elton",
//     lastName : "John",
//     age : 30,
//     gender : "Male",
//     occupation : "Teacher",
//     isMarried : true,
//     hobbies : ["Reading","Writing","Coding"],
//     address :{
//         streetAddress : "123 Main St.",
//         city:"New York",
//         state:"NY",
//         zipCode: "10001"
//     }
// }
// console.log(Student.address.streetAddress)

// ASSYNCHRONOUS JAVASCRIPT FEATU
// console.log("first");
// setTimeout(()=>{
//     console.log("second")
// }, 2000)
// console.log("third");
// console.log("fourth");

// CALLBACKS
// //Callback is a function passed as an argument in the assychronous function.
// function greeting(name, callback){
//     console.log(`Hello ${name}`);
//     callback()
// }
// function callbackFunction(){
//     console.log("I am a callback Function")
// }
// greeting("Nkechi", callbackFunction);

//PROMISE IN JVAVSCRIPT
// function greeting(name){
//     return new Promise((resolve, reject)=>{
//         console.log(`Hello ${name}`);
//         resolve();
//     });
// } 

// function callbackFunction(){
//     console.log("I greeted Ayibam on my way here!!")
// }
// // using the promise
// greeting('Nkechi').then(()=>{
//     callbackFunction();
// }).catch(error=>{
//     console.log('Error', error);
// })

// function greeting (name){
//     return new Promise((resolve,reject)=>{
//         if (name=== 'mabel'){
//             reject("This is not a name")
//         }else{
//             console.log(`Hello ${name}`);
//         resolve();
//         }
//     })
// }
// function callbackFunction(){
//     console.log("I greeted Ayibam on my way here!!")
// }
// // using the promise
// greeting('mabel').then(()=>{
//     callbackFunction();
// }).catch(error=>{
//     console.log('Error', error);
// })
// ES6 SYNTAX FEATURES
// let and const
// DESTRUCTIING
//ARRAY DESTRUCTION is the extracting objects from an array into a distinct variable.
const array=[1,2,3,4,5,6];
const[first,second,third,fourth,fifth,sixth]=array;
console.log(fifth)

const ayibam = {
    age: 28,
    gender: 'Male',
    occupation: 'NYSC',
    salary: 33000
}
const {age, gender, occupation, salary} = ayibam;

console.log(salary)
// SPREAD OPERATORS
// Spread Operators allows the spread of element of an iterable (array, element). To spread, we use (...)
const imoh =[2,4,6,8]
const tryNow = [...imoh];
const testNow = {...ayibam}
console.log(tryNow, testNow)