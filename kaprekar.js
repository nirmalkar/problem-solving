// search for kaprekar number and between given range

function kaprekarNumbers(p, q) {
  const kaprekarNumArr = [];
  for (let i = p; i <= q; i++) {
    const stringNum = Math.pow(i, 2).toString();
    const firstHalf = parseInt(
      stringNum.slice(0, Math.floor(stringNum.length / 2))
    );
    const secondHalf = parseInt(
      stringNum.slice(Math.floor(stringNum.length / 2), stringNum.length)
    );
    if (i === 1) {
      kaprekarNumArr.push(i);
    } else if (firstHalf + secondHalf === i) {
      kaprekarNumArr.push(i);
    }
  }
  console.log(String(kaprekarNumArr).replace(/,/g, ' '));
}

kaprekarNumbers(1, 100);
