// Question 1
const isUpperCase = (str) => {
let upperCaseStr = str.toUpperCase()
if(upperCaseStr === str){
  return true;
}else{
  return false
}

};
// console.log(isUpperCase('t'))            // false
// console.log(isUpperCase('T'))             // true
// console.log(isUpperCase('Four Score'))  ;      // false
// console.log(isUpperCase('FOUR SCORE'))  ;      // true
// console.log(isUpperCase('4SCORE!'))  ;         // true
// console.log(isUpperCase(''))  ; 

// Question 2
 const removeVowels = (arr) => {
  return arr.map(value => value.replace(/[AEIOU]/gi,""))
  // let str = "A,E,I,O,U,a,e,i,o,u"
  // let newArr = []
  // for(let i = 0; i < arr.length; i++){
  //   let newStr = ""
  //   for(let j = 0; j < arr[i].length; j++){
  //     if(!str.includes(arr[i][j])){
  //       newStr+= arr[i][j]
  //     }
  //   }
  //   newArr.push(newStr)
  // }
  // console.log(newArr)
};
// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]  // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

// Question 3
const wordCap = (str) => {
  return str.toLowerCase().split(" ").map((element) => element[0].toUpperCase() + element.substring(1)).join(" ")
}

console.log(wordCap('the javaScript language'));     
console.log(wordCap('four score and seven'));
console.log(wordCap('this is a "quoted" word'));

// Question 4
const swapCase = (str) => {
  let newStr = ""
  //str.split().forEach(element => {element.toLowerCase() !== element ? newStr += element.toLowerCase() : newStr += element.toUpperCase()})
  
  for(i in str){
    if (str[i].toLowerCase() !== str[i]){
        newStr += str[i].toLowerCase()
    }else{
      newStr += str[i].toUpperCase()
    }
  }
  return newStr
};
// console.log(swapCase('CamelCase'));              // "cAMELcASE"
// console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

// Question 5
const staggeredCase = (str) => {
  let regex = /[a-zA-Z]/
  let newStr = str[0].toUpperCase()
  let wasSwitched = true
  for(let i = 1; i < str.length; i++){
    if(str[i].match(regex)){
      if(wasSwitched === true){
        newStr += str[i].toLowerCase()
        wasSwitched = false
      } else if (wasSwitched === false){
        newStr += str[i].toUpperCase()
        wasSwitched = true
      }
    } else {
      newStr += str[i]
    }
  }
  return newStr
}
console.log(staggeredCase('ignore 77 the 444 numbers'))

// Question 6
const wordLengths = (str) => {
  let newArr = []
  str = str.split(" ")
 for(element of str){
  console.log(element)
  newArr.push(element + ` ${element.length}`)
 }
 return newArr
};
// console.log(wordLengths('cow sheep chicken'));
// // ["cow 3", "sheep 5", "chicken 7"]

// console.log(wordLengths('baseball hot dogs and apple pie'));
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

// console.log(wordLengths("It ain't easy, is it?"));
// // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

// console.log(wordLengths('Supercalifragilisticexpialidocious'));
// // ["Supercalifragilisticexpialidocious 34"]
// Question 7
let text = 'D Smoke is humble. The Inglewood native exudes an aura of maturation, needed for his quick ascension into popular culture as the first winner of Rhythm + Flow , Netflix’s hip-hop reality competition centered on the discovery of hip-hop’s next star. His signature authenticity shone throughout the 10-episode series and international audiences were drawn to his charisma as he proudly rapped about his lived experiences as a young black man in Inglewood.';
const searchWord = (word) => {
  let counter = 0
  let results = ""
  results = text.toLowerCase().split(' ')
  for(let i =0 ; i<results.length; i++){
    if(results[i] === word){
      counter++
    }
  }
  return counter
};
console.log(searchWord('his', text));      // 4 
console.log(searchWord('hip-hop', text));  // 1 (because "hip-hop's" !== "hip-hop")
//console.log(searchWord('flow', text));           // 1
//console.log(searchWord('is', text));           // 1

// The code below ensures that this file can talk to our test file.
module.exports = {
  isUpperCase,
  removeVowels,
  wordCap,
  swapCase,
  staggeredCase,
  wordLengths,
  searchWord,
};
