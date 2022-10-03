# Renton Technical College CSI-242
# CSI 242 Lab 2 Intro to Javascript: Variables, Conditionals, Loops and Function
![](Images/logo.jpg)

# Lets talk about semi colons first

You don't need semi colons in javascript. Every new line is treated as a semi colon. You really only need semi colons if you are combining multiple statements on one line. 
Semi colons are usually ommited in javascript as a way to save file size, and I'll try to be consistent in my usage or non usage...no garantees

Example of having a multi statement line that requires  semi colons
    
    let x = 10; var u = "Foo"; const pi = 3.14

# Prereqs
- The Console
- VSCode or code editor of your choice

# Directions :
Read through this readme file and complete all of the tasks found in the lab2.js file. They will be commented as "TASK #"

# Part 1 : Variables


There are a few things to know in order to understand variables in javascript

1) In javascript there are 3 main ways to declare a variable. let, var, and const
The major differences between Let/Var and Const variables is the fact that you can reassign Let/Var and Const cannot be changed.

        //example of using let
        let a = "Hello World"
        console.log(a)
        //Hello World
    
        //example of using var
        var b = "FooBar"
        console.log(b)
        //FooBar
    
        //example of using const
        const pi = 3.14
        console.log(pi)
        //3.14


2) Javascript is a dynamically typed langauge, any variable could be any instance of a class/type at any given point during runtime, which is 
in contrast to a statically typed langauge such as C#, where if you declare a string variable you can not assign it to a number later on because your IDE and compiler would complain to you

        a = "Hello World"
        console.log("a is a type of", typeof(a))
        //a is of type string
        a = 2 //a dynamically changes to a type number if you assign it to a number
        console.log("a is a type of", typeof(a))
        //a is of type number

3) You don't need to know this right now but Strings and Numbers are always pass by values while objects are always passed by references (this is true in many programming langauges)
Its good to understand this. So I'll try to demonstrate below.

        let objectA = {
            field1 : "Unchanged"
        }
        console.log("Object A", objectA)
        //Prints out object A to the console
        let objectB = objectA
        console.log("Object B", objectB)
        //Prints out object B to the console
        //**note field1 in each object */
    
        objectA.field1 = "Changed" //changing field1 in ObjectA 
    
        console.log("Object A", objectA)
        //Prints out object A to the console
        console.log("Object B", objectB)
        //Prints out object B to the console
        //field1 has been changed in both ObjectA and ObjectB even though we only changed it in ObjectA!
    
4) Let and Const are Blocked scoped
Var is Function scoped. Var is also hoisted up to the top level of the function before execution but will be undefined until it reaches the point of initialization. 
Trying to access Let before initialization will throw you an error and stop the script right there. Section 4.c will explain hoisting

Block(local) scoped variables are variables that exists within the context of curly braces 
Function scoped variable are variables that exists within the context of a function

4a) Block scopes

        //Conditional Statements, and Loops are your main type of block scopes
        if(true){ //start of block scope
            var a_var = 10
            console.log("a_var available inside if", a_var)
        } //end of block scope
        console.log("a_var available outside if", a_var)

        if(true){ //beginning of a block scope
            let a_let = 11
        } //end of a block scope
        //console.log("a_let", a_let) //move this console.log to the correct scope so the code stop erroring out
        
        let i = 0
        while(i < 5){ //beginning of a block scope
            var a_var_loop = i
            i++
        } //end of a block scope

        console.log("a_var_loop", a_var_loop)
        //no errors, will print out a_var_loop

4b) Function Scopes
        
        function a(){ //beginning of function scope
            var xyz = "Hello World"
            //xyz is only available in this function's scope
        }//end of scope
        a()
        console.log(xyz)
        //your script will error here
         
4c) Hoisting

The last major difference between the variables is the fact that all the Var's you declare in a function will be hoisted to the top of the function and remain undefined until you initialize it

    function () {
        console.log(x);
        //output: undefined
        var x = 10;
    }

another way to perhaps think about how Var is hoisted up

    function () {
        var x = undefined;
        console.log(x);
        //output: undefined
        x = 10;
    }

While let and const are not hoisted up like var.

    function () {
        console.log(y); // y just doesn't exists before this point
        //YOUR SCRIPT WILL STOP HERE THROWING A REFERENCE ERROR. 
        let y = 10;
    }

# Part 2 : Loops/Conditionals

## Loops
Javascript comes with for, while, do-while, and foreach loops

syntax for a for loop

    for(let i = 0; i < 10; i++){
        console.log("For loop", i)
    }
    
syntax for while loop

    let i = 0
    while(i < 10){
        console.log("While loop", i)
        i++
    }
    
syntax for do while loop

    i = 0
    do {
        console.log("Do-while loop", i)
        i++
    }while(i < 10)
    
the foreach loop
    
