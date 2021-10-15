// create a function that generates unique ids

const uuid = (version) => {
    const v = version.toLowerCase()
    console.log(v)
    const capitalLettersArray = []
    const smallLettersArray = []
    for (let i = 0; i < 26; i++) {
        capitalLettersArray.push(String.fromCharCode(65 + i))
        smallLettersArray.push(String.fromCharCode(97 + i))
    }
    const getUniqueId = function () {
        const getRdmNumFrom0to26 = () => {
            return Math.round(Math.random() * 25)
        }
        const getRandomNum = () => {
            return String(Math.round(Math.random() * (1000 - 100 + 1)) + 100)
        }
        const getRdmCpAlpWithNum = () => {
            return (
                capitalLettersArray[getRdmNumFrom0to26()] +
                capitalLettersArray[getRdmNumFrom0to26()] +
                getRandomNum()
            )
        }
        const getRdmSmAlpWithNum = () => {
            return (
                smallLettersArray[getRdmNumFrom0to26()] +
                smallLettersArray[getRdmNumFrom0to26()] +
                getRandomNum()
            )
        }
        if (v === 'v1') {
            return getRdmCpAlpWithNum() + getRdmSmAlpWithNum()
        } else if (v === 'v2') {
            return (
                getRdmCpAlpWithNum() +
                getRdmSmAlpWithNum() +
                getRdmCpAlpWithNum() +
                getRdmSmAlpWithNum()
            )
        } else if (v === 'v3') {
            return (
                getRdmCpAlpWithNum() +
                getRdmSmAlpWithNum() +
                getRdmCpAlpWithNum() +
                getRdmSmAlpWithNum() +
                getRdmCpAlpWithNum() +
                getRdmSmAlpWithNum()
            )
        } else {
            return undefined
        }
    }
    return getUniqueId()
}

console.log(uuid('v1'))
console.log(uuid('V2'))
console.log(uuid('V3'))
