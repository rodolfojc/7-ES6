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

*/

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