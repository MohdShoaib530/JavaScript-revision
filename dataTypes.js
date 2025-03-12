/* let sym1 = Symbol('name');
console.log(sym1);
let sym2 = Symbol('name');
console.log(sym2);
console.log(sym1 == sym2);
 */
/* const id = Symbol('id');
const user = {
  name: 'shoaib',
  [id]: 1212
};

for (let key in user) {
  console.log(key);
}

console.log(JSON.stringify(user));

console.log(user);
console.log(user['name']);
console.log(user);

let user = {};
Object.defineProperty(user, 'name', {
  value: 'shoaib',
  writable: false,
  enumerable: true,
  configurable: true
});
console.log(user);
user.name = 'fija';
console.log(user); */

/* let user = {
  firstName: 'Mohd',
  lastName: 'Shoaib',

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(newName) {
    [this.firstName, this.lastName] = newName.split(' ');
  }
};
console.log(user);
user.fullName = 'mohd sakib';
console.log(user.fullName);
 */

let animal = {
  sound: 'bhau bhau',
  makeSound() {
    return `sound of the dog is ${this.sound}`;
  }
};

const dog1 = Object.create(animal);
dog1.sound = 'chau chau';
console.log(dog1.makeSound());
console.log(animal.makeSound());
