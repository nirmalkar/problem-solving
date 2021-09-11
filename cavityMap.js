// You are given a square map as a matrix of integer strings. Each cell of the map has a value denoting its depth. We will call a cell of the map a cavity if and only if this cell is not on the border of the map and each cell adjacent to it has strictly smaller depth. Two cells are adjacent if they have a common side, or edge.
// Find all the cavities on the map and replace their depths with the uppercase character X.
function cavityMap(grid) {
    for(let i = 0; i < grid.length; i++){
        if(grid[i].length < 3){
            return
        }
        const s = grid[i].split("")
        for(let j = 0; j < s.length; j++){
            let temp = parseInt(s[j])
            let next = parseInt(s[j + 1])
            let otherNext = parseInt(s[j + 2])
            if(next > temp && next > otherNext){
                let gi = grid[i].indexOf(next)
                let imm = grid[i].split("")
                imm[gi] = "X"
                grid[i] = imm.join("")
            }

        }
    }
    return String(grid).replace(/,/g, " ")
}

console.log(cavityMap([ '1112', '1912', '1892', '1234' ]));