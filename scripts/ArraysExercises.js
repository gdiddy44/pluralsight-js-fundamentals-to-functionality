var box= [];
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
console.log(box);