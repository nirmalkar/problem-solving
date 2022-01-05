/**
 * An English text needs to be encrypted using the following encryption scheme.First,
 * the spaces are removed from the text. Let  be the length of this text.
 * Then, characters are written into a grid.
 * eg1: input:
 * string: haveaniceday
 * output:
 * string: haven anic eday
 * eg2: input:
 * string: feedthedog
 * output:
 * string: fto ehg ee dd
 */

/**
 *
 * @param {string} s some sentence without spaces between words
 * @returns {string}  encrypted sentence with space
 */

function encryption(s) {
    let encryptedStr = ''
    function calcRowCol(s) {
        const sqRoot = Math.sqrt(s.length)
        const rows = Math.floor(sqRoot)
        const cols = Math.ceil(sqRoot)
        return { rows, cols }
    }
    const twoDimArr = []
    const strArr = s.split('')
    for (let i = 0; i < calcRowCol(s).cols; i++) {
        twoDimArr.push(strArr.splice(0, calcRowCol(s).cols))
    }
    for (let i = 0; i < calcRowCol(s).cols; i++) {
        let str = ''
        twoDimArr.forEach((ele) => {
            if (ele[i]) {
                str = str + ele[i]
            }
        })
        encryptedStr = encryptedStr.length ? encryptedStr + ' ' + str : str
        str = ''
    }
    return encryptedStr
}
console.log(encryption('chillout'))
