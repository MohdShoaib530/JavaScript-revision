/* let age = 11;
if (age >= 18) {
  console.log(`Your age is ${age} so you are eligible to give the vote`);
} else {
  console.log(`You are not allowed to give the vote`);
}
 */

/* let signal = 'green';
if (signal === 'red') {
  console.log('signal is red so wait');
} else if (signal === 'yellow') {
  console.log('get ready to gow');
} else {
  console.log('you can go now');
} */

// switch cases
/* function getSignal() {
  return 'red';
}

let signal = getSignal();
switch (signal) {
  case '':
    {
      console.log('signal is red');
    }
    break;
  case 'green':
    {
      console.log('signal is green');
    }
    break;
  case 'yello':
    {
      console.log('signal is yellow');
    }
    break;
  default: {
    console.log('this is default');
  }
} */

// for loop
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// while loop (initlizer, conditition, incr/decr)
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// do while
/* et i = 0;
do {
  console.log('hello', i);
  i++;
} while (i < 5); */

// ternary operator
// condition ?(true) do this :(false) do this
/* isLoggedIn = true;
isLoggedIn ? console.log('home page') : console.log('login page'); */

// let num = 15;
// if (num % 5 === 0 && num % 3 === 0) {
//   console.log('fizz');
// } else if (num % 5 === 0) {
//   console.log('buzz');
// } else if (num % 3 === 0) {
//   console.log('fizzbuzz');
// } else {
//   console.log('not any fizz or not any buzz');
// }

// switch case
// let day = 'tuesday';
// switch (day) {
//   case 'monday':
//     {
//       console.log('today is moday');
//     }
//     break;
//   case 'tuesday':
//     {
//       console.log('today is tuesday');
//     }
//     break;
//   case 'wednesday': {
//     console.log('today is wednesday');
//   }
// }

let number = -8;
number == 0
  ? console.log('number is zero')
  : number > 0
  ? console.log('number is greater than zero ')
  : console.log('number is negative');
