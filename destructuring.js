/**
 * To run this file in Gitpod, use the
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0]
// let mary = ages[1]
// let joe = ages[2]
let [john, mary, joe] = ages;
console.log(john, mary, joe); // 30 26 27

// In JavaScript, destructuring arrays allows you to extract values from an array and assign them to variables in a more convenient way.

let numbers = [1, 2, 3];

let [a, b, c] = numbers;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// We have an array numbers with three elements. We use destructuring to extract the values 1, 2, and 3 and assign them to variables a, b, and c respectively.

// Destructuring arrays also allows you to extract some values and ignore others using the "rest" syntax (...)
let newNumbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = newNumbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

//we use the rest syntax (...rest) to extract the remaining elements of the array and assign them to an array rest. The variables first and second will contain the first 
//two elements of the array numbers.

//You can also use default values when destructuring arrays

let newerNumber = [1, 2];

let [x, y, z = 3] = newerNumber;
console.log(x); // 1
console.log(y); //2
console.log(z); // 3

// Destructuring objects
let jobs = {
  mike: "designer",
  jill: "developer",
  alicia: "accountant",
};

let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia); // designer developer accountant

// Destructuring subsets

let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnnative, johnSecondary] = languages;
console.log(johnnative, johnSecondary); // english french

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary); // spanish german

let languages2 = {
  firstLanguage: "english",
  secondLanguage: "french",
  thirdLanguage: "german",
  fourthLanguage: "japanese",
};

let { firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage); // english german

//Destructuring objects also allows you to use default values for the variables.

let person = {
    name: 'shane'
}; 

let {name, age= 34} = person;
console.log(name) // shane
console.log(age) // 34

//We use the = operator to specify a default value for the variable age. If the object person doesn't have an age property, 
//the variable age will have a default value of 30.

// Using rest parameter syntax

let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;

console.log(favorite); // apple
console.log(secondFavorite); // orange
console.log(others); // ['banana', 'peach', 'cherry']

let favoriteFoods = {
  brian: "pizza",
  anna: "pasta",
  sarah: "vegetarian",
  andrea: "steak",
};

let { brian, anna, ...foods } = favoriteFoods;
console.log(brian); // pizza
console.log(anna); // pasta
console.log(foods); // [sarah: 'vegetarian', andrea: 'steak']
