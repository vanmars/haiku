// Count the vowels in the sentence
export const countVowels = (string) => {
  const vowelsArray = string.match(/[aeiou]/gi);
  return vowelsArray.length;
};

// Subtract silent vowels
export const countSilentVowels = (string) => {

};

// Subtract one vowel when two vowel sounds form one speech sound
export const countDipAndTripThongs = (string) => {

};