foreach is a function that accepts another function as a callback. We will discuss more regarding callback later
    
    const a_foreachDemo = "x y z w".split(" ") //creates an array by splitting the string by white spaces
    console.log("a_foreachDemo", a_foreachDemo)
    
    let cb = function(value, index){ //create a function that accepts a value and the index and assign it to a variable to be passed into the foreach function to be called later
        console.log("Foreach loop", value, index)
    }
    
    a_foreachDemo.forEach(cb)

this is approx. what is happening here

    let cb = function(value, index){ //create a function that accepts a value and the index and assign it to a variable to be passed into the foreach function to be called later
        console.log("Foreach loop", value, index)
    }

    Array Class -> foreach(cb);

    Array Class : 
    
        function foreach(callbackFunction){
            //function code
            //function code
            callbackFunction(value, index)
        }
    

callbacks can be confusing. You only need to understand and remember the syntax on how to set up a foreach loop for now
    
## Conditionals
Conditionals in javascript are the same as with any other langauges except for a few nuances of "truthy and falsy". You 
can use && for and, || for or, ! for is not, > for greater than, < for less than, === for equality comparison

In javascript, a number 12 will equal to a string 12 if you use a double equal sign for a "truthy statement"

    if(12 == "12"){
        console.log(`"12" = 12?? This shouldn't be right!`)
    }
    
while the above could be useful, just use a triple equal sign if you want to make an equality comparison 

        if(12 === "12"){
            console.log("this shouldnt print out because number 12 !== string 12")
        }

Also note the !== to signal an inequality compare in javascript

Conditional shorthands. If you only have one statement to make after an if else clause, you can ommit the curly braces

    if(true) console.log("true!")
    else console.log("false!")

A few things to know about javascript. 0 is treated as false and any other number is treated as true, while in languages like c# 0 as an integer returns true

Javascript:

    if(0) false!

    if(!0) true!

While in languages like c#, an integer cannot be implicity converted to a boolean

C#

    if(0) true!

    if(!0) true!


## Switches

    let a = true

    switch(a){
        case true:
            //your code here
            break
        case false :
            //your code here
            break
        default :
            //default code here
            break
    }

# Part 3 : Functions 
there are several different ways you can declare a function in javascript

1) Standard way 

        function a(){
            console.log("Function declared using standard syntax")
        }

2) Using an anonymous function and assigning it to a variable

        //const, let, vars are all valid with this syntax
        //assigns b to an anon function
        let b = function(){ 
            console.log("Function declared using ES6 syntax")
        }

3) Using the Arrow Syntax

        //assign c to an anon function using the ES6 syntax
        var c = () => {
            console.log("Function declared using the arrow syntax")
        }

## Function input and return

Functions are infinitely more useful if they can accept input values and return an output.
Parameters are defined inside the parenthesis and you use the return keyword to return a value
from a function. 

    function multiplyTwoNumbers(num1, num2){ 
        let product = num1 * num2
        return product; //whenever you use the return keyword, anything after that return will not be executed
        console.log(product); //this section of code will never be reached
    }

    let x = 11
    let y = 4

    sum = multiplyTwoNumbers(x, y)

    console.log(sum); //44
    
        
functions can be a part of an object

    let personObject = {
        name: "David Nguyen",
        getName: function(){
            return this.name
        }
    }

functions can be passed around and used as callbacks

    let printBar = function(){
        return "Bar"
    }

    function printFooBar(callback){
        console.log("foo" + callback())
    }

    printFooBar(printBar)

    let newMap = new Map()
    newMap.set("printBar", printBar); 

    console.log("foo" + newMap.get("printBar")() )

    
## Anonymous functions and more
An anonymous function is a function that doesn't have a name. It could be assigned to a variable or could be made to be self executing

    let a = function(){
        //anonymous function syntax
    }

or

    let a = () => {
        //anonymous function with arrow syntax
    }

## IIFE (Imediately Invoked Function Expressions) Functions
IIFE functions are anonymous functions that calls itself right after its declared. 
this is useful in situations where you have some busy work you need to do that could be in its own
function declared outside the scope, but it maybe some work that you only need to do ONCE. 

Another situation where using IIFE functions is useful is if your app has multiple libraries, it is useful to section off large chunks of your code into IIFE functions so that you don't accidentally create clashes with variables from other libraries

1st way
    
    var a = 10;
    (
        function(parameter1){
            console.log("Self executing function 1")
            console.log(parameter1)
        }
    )(a)
    
2nd way

    var a = 10
    (
        (parameter1)=>{
            console.log("Self executing function 2")
            console.log(parameter1)
        }
    )(a)
    
Usage

    let a = 10;
    console.log(
        //inside this console.log call here, we create an IFFE function that immediately calls itself when its executed
        function(input){
            if(input > 20){
                return "a is greater than 20"
            }
            return "a is less than or equal 20"
        }(a)
    )

    
