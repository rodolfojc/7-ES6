/*

///////////////////////////////////////////////////////
// LET AND CONST
///////////////////////////////////////////////////////

//ES5

/*
var name5 = 'Rodolfo Carvajal';
var age5 = 31;
name5 = 'Rodolfo Marquez';

console.log(name5);

//ES6

const name6 = 'Rodolfo Carvajal';
let age6 = 31;
//name6 = 'Rodolfo Marquez';

//ERROR MESSAGE -> CANNOT CHANGE THE VALUE OF THE VARIABLE
//console.log(name6);

// ES5 - FUNCTION

function driverLicence5(passedTest){
    
    if(passedTest) {
        console.log(firstName);
        var firstName = 'Rodolfo';
        var yearOfBirth = 1987;
        
    }
    
    console.log(firstName + ', born in ' + yearOfBirth + '. ' + 'It is allow to drive!');
}


driverLicence5(true);

// ES6 - FUNCTION

function driverLicence6(passedTest){
    
    // ERROR MESSAGE
    //console.log(firstName);
    let firstName;
    const yearOfBirth = 1987;
    
    if(passedTest) {
        firstName = 'Rodolfo';
                
    }
    
    console.log(firstName + ', born in ' + yearOfBirth + '. ' + 'It is allow to drive!');
}

driverLicence6(true);


let i = 23;

for (let i = 0; i < 5; i++){
    console.log(i);
}

console.log(i);

var j = 23;

for (var j = 0; j < 5; j++){
    console.log(j);
}

console.log(i);


*/

/*

/////////////////////////////////////////////////////////////
// BLOCKS AND IIFEs
/////////////////////////////////////////////////////////////

// ES6

{
    const a = 1;
    let b = 2;
    var c = 4;
        
}

//console.log(a + b);
console.log(c);

// ES5

(function(){
 
    var c = 3;
    
 })();

*/

/*
/////////////////////////////////////////////////////////////
// STRINGS
/////////////////////////////////////////////////////////////

let firstName = 'Rodolfo';
let lastName = 'Carvajal';
const yearOfBirth = 1987;

function calcAge () {
    return 2019 - yearOfBirth;
}

// ES5

console.log('This is '+ firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6 - Template Literals

console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('R'));
console.log(n.endsWith('l'));
console.log(n.includes('arv'));
console.log(`${firstName} `.repeat(5))



/////////////////////////////////////////////////////////////
// ARROW FUNCTIONS
/////////////////////////////////////////////////////////////

const years = [1987, 1989, 1999, 1975];

// ES5

var ages5 = years.map(function(current){
    return 2019 - current;
});

console.log(ages5);

// ES6

let ages6 = years.map(current => 2019 - current);
console.log(ages6);

ages6 = years.map((current, index) => `Age elements ${index + 1}: ${2019 - current}.`);
console.log(ages6);

ages6 = years.map((current, index) => {
    const now = new Date().getFullYear();
    const age = now - current;
    return `Age elements ${index + 1}: ${age}.`;
})
console.log(ages6);

*/


/////////////////////////////////////////////////////////////
// ARROW FUNCTIONS II
/////////////////////////////////////////////////////////////

/*

// ES5

var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        
        // TRICK - THIS IN DOCUMENT... REFERS TO THE BROWER WINDOWS
        var self = this;
        
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This is box number: ' + self.position + ' ans it is ' + self.color;
            alert(str);
        });
    }
    
};

//box5.clickMe();


// ES6

const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
                    
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number: ' + this.position + ' ans it is ' + this.color;
            alert(str);
        });
    }
    
};


*/

//box6.clickMe();


/*

const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
                    
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number: ' + this.position + ' ans it is ' + this.color;
            alert(str);
        });
    }
    
};

box66.clickMe();

*/

/*

function Person(name) {
    this.name = name;
    
};

// ES5

Person.prototype.myFriends5 = function(friends){
            
    var arr = friends.map(function(el){
       return this.name + ' is friends with ' + el;                
    }.bind(this));
    
    console.log(arr);
};

var friends = ['Juan', 'Carlos', 'Evin', 'Eva'];
new Person('John').myFriends5(friends);

// ES6

Person.prototype.myFriends6 = function(friends){
            
    var arr = friends.map(el => {
       return this.name + ' is friends with ' + el;                
    });
    
    console.log(arr);
};

var friends = ['Juan', 'Carlos', 'Evin', 'Eva'];
new Person('Mike').myFriends6(friends);

*/

