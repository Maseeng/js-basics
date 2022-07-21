//Comment: My sample JavaScript code.
console.log('Hello World');

//let name = 'Maseeng';
//console.log(name);

//Cannot be a reserved keyword
//Should be meaningful
//Cannot start with a number (e.g. 1name)
//Cannot contain a space or hyphen 
//Are case-sensitive

//let firstName = 'Maseeng';
//let lastName = 'Masitha';
//console.log(firstName, lastName)

//Primitive types:
let name = 'Maseeng'; // String literal
let age = 29; //Number literal
let isApproved = true; //Boolean
let firstName = undefined; //Undefined
let selectedColour = null; //null 
console.log (name, age, isApproved, firstName, selectedColour)

typeof names;
names = 1;
console.log(typeof names);
typeof age
age = 30.1;
console.log(typeof age);
typeof isApproved;
typeof firstName;
typeof selectedColour;
console.log(typeof isApproved, typeof firstName, typeof selectedColour);

//Person =object, name and age = key/ properties of the object
let person = {
    name1: 'Maseeng',   
    age1: 29
};
 console.log(person);

 //Dot notation
 person.name1 = 'Shaka';
 console.log(person.name1);

 //Bracket notation
 person['name1'] = 'Zulu';
 console.log(person.name1);

 let selection = 'name1';
 person[selection] = 'Zulu';
 console.log(person.name1);

 let selectedColours = ['red', 'blue'];
 selectedColours[2] = 'green';
 selectedColours[3] = 12;
 console.log(selectedColours);
 console.log(selectedColours[0]);
 console.log(typeof selectedColours);
 console.log(selectedColours.length);


 //Performing a task
  function greet() {
    console.log('Hello World')
 }
 greet()

 function greet1(name) {
    console.log('Hello ' + name)
 }
 greet1('Mickey');

 function greet1(name) {
    console.log('Hello ' + name)
 }
 greet1('Mickey');

 function greet2(name, lastName) {
    console.log('Hello ' + name + ' '+ lastName)
 }
 greet2('Mickey', 'Masitha');

 //Calculate a value
 function squaring(number) {
    return number * number;
 }
 let number = squaring(3)
 console.log(number);


 function square(number) {
    return number * number;
 }
 console.log(square(2));