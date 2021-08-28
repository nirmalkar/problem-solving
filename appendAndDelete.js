// You have two strings of lowercase English letters. You can perform two types of operations on the first string:

// Append a lowercase English letter to the end of the string.
// Delete the last character of the string. Performing this operation on an empty string results in an empty string.
// Given an integer, , and two strings,  and , determine whether or not you can convert  to  by performing exactly  of the above operations on . If it's possible, print Yes. Otherwise, print No.

// Sample Input 0

// hackerhappy
// hackerrank
// 9
// Sample Output 0

// Yes
function appendAndDelete(s, t, k) {
    if(s === t && k >= (s.length + t.length)){
        return "Yes"
    }
    const strLength = s.length > t.length ? s.length : t.length
    const matchArr = []
    let sliceIdx = 0
    let count = 0
    for(let i = 0; i < strLength; i++){
        if(s[i] === t[i]){
            matchArr.push(s[i])
            count ++
        }else{
            sliceIdx = i
            break
        }
    }
    const str = t.slice(sliceIdx + 1) 
        const newStr =  matchArr.join("") + str   
            if(newStr.length === k){
                return "Yes"
            }else{
                return "No"
        }
}

appendAndDelete("hackerhappy", "hackerrank", 9)
