/**
 * @param {string} s
 * @return {number}
 */
 const myAtoi = function(s) {
  const parsedInt = parseInt(s)
  
  if(parsedInt <= Math.pow(-2, 31)) return Math.pow(-2, 31)
  if(parsedInt >= Math.pow(2, 31)) return (Math.pow(2, 31) - 1)
  if(String(parsedInt) === "NaN") return 0
  return parsedInt;
};

console.log(myAtoi("42 asdf"))