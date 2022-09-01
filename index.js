// ### CHALLENGE 1: REVERSE A STRING
// // Return a string in reverse

console.log("1: REVERSE A STRING");

function reverseString(str) {
    // 1. split the string 
    // 2. reverse the array
    // 3. join the string

    return str.split('').reverse().join("")


}

console.log(reverseString('hello')); // olleh


console.log("---------------------------------------------");



// #### CHALLENGE 2: VALIDATE A PALINDROME
// // Return true if palindrome and false if not

console.log("2: VALIDATE A PALINDROME");

function isPalindrome(str) {
    const reversedString = str.split('').reverse().join("");

    if (str.toLowerCase() === reversedString.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome('Racecar')); // true 
console.log(isPalindrome('hello'));; // false 



console.log("---------------------------------------------");


// ### CHALLENGE 3: REVERSE AN INTEGER
// // Return an integer in reverse


console.log("3: REVERSE AN INTEGER");

function reverseInt(int) {


    const str = int.toString();

    const reversedStr = str.split('').reverse().join("");


    //  parseFloat() function is used to accept a string and convert it into a floating-point number. I
    //  Math.sign(num) - returns either +1 or  -1 
    return parseFloat(reversedStr) * Math.sign(int);

}
console.log(reverseInt(521)); // 125
console.log(reverseInt(-321000)); // -123


console.log("---------------------------------------------");

// ### CHALLENGE 4: CAPITALIZE LETTERS
// // Return a string with the first letter of every word capitalized


console.log("4: CAPITALIZE LETTERS");

function capitalizeLetters(str) {

    const arr = str.split(" ");

    // arr.map() iterates through each elements and returns new array based on specified function
    return arr.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });


}

console.log(capitalizeLetters('i love javascript')); // 'I Love Javascript'

console.log("---------------------------------------------");




console.log("5: MAX CHARACTER");


// ### CHALLENGE 5: MAX CHARACTER
// // Return the character that is most common in a string

function maxCharacter(str) {

    const arr = str.split("");

    const count = {};



}

console.log(maxCharacter('javascript'));
// maxCharacter('javascript') == 'a';



console.log("---------------------------------------------");

console.log("6: FIZZBUZZ");

// ### CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function FizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}
console.log(FizzBuzz())


console.log("---------------------------------------------");
// ### CHALLENGE 7: LONGEST WORD
// Return the longest word of a string
// SOLUTION 1 - Return a single longest word
// SOLUTION 2 - Return an array and include multiple words if they have the same length
// SOLUTION 3 - Only return an array if multiple words, otherwise return a string
// ex:
// longestWord('Hi there, my name is Brad') === 'there,';
// longestWord('My name is Brad') === ['name', 'brad'];
// longestWord('Brad') === 'brad';


console.log("8: ARRAY CHUNKING");
// ### CHALLENGE 8: ARRAY CHUNKING
// // Split an array into chunked arrays of a specific length

function chunkArray(arr, length) {

    const newArr = [];

    for (i = 0; i < arr.length; i += length) {

        // slice(start, end), end not included - returns a new shallow array copy


        const chunks = arr.slice(i, i + length);
        newArr.push(chunks);
    }
    return newArr;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));

console.log("---------------------------------------------");

// ### CHALLENGE 9: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex:
// [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]


console.log("10: ANAGRAM");


// ### CHALLENGE 10: ANAGRAM
// Return true if anagram and false if not

function isAnagram(str1, str2) {
    const a = str1.split("").sort().join(""),
        b = str2.split("").sort().join("");
    return a === b;
}

console.log(isAnagram('elbow', 'below')); // true
console.log(isAnagram("restful", "fluster")); // true
console.log(isAnagram('Dormitory', 'dirty room##')); // false 

// ex. isAnagram('elbow', 'below') === true
// ex.  --> false 




console.log("---------------------------------------------");

// ### CHALLENGE 11: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers
// ex:
// addAll(2, 5, 6, 7) === 20;

// ### CHALLENGE 12: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex.
// sumAllPrimes(10) === 17;

// ### CHALENGE 13: SEEK AND DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex:
// seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello'];


console.log("14: EVEN & ODD SUMS");

// ### CHALLENGE 14: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers

function evenOddSums(arr) {

}

// evenOddSums([50, 60, 60, 45, 71]) == [170, 116];
