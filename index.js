// Is Truthy: exercise #1; This code worked with all the values and the expected prints showed on picture exercise 1
let value = "I am string";

if (value) {
    console.log(true);
} else if (value === false) {
    console.log("boolean value is falsy");
} else if (value === null) {
    console.log("null value is falsy");
} else if (value === undefined) {
    console.log("undefined is falsy");
} else if (value === 0) {
    console.log("number 0 is falsy (the only falsy number)");
} else if (value === "") {
    console.log("empty string is falsy (the only falsy string)")
}

value = false;

if (value) {
    console.log(true);
} else if (value === false) {
    console.log("boolean value is falsy");
} else if (value === null) {
    console.log("null value is falsy");
} else if (value === undefined) {
    console.log("undefined is falsy");
} else if (value === 0) {
    console.log("number 0 is falsy (the only falsy number)");
} else if (value === "") {
    console.log("empty string is falsy (the only falsy string)")
}

value = null;

if (value) {
    console.log(true);
} else if (value === false) {
    console.log("boolean value is falsy");
} else if (value === null) {
    console.log("null value is falsy");
} else if (value === undefined) {
    console.log("undefined is falsy");
} else if (value === 0) {
    console.log("number 0 is falsy (the only falsy number)");
} else if (value === "") {
    console.log("empty string is falsy (the only falsy string)")
}

value = undefined;

if (value) {
    console.log(true);
} else if (value === false) {
    console.log("boolean value is falsy");
} else if (value === null) {
    console.log("null value is falsy");
} else if (value === undefined) {
    console.log("undefined is falsy");
} else if (value === 0) {
    console.log("number 0 is falsy (the only falsy number)");
} else if (value === "") {
    console.log("empty string is falsy (the only falsy string)")
}

value = 0;

if (value) {
    console.log(true);
} else if (value === false) {
    console.log("boolean value is falsy");
} else if (value === null) {
    console.log("null value is falsy");
} else if (value === undefined) {
    console.log("undefined is falsy");
} else if (value === 0) {
    console.log("number 0 is falsy (the only falsy number)");
} else if (value === "") {
    console.log("empty string is falsy (the only falsy string)")
}

value = "";

if (value) {
    console.log(true);
} else if (value === false) {
    console.log("boolean value is falsy");
} else if (value === null) {
    console.log("null value is falsy");
} else if (value === undefined) {
    console.log("undefined is falsy");
} else if (value === 0) {
    console.log("number 0 is falsy (the only falsy number)");
} else if (value === "") {
    console.log("empty string is falsy (the only falsy string)")
}

// Number Line: exercise #2; This code worked with all the values and the expected prints showed on picture exercise 2

const num1 = 50;
const num2 = 51;

sum = num1 + num2;

if (sum > 0) {
    if (sum > 100) {
        console.log(sum, "is greater than 100");
    }
    if (sum < 100) {
        console.log(sum, "is greater than 0");
    }
}
if (sum <= 0) {
    console.log(sum, "is equal to 0");
}
else if (sum <= 0) {
    console.log(sum, "is a negative number");
}

// Greater than or equal to 5: exercise #3; This code worked with all the values and the expected prints showed on picture exercise 3

const value1 = 5
const value2 = 5
if (value1 >= 5 && value2 >= 5) {
    console.log(true)
}
else {
    console.log(false)

}

// Pair and Compare exercise #4; This code worked with all the values and the expected prints showed on picture exercise 4

const param1A = "cat"
const param1B = "cat"
const param2A = 6
const param2B = "6"
if (param1A === param1B || param2A === param2B) {
    console.log(true)
} else {
    console.log(false)
}
