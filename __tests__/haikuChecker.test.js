import { countVowels, countDipthongs, countSilentVowels, countSyllables } from '../src/js/haikuChecker.js'

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

describe ('countSyllables', () => {
  test('should generally return the correct number of syllables in a string', () => {
    expect(countSyllables("drastically business fixed")).toEqual(6);
  });
});