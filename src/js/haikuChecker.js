// Count the vowels in the sentence
export const countVowels = (string) => {
  return string.match(/[aeiouy]/gi).length;
};


// Subtract one vowel when two vowel sounds form one speech sound
export const countDipthongs = (string) => {
  return string.match(/[aeiouy][aeiouy]/gi).length
};



// Subtract silent vowels
export const countSilentVowels = (string) => {
  const dipthongArray = string.match(/[aeiouy][aeiouy]/gi);
};

// Rules for Silent A
// Rule: A is not pronounced in many adverbs, where the words ends in –ally. For example: stoically, logically.

// Rules for Silent E
// Rule 1: If the letter E comes at the ends of words, it is generally not pronounced.
// • Fore, table, before, write, give, hide.

// Rule 2: If E occurs before the letter D in the second and third forms of the verbs, E may sometimes not be pronounced.
// • Bored, fixed, smuggled, begged.

// Rules for Silent U
// Rule: The letter U is not pronounced when it comes after G and before a vowel in a word.
// • Guide, guest, guard, guess, guano.

// Exception for Silent I
// business

// Rules for when Y is considered a vowel
// Y is considered to be a vowel if…
// The word has no other vowel: gym, my.
// The letter is at the end of a word or syllable: candy, deny, bicycle, acrylic.
// The letter is in the middle of a syllable: system, borborygmus.
// Subtract silent vowels

