// JavaScript Algorithms and Data Structures Projects: Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
  console.log('hello world')
  return str;
}

rot13("SERR PBQR PNZC") 
// should decode to FREE CODE CAMP


// function rot13(str) {
//   let decodedStr = "";
//   for (let i = 0; i < str.length; i++) {
//     const t = str.charCodeAt(i)
//     const r = String.fromCharCode(t - 13)
//     if (t === 32) {
//       decodedStr += ' '
//     } else if ((t - 13) >= 65) {
//       decodedStr += r
//     } else {
//       // console.log(t + 13 - 65)
//       // console.log(t - 13)
//       const m = (t - 13) - 65
//       const s = 90 - m
//       console.log(String.fromCharCode(s))
//     }
//   }

//   // console.log(decodedStr)
//   return str;
// }

// rot13("SERR PBQR PNZC");