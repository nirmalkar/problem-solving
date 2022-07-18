function generation(num, char) {
    if (!num || !char) return 'Please pass a valid parameters'
    const familyObj = {
        '-3': char === 'm' ? 'great grandfather' : 'great grandmother',
        '-2': char === 'm' ? 'grandfather' : 'grandmother',
        '-1': char === 'm' ? 'father' : 'mother',
        0: 'me!',
        1: char === 'm' ? 'son' : 'daughter',
        2: char === 'm' ? 'grandson' : 'granddaughter',
        3: char === 'm' ? 'great grandson' : 'great granddaughter',
    }
    return familyObj[num]
}

const relationOne = generation(2, 'f') // "granddaughter"

const relationTwo = generation(-3, 'm') // "great grandfather"

const relationThree = generation('-2', 'f') //"grandmother"
console.log(relationOne, relationTwo, relationThree)
