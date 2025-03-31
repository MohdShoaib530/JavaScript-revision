/* const obj1 = {
  name: 'shoaib',
  role: 'student',
  isLoggedIn: true,
  isRegistered: function () {
    console.log(`${this.name} is a registered user`);
  }
};
console.log(obj1.name);
console.log(obj1.role);

let obj2 = {
  10: 'number10',
  20: 'number20'
};

let key1 = Symbol('nameof');

let obj3 = {
  [key1]: 'mohd shoaib'
};
console.log(obj3);
console.log(obj3[key1]);

const obj4 = new Object();
obj4.class = 'no class';
obj4.email = 'mohd25@gmail.com';
console.log(obj4); */

let obj5 = {
  name: 'hi ha hu hu',
  email: 'hiha@google.com'
};
// obj5['name'] = 'mohd shoaib';
// obj5.email = 'emailhogaya@gmail.com';
console.log(obj5['name']);
// let objKeys = Object.keys(obj5);
// for (const key of objKeys) {
//   console.log('these are keys', key);
// }
for (const keys in obj5) {
  console.log(obj5[keys]);
}
