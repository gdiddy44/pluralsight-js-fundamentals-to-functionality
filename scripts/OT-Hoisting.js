// https://www.w3schools.com/js/js_hoisting.asp
// http://adripofjavascript.com/blog/drips/variable-and-function-hoisting
// 
// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script OR the current function)
// 
// In JavaScript, a variable can be declared after it has been used.
// In other words, a variable can be used before it has been declared.
//
// Very Important - JavaScript hoists declarations, NOT initializations

x = 5; // assign 5 to x <- here x has been initialized at the top

elem = document.getElementById("demo");
elem.innerHTML = x;

var x; // <-- this will get hoisted to the top.


// Also - function definition hoisting only occurs for function declarations, not function expressions - see link above and follow up