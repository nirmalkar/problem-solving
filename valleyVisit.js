function countingValleys(steps, path) {
    const obj = {"U": 1, "D": -1};
    let level = 0;
    let valleysVisit = 0; 
    path.split("").forEach((ele)=>{
        if(obj[ele] === 1){
            level += 1 
        }else{
            level -= 1 
            if(level === -1){
            valleysVisit += 1
        }
        }
    })
    return valleysVisit;
}

const valleyVisitCount = countingValleys(8, "UDDDUDUU")
console.log(valleyVisitCount);