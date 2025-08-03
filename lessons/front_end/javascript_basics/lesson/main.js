import loadQuizzes from "./quizzes.js";


loadQuizzes();
/**
 * JavaScript Basics
 *
 * This file aims to introduce fundamental JavaScript concepts,
 *
 * Best to run this file using a debugger and stepping through line by line to understand what is happening
 */

// --- SECTION 1: Variables and Data Types ---

/**
 * Variables are containers for storing data values.
 * In modern JavaScript, we primarily use `let` and `const`.
 */
debugger
let variablesContainerNameElement = document.querySelector('#variables-container > #name')
// `let`: Used for variables whose values might change.
let userName = "Alice";
console.log("Initial userName:", userName);
variablesContainerNameElement.innerText = userName;
userName = "Bob"; // We can reassign 'let' variables
console.log("Updated userName:", userName);
variablesContainerNameElement.innerText = userName;

// `const`: Used for variables whose values should not change once assigned.
const appName = "🧑 My Profile";
console.log("App Name:", appName);
let profileHeader = document.getElementById('profile-header')
profileHeader.innerText = appName
// appName = "NewApp"; // This would cause an error! (TypeError: Assignment to constant variable.)

/**
 * Common Data Types:
 * - String: Textual data (e.g., "hello", 'world')
 * - Number: Numeric data (e.g., 10, 3.14)
 * - Boolean: True or false values (e.g., true, false)
 * - Null: Intentional absence of any object value
 * - Undefined: A variable that has been declared but not yet assigned a value
 * - Object: A collection of key-value pairs (more on this later)
 * - Array: An ordered list of values (more on this later)
 */

let age = 30; // Number
let isActive = true; // Boolean
let selectedColor = null; // Null
let favoriteFood; // Undefined (not yet assigned)

console.log("\n--- SECTION 1: Data Types Examples ---");
console.log("Type of userName:", typeof userName);
console.log("Type of age:", typeof age);
let variablesContainerAgeElement = document.querySelector('#variables-container > #age')
variablesContainerAgeElement.innerText = age
console.log("Type of isActive:", typeof isActive);
let variablesContainerIsActiveElement = document.querySelector('#variables-container > #is-active')
variablesContainerIsActiveElement.innerText = isActive
console.log("Type of selectedColor:", typeof selectedColor); // Note: typeof null is 'object', which is a historical quirk
console.log("Type of favoriteFood:", typeof favoriteFood);

// --- SECTION 2: Operators ---

/**
 * Operators perform operations on values and variables.
 */

// Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
// Very important for control flow!
console.log("\n--- SECTION 2: Comparison Operators ---");
let firstComparison = 10 == 10;
let firstComparisonElement = document.querySelector("#comparison-operators-container > #equal")
firstComparisonElement.textContent = firstComparison

let secondComparison = 10 != 10;
let secondComparisonElement = document.querySelector("#comparison-operators-container > #not-equal")
secondComparisonElement.textContent = secondComparison

let thirdComparison = 10 > 5;
let thirdComparisonElement = document.querySelector("#comparison-operators-container > #greater")
thirdComparisonElement.textContent = thirdComparison


let fourthComparison = 10 < 5;
let fourthComparisonElement = document.querySelector("#comparison-operators-container > #less-than")
fourthComparisonElement.textContent = fourthComparison



// Logical Operators: && (AND), || (OR), ! (NOT)
console.log("\n--- SECTION 2: Logical Operators ---");

// --- AND Operator (&&) ---
let isAdult = true;
let hasLicense = false;
let canDrive = isAdult && hasLicense;
let canDriveElement = document.querySelector("#logical-operators-container > #and-operator");
canDriveElement.textContent = canDrive;

// --- OR Operator (||) ---
let hasMoney = true;
let hasCard = false;
let canPay = hasMoney || hasCard;
let canPayElement = document.querySelector("#logical-operators-container > #or-operator");
canPayElement.textContent = canPay;

// --- NOT Operator (!) ---
let isSleeping = true;
let isAwake = !isSleeping;
let isAwakeElement = document.querySelector("#logical-operators-container > #not-operator");
isAwakeElement.textContent = isAwake;

// --- SECTION 3: Control Flow (Conditionals) ---

/**
 * Control flow statements determine the order in which instructions are executed.
 * `if`, `else if`, `else` are used for conditional execution.
 */

console.log("\n--- SECTION 3: Control Flow (Conditionals) ---");
let temperature = 25;

if (temperature > 30) {
  console.log("It's a hot day!");
} else if (temperature > 20) {
  console.log("It's a warm day.");
} else {
  console.log("It's a cool day.");
}

// --- SECTION 4: Functions ---

/**
 * Functions are blocks of code designed to perform a particular task.
 * They are reusable!
 */

// Function Declaration
function greet(name) {
  return "Hello, " + name + "!";
}
let myVar = greet("Sarah");
console.log(myVar);

console.log("\n--- SECTION 4: Functions ---");
console.log(greet("Charlie"));

