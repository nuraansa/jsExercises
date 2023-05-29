//QUESTION 1
/*
1.Variable: 
Is a named storage. It is used to hold a value.
There are two types: Local Variable and Global Variable.
*/

/*
2.Value: 
Is something that has to be assigned to a variable. 
*/

/*
3.Data Type: Primitive & Object
There are 5 basic Primitive data types: 
1.String
2.Number
3.Boolean
4.Undefined
5.Null
*/

/*
4.Initialization: 
Initialization is the process of assignment of a value to a variable.
*/

/*
5.Difference between let, var, and const:
-let: is block scoped, and does not allow re-declaration of variables and is the better way to declare a variable.
-var: Var is an old method to declare a variable.
-const: Const is used to constantly assign a value throughout your program and can't be re-declared.
*/

/*
6.Variable Scope: 
 It's the accessibility of a particular variable within the program.There are two types:
-Global Scope /A variable declared at the top of a program or outside of a function.
-Local Scope /A variable can also have a local scope and can only be accessed within a function.
*/

/*
7.When can you decide when to use a for or while, forEach and do while loop?: 
-for loop: an iterative statement which you use to check for certain conditions and then repeatedly execute a block of code as long as those conditions are met.
-while loop: creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.
-forEach: the forEach method calls a function for each element in an array.
-do while: creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.
*/

/*
8.Define hoisting and variable scoping: 
-Hoisting: is where the interpreter moves the function and variable declarations to the top of their scope. Meaning, the declarations are processed before any code is executed.
-Variable scoping: variables declared within that function can only be accessed inside that specific funtion and not outside of it.
*/

/*
Create a function called fullName that returns your full name and displays it
on the console.

function fullName(){}
fullName.displayName="Nuraan Davids"
console.log(fullName.displayName)

*/

//QUESTION 2
/*
let firstName = "Nuraan";
let lastName = "Davids";
let age = "23";
let subjects = ["HTML", "CSS", "Bootstrap", "Javascript"];
let address = {
  streetName: "Watercress Lane",
  streetNumber: 15,
  suburb: "Southern",
  city: "Cape Town",
  countryName: "South Africa",
};
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(subjects);
console.log(address);
*/

//QUESTION 3
/*
let number1 = document.querySelector('#number1');
let operator = document.querySelector('#operator');
let number2 = document.querySelector('#number2');
let displayResult = document.querySelector('#displayResult');
let calculate = document.querySelector('#calculate');

calculate.addEventListener('click', ()=> {
  if (number1, operator, number2 === '') {
    displayResult.innerHTML = "Insert Number and Operator"
  } else {
    calculate = eval(number1.value + operator.value + number2.value)
    displayResult.innerHTML = calculate;
  }
})
*/

//QUESTION 4

let subject = "programming";
let reversed = subject.split("").reverse().join("");
console.log(subject);
console.log(reversed);

