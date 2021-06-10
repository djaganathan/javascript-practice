"use strict";

var str="name Stringe";
console.log(str);
console.log("string length = "+ str.length);
console.log(" substring 1 = "+str.substring(1));
console.log(" substring 1, 3 = "+str.substring(1,3));
console.log(" index of = "+str.indexOf("e"))

//numbers
var num1 = 1;
var num2 = 2;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1/num2);
console.log(num1*num2);
console.log(num1%num2);

//boolean

var bool1 = true;
var bool2 = false;
console.log("bool variable manipulation--");
console.log(bool1 || bool2);
console.log(bool1 && bool2);
console.log(!bool1);

// objects
var person = {};
person.firtname = "dhanasekar";
person.lastname = "jaganathan";
console.log("person object - "+ JSON.stringify(person));

var post = {
    title : "javascript",
    author : person,
    content : "none"
}

console.log("post object - "+ JSON.stringify(post));

//arrays

var arr = [10, 'test', person];
console.log("array - "+ JSON.stringify(arr));

arr.push(50);
console.log("array push - "+ JSON.stringify(arr));

arr.splice(arr.length-2);
console.log("array splice - "+ JSON.stringify(arr));


//loops
console.log("forEach ");
arr.forEach(element => {
    console.log(element);
});

console.log("for of ");
for(var element of arr) {
    console.log(element);
}

console.log("for in ");
for(var element in person) {
    console.log(element +" - "+person[element]);
}