// Given two strings, return true if they are anagrams of one another "Mary" is an anagram of "Army"

var firstWord = 'Mry'
var secondWord = 'Army'

const isAnagram = (s1, s2) => {
    const strOne = s1.toLowerCase()
    const strTwo = s2.toLowerCase()
    const sameAlphabet = []
    if (strOne.length === strTwo.length) {
        strOne.split('').forEach((ele, i) => {
            if (strTwo.split('').includes(ele)) {
                sameAlphabet.push(true)
            } else {
                sameAlphabet.push(false)
            }
        })
    } else {
        return `${s1} is not an anagram of ${s2}`
    }
    if (!sameAlphabet.includes(false)) {
        return `${s1} is an anagram of ${s2}`
    }
    return `${s1} is not an anagram of ${s2}`
}

const isStrAnagram = isAnagram(firstWord, secondWord)
console.log(isStrAnagram)
