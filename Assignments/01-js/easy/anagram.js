/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let isAnagram = false
  const wordOne = str1.split(' ').join('')
  const wordTwos = str2.split(' ').join('')

  if(wordOne === wordTwos){
    isAnagram = true
  }
  else if(wordOne.length === wordTwos.length){
    for(let i of wordOne){
      if( wordTwos.includes(i)){
        isAnagram = true
      }
      else{
        isAnagram = false
      }
    }
  
    for(let i of wordTwos){
      if(wordOne.includes(i)){
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

