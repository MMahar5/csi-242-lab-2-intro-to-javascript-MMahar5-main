
console.log("==================== PART 1 VARIABLES =========================");
//Variables
console.log("==============================================TASK 1============================================");

//Explain the 3 keywords const, let, and var below
/*
    Var, let and const are all keywords used to declare a variable. Let is the most commonly used today, but var is the oldest as
    let and const were not introduced until ES6. Var and let are similar in that they can both be changed or reassigned, except var 
    is globally scoped(unless inside of a function) and let is locally scoped. So if var is declared outside of a function then it
    can be used anywhere in the program. Let on the other hand is only accesible within the block because it is locally scoped. So if
    I had an 'if' block where inside of it I assigned 'let x= 5' and 'var y = 10', then tried to display them outside the 'if' block, 
    I would get an error with 'let x' but not 'var y' unless I first declare 'let x' outside the 'if' block. Another difference is let can be
    changed but not re-declared, while var can be changed and re-declared.
    Const shares all the properties of the let keyword except it cannot be reassigned, and not be declared without initialization. Although there
    is a way to change a const. In the case of an object or an array, we can change the individual value, but cannot change to reference a new object. 
    For example, with const num = [1,2,3], I can only change the individual value(num[2]=10) rather than rewriting the array(num = [1,10,3]).


*/

console.log("==============================================TASK 2============================================");

//For task 2 assume you have the following array:
const numbers = [1, 20, 5];
//Would the following statement create an error? Why or Why Not?
//numbers[2] = 100
/*
    No, because you're individually changing the value of a property.
*/
//I Would the following statement create an error? Why or Why Not?
//numbers = [1, 20, 100]
/*
    Yes, because you can not change the the const reference.
*/

console.log("==============================================TASK 3============================================")

//For task 2 assume you have the following variables:
let x = 5;
var y = "Hello";
const z = 25;
//Would the following statement create an error? Why or Why Not?
//x = 10.5
/*
    No, because you are not redeclaring x, we are allowed to reassign the value of a let variable,
    and the code is all within the same block.
*/
//Would the following statement create an error? Why or Why Not?
//y = 25
/*
    No, like the let variable, we can reassign a var variable and it can be accessed anywhere within this program
    as it is globally scoped. 
*/
//Would the following statement create an error? Why or Why Not?
//z = "20" + 5
/*
    Yes, because we cannot reassign a const variable.
*/
//Would the following statement create an error? Why or Why Not?
//x = "20" + 5
/*
    No, because it is a let variable, which is not being redeclared and can be reassigned. Although if you were trying 
    to do math here, x would not be 25, but rather 205 because "20" is a string. 
*/

console.log("==============================================TASK 4============================================");

//Prompt the user to input a value and capture that value in a variable. Display the value of that variable as well
//as its data type. Run the code and first type in a string and observe the data type. Refresh the page and
//type in a number and observe the data type, repeat this process and type in nothing and click ok, then one more
//time and click cancel. What were the data types and why?

let input = prompt("Please enter a value")
console.log("You entered "+input+" which is a "+typeof(input));


//When you typed in a number?
/*
    String, because all data types from the user come as a string and would need to be parsed to 
    use as an actual number. 
*/

//When you typed in a string?
/*
    String, because all data types from the user come as a string(and in this case it is actually a string).
*/

//When you typed in nothing?
/*
    String, because all data types from user are still returned as string.
*/

//When you clicked cancel?
/*
    Object, because by pressing cancel the program knows nothing has been entered and is seen or set as 'null', which has the data type of object.
*/
//How could you tell the difference when the user clicks cancel as opposed to the user typing in nothing?
/*
    Because when displaying the value and datatype it returns an object data type and null. When the user presses ok it will always return a 
    string unless we use a certain condition to determine what the return value is, but by pressing cancel, a null value is returned which is of
    an object type.
*/

console.log("==============================================TASK 5============================================");

//Reference variables vs Value variables. Assume you have the following variables for this excercise
let text = "Hello"
let text2 = text
let array = [10, 5, 2]
let array2 = array
let person = {
    firstName: "William",
    lastName: "Cram"
}
let person2 = person;


//If I change the value of the text variable what will be the value of the text2 variable? Why?
/*
    It would still be a string value of "Hello" because its a string which is stored by value and not by reference.
*/
//If I change array[0] to 100 what will be the value of array2[0]? Why?
/*
    It will change both array[0] and array2[0] to 100 because arrays are stored by reference. The only things
    being stored in both arrays is the address and not the value.
*/
//If I change person2.firstName to "Mohamed" what will be the value of person.firstName Why?
/*
    It would be changed to Mohamed because object literal is an object which is stored by reference. 
*/



console.log("==================== PART 2 LOOPS/CONDITIONALS =========================");

