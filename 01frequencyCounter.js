function calculateFrequency(inputStr) {
  return inputStr.split('').reduce((acc, curr) => {
    acc[curr] ? acc[curr] += 1 : acc[curr] = 1;
    return acc;
  }, {});
}

function validAnagram(str1, str2) {
  const freqOfLetters1 = calculateFrequency(str1);

  let result = true;
  str2.split('').forEach(letter => {
    if (freqOfLetters1[letter] && freqOfLetters1[letter] !== 0) {
      freqOfLetters1[letter] -= 1;
    } else {
      result = false;
    }
  });

  return result;
}

console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('awesome', 'awesomeq'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('', ''));