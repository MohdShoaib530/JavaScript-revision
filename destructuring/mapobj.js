/* const newMap = new Map();
newMap.set('name', 'shoaib');
newMap.set(1, 'my roll number');
newMap.set(true, 'value is true');
console.log('newMap', newMap);
console.log(newMap.get(1)); */

// const maps = newMap.forEach((value, key) => {
//   console.log('key', key, value);
// });
// console.log(maps);
// for (const [key, value] of newMap) {
// console.log(key, value);
// }

/* const newMap = new Map();
const array = [
  [1, 'mohd shoaib'],
  [2, 'fija bano'],
  [3, 'pallu']
];

array.map((el) => {
  newMap.set(el[0], el[1]);
});
console.log(newMap);

function User(name, email) {
  this.name = name;
  this.email = email;
}

const user = new User('shoaib', 'ms@gamil.com');
console.log(user);
 */
const newSymbol = Symbol('key1');
const newMap = new Map();
newMap.set('name', 'shoaib');
newMap.set('isLoggedIn', true);
newMap.set({ userId: ' 121' }, true);
newMap.set(true, 'yes');
newMap.set([newSymbol], 'yes');
console.log(newMap);
