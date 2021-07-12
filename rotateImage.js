var rotate = function(matrix) {
    const returnArr = []
    matrix.forEach((ele, i) =>{
        let tempArr =[]
       matrix.forEach((arrEle, j) =>{
           tempArr.push(arrEle[i])
       })
        returnArr.push(tempArr.reverse())
        tempArr = []
    })
    return returnArr
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));

