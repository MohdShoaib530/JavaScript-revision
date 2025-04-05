const regexThree = /mo/gi;
const strToCheck =
  'Hello my dear friends my name is mohd shoaib and mohd is programming';
const firstCheck = strToCheck.match(regexThree);
// console.log(firstCheck);
const onesMore = strToCheck.replace(regexThree, 'mohd');
console.log(onesMore);
