const { TestScheduler } = require('jest');
const exercises = require('./exercises');

//write tests in this file

/* Example Test 
test('Question 0: add', () => {
  expect(exercises.add(1, 2)).toEqual(3);
  expect(exercises.add(1, -1)).toEqual(0);
});
*/
test('isUpperCase function', () => {
  expect(exercises.isUpperCase('t')).toEqual(false);
  expect(exercises.isUpperCase('T')).toEqual(true);
  expect(exercises.isUpperCase('Four Score')).toEqual(false);
  expect(exercises.isUpperCase('FOUR SCORE')).toEqual(true);
  expect(exercises.isUpperCase('')).toEqual(true);
});
test('remove vowel function', () => {
  expect(exercises.removeVowels(['abcdefghijklmnopqrstuvwxyz'])).toEqual(["bcdfghjklmnpqrstvwxyz"]);
  expect(exercises.removeVowels(['green', 'YELLOW', 'black', 'white'])).toEqual(["grn", "YLLW", "blck", "wht"]);
  expect(exercises.removeVowels(['ABC', 'AEIOU', 'XYZ'])).toEqual(["BC", "", "XYZ"]);
});
test('word cap function', () => {
  expect(exercises.wordCap('four score and seven')).toEqual("Four Score And Seven");
  expect(exercises.wordCap('the javaScript language')).toEqual("The Javascript Language");
  expect(exercises.wordCap('this is a "quoted" word')).toEqual('This Is A "quoted" Word');
});
test('swapCase function', ()=> {
  expect(exercises.swapCase('CamelCase')).toEqual("cAMELcASE")
  expect(exercises.swapCase('Tonight on XYZ-TV')).toEqual("tONIGHT ON xyz-tv")
});

test('staggeredCase function',()=> {
  expect(exercises.staggeredCase('I Love Launch School!')).toEqual("I lOvE lAuNcH sChOoL!")
  expect(exercises.staggeredCase("ALL CAPS")).toEqual("AlL cApS")
  expect(exercises.staggeredCase('ignore 77 the 444 numbers')).toEqual("IgNoRe 77 ThE 444 nUmBeRs")
})
test('wordLengths functiom',()=> {
  expect(exercises.wordLengths('cow sheep chicken')).toEqual(["cow 3", "sheep 5", "chicken 7"])
  expect(exercises.wordLengths('baseball hot dogs and apple pie')).toEqual(["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"])
  expect(exercises.wordLengths("It ain't easy, is it?")).toEqual(["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"])
  expect(exercises.wordLengths("Supercalifragilisticexpialidocious")).toEqual(["Supercalifragilisticexpialidocious 34"])
})
test("searchWord function", () => {
  expect(exercises.searchWord('his')).toEqual(4);
  expect(exercises.searchWord('hip-hop')).toEqual(1); 
  expect(exercises.searchWord('flow')).toEqual(1); 
  expect(exercises.searchWord('is')).toEqual(1); 
})