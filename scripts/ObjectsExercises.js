//Use this file to implement Part One of your project

var animal = {};
animal.username = "wolf";
console.log(animal.username);

animal.tagline = "howling away for thousands of years";
console.log(animal.tagline);

var noises = [];

animal["noises"] = noises;
// could also do:
// animal.noises = noises;

console.log(animal);

// note === is a strict check 
// == is a more lenient check -- so hypothetically 1 == '1' might return true if you use that
var i = 0;
for (var key in animal) {
    i++;
    console.log(key);
    if(key === 'username') {
        console.log("Hi, my name is " + animal[key]);
    }
    if(key === 'tagline') {
        console.log("I like to say " + animal[key]);
    }    
}
console.log("there are " + i + " properties in the animal object");