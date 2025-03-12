/* console.log(this);

let highScore = 300;
console.log(highScore);

let pwSkillsCoursePrice = 3500;
console.log(pwSkillsCoursePrice);

pwSkillsCoursePrice = 2000;
console.log(pwSkillsCoursePrice);

let username = 'Mohd Shoaib';
console.log(username); */
/* 
let pwSkillsCoursePrice = 200;
let gstOnCourse = 36;
let finalCoursePrice = pwSkillsCoursePrice + gstOnCourse;
console.log('finalAmountToBePaid:', finalCoursePrice);

let pwDsaCourse = 500;
console.log('final price of dsa course', pwDsaCourse % gstOnCourse);

console.log('remainder is:', 5 % 2);
console.log('divide is:', 5 / 2);
console.log('multiply is:', 3 * 3);
console.log('square is:', 3 ** 3); */

// let shoaibHighScore = 300;
// let fijaHighScore = '200';
// comparison
// console.log(shoaibHighScore !== fijaHighScore);

// let value1 = true;
// let value2 = false;
// let value3 = true;
// let value4 = false;

// let isLoggedIn = true;
// let cardDetails = true;

// let gamilAccount = true;
// let emailAccount = false;
// let githubLogin = false;
console.log(this);

function test() {
  console.log(this); // global object
}
test();

let x;
console.log(x); // undefined (Default value for uninitialized variables)

undefined = 42; // ❌ TypeError in strict mode (ES5+)
console.log(undefined);

