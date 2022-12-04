//console.log(12344567985959595n);
//console.log(true);
//console.log(undefined);
//console.log(null);
//console.log(typeof 1234567n);

//console.log(typeof undefined);
// var a='1234567890';
// let b=true;
// const c="heyyaa";
// a=0;
// b=false;
//var  can be used everywhere but let has scope only within the scope
// if(a>b){
//     console.log("hi");
// }
// else{
//     console.log("bye");
// }
// const a={
//     name: "Prakhar",
//     age: 22,
//     food_likes: ["samosa","vadapav"],
//     schools: undefined,
// };
// // console.log(a.schools[1].name)
// try{
//     console.log(a.schools[0].name);
// } catch(err){
//     console.log(err);
// }
// function sq(x){
//     return x*x;
// }
// const a=[1,2,3,4,5];
// const sq_a=a.map((b)=>sq(b));
// function odd(x){
//     return x%2==1;
// }
// const odd_a=a.filter((e)=>odd(e));
// console.log(odd_a);
// console.log(sq_a);

//node package manager
//npm init

var cowsay = require("cowsay");
const Quote = require('inspirational-quotes');

console.log(cowsay.say({
    text : Quote.getRandomQuote(),
    e : "oo",
    T : "sbsbbs "
}));
