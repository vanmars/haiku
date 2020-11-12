import { countVowels, countSilentVowels, countDipthongs } from '../src/js/haikuChecker.js'

describe ('countVowels', () => {
  test('should return the correct number of vowels in a string', () => {
    expect(countVowels("I am Vanessa")).toEqual(5);
  });
});

describe ('countDipthongs', () => {
  test('should return the correct number of dipthongs in a string', () => {
    expect(countDipthongs("beautiful keeper")).toEqual(2);
  });
});

describe ('countSilentVowels', () => {
  test('should return the correct number of silent vowels in a string', () => {
    expect(countSilentVowels("guide drastically business fixed")).toEqual(5);
  });
});