// var num1 object scope is file and it changes all the places
var num1 = 10;
if(true) {
    var num1=20;
    console.log("inside if - "+num1);
}

console.log("outside if - "+num1);

//let is scope as java
let num2 = 10;
if(true) {
    let num2=20;
    console.log("inside if - "+num2);
}

console.log("outside if - "+num2);

