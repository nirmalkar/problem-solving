/*
Check if a given string is a palindrome 
"racecar" is a palindrome. "race car" should also be considered a palindrome. Case sensitivity should be taken into account
*/

function isPalindrome(str) {
    const string = str.replace(/ /g, '').toLowerCase()
    const reversedStr = string.split('').reverse().join('')
    console.log(reversedStr, string)
    if (reversedStr === string) {
        return true
    }
    return false
}
const checkPalindrome = isPalindrome('race Car')
console.log(checkPalindrome)

console.log('asdf asdfasdf'.replace(/ /g, ''))
