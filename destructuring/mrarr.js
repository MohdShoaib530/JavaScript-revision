const oneArray = [1, 2, 3, 4];
const twoArray = [5, 6, 7, 8];
// const threeArray = oneArray.concat(twoArray);
// console.log(threeArray);

const threeArray = [...oneArray, ...twoArray];
// console.log(threeArray);

// function arguments() {
//   const array = Array.from(arguments);
//   console.log('array', array);
//   const res = array.map((e) => e);
//   console.log('res', res);
// }
// arguments(2, 3, 5, 6);

function manyArguments2(...args) {
  let finalArr = [...args];
  console.log(finalArr);
}
// manyArguments2(3, 4, 567, 8);
const sitemap = 'shoaib';
console.log([...sitemap]);
