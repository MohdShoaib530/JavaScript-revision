const emptySet = new Set();

const newSet = new Set();
const newArray = [1, 2, 3, 4];
newSet.add(newArray);
// console.log(newSet);
newSet.clear();
// console.log(newSet);
// set has always unique values

function setDifference(setA, setB) {
  return new Set([...setA].filter((el) => !setB.has(el)));
}
const setA = new Set([1, 2, 3]);
const setB = new Set([4, 5, 6]);
const diff = setDifference(setA, setB);
console.log(diff);

const set = new Set();

set.add({ a: 1 });
set.add({ a: 1 }); // Different object reference, so it's added

console.log(set); // 2
