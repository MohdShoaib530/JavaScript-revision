class Student {
  constructor(username, email, std) {
    this.username = username;
    this.email = email;
    this.std = std;
  }
  standard() {
    console.log(
      `name of the user is ${this.username} and name of the std is ${this.std}`
    );
  }
}

const student1 = new Student('shoaib', 'shoaib@gmail.com', 11);
console.log(student1);
console.log(student1.standard());
