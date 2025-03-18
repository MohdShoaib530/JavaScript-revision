// let a = [3, 35, 5, 'shoaib', true, { name: 'shoaib' }, [3]];
// console.log('value of a :', a);

// let b = new Array('hi');
// console.log('value of b:', b);

// pushing value last index
// let arr = [1, 2, 3, 4, 5];
// arr.push(6, 7, 8);
// console.log(arr);
// removing value from last index
// arr.pop(8);
// console.log(arr);

// remove value from starting
// const removed = arr.shift();
/* console.log(removed);
console.log(arr); */
// add value in begining
/* const added = arr.unshift(6);
console.log('added', added);
console.log(arr);
 */
// concat array
/* let a1 = [1, 2, 3, 4, 5];
let a2 = [3, 5, 6, 8, 9];
const a3 = a1.concat(a2);
console.log(a3);
const joining = a3.join('');
console.log(typeof joining); */

let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr);
console.log(arr.indexOf(5));

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
const portion = arr1.slice(2, 5);
console.log(portion);
arr1.splice(2, 5, 11);
console.log(arr1);

const d = [1, [2, 3], [4, [5, [0]]]];
console.log(d.flat(2));
