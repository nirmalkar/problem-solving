/*
For two strings to be isomorphic, all occurrences of a character in string A can be replaced with another character
to get string B. The order of the characters must be preserved. There must be one-to-one mapping for ever char of
string A to every char of string B.

`paper` and `title` would return true.
`egg` and `sad` would return false.
`dgg` and `add` would return true.

javascript
isIsomorphic("egg", 'add'); // true
isIsomorphic("paper", 'title'); // true
isIsomorphic("kick", 'side'); // false

 */

const isIsomorphic = (strings) => {
    Set.prototype.getByIndex = function (index) {
        return [...this][index]
    }
    const { str1, str2 } = strings
    const notIsoMorphic = 'Strings are not isomorphic!'
    if (str1.length !== str2.length) return notIsoMorphic
    const str1Arr = str1.split('')
    const str2Arr = str2.split('')
    const str1Set = new Set(str1Arr)
    const str2Set = new Set(str2Arr)
    if (str1Set.size !== str2Set.size) return notIsoMorphic
    const charObj = {}
    for (let i = 0; i < str1Set.size; i++) {
        if (!charObj[str1Set.getByIndex(i)]) {
            charObj[str1Set.getByIndex(i)] = str2Set.getByIndex(i)
        }
    }
    for (let i = 0; i < str1Arr.length; i++) {
        if (charObj[str1Arr[i]] !== str2Arr[i]) {
            return notIsoMorphic
        }
    }
    return 'Strings are isomorphic!'
}
const strings = {
    str1: 'paper',
    str2: 'title',
}

const response = isIsomorphic(strings)
console.log(response)
