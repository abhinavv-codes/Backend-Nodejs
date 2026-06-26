var prompt= require('prompt-sync')();

var a= 5;
var b= 6;
var ans= a+b;

console.log(ans);
console.log("hii");


const cars=["lambo","porshe","BMW",12];
cars.push("tesla");
console.log(cars);

var hour=1;

if(hour>1){
    console.log("1++");
}else{
    console.log("1--");
}

var cnt= 6;
for(var i=0;i<cnt;i++){
    console.log(i);
}

const person ={
    name: "Abhinav",
    age: 20,
    isStudent: "yes",
    hobies: ["gaming","programing","music"]
}

console.log(person);
console.log(person.age);
console.log(person.hobies);

const ages=[10,21,18,30];
const res=ages.filter(checkAge);

function checkAge(age){
    return age<=18;
}

console.log(res);

const age = prompt("please enter your age");
if(age<18){
    console.log("not eligible");
}else{
    console.log("eligible");
}

