let arr = [1, 2, 3, 4];

// arr.forEach(function (element, index, arr) {
//   console.log(element, index, arr);
// });

// arr.forEach((element, index, arr) => {
//   console.log('arrow', element, index, arr);
// });

const heroes = ['Harkhu', 'Ramlal', 'Shyamlal', 'Baiju'];
// heroes.forEach((el) => {
//   console.log(el.toUpperCase());
// });

const upperCase = heroes.map((el) => el.toUpperCase());
// console.log(upperCase);

const heroesWithLal = heroes.filter((el) => el.endsWith('lal'));
// console.log(heroesWithLal);

const cartBill = [3, 5, 667, 6];
const bill = cartBill.reduce((prev, curr) => {
  return prev + curr;
}, 0);
// console.log(bill);

const gameScore = [33, 202, 55, 38, 400, 39, 33];
const gameScoreCheck = gameScore.every((v) => typeof v === 'number');
// console.log(gameScoreCheck);

//find score above 200
const above200 = gameScore.find((v) => v > 200);
// console.log(above200)

const findindex = gameScore.findIndex((e) => {
  return e > 333;
});
// console.log(findindex);

const nums = [9, 41, 33, 45, 7, 22, 1, 4, 55];
const sumval = nums.some((v) => v % 2 === 0);
// console.log(sumval);
const sorting = nums.sort((a, b) => a - b);
console.log(sorting);
const fruits = ['apple', 'banana', 'papaya', 'orange', 'grapes'];
const sortedFruits = fruits.sort();
console.log(sortedFruits);
