console.log("happy linkedin");



var a = ['a','b'];
a[100]="c";
console.log(a.length);

console.log(3=='3');
console.log(3!='3');
console.log(3==='3');
console.log([3]==[3]);

const x = 6%2;
const y = x ? "one":"t";
console.log(y);

console.log(typeof(42));

var a = {}
a.value = null;
a.v1 = undefined;
a.v2 = NaN;

console.log(JSON.stringify(a));

var date = Date();
console.log (date);

//const primitive

const aConst = 10;
const bConst = aConst+10;

console.log(bConst);

//const object

const aConstObj = { lastName:"jackson"};
aConstObj.firstName = "Django";

console.log(aConstObj);

aConstObj.lastName = "jaganathan";
aConstObj.age = 2E99;
console.log(aConstObj);

//equal 
console.log(3=='3');
console.log(3==='3');

// type of

var aTypeVal = 3;
console.log(typeof aTypeVal == 'number');

var arrType = [10,20,303];
console.log(typeof arrType);

var uType;
console.log(typeof uType);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get name() {
        console.log("getter called");
        return this.name;
    }

    set name(name1){
        console.log("setter called");
        this.name = name1;
    }
}

console.log(JSON.stringify(new Person('Test', 10)));

var aPerson = new Person('Test', 10);

console.log(aPerson.name);
aPerson.name = 'othername';