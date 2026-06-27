// console.log("helllloo")

// // function add(a,b){
// //     return a+b;
// // }

// // var res= add(2,3);
// // console.log(res);

// // var add= function(a,b){
// //     return a+b;
// // }

// // var add= (a,b)=>{
// //     return a+b;
// // };

// // var add=(a,b)=> a+b;

// // var res=add(2,3);
// // console.log(res);

// // (function(){
// //     console.log('abhinav is here');
// // })();


// // function callback(){
// //     console.log('adding is completed');
// // }

// const add = function (a,b,callback){
//     var res=a+b;
//     console.log(res);
//     callback();
// }

// add(3,4,function(){
//     console.log('add completed')
// });

var fs = require('fs');
var os = require('os');
var _= require('lodash');

var user= os.userInfo();
console.log(user);

fs.appendFile('start.txt','hi '+ user.username + '!',()=>{
    console.log('file is created');
});
 
console.log(os);


const notes =require('./notes.js');
console.log('server file is available');

var age= notes.age;
console.log(age);

var res= notes.addNumber(age+18);
console.log(age);

var data = ["person","person",1,2,1,2,"name","age","2"];
var filter= _.uniq(data);
console.log(filter);

console.log(_.isString('hello'));
