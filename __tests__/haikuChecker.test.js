import { countVowels, countSilentVowels, countDipthongs } from '../src/js/haikuChecker.js'

describe ('countVowels', () => {
  test('should return the correct number of vowels in a sentence', () => {
    expect(countVowels("I am Vanessa")).toEqual(5);
  });
});

describe ('countDipthongs', () => {
  test('should return the correct number of dipthongs in a sentence', () => {
    expect(countDipthongs("beautiful keeper")).toEqual(2);
  });
});