function amIhappy(emotion) {
  if (emotion == "happy") {
    return true;
  } else if (emotion == "sad") {
    return false;
  } else {
    return "dont know";
  }
}

let myEmotion = amIhappy("happy");

console.log("myEmotion: ", myEmotion);

// Function Expression
const add = function (a, b) {
  return a + b;
};
console.log("Sum (5 + 7):", add(5, 7));

// Arrow Functions (ES6+)
// Concise syntax, especially for single expressions.
const multiply = (x, y) => x * y;
console.log("Product (4 * 6):", multiply(4, 6));

const sayGoodbye = (name) => {
  console.log(`Goodbye, ${name}!`); // Template literals (backticks) for easy string interpolation
};
sayGoodbye("David");

// --- SECTION 5: Arrays ---

/**
 * Arrays are ordered lists of values.
 * They are fundamental for handling collections of data.
 */

const fruits = ["Apple", "Banana", "Cherry"];
console.log("\n--- SECTION 5: Arrays ---");
console.log("Fruits array:", fruits);
console.log("First fruit:", fruits[0]); // Arrays are 0-indexed
console.log("Number of fruits:", fruits.length);

// Adding elements
fruits.push("Date"); // Adds to the end
console.log("Fruits after push:", fruits);

// Removing elements
const removedFruit = fruits.pop(); // Removes from the end
console.log("Removed fruit:", removedFruit);
console.log("Fruits after pop:", fruits);

// Iterating over arrays
console.log("\n--- SECTION 5: Iterating Arrays (for...of loop) ---");
for (const fruit of fruits) {
  console.log(fruit);
}

// --- SECTION 6: Array `map()` and filter()  ---

/**
 * The `map()` method creates a NEW array by calling a provided function
 * on every element in the calling array.
 */

const numbers = [1, 2, 3, 4, 5];
console.log("\n--- SECTION 6: Array map() ---");

// Example 1: Double each number
const doubledNumbers = numbers.map((number) => number * 2);
console.log("Original numbers:", numbers);
console.log("Doubled numbers (using map):", doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Example 2: Transform an array of objects
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 28 },
];


const userNames = users.map((user) => user.name);
console.log("User names (using map):", userNames); // Output: ["Alice", "Bob", "Charlie"]



// --- SECTION 7: Array `map()` and filter()  ---

/**
 * The `filter()` method creates a NEW array by calling a provided function
 * on every element in the calling array.
 */

const tasks = [
  "water plants",
  "hoover",
  "paint wall",
  "change bulb",
  "plant flowers",
];
console.log("\n--- SECTION 7: Array map() ---");

// Example 1: Double each number
const plants = tasks.filter((task) => task.includes("plant"));
console.log("Original tasks:", tasks);
console.log("plant tasks (using filter):", plants); // Output: ['water plants', 'plant flowers']

// Example 2: filter an array of objects
const students = [
  { id: 1, name: "Alice", age: 50 },
  { id: 2, name: "Bob", age: 20 },
  { id: 3, name: "Charlie", age: 68 },
];


const olderStudents = students.filter((user) => user.age > 30);
console.log("Older students (using filter):", olderStudents); // Outputs array of two objects

// --- SECTION 8: Objects ---

/**
 * Objects are collections of key-value pairs.
 * They are used to represent entities with properties.
 */

const person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 28,
  isStudent: false,
  hobbies: ["reading", "hiking", "cooking"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345",
  },
};

console.log("\n--- SECTION 8: Objects ---");
console.log("Person object:", person);

// Accessing properties (dot notation and bracket notation)
console.log("First Name:", person.firstName);
console.log("Age:", person["age"]); // Useful if property name is dynamic or has spaces/special chars

// Modifying properties
person.age = 29;
console.log("Updated Age:", person.age);

// Adding new properties
person.email = "jane.doe@example.com";
console.log("Person with email:", person);

// Destructuring Objects (ES6+) - VERY common in React for props
// Allows you to extract properties from objects into distinct variables.
const { firstName, age: personAge, hobbies } = person; // Renaming 'age' to 'personAge'
console.log("\n--- SECTION 7: Object Destructuring ---");
console.log("Destructured firstName:", firstName);
console.log("Destructured personAge:", personAge);
console.log("Destructured hobbies:", hobbies);

// Spread Syntax (...) for Objects (ES6+)
// Useful for copying objects or merging them.
const updatedPerson = { ...person, age: 30, occupation: "Engineer" };
console.log("Updated Person (using spread):", updatedPerson);

// --- SECTION 9: ES6+ Features  ---

/**
 * Many modern JavaScript features (ES6, ES7, etc.)
 * We've already seen some (arrow functions, const/let, template literals, destructuring, spread).
 * Here are a couple more.
 */

console.log("\n--- SECTION 8: ES6+ Features ---");

// Ternary Operator (Conditional Operator)
// A concise way to write if-else statements, often used in JSX.
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log("Ternary Operator example:", message);

// Default Parameters for Functions
function sayHello(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
console.log("\nDefault Parameters:");
sayHello("Eve");
sayHello(); // Uses the default "Guest"

// --- END OF FILE ---
