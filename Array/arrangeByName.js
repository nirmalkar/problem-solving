/**
 * sample Input:
 * let arr = [
  "ram1",
  "shyam1",
  "mani",
  "vineth",
  "bajrang",
  "ram2",
  "shyam2",
  "mani2",
  "veth",
  "bang",
  "ram3",
  "dhyam",
  "aani",
  "cineth",
  "bajrang2",
];
  * @returns {Object}:
{ r: [ 'ram1', 'ram2', 'ram3' ],
s: [ 'shyam1', 'shyam2' ],
m: [ 'mani1', 'mani2' ],
v: [ 'vineth', 'veth' ],
b: [ 'bajrang', 'bang', 'bajrang2' ],
d: [ 'dhyam' ],
a: [ 'aani' ],
c: [ 'cineth' ] }
 */
let arr = [
    'ram1',
    'shyam1',
    'mani',
    'vineth',
    'bajrang',
    'ram2',
    'shyam2',
    'mani2',
    'veth',
    'bang',
    'ram3',
    'dhyam',
    'aani',
    'cineth',
    'bajrang2',
]

const obj = {}
for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i].split('')[0]]) {
        obj[arr[i].split('')[0]].push(arr[i])
    } else {
        obj[arr[i].split('')[0]] = [arr[i]]
    }
}

console.log(obj)
