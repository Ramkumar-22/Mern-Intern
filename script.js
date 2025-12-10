/*
var a=10; //global scope
if(true){
    var b=20; // var global scope
    console.log(a);
}
console.log(a,b);


function greet() {
  console.log("Hello!");
}
greet(); // calls the function


const greet1 = () => {
  console.log("Hello!");
};

let age = 18;

if (age >= 18) {
  console.log("You're an adult!");
} else {
  console.log("You're a minor.");
}

//for..in(Object)
var obj = {
    name:"ram",
    age:18,
    Marks:95
};
for(let i in obj){
    console.log(i,obj[i])
}

//callback Function

var demo = ()=>{
    console.log("hello bala bals")
}
var main = (callback)=>{
    console.log("Main Called")
    callback();
}
main(demo);

var add = (a,b,callback)=>{
    var result = a+b;
    callback(result);
}
add(10,15,(res)=>{
    console.log(res)
});

//settime

console.log("Ramkumar");
var Demo=()=>{
    setTimeout(()=>{
        console.log("Loading....");
    },4000)
}
Demo();
*/

//map
var arr=[1,2,3,4,5];
var double = arr.map(num=>num*2);
console.log(double)

//filtter
var even = arr.filter(num=>num%2===0);
console.log(even)

//Reduce
var total = arr.reduce((sum,num1)=>(sum+num1),0);
console.log(total)
var total = arr.reduce((sum,num1)=>(sum+1),0);
console.log(total)

var evencount = arr.map(num=>num**3).filter(num=>num%2==0).reduce((sum,num)=>(sum+1),0);
console.log(evencount)

//Objects
var student=[
    {name:"Ram",
    marks:95},
    {name:"balls",marks:90},
    {name:"simbu",marks:90},
    {name:"ravi",marks:85},
]
//filter
var studentMark = student.filter(s=>s.marks>87);
console.log(studentMark)
//map
var studentname = student.map(s=>s.name)
console.log(studentname)
//reduce
var totalmarks = student.reduce((sum,s)=>(sum+s.marks),0)
console.log(totalmarks)
var avg = totalmarks/student.length;
console.log(avg)

//promise

const promise = new Promise((resolve,reject)=>{
    var success = true;
    if(success){
        resolve(success);
    }
    else{
        reject("Failed");
    }
})
promise.then((msg)=>console.log(msg)).catch((err)=>console.log(err))

const getData=()=>{
    return fetch('https://jsonplaceholder.typicode.com/users')
}
getData().then((res)=>res.json())
.then((data)=>console.log(data))
.catch((err)=>console.log(err))

