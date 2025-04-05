const powerTwo = (n) => {
  return n ** 2;
};

function powerCube(powerTwo, n) {
  return powerTwo(n) * n;
}

// console.log(powerCube(powerTwo, 5));

function sayHello() {
  return () => {
    console.log('hello my name is mohd shoaib');
  };
}

const greet = sayHello();
console.log(greet);
// greet();

const higherOrder = (m) => {
  const oneFun = (n) => {
    const twoFun = (p) => {
      return m + n + p;
    };
    return twoFun;
  };
  return oneFun;
};
const sum = higherOrder(3)(7)(8);
// console.log(sum);

const myNums = [1, 2, 3, 4, 5];
const sumArray = (arr) => {
  let total = 0;
  arr.forEach((element) => {
    total += element;
  });
  return total;
};
console.log(sumArray(myNums));
