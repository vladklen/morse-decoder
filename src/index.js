const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};
const expr =
  "0000101110000011111100101110100010111010000000101000000011100000111110**********00001010100011101110000011111100101111100000000010**********000010101000111011100010101010000011111100001111110010111010";
const result = "rolling scope school";

function decode(expr) {
  let array = [];
  let morseArray = [];
  let result = "";
  for (let index = 0; index <= expr.length; index += 10) {
    array.push(expr.slice(index, index + 10));
  }

  array.map((el) => {
    if (el === "**********") {
      morseArray.push(" ");
    } else {
      let str = "";
      for (let i = 0; i < el.length; i += 2) {
        if (el[i] === "1" && el[i + 1] === "0") {
          str += ".";
        } else if (el[i] === "1" && el[i + 1] === "1") {
          str += "-";
        }
      }
      morseArray.push(str);
    }
  });

  morseArray.map((el) => {
    if (el === " ") {
      result += el;
    } else {
      for (let value of Object.entries(MORSE_TABLE)) {
        if (value[0] === el) {
          result += value[1];
        }
      }
    }
  });

  return result;
}

module.exports = {
  decode,
};
