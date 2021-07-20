// hacker rank https://www.hackerrank.com/challenges/the-birthday-bar/problem
function birthday(s, d, m) {
    let newArr = s;
    let sumArr = [];
    let fitSumArr = [];
    for (let i = 0; i < s.length; i++) {
        if (newArr.length >= m) {
            sumArr.push(newArr.slice(0, m).reduce((a, c) => a + c));
        }
        newArr = newArr.slice(1);
    }
    sumArr.forEach((ele) => {
        if (ele === d) {
            fitSumArr.push(ele);
        }
    });
    return fitSumArr.length;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));
