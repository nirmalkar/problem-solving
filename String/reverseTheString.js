/*
Given a string, reverse each word in the sentence "Welcome to this Javascript Guide!" 
should be become "emocleW ot siht tpircsavaJ !ediuG"
*/
var string = "Welcome to this Javascript Guide!";

const reverseString = (string) =>{
const strArr = string.split(" ")
const newStrArr = []
strArr.forEach(ele => newStrArr.push(ele.split("").reverse().join("")))
return newStrArr.join(" ")
}

const reversedStr = reverseString(string)
console.log(reversedStr);