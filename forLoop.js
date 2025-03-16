// using for loop print 'mohd shoaib' 3 times;
// for(initial expression, condition check, update expression)

/* for (let index = 0; index < 3; index++) {
  console.log('mohd shoaib');
} */

// display a sequence of even numbers till 20
/* for (let i = 0; i <= 20; i++) {
  if (i % 2 === 1) {
    continue;
  }
  console.log(i);
} */

// write a program to show the inner for loop values for each outer iteration in along with outer for loop

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 2; j++) {
//     console.log(`value of i is ${i} and the value of j is ${j}`);
//   }
// }

/* for (let i = 0; i < 4; i++) {
  if (i == 2) break;
  console.log(i);
} */

// using break with while loop

/* let index = 0;
while (index < 6) {
  console.log('hello index', index);
  if (index == 3) {
    break;
  }
  index++;
} */

// using continuous in for loop
// write a program to display only odd numbers till 20

/* let i = 0;
for (i; i <= 20; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
} */

// //  using continuous with while loop
// let i = 0;
// while (i < 20) {
//   i++;
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// }

/* labelex: for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    continue labelex;
  }
  console.log(i);
} */

// labeled countinue is important while dealing with nested loops
outerLoop: for (let i = 0; i < 20; i++) {
  console.log('value of i', i);
  for (let j = 0; j < 3; j++) {
    console.log('value of j', j);
    for (let k = 0; k < 6; k++) {
      console.log(k);
      if (k / 2 === 1) {
        continue outerLoop;
      }
    }
  }
}
