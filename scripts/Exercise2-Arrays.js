var animal1 = {};
animal1.username = "Wolf";
animal1.tagline = "I'll eat you good!";
animal1.noises = ['growl', 'grr', 'snarl'];

var animal2 = {};
animal2.username = "Sheep";
animal2.tagline = "Fluffy as a Rug!";
animal2.noises = ['Baaa', 'Bleat'];

var animal3 = {};
animal3.username = "Lion";
animal3.tagline = "I'll be YOUR King!";
animal3.noises = ['Roar!', 'Simba!!!'];

var animals = [];
animals[0] = animal1;
animals.push(animal2);
animals.push(animal3);

var quackers = { username: 'DaffyDuck', tagline: 'Yippee!', noises: ['quack', 'honk', 'sneeze', 'growl'] };
animals.unshift(quackers);
console.log("animals array: " + animals);

var noiseArray = ['boom'];
noiseArray.unshift('bang');
noiseArray.push('bap');
noiseArray[noiseArray.length] = 'pow';
console.log['noiseArray length: ' + noiseArray.length];
console.log('noiseArray: ' + noiseArray);

for(var key in animals) {
    console.log(key + ' ' + animals[key]);
    for(var prop in animals[key]) {
        console.log(prop + ' = ' + animals[key][prop]);  // so this apparently resolves to i.e. animal3['username']
    }
}