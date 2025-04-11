function h(x, fn) {
  console.log(x * x);
  fn(x);
}

h(3, exec);
function exec(x) {
  console.log('this is a callback function and the value is ', x);
}

setTimeout(() => {
  console.log('timer done');
}, 2000);
