// Javascript code to find the String manipulations
// 1. Reversing a string

/*
  Takes 1 argument 👉 String

  Return string in reverse

  stringRev(string) 👉 'olleh'
*/

function stringReverse(string) {
  // variable to hold new string
  let revString = ''
  // loop through each character in string 
  // set iteration to length of string
  // decrement iteration
  for (let i = string.length - 1; i >= 0; i--) {
    revString += string[i]
  }
  return revString;
}

// ES6 for of loop
function stringReverse1(string) {
  // set variable to empty string hold the reversed string
  let revString = ''

  // loop through each letter of the string
  for (let letter of string) {
    // Adds the first letter to the end of the string
    revString = letter + revString
  }
  return revString;
}

const demo = 'hello'
const string = `!sisab yliad a no gninrael m'I`
// console.log(stringReverse(demo))
// console.log(stringReverse(string))
// console.log(stringReverse1(demo))
// console.log(stringReverse1(string))


/*
###############################################################
*/


//  2. JavaScript Palindrome - check if the given string is palindrome or not

/*
  A palindrome is a word that is the same forwards and backwards!

  Takes 1 argument

  Returns true if it's a palindrome

    let word = 'wow'
    let word1 = 'kiss'

    isPalindrome(word) 👉 'wow'
    isPalindrome(word1) 👉 'Not a Palindrome'
*/

function isPalindrome(word) {
  // Set variable to hold new string
  let wordRev = ''
  // Split word into single char
  for (letter of word) {
    // reverse char / join char
    wordRev = letter + wordRev
  }

  // Check if original word is the sam as reversed word
  if (word == wordRev) {
    // Should return true IF it's a palindrome
    return 'true'
    // Else IF it's not a palindrome return 'Not a palindrome'
  } else {
    return 'Not a palindrome'
  }
}

const demoWord = 'wow'
const demoWord1 = 'kiss'

// console.log(isPalindrome(demoWord))
// console.log(isPalindrome(demoWord1))
// console.log(isPalindrome('racecar'))
// console.log(isPalindrome('toy'))


/*
###############################################################
*/


// 3. Sorting an array of strings by length

/*  
    Takes 1 argument

    Returns in ascending / descending order (depending on code)

      let array = ['c', 'd', 'b', 'a']

      Ascending Sort
      sortStringByLength(array) 👉 ['a', 'b', 'c', 'd']

      Descending Sort
      sortStringByLength1(array) 👉 ['d', 'c', 'b', 'a']
      
      function sortStringByLength (array) {
          // loop through array of strings
          for (let i = 0; i < array.length; i++) {
            // loop through other strings in array
            for (let j = i + 1; j < array.length; j++) {
              // Check if string length is GREATER string 2
              if (array[i].length > array[j].length) {
                temp = array[i]
                array[i] = array[j]
                array[j] = temp
              }
            }
          }
              return array;
      } 
*/

// ASCENDING SORT BY LENGTH - Strings
function sortStringByLength(array) {
  // loop through array of strings
  for (let i = 0; i < array.length; i++) {
    // loop through other strings in array
    for (let j = i + 1; j < array.length; j++) {
      // Check if string is GREATER then store by length of string
      // comparing if one index length greater than the other
      if (array[i].length > array[j].length) {
        temp = array[i]
        // console.log(temp);
        array[i] = array[j]
        // console.log(array[i], array[j]);
        array[j] = temp
      }
    }
  }
  return array;
}

// DESCENDING SORT BY LENGTH - Strings - ES6
function sortStringByLength1(array) {
  // loop through array of strings
  for (let str in array) {
    // loop through other strings in array
    for (let str1 in array) {
      // Check if string is LESSER then store by length of string in ascending order
      if (array[str].length < array[str1].length) {
        temp = array[str]
        array[str] = array[str1]
        array[str1] = temp
      }
    }
  }
  return array;
}

// DESCENDING SORT BY LENGTH - Strings
function sortStringByLength2(array) {
  // loop through array of strings
  for (let str of array) {
    // loop through other strings in array
    for (let str1 of array) {
      // Check if string is GREATER then store by length of string

      if (array[str] < array[str1]) {
        temp = array[str]
        array[str] = array[str1]
        array[str1] = temp
      }
    }
  }
  return array;
}

const strArray = ['do', 'enjoy', 'I', 'coding']
// console.log(sortStringByLength(strArray))
// console.log(sortStringByLength1(strArray))
// console.log(sortStringByLength2(strArray))


/*
###############################################################
*/


// 4. Checking whether two strings are anagrams

/*
Takes 2 arguments 👉 str, str1

Checks if they are anagrams: anagrams are words that can be re-arrange to create new words

Returns true if the are anagrams : They are not anagrams

let str = 'mary'
let str1 = 'army'

let strA = 'horse'
let strB = 'toy


isAnagrams(str, str1) 👉 true
isAnagrams(strA, strB) 👉 false

ES6 for loop
isAnagrams1(str, str1) 👉 true
*/