/*
/////////////////////////////////////////////////////////////
// DISTRUCTURING
/////////////////////////////////////////////////////////////


// ES5

var rodolfo = ['John', 23];
//var name = rodolfo[0];
//var age = rodolfo[1];

// ES6

const [name, year] = ['Rodolfo', 32];
console.log(name);
console.log(year);

const obj = {
    firstName : 'Rodolfo',
    lastName : 'Carvajal',
    
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

function calcAgeAndRetirement(year){
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
};

const [age, retirement] = calcAgeAndRetirement(1987);
console.log(age);
console.log(retirement);


*/

/*
/////////////////////////////////////////////////////////////
// ARRAYS
/////////////////////////////////////////////////////////////

const boxes = document.querySelectorAll('.box');

// ES5

var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function(current){
    current.style.backgroundColor = 'dodgerblue';
});


// ES6
const boxesArr6 = Array.from(boxes);

Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// ES5 - LOOPS


for(var i = 0; i < boxesArr5.length; i++){
    
    if (boxesArr5[i].className === 'box blue'){
        continue;
    }
    
    boxesArr5[i].textContent = 'I changed the text';
    
}


// ES6 - FOROF

for (const curr of boxesArr6) {
    
    if (curr.className.includes('blue')) {
        continue;
    }
    
    curr.textContent = 'I changed the text';
    
}

// ES5 - FUNCTIONS

var ages = [12,15,11,17,19,14];

var fullAge = ages.map(function(current){
    return current > 18; 
});

console.log(fullAge);

console.log(fullAge.indexOf(true));
console.log(ages[fullAge.indexOf(true)]);

// ES6

// FIND

console.log(ages.findIndex(curr => curr >= 18));
console.log(ages.find(curr => curr >= 18));


*/

/*
/////////////////////////////////////////////////////////////
// SPREAD OPERATOR
/////////////////////////////////////////////////////////////

function addFourAges(a,b,c,d){
    return a+b+c+d;
}

var sum1 = addFourAges(20,12,45,21);
console.log(sum1);

// ES5

var ages = [20,12,45,21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6

const sum3 = addFourAges(...ages);
console.log(sum3);

const familyCarvajal = ['Rodolfo', 'Claribel', 'Chriss', 'Karla'];

const familyWalsh = ['Conor', 'Jean', 'Anna', 'Petra'];

const bigFamily = [...familyCarvajal, 'Lily', ...familyWalsh];
console.log(bigFamily);


// NODE LIST
const heading = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [heading,...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');

*/

/////////////////////////////////////////////////////////////
// REST PARAMETERS
/////////////////////////////////////////////////////////////

/*
// ES5

function isFullAge5(){
    //console.log(arguments);
    var args = Array.prototype.slice.call(arguments);
    
    args.forEach(function(curr){
        console.log((2019 - curr) >= 18);
    })
}

// isFullAge5(1999,2010,1987,1988,1896);

// ES6


function isFullAge6(...years){
    
    years.forEach(curr => console.log((2019-curr) >= 18));
    
}

isFullAge6(1999,2010,1987,1988,1896);



/*
// ES5

function isFullAge5(limit){
    //console.log(arguments);
    var args = Array.prototype.slice.call(arguments, 1);
    console.log(args);
    
    args.forEach(function(curr){
        console.log((2019 - curr) >= limit);
    })
}

// isFullAge5(21, 1999,2010,1987,1988,1896);

// ES6

function isFullAge6(limit,...years){
    
    years.forEach(curr => console.log((2019-curr) >= limit));
    
}

isFullAge6(21,2010,1987,1988,1896);

*/

/*
/////////////////////////////////////////////////////////////
// DEFAULT PARAMETERS
/////////////////////////////////////////////////////////////

// ES5

function CarvajalPerson (firstName, yearOfBirth, lastName, nationality ) {
    
    lastName === undefined ? lastName = 'Carvajal' : lastName;
    nationality === undefined ? nationality = 'Venezuelan' : nationality;
    
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
    
}

var rodolfo = new CarvajalPerson('Rodolfo', 1987);
console.log(rodolfo);

var chriss = new CarvajalPerson('Chriss', 1985, 'Diaz', 'Spanish');
console.log(chriss);

// ES6

function CarvajalPerson2 (firstName, yearOfBirth, lastName = 'Carvajal', nationality = 'Venezuelan') {

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
        
}

var rodolfo2 = new CarvajalPerson2('Rodolfo', 1987);
console.log(rodolfo2)

*/

