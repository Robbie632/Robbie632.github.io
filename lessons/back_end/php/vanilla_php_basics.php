<?php

declare(strict_types=1);
// The above is best practise
// if above commented out then hello(1) would run, not safe! if defined then throws error: safe!
// hello("hello world");
//hello(1);
// function hello(string $a) {
//     print($a);
// }

// ===============================
// PHP Basics for Laravel Lesson 1 
// ===============================
// PHP documentation: https://www.php.net/manual/en/index.php

// ---------------------------------
// 1. Variables and Types
// ---------------------------------
// var_dump useful
// $a = 1;
// var_dump($a);

// String variable
// string functions: https://www.php.net/manual/en/ref.strings.php
// $myString = "holiday home";
// var_dump($myString); 
// $string1 = "hello ";
// $string2 = "world\n";
// $string3 = $string1 . $string2;
// print($string3);
// $shoppingList = "apples,\npears,\noranges,\nbananas\n";
// print($shoppingList);

// Integer variable
// Math functions: https://www.php.net/manual/en/ref.math.php
// $a = 1;
// $b = 2;
// $c = $a + $b;
// $d = $a - $b;
// print($c);
// print($d);
// Float variable
// $a = 1.2;
// $c = $a / 0;
// print($c);
// $d = $a + 'hello';


// arrays
// array functions: https://www.php.net/manual/en/book.array.php

// $myArray = ['Club', 'ticket', 'pub'];
// $myEquivalentArray = [0=>'Club', 1=>'ticket', 2=>'pub'];
// var_dump($myArray);
// indexing arrays
// print($myArray[2]);
// print($myEquivalentArray[2]);
// $myAssocarray = ['banana'=>'apple', 'pear'=>'fig'];
// print($myAssocarray['pear']);
// nested associative array
// $myClubs = [
//     ['location'=>'Bristol', 'capacity'=>1000],
//     ['location'=>'York', 'capacity'=>2000]
// ];


// var_dump($myClubs['firstclub']['location']);

// adding to array []

// $clubs = ["Prizm", "Syndicate"];
// $myNewClub = "pearl";
// $clubs[] = $myNewClub;
// var_dump($clubs);
// removing from array unset
// unset($clubs[0]);
// var_dump($clubs);
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

// Boolean variable

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
