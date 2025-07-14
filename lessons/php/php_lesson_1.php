<?php
declare(strict_types=1);
// php_lesson_1.php
// ensure php and intelliphense is installed
// A simple PHP lesson skeleton demonstrating basic concepts
// to run type php -S localhost:8000 then navigate to localhost:8000/php_lesson_1.php

// 1. Outputting text using echo
echo "<h1>Welcome to Your First PHP Lesson!</h1>";

// 2. Variables and data types
echo "Variables and data types" .  "<br>";
// string
$name = "Robbie";
echo $name . "<br>";
echo gettype($name). "<br>";
// number
$age = 25;
echo $age . "<br>";
echo gettype($age) . "<br>";
//boolean
$isStudent = true;
echo $isStudent . "<br>";
echo gettype($isStudent) . "<br>";
//float
$height = 1.75;
echo $height . "<br>";
echo gettype($height) . "<br>";

// 3. String concatenation
echo "<p>Hello, my name is " . $name . ".</p>";


// set up debugger at this stage
// add .vscode file
// write xdebug_break();
// run and inspect variables
//xdebug_break();
// ensure errors and exceptions ticked under breakpointa in side bar
// run debugger to show error thrown when adding to different types together

// maths with numbers
$newHeight = $height + 2;
echo "Original height: " . $height . "<br>";
echo "New height: " . $newHeight . "<br>";

// xdebug_break();
// $badTypes = $height + "2";
// echo "badTypes" + $badTypes;








// 4. Conditional statements
if ($isStudent) {
    echo "<p>I am a student.</p>";
} else {
    echo "<p>I am not a student.</p>";
}

// 5. Arrays
$colors = ["red", "green", "blue"];
echo "<p>My favorite colors are: " . implode(", ", $colors) . ".</p>";

// 6. Loops
echo "<ul>";
for ($i = 0; $i < count($colors); $i++) {
    echo "<li>" . $colors[$i] . "</li>";
}
echo "</ul>";

// 7. Functions
function greet($person) {
    return "Hello, " . $person . "!";
}
echo "<p>" . greet($name) . "</p>";

// 8. Associative arrays
$user = [
    "name" => $name,
    "age" => $age,
    "student" => $isStudent
];
echo "<pre>";
print_r($user);
echo "</pre>";

// 9. Superglobals (GET example)
echo "<p>Your query string: " . htmlspecialchars($_SERVER['QUERY_STRING']) . "</p>";

// 10. Comments
// Single-line comment
# Another single-line comment
/*
    Multi-line comment
*/

?>