/*
/////////////////////////////////////////////////////////////
// MAPS
/////////////////////////////////////////////////////////////

const question = new Map();
question.set('question', 'What is your official name of the latest major JS version?');

question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Wrog, try again!');

//console.log(question.get('question'));
//console.log(question.size);

if(question.has(4)) {
    //question.delete(4);
    //console.log('Answer 4 is here');
}

//question.clear();

//question.forEach((value, key) => console.log(`This is ${key}, and it is set to ${value}`));

for (let [key,value] of question.entries()) {
    
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}:${value}`);
    }
}

const answ = parseInt(prompt('Write the answer'));

console.log(question.get(answ === question.get('correct')));

*/

/*
/////////////////////////////////////////////////////////////
// CLASES
/////////////////////////////////////////////////////////////

// ES5


var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
}

Person5.prototype.calcAge = function(){
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var rodolfo = new Person5('Rodolfo', 1987, 'Hardware Support');

// ES6

class Person6 {
    
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    calcAge () {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    
    static greeting () {
        console.log('Hey there');
    }
    
}

const rodolfo6 = new Person6('Rodolfo', 1987, 'Hardware Support');

Person6.greeting();


*/

/*

/////////////////////////////////////////////////////////////
// CLASES AND SUBCLASES
/////////////////////////////////////////////////////////////

// ES5

var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
}

Person5.prototype.calcAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olym, medals){
    Person5.call(this, name, yearOfBirth, job);
    this.olym = olym;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function (){
    this.medals++;
    console.log(this.medals);
}

var rodolfoAthle5 = new Athlete5('Rodolfo', 1987, 'Swimmer', 3, 10);

rodolfoAthle5.calcAge();
rodolfoAthle5.wonMedal();

// ES6

class Person6 {
    
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    calcAge () {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
        
}

class Athlete6 extends Person6 {
    
    constructor (name, yearOfBirth, job, olym, medals){
        super(name, yearOfBirth, job);
        this.olym = olym;
        this.medals = medals;
    }
    
    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
    
}

const rodolfoAthle6 = new Athlete6('Rodolfo', 1987, 'Swimmer', 3, 10);

rodolfoAthle6.calcAge();
rodolfoAthle6.wonMedal();

*/

/////////////////////////////////////////////////////////////
// CODING - CHALLEGE
/////////////////////////////////////////////////////////////

class Parks {
    
    constructor (name, yearOfBuilt, numTrees, area){
        this.name = name;
        this.yearOfBuilt = yearOfBuilt;
        this.numTrees = numTrees;
        this.area = area;
                
    }
    
    density () {
        return this.numTrees/this.area;
    }
    
    age() {
        return new Date().getFullYear() - this.yearOfBuilt;
    }
                    
}

class Streets {
    
    constructor (name, yearOfBuilt, size){
        
        this.size === 'undefined' ? size = 'Normal' : this.size;        
        this.name = name;
        this.yearOfBuilt = yearOfBuilt;
    }
    
}


class Town {
    
    constructor(){
        this.park = new Map(); 
        this.street = new Map();
    }
}


let parkOne = new Parks('La mata', 1985, 50, 200);
let parkTwo = new Parks('El Bethoven', 1900, 500, 300);
let parkThree = new Parks('La loca', 1945, 700, 500);

let streetOne = new Streets('Ave Bolivar', 1934);
let streetTwo = new Streets('Ave Santiago', 1987);
let streetThree = new Streets('Ave Amparo', 1950);
let streetFour = new Streets('Ave Universidad', 1900);

let myTown = new Town();
myTown.park.set(1, parkOne);
myTown.park.set(2, parkTwo);
myTown.park.set(3, parkThree);
myTown.street.set(1, streetOne);
myTown.street.set(2, streetTwo);
myTown.street.set(3, streetThree);
myTown.street.set(4, streetFour);

console.log(myTown);













































