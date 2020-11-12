// Count the vowels in the sentence
export const countVowels = (string) => {
  return string.match(/[aeiouy]/gi).length;
};

// Countwhen two vowel sounds form one speech sound
export const countDipthongs = (string) => {
  return string.match(/[aeiouy][aeiouy]/gi).length
};

// Count silent vowels
export const countSilentVowels = (string) => {
  // const silentA = string.match(/ally\b/gi).length;
  // const silentE = string.match(/e\b/gi).length;
  // const anotherSilentE = string.match(/ed\b/gi).length;
  // const silentU = string.match(/gu[aeiouy]/gi).length;
  // const oddSiltentI = string.match(/business/gi).length;
  // return silentA + silentE + anotherSilentE + silentU + oddSiltentI
};
