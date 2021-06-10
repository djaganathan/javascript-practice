function add(a, b) {
    setTimeout(()=> {}, 1000);
    return a+b;
}

// doesnot wait for the timeout
console.log( add(100, 200));
console.log( add(50, 200));

// callback function
function cbAdd(a,b , callback) {
    callback (a+b);
}

function print(c) {
    console.log("function print- "+c);
}

cbAdd(100,200, print);

// calling method using inline callback function
cbAdd(10, 20, function(c) { console.log("inline callback - "+c)});

// calling method by passing arrow function
cbAdd(15, 20, (c) => { console.log("arrow callback - "+c)});

