const todos = ["go for a walk", "talk to strangers", "work on new habits","get your shits together"]
const index = todos.indexOf("talk to strangers")
console.log(index);
todos.splice(index, 1, "talk to strangers and every person you meet")
const sliced = todos.slice(0,index).concat(todos.slice(index,todos.length))
console.log(todos.slice(0,index));
console.log(sliced);