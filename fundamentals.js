// NOTE: Make sure to use the `var` keyword for ALL variable declarations.

// #1: Create an array of strings called `superHeroes` that contains three super heroes.
// Type your solution immediately below this line:

var superHeroes = [Batman, Auqaman, WonderWoman]; 

// #2: Access the last item in the array and assign to a variable called `last`.
// Type your solution immediately below this line:

var last = superHeroes[2];

// #3: Create an empty array called `favoriteHeroes`.
// Type your solution immediately below this line:

favoriteHeroes = [];


// #4: Create a `for` loop that adds each string in `superHeroes` to `favoriteHeroes`.
// Type your solution immediately below this line:

for (i=0; i < superHeroes.length; i++)
favoriteHeroes.push(superHeroes[i]);

console.log(favoriteHeroes) 

// #5: Create an object literal called `batman` that contains three key-value pairs.
// Type your solution immediately below this line:

var batman = {
    superHero = true;
    human = true;
    age = 100;
};


// #6: Add a `has-secret-lair` (spelled exactly) property to `batman` by accessing
// it (do not change the original object you typed above) and assigning it
// a boolean value.
// Type your solution immediately below this line:


batman["has-secret-lair"] = true;
