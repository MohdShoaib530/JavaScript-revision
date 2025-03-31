/* const promiseOne = new Promise(function (resolve, reject) {
  // any async work do here
  setTimeout(function () {
    console.log('promise created');
    resolve('promise is working');
  }, 2000);
});

// consuming
promiseOne.then(function (val) {
  console.log(val);
});

new Promise(function (resolve, reject) {
  // any async task
  setTimeout(function () {
    console.log('setTimeout is working');
    reject();
  }, 1000);
})
  .then(function () {
    console.log('promise is resolved');
  })
  .then(function () {
    console.log('hello guys');
  })
  .catch(function () {
    console.log('no worries');
  })
  .catch(function () {
    console.log('something went wrong');
  });
 */

/* const promiseFour = new Promise(function (resolve, reject) {
  let error = false;
  console.log('hi');
  if (!error) {
    resolve({ username: 'shoaib', email: 'mosh@gmail.com' });
  } else {
    reject('promise is not resolved:error');
  }
});

promiseFour
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log('second', username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log('The promise is either resolved or rejected');
  }); */

const promiseFive = new Promise(function (resolve, reject) {
  let error = false;
  console.log('hi');
  if (!error) {
    const res = fetch('https://jsonplaceholder.typicode.com/users');
    resolve(res);
    console.log('fetching');
  } else {
    reject('promise is not resolved:error');
  }
});

async function consumePromiseFive() {
  const res = await promiseFive;
  console.log('resonse', res);
}
console.log('consuming');
consumePromiseFive();
console.log('consumed');