function isAnagrams(str, str1) {
  // Set variables to hold converted array
  let arrA = [...str]
  let arrB = [...str1]
  // variable to hold restructured strings
  let strA = ''
  let strB = ''

  // Sort First String Array then restructure
  // loop through to get each character
  for (let i = 0; i < arrA.length; i++) {

    // loop through array again for comparison condition
    for (let j = i + 1; j < arrA.length; j++) {

      // Check if letter is lower
      // Check: > for ascending order
      // Check: < for descending order
      if (arrA[i] > arrA[j]) {
        temp = arrA[i]
        arrA[i] = arrA[j]
        arrA[j] = temp
      }
    }
  }
  for (let k = 0; k < arrA.length; k++) {
    strA += arrA[k]
  }
  
  // Sort Second String Array then restructure
  // loop through to get each character
  for (let i = 0; i < arrB.length; i++) {

    // loop through array again for comparison condition
    for (let j = i + 1; j < arrB.length; j++) {

      // Check if letter is lower the reassign accordingly 
      // Check: > for ascending order
      // Check: < for descending order
      if (arrB[i] > arrB[j]) {
        temp = arrB[i]
        arrB[i] = arrB[j]
        arrB[j] = temp
      }
    }
  }

  for (let k = 0; k < arrB.length; k++) {
    // console.log(k, arrB[k]);
    strB += arrB[k]
  }
  // Compare / check if strA is equal to strB
  if (strA == strB) {
    return true
  } else {
    return false
  }
}

//  console.log(isAnagrams('mary', 'mari'));
//  console.log(isAnagrams1('mary', 'mari'));

/*
###############################################################
*/


// BONUS

/*
###############################################################
ALPHABETICAL STRING SORT
################################################################
*/

/*  
    Takes 1 argument

    Returns in ascending / descending order (depending on code)

      let array = 'dcab'

      Ascending Sort
      sortString1(array) 👉 'abcd'

      Descending Sort
      sortString2(array) 👉 'dcba'
      
  function sortString(str) {
    // convert string to an array
    let strArray = [...str]

    // Set variable for new string
    let newStr = ''

    // loop through array to get each character
    for (let i = 0; i < strArray.length; i++) {

      // loop through array again for comparison condition
      for (let j = i + 1; j < strArray.length; j++) {

        // Check if letter is lower the reassign accordingly
        // Check: > for ascending order
        // Check: < for descending order
        if (strArray[i] > strArray[j]) {
          temp = strArray[i]
          strArray[i] = strArray[j]
          strArray[j] = temp
        }
      }
    }
    // loop through sort array to convert back to a string
    // Loop through sorted array
    for (let k = 0; k < strArray.length; k++){
      // console.log(k, strArray[k]);
      newStr += strArray[k]
    }

    return newStr
  }

*/

function sortString(str) {
  // convert string to an array
  let strArray = [...str]

  // Set variable for new string
  let newStr = ''

  // loop through array to get each character
  for (let i = 0; i < strArray.length; i++) {

    // loop through array again for comparison condition
    for (let j = i + 1; j < strArray.length; j++) {

      // Check if letter is lower the reassign accordingly
      // Check: > for ascending order
      // Check: < for descending order
      if (strArray[i] > strArray[j]) {
        temp = strArray[i]
        strArray[i] = strArray[j]
        strArray[j] = temp
      }
    }
  }
  // loop through sorted array to convert back to a string
  for (let k = 0; k < strArray.length; k++) {
    // console.log(k, strArray[k]);
    newStr += strArray[k]
  }

  return newStr
}

// ASCENDING SORT - ES6
function sortString1(str) {
  // convert string to an array
  let strArray = [...str]

  // Set variable for new string
  let newStr = ''

  // loop through array to get each character
  for (let letter in strArray) {
    // console.log(letter);
    // loop through array of strings for comparison condition
    for (let letter1 in strArray) {
      // console.log(letter1);
      // Check if letter is lower the reassign accordingly
      // Check: > for ascending order
      // Check: > for descending order
      if (strArray[letter] < strArray[letter1]) {
        temp = strArray[letter]
        strArray[letter] = strArray[letter1]
        strArray[letter1] = temp
      }
      // console.log(strArray);
    }
    // console.log(newStr);
  }
  // loop through sort array to convert back to a string
  // Loop through sorted array 
  for (let str in strArray){
    // console.log(k, strArray[k]);
    newStr += strArray[str]
  }

  return newStr
}