//Loops
console.log("==============================================TASK 6============================================");
//Iterate through this array using each a for, foreach, and while loop
//Print out each element in the array as well as the index
let newArray = ["foo", "fooBar", "bar", "BarFoo"];

//Using a for loop
for(let i = 0; i < newArray.length; i++){
    console.log("Index: "+i+"   Element: "+newArray[i]);
}

//Using a foreach loop
newArray.forEach(displayArray)

function displayArray(element, index){
    console.log("Index: "+index+"   Element: "+element)
}


//Using a while loop
let i = 0;
while(i < newArray.length){
    console.log("Index: "+i+"   Element: "+newArray[i]);
    i++
}



console.log("==============================================TASK 7============================================");
///Assume you have the following variables for this exercise
let a = 20;
let b = "20";
let c = null;
let d;

console.log(typeof(d))

//Will the below comparisons be True or False. Explain Why?
// if(a == b)
/*
    True, because we are using '==' the data types don't have to be the same. Javascript will automatically 
    try to parse variable 'b' and because both are 20, it comes back as true.
*/
// if(a === b)
/*
    False, because both data types need to be the same.
*/
// if(a)
/*
    True. 20 is a non-zero number, which is a truthy value or a non-boolean value that evaluates to true.
*/
// if(c)
/*
    False. Unlike variable a, c has a null value which is also a falsy value, or a non-boolean value that evaluates 
    to false in a boolean context.
*/
// if(c === d)
/*
    False. Null and undefined are equal but not identical. Null is of object type while undefined is of type undefined. 
    When determining equality without any type conversions, they are simply not the same.
*/
// if(c == 0)
/*
    False. Its defined that null == undefined is true, and equal to nothing else, and so null can't equal 0 and is returned 
    as false.
*/
// if(c == d)
/*
    True. After javascript attempts to do any type conversions, and compared with loose equality, I believe that they 
    would both be seen as 'nothing' which is why it returns true.
*/

console.log("==============================================TASK 8============================================");
//INSTRUCTIONS: 

// Create a while loop to prompt the user for input.
// The while loop should continue to prompt the user until they input a number
// After you have verified that it is a number, print out:
//  "userInput is even" if userInput is even, 
//  "userInput is odd" if userInput is odd


while(true){
    let input = prompt("Please enter a number")
    if(input = Number(input) ){
        if(input%2==0){
            console.log("User input is Even")  
            break       
        }
        else{
            console.log("User input is odd")
            break
        }


    }
    console.log("Input was not a number, Please try again")
}

// Repeat this process using a switch statement instead of if/else
let check = true

while(check){
    let userInput = prompt("Please enter a number")
    userInput = Number(userInput)
        switch (userInput%2){
            
            case 0:
                console.log("This is an Even Number")
                check =false
                break
            case 1:
                console.log("This is an Odd Number")
                check = false
                break     
            default:
                console.log("Input was not a number, Please try again")
        }
}


console.log("==================== PART 3 Functions=========================");

//Use the following function for tasks 9 and 10. This is a function that returns a
//random number between min and max(exclusive)

console.log("==============================================TASK 9============================================");
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

//Convert the getRndInteger function to a Function Expression
const getRndInteger1 = function(min, max){
    return Math.floor(Math.random()*  (max - min)) + min
}
let randomNum = getRndInteger1(1, 100)
console.log(randomNum);

//Convert the getRndInteger function to an Arrow Function
const getRndInteger2 = (min, max) => Math.floor(Math.random()*  (max - min)) + min
console.log(getRndInteger2(100,200))

console.log("==================== PART 4 Wrapping it all up=========================");
console.log("==============================================TASK 10============================================");

//Use one of the Random Number functions from task 9 to Create a new Array with a length of 25
//and populate it with random numbers between 0-99. 
const arr = Array(25) 
for (let i = 0; i<arr.length;i++) {
    arr[i] = getRndInteger(0,100)  
}

arr.forEach(displayArray);


//Create a function that accepts a numeric array as a parameter and sorts the elements in the array.
//You may not used any built in array methods such as Array.Sort(). You must write your own sorting code.
//Extra Credit will be given if you are able to sort the elements faster than O(N^2)

function SortRandomArray(array) {
    if (array.length <= 1) {
        return array;
        } 
        else{
        var left = [];
        var right = [];
        var newArr = [];
        var pivot = array.pop();
        var length = array.length;
        for (var i = 0; i < length; i++) {
            if (array[i] <= pivot) {
            left.push(array[i]);
            } 
            else {
                right.push(array[i]);
            }
        }
        return newArr.concat(SortRandomArray(left), pivot, SortRandomArray(right));
        }
    }
    var arrayFinal = SortRandomArray(arr);
    console.log(arrayFinal);


//Commit changes to github with the notes "Lab 2 submission" and push to origin.