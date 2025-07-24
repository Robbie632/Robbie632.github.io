/**
 * JavaScript Basics for Beginners (with React Relevance)
 *
 * This file aims to introduce fundamental JavaScript concepts,
 * highlighting those that are particularly important when learning React.
 */

// --- SECTION 1: Variables and Data Types ---

/**
 * Variables are containers for storing data values.
 * In modern JavaScript, we primarily use `let` and `const`.
 */

// `let`: Used for variables whose values might change.
let userName = "Alice";
console.log("Initial userName:", userName);
userName = "Bob"; // We can reassign 'let' variables
console.log("Updated userName:", userName);

// `const`: Used for variables whose values should not change once assigned.
const appName = "MyAwesomeApp";
console.log("App Name:", appName);
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
console.log("Type of isActive:", typeof isActive);
console.log("Type of selectedColor:", typeof selectedColor); // Note: typeof null is 'object', which is a historical quirk
console.log("Type of favoriteFood:", typeof favoriteFood);

// --- SECTION 2: Operators ---

/**
 * Operators perform operations on values and variables.
 */

// Arithmetic Operators: +, -, *, /, %, ++, --
let num1 = 10;
let num2 = 3;
console.log("\n--- SECTION 2: Arithmetic Operators ---");
console.log("Addition (10 + 3):", num1 + num2);
console.log("Subtraction (10 - 3):", num1 - num2);
console.log("Multiplication (10 * 3):", num1 * num2);
console.log("Division (10 / 3):", num1 / num2);
console.log("Modulus (remainder) (10 % 3):", num1 % num2);

// Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
// Very important for control flow!
console.log("\n--- SECTION 2: Comparison Operators ---");
console.log("Loose Equality (10 == '10'):", 10 == '10');   // true (compares value, coerces types)
console.log("Strict Equality (10 === '10'):", 10 === '10'); // false (compares value AND type) - ALWAYS prefer ===
console.log("Not Equal (10 != 5):", 10 != 5);
console.log("Strict Not Equal (10 !== '10'):", 10 !== '10');
console.log("Greater Than (10 > 5):", 10 > 5);

// Logical Operators: && (AND), || (OR), ! (NOT)
console.log("\n--- SECTION 2: Logical Operators ---");
let isAdult = true;
let hasLicense = false;
console.log("isAdult && hasLicense:", isAdult && hasLicense); // true && false => false
console.log("isAdult || hasLicense:", isAdult || hasLicense); // true || false => true
console.log("!isAdult:", !isAdult); // !true => false

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
console.log("\n--- SECTION 4: Functions ---");
console.log(greet("Charlie"));

// Function Expression
const add = function(a, b) {
    return a + b;
};
console.log("Sum (5 + 7):", add(5, 7));

// Arrow Functions (ES6+) - VERY common in React
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

// Iterating over arrays (important for rendering lists in React)
console.log("\n--- SECTION 5: Iterating Arrays (for...of loop) ---");
for (const fruit of fruits) {
    console.log(fruit);
}

// --- SECTION 6: Array `map()` (CRUCIAL for React) ---

/**
 * The `map()` method creates a NEW array by calling a provided function
 * on every element in the calling array.
 * This is incredibly useful in React for transforming data into lists of UI elements.
 */

const numbers = [1, 2, 3, 4, 5];
console.log("\n--- SECTION 6: Array map() ---");

// Example 1: Double each number
const doubledNumbers = numbers.map(number => number * 2);
console.log("Original numbers:", numbers);
console.log("Doubled numbers (using map):", doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Example 2: Transform an array of objects (common in React)
const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 28 },
];

// In React, you might use map to render a list of user profiles:
const userNames = users.map(user => user.name);
console.log("User names (using map):", userNames); // Output: ["Alice", "Bob", "Charlie"]

// When using map in React, you often return JSX (explained next!)
// Imagine this is inside a React component's render method:
/*
const userListItems = users.map(user => (
    <li key={user.id}>
        {user.name} ({user.age})
    </li>
));
// userListItems would then be rendered inside a <ul> or <ol>
*/

// --- SECTION 7: Objects ---

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
        zip: "12345"
    }
};

console.log("\n--- SECTION 7: Objects ---");
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
const updatedPerson = { ...person,
    age: 30,
    occupation: "Engineer"
};
console.log("Updated Person (using spread):", updatedPerson);

// --- SECTION 8: Introduction to JSX (Not actual JavaScript, but how it works with React) ---

/**
 * JSX stands for JavaScript XML. It is a syntax extension for JavaScript.
 * It's used with React to describe what the UI should look like.
 * While it looks like HTML, it's actually JavaScript under the hood that gets compiled.
 *
 * Browsers cannot understand JSX directly. React projects use tools (like Babel)
 * to transform JSX into regular JavaScript function calls.
 */

console.log("\n--- SECTION 8: Introduction to JSX (Conceptual) ---");
console.log("NOTE: The following is conceptual JSX. It will not run as pure JavaScript.");
console.log("It requires a React setup to be transpiled and rendered.");

/*
// Example of JSX:
const greetingElement = <h1>Hello, React!</h1>;

// You can embed JavaScript expressions within JSX using curly braces `{}`:
const name = "Student";
const welcomeMessage = <p>Welcome, {name}!</p>;

const isLoggedIn = true;
const userStatus = (
    <div>
        {isLoggedIn ? <p>You are logged in.</p> : <button>Login</button>}
    </div>
);

// JSX elements can be stored in variables and passed around:
function MyComponent(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            {props.children} // A common React pattern to render content passed between tags
        </div>
    );
}

const appContent = (
    <MyComponent title="My First React App">
        <p>This is some content inside the component.</p>
        <button onClick={() => console.log("Button clicked!")}>Click Me</button>
    </MyComponent>
);

// Array map and JSX together:
const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 75 },
];

const productList = (
    <ul>
        {products.map(product => (
            // `key` is a special prop in React, essential for list rendering performance and correctness
            <li key={product.id}>
                {product.name} - £{product.price}
            </li>
        ))}
    </ul>
);
*/

console.log("\nKey JSX takeaways:");
console.log("1. Looks like HTML, but it's JavaScript.");
console.log("2. Allows you to write UI structure directly in JS files.");
console.log("3. Use `{}` to embed JavaScript expressions.");
console.log("4. Requires a build tool (like Babel) to be transformed into browser-understandable JavaScript.");
console.log("5. Crucial for defining React components' UI.");

// --- SECTION 9: ES6+ Features Relevant to React ---

/**
 * Many modern JavaScript features (ES6, ES7, etc.) are heavily used in React.
 * We've already seen some (arrow functions, const/let, template literals, destructuring, spread).
 * Here are a couple more.
 */

console.log("\n--- SECTION 9: ES6+ Features ---");

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
console.log("\n--- End of JavaScript Basics ---");
console.log("Keep practicing! The best way to learn is by doing.");