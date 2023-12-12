/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let isAnagram = false
  const word1 = str1.split(' ').join('')
  const word2 = str2.split(' ').join('')

  if(word1 === word2){
    isAnagram = true
  }
  else if(word1.length === word2.length){
    for(let i of word1){
      if( word2.includes(i)){
        isAnagram = true
      }
      else{
        isAnagram = false
      }
    }
  
    for(let i of word2){
      if(word1.includes(i)){
        isAnagram = true
      }
      else{
        isAnagram = false
      }
    }
  }
  
  return isAnagram
}

console.log(isAnagram("true", "rueta"))
module.exports = isAnagram;

