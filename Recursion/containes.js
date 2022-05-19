// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.

const contains = (obj, value) => {
    const key = Object.keys(obj)
    if (key.length > 0) {
        for (let i = 0; i < key.length; i++) {
            if (obj[key[i]] === value) {
                return true
            } else if (typeof obj[key[i]] === 'object') {
                return contains(obj[key[i]], value)
            } else {
                return false
            }
        }
    }
}

const nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2',
                    },
                },
            },
        },
        success: {},
    },
}

let hasIt = contains(nestedObject, 44) // true
let doesntHaveIt = contains(nestedObject, 'foo') // false
console.log(hasIt)
console.log(doesntHaveIt)
