<?php

declare(strict_types=1);
// ===============================
// Modern PHP Lesson 1 
// ===============================

// ---------------------------------
// 1. Variables and Types
// ---------------------------------

// String variable

// Integer variable

// Float variable

// Boolean variable

// Typed variables (PHP 7.4+)


// Output variables

// ---------------------------------
// 2. Functions
// ---------------------------------

// Simple function

// Function with type declarations and return type

// ---------------------------------
// 3. Control Flow (If, Else, Loops)
// ---------------------------------

// If-else statement

// For loop

// While loop

// Foreach loop (arrays)

// ---------------------------------
// 4. Classes (OOP Basics)
// ---------------------------------

// Class definition with property, constructor, and method

// ---------------------------------
// 5. Inheritance and Interfaces
// ---------------------------------

// Define an interface

// Base class implementing interface


class Person
{
    public string $name;
    public int $age;
    public float $height;
    public bool $isStudent;

    public function __construct(string $name, int $age, float $height, bool $isStudent)
    {
        $this->name = $name;
        $this->age = $age;
        $this->height = $height;
        $this->isStudent = $isStudent;
    }
}