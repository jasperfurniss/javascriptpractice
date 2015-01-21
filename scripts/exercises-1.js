/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(a,b){
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

    console.assert(max(13,15) == 15, "max");


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c){
    "use strict";
  if (a > b && a > c) {
    return a;
    }
  if (b > a && b > c) {
    return b;
    }
  if (c > b && c > a) {
    return c;
    }
}

console.assert(maxOfThree(1,2,3) == 3, "maxOfThree");

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    var vowel = ['a', 'e', 'i', 'o', 'u', 'y'];
    if(vowel.indexOf(char) !== -1) {
      return true;
      }
    else{
      return false;
      }
}

console.assert(isVowel('a'),'isVowel');

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket".
//That is, double every consonant and place an occurrence of "o" in between.
//For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovar(phrase){
    "use strict";
    var contentSplit = phrase.split("");
    var consanant = !isVowel;
    var result = "";
    contentSplit.forEach(function(letter){
    if (consanant(letter) && letter != " "){
      letter = letter + "o" + letter;
      result += letter;
    }else{
      result += letter;
    }
      return(result);
});
    console.assert(rovar("this is fun") == "tothohisos isos fofunon");

}
// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers.
//For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------


function sumfx(numbers){
    "use strict";
    var sum = 0;
    numbers.forEach(function(num){
      sum += num;
    });
    return sum;
}

  console.assert(sumfx( [5, 10, 20, 100] ) == 135, 'sumfx');


function multy(red){
    "use strict";
    var mult = 1;
    red.forEach(function(bum){
      mult *= bum;
    });
    return mult;
}
  console.assert(multy( [1, 2, 3, 4] ) == 24, 'multy');

// ---------------------
// Define a function reverse() that computes the reversal of a string.
//For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(word){
    "use strict";
    return word.split('').reverse().join('');
}

  console.assert(reverse('jag testar')) == ('ratset gaj');

// ---------------------
// Write a function findLongestWord() that takes an array of words
//and returns the length of the longest one.
// ---------------------

function findLongestWord(group){
    "use strict";
      var str = group.split(" ");
      var longest = 0;
      var word = null;
      str.forEach(function(str) {
        if (longest < str.length) {
          longest = str.length;
          word = str;
        }
      });
      return Number(word.length);
    }
console.assert(findLongestWord('a tale of two cities jabbermouth boy') == 11);

// ---------------------
// Write a function filterLongWords() that takes an array of words and
//an integer i and returns the array of words that are longer than i.
// ---------------------

// function filterLongWords(words, i){
//     "use strict";
//     var longer = 0;
//     var str = words.split(" ");
//     str.forEach(function(str) {
//       if (longer < str.length) {
//       i > str.length;
//       }return str;
//     });
// }
//
// console.assert(filterLongWords('hello, 4'));


// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it.
//Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";

}
