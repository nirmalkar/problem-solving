// https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem

// function jumpingOnClouds(c, k) {
//     let e = 100;
//     let arr = [c[0] === 0 ? 1 : 3]
//     for(let i = 0; i < k.length; i = i + k){
//         console.log(c[i])
//         if(c[i] === 0){
//             arr.push(1)
//         }else if(c[i] === 1){
//             arr.push(3)
//         }
//     }
//     const arrSum = arr.reduce((a,c) => {return a + c}, 0)
//     console.log(arr)
//     console.log(arrSum)
//     return e - arrSum
// }
const arr = [1,2,3,4,5,6,7,8]
const k = 2
for(let i = 0; i < arr.length; i += k){
    console.log(i);
}
