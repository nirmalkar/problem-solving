/*
implement es6 feature to the object and return the value after 2 sec
*/

var john = {
    name:"John Doe",
    balance: 1500,
    deduct:function(amount){
        this.balance = this.balance - amount
        return this.name + " has balance of " + this.balance 
    }
}
console.log(john.deduct(100))

// es6 solution

const es6John = {
    name:"John Doe",
    balance: 1500,
    deduct(amount){
    return new Promise((res, rej)=>{
        this.balance = this.balance - amount
        setTimeout(()=>{
            res(this.name + " has balance of " + this.balance )
        }, 2000)
    })
    }
}

es6John.deduct(300).then(res=> console.log(res))