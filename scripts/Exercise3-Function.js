function AnimalTestUser(username) {
    return {
        username: username
    }
}

var testSheep = AnimalTestUser('CottonBall');
console.log(testSheep);
console.log(testSheep.username);