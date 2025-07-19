<?php

declare(strict_types=1);
// ===============================
// PHP Basics for Laravel Lesson 1 
// ===============================
// PHP documentation: https://www.php.net/manual/en/index.php

// ---------------------------------
// 1. Variables and Types
// ---------------------------------
// var_dump useful

// String variable
// string functions: https://www.php.net/manual/en/ref.strings.php

// Integer variable
// Math functions: https://www.php.net/manual/en/ref.math.php

// Float variable

// Boolean variable

// arrays
// array functions: https://www.php.net/manual/en/book.array.php

// indexing arrays

// adding to array []

// removing from array unset

// associative arrays
// example $a= ['a'=>1, 'b'=>2];

// looping through associative arrays
// example 
// foreach ($myArray as $key => $value) {
//     echo "$key: $value\n";
// }


// ---------------------------------
// 2. Functions
// ---------------------------------

// Simple function
// function addTwoNumbers


// Function with type declarations and return type

// array_map https://www.php.net/manual/en/function.array-map.php
// example 
// $b = array_map(function ($v) {return $v + 2;}, $a);
// array_filter https://www.php.net/manual/en/function.array-filter.php 
// example
// $b = array_filter($a, function($v) {return $v==2;});
// array_reduce https://www.php.net/manual/en/function.array-reduce.php
// example
// $b = array_reduce($a, function($a, $b) {return $a + $b;}, 0);


// ---------------------------------
// 3. Control Flow (If, Else, Loops)
// ---------------------------------

// If-elseif-else statement

// ternary if else 

// For loop

// While 

// Foreach loop (arrays)

// ---------------------------------
// 4. Classes (OOP Basics)
// ---------------------------------

// implemet Booking
// implement Restaurant

// ---------------------------------
// 5. Inheritance and Interfaces
// ---------------------------------

// Define an interface Animal

// Duck and Dog class implementing interface an dimplementing speak()

// write function animateAnimal()

// try doing the same for a Venue interface and club and restaurant

// set up xdebug need to do via php -S localhost:8000
// set up .vscode/launch.json
//xdebug_break();


// exercises ==========
// create Logger interface

// implement StandardOutputLogger


// ---------------------------------
// 6. Traits
// ---------------------------------

// ---------------------------------
// 7. Using PHP to serve responses
// ---------------------------------

// $a = $_GET['booking_id'];

// echo "<div>booking_id: $a</div>";
