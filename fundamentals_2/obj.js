// attributes and behaviour functions

// let obj = {
//   roll_no: 11,
//   name: 'shoaib',
//   class: '12th',
//   age: 22,
//   fee: function () {
//     console.log(`fee of the student is 500`);
//   }
// };
// console.log(obj);
// console.log(obj.fee());

// let obj1 = new Object({ class: 'shoaib' });
// obj1.id = 232;
// console.log('obj', obj1);

/* function Product(n, p, r) {
  (this.name = n), (this.price = p), (this.rating = r);
}
let product1 = new Product('apple', 1221, 5);
console.log('product1', product1);
console.log(product1.name);
console.log(product1['name']);
product1.name = 'boat';
product1.market = 'big';
product1['price'] = '3434';
delete product1.market;
console.log(product1); */

let obj = {
  id: 232,
  name: 'shoaib',
  age: 23
};
// console.log('keys', Object.keys(obj));
// console.log('values', Object.values(obj));
// console.log('entries', Object.entries(obj));

// Object.freeze(obj);
// obj.id = 323;
// console.log(obj);

// only updates
// Object.seal(obj);
obj.id = 3434;
console.log(obj);

// let a = Object.assign({ name: 'shoaib' }, obj);
// console.log(a);

delete obj.id;
console.log('hi', obj);
