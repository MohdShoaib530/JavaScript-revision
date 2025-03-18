/* let isUserLoggedin = true;
isUserLoggedin
  ? console.log('user is logged in')
  : console.log('user is not logged in ');
 */

let isUserLoggedin = false;
let isCoursePurchased = true;
isUserLoggedin
  ? isCoursePurchased
    ? console.log('Welcome to the course again')
    : console.log('Please purchase the course to see the lectures')
  : console.log('please login first to aceess the course');

let name;
console.log(typeof name);
