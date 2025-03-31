const username = {
  name: 'Shoaib'
};

function greet(age) {
  console.log(`hello my name is ${this.name} and I am ${age} years old`);
}
// call method calls the function immediately

greet.call(username, 24);

// bind method does not bind the function immediately. Instead, it returns a new function with this set to the given object

const person2 = {
  username: 'Mohd Shoaib'
};

function intoduce(city) {
  console.log(`hello my name is ${this.username} and I am from ${city}`);
}

const introduction = intoduce.bind(person2, 'Pratapgarh');
introduction();
// bind will not call the function immmediately but it will permanenetly bind this to the corresponding function and it return a function which you can call later. We can pass arguments just after passing object.
