console.log("**************************************************************************************");
console.log();
console.log("**************************************************************************************");
var box= [];
console.log(box.pop()); // pop returns undefined on an empty array
box[0] = true;
box[1] = 'meow';
console.log(box);
box.push({'hello' : 'goodbye'});
console.log(box);

var i = 0;
box[i]; // should be true
box[1]; // meow
console.log(box);
box.pop(); // hello goodbye
box.unshift("should be first"); // unshift is like pop but at the beginning of an array
box.unshift("should now be first"); // unshift is like pop but at the beginning of an array
console.log(box);
console.log(box.push("my friend")); 
console.log(box);
console.log(box.shift()); // this pulls the first element off of the array and returns it
                          // box.shift on an empty array will return undefined.
console.log(box);

// what happens if you push the array to itself?
box.push(box);
console.log(box);  // [ 'should be first', true, 'meow', 'my friend', [Circular] ]
console.log(box.pop()); // [ 'should be first', true, 'meow', 'my friend' ]

// what happens in this case?
console.log("**************************************************************************************");
console.log();
console.log("**************************************************************************************");
var array = [];
array['size'] = 9; // so this actually sets a property on the object called size
array['0'] = 'meow';
array[0] = 'meow 0'; // this is the same is '0' so it overwrites the value
array[1] = 'meow 1';

console.log(array['size']); // 9
console.log(array.size);    // 9
console.log(array[0]);
console.log(array['0']);

console.log("Array[] length: " + array.length); // note that size is not considered part of the length.

for(var key in array) {    
    console.log(array.key + '\t' + typeof(key) + '\t' + key + '\t' + array[key]);  // note that array.key will be undefined because key is assigned as a variable
}

for(var i = 0; i < array.length; i++) {
    console.log(i + '. ' + array[i]);
}

for(var i = 0; i < 4; i++) {
    console.log(i + '. ' + array[i]);
}

console.log("**************************************************************************************");
console.log();
console.log("**************************************************************************************");

var box = [];
box['0'] = 'meow';
box[3] = {'babyBox' : true};
console.log(box.length);
// console.log(length); // this will crap out the program.
console.log(box);
console.log(box[1]);

console.log("**************************************************************************************");
console.log();
console.log("**************************************************************************************");

