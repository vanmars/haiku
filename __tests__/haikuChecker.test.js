import { countVowels, countSilentVowels, countDipAndTripThongs } from '../src/js/haikuChecker.js'

describe ('countVowels', () => {
  test('should return the correct number of vowels in a sentence', () => {
    expect(countVowels("I am Vanessa")).toEqual(5);
  });
});