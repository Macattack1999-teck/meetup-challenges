// ///// CODE EXPIREMENT MEETUP CHALLENGE /////

///// CHALLENGE LINK /////
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter //

///// CHALLENGE /////
// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

///// MY SOLUTION /////
function convertToRoman(num) {
  const strNum = "" + num
  let romanNum = ""

  const appendCorrectAmntChars = (num, char) => {
      while (num > 0) {
          num -= 1
          romanNum += char
      }
  }

  const whatCharsToUse = (num, charOne, charTwo, charThree) => {
      if (num <= 3) {
          appendCorrectAmntChars(num, charOne)
      } else if (num == 4) {
          romanNum += charOne + charTwo
      } else if (num == 5) {
          romanNum += charTwo
      } else if (num <= 8) {
          romanNum += charTwo
          appendCorrectAmntChars(num - 5, charOne)
      } else if (num == 9) {
          romanNum += charOne + charThree
      }
  }

  for (let i = 0; i < strNum.length; i++) {
      if (strNum.length - i === 1) {
          // < 10
          whatCharsToUse(strNum[i], "I", "V", "X")
      } else if (strNum.length - i === 2) {
          // < 100
          whatCharsToUse(strNum[i], "X", "L", "C")
      } else if (strNum.length - i === 3) {
          // < 1000
          whatCharsToUse(strNum[i], "C", "D", "M")
      } else if (strNum.length - i === 4) {
          // >= 1000
          whatCharsToUse(strNum[i], "M", "NULL", "NULL")
      }
  }
  
return romanNum;
}

convertToRoman(3999);