// ASCENDING SORT - ES6
function sortString2(str) {
  // convert string to an array
  let strArray = [...str]

  // Set variable for new string
  let newStr = ''

  // loop through array to get each character
  for (let letter in strArray) {
    // console.log(letter);
    // loop through array of strings for comparison condition
    for (let letter1 in strArray) {
      // console.log(letter1);
      // Check if letter is lower
      // Check: > for ascending order
      // Check: > for descending order
      if (strArray[letter] > strArray[letter1]) {
        temp = strArray[letter]
        strArray[letter] = strArray[letter1]
        strArray[letter1] = temp
      }
      // console.log(strArray);
    }
    // console.log(newStr);
  }
  // loop through sort array to convert back to a string
  // Loop through sorted array 
  for (let str in strArray){
    // console.log(k, strArray[k]);
    newStr += strArray[str]
  }

  return newStr
}

// console.log(sortString('jay'))
// console.log(sortString1('ray'))
// console.log(sortString2('may'))


/*
###############################################################
ALPHABETICAL ARRAY SORT
################################################################
*/

/*  
    Takes 1 argument

    Returns in ascending / descending order (depending on code)

      let array = ['c', 'd', 'b', 'a']

      Ascending Sort
      sortStringArr1(array) 👉 ['a', 'b', 'c', 'd']

      Descending Sort
      sortStringArr2(array) 👉 ['d', 'c', 'b', 'a']
      
      function sortString (array) {
          // loop through array of strings
          for (let i = 0; i < array.length; i++) {
            // loop through other strings in array
            for (let j = i + 1; j < array.length; j++) {
              // Check if character is GREATER
              if (array[i] > array[j]) {
                temp = array[i]
                array[i] = array[j]
                array[j] = temp
              }
            }
          }
              return array;
      } 

*/


function sortStringArr(array) {
  // loop through array of strings
  for (let i = 0; i < array.length; i++) {
    // loop through other strings in array
    for (let j = i + 1; j < array.length; j++) {
      // Check if character is Greater than other character in arr for ascending order
      // Else check if LESSER for descending order
      if (array[i] > array[j]) {
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    }
  }
  return array;
}

// ASCENDING SORT - ES6
function sortStringArr1(array) {
  // loop through array of strings
  for (let str in array) {
    for (let str1 in array) {
      // Check if 1st character is LESSER then store by length of string
      // * for ascending order check if LESSER when using ES6 for IN loop
      if (array[str] < array[str1]) {
        temp = array[str]
        array[str] = array[str1]
        array[str1] = temp
      }
    }
  }
  return array;
}
// DESCENDING SORT - ES6

function sortStringArr2(array) {
  // loop through array
  for (let str in array) {
    // console.log(array)
    for (let str1 in array) {
      // Check if 1st character is GREATER then store by character of string
      // * for descending order check if GREATER when using ES6 for IN loop
      if (array[str] > array[str1]) {
        temp = array[str]
        array[str] = array[str1]
        array[str1] = temp
      }
    }
  }
  return array;
}

const strDemo = ['c', 'd', 'b', 'a']
const strArray1 = ['cat', 'dog', 'bird', 'ant', 'bat', 'code']

// console.log(sortStringArr(strDemo))
// console.log(sortStringArr1(strDemo))
// console.log(sortStringArr2(strDemo))
// console.log(sortStringArr1(strArray1))
// console.log(sortStringArr2(strArray1))







function isAnagrams1(str, str1) {
  // Set variables to hold converted array
  let arrA = [...str]
  let arrB = [...str1]
  // variable to hold restructured strings
  let strA = ''
  let strB = ''

  // Sort First String Array then restructure
  // loop through to get each character
  for (let i = 0; i < arrA.length; i++) {

    // loop through array again for comparison condition
    for (let j = i + 1; j < arrA.length; j++) {

      // Check if letter is lower
      // Check: > for ascending order
      // Check: < for descending order
      if (arrA[i] > arrA[j]) {
        temp = arrA[i]
        arrA[i] = arrA[j]
        arrA[j] = temp
      }
    }
  }
  console.log(arrA);
  for (let k = 0; k < arrA.length; k++) {
    strA += arrA[k]
  }
  
  // Sort Second String Array then restructure
  // loop through to get each character
  for (let i = 0; i < arrB.length; i++) {

    // loop through array again for comparison condition
    for (let j = i + 1; j < arrB.length; j++) {

      // Check if letter is lower the reassign accordingly 
      // Check: > for ascending order
      // Check: < for descending order
      if (arrB[i] > arrB[j]) {
        temp = arrB[i]
        arrB[i] = arrB[j]
        arrB[j] = temp
      }
    }
  }

  for (let k = 0; k < arrB.length; k++) {
    // console.log(k, arrB[k]);
    strB += arrB[k]
  }
  console.log(strB);
  // Compare / check if strA is equal to strB
  if (strA == strB) {
    return true
  } else {
    return false
  }
}


//  console.log(isAnagrams1('mary', 'mari'));