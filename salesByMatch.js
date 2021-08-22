//find and return number of pairs
const someArrOne = [1,2,31,45,23,45,2,5,6,9,6,6,6]
const someArrTwo = [1,2,6,34,45,45,2,5,6,8,2,1]
// const newSet = new Set(someArr)

// console.log(newSet);
// console.log(Array.from(newSet));

const findPair = (arr) => {
const obj = {}
arr.forEach(ele => {
    obj[ele] = obj[ele] ? obj[ele] + 1 : 1
});
const objs = Object.values(obj)
console.log(objs);
return objs.filter(ele => ele > 1).map(ele => Math.floor(ele/2)).reduce((a, c)=>{return a + c},0)
}

console.log(findPair(someArrOne));
console.log(findPair(someArrTwo));