// Count the vowels in the sentence
export const countVowels = (string) => {
  return (/[aeiouy]/gi).test(string) ? string.match(/[aeiouy]/gi).length : 0;
};

// Count when two vowel sounds form one speech sound
export const countDipthongs = (string) => {
  return (/[aeiouy][aeiouy]/gi).test(string) ? string.match(/[aeiouy][aeiouy]/gi).length : 0;
};

// Count silent vowels
export const countSilentVowels = (string) => {
  const silentA = (/ally\b/gi).test(string) ? string.match(/ally\b/gi).length : 0;
  const silentE = (/e\b/gi).test(string) ? string.match(/e\b/gi).length : 0;
  const anotherSilentE = (/ed\b/gi).test(string) ? string.match(/ed\b/gi).length : 0;
  const silentU = (/gu[aeiouy]/gi).test(string) ? string.match(/gu[aeiouy]/gi).length : 0;
  const oddSiltentI = (/business/gi).test(string) ? string.match(/business/gi).length : 0;
  return silentA + silentE + anotherSilentE + silentU + oddSiltentI;
};

// Count syllables 
export const countSyllables = (string) => {
  return countVowels(string) - countDipthongs(string) - countSilentVowels(string);
};

// Check each line's syllables
export const checkHaiku = (line1, line2, line3) => {
  const line1Count = countSyllables(line1);
  const line2Count = countSyllables(line2);
  const line3Count = countSyllables(line3);
  return line1Count === 5 && line2Count === 7 && line3Count === 5;
};
