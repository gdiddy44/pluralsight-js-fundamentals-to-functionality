// functions are objects which "do something"

var nameImprover = function (name, adj) {
    return 'Col ' + name + ' Mc' + adj + ' pants';
};

// jquery $ is actually a function name

console.log(nameImprover('Billy', 'Stud'));

// note discussion on side effects and closures
// a side effect is a function that does something other than return a value
// https://stackoverflow.com/questions/8129105/javascript-closures-and-side-effects-in-plain-english-separately

var add = function(a, b) {
    return a + b;
}

console.log(add(3, 4, 5)); // 7 <-- ignores the 3rd parameter

// arguments keyword

var add2 = function(a, b) {
    console.log(arguments); 
    console.log("# of arguments: " + arguments.length);
    var results = 0;
    for(var i = 0; i < arguments.length; i++) {
        results += arguments[i];
    }
    return results;
}

console.log(add2(3, 10, 5, 10, 15)); // notice that it doesn't matter that the function only defined 2 arguments


var add3 = function(a, b) {
    console.log(arguments); // logs [3, 10, 5]
    return a + b + arguments[2];
}

console.log(add3(3, 10, 5)); // how to get 18 in the above without changing the arguments?

// arguments is an array-like object, but not an array
// you can turn it into an array

// so you could chagne this
var add4 = function(a, b) {
    arguments.slice(0,1); // ERROR!!
    return a + b; 
}

// to this
var add5 = function(a, b) {
    Array.prototype.slice.call(arguments, 0); // ERROR!!
    return a + b; 
}

console.log(add5(4, 10, 3));

// looping

// function - capital A let's you know it's a constructor
// a constructor is a function that returns an object
function AnimalMaker(name) {
    return {
        speak: function () {
            return "my name is " + name;
        },
        name: name,
        owner: 'Bianca'
    };
}

var myAnimal = AnimalMaker('Lucy');
console.log(myAnimal);
console.log(myAnimal.speak);
console.log(myAnimal.speak());

var animalNames = ['Sheep', 'Liger', 'Big Bird'];
var farm = [];

for (var i = 0; i < animalNames.length; i++) {
    farm.push(AnimalMaker(animalNames[i]));
}

for(var i = 0; i < farm.length; i++) {
    console.log(farm[i].speak());
}

console.log(farm);