// Week 3 Day 4 Afternoon Lab
/*
1. Create an Animal class.
- The class will have name, age, color, legs, superPower attributes
- Create two objects of this class - both with a unique superPower
- create three methods for this class - include one method named userSuperPower()
- Create two objects for this class
*/
class Animal {
  constructor(name, age, color, legs, superPower) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
    this.superPower = superPower;
  }
  userSuperPower() {
    console.log("ulti");
  }
  speak() {
    console.log("Inaudible animal speech");
  }
  dance() {
    console.log("I can dance!");
  }

};

const cat = new Animal('Garfield', 5, ['orange', 'black stripes'], 4, 'nap');
const dog = new Animal('Max', 3, 'cream', 4, 'play');

console.log(cat);
//=================================================================================
/*
2. Create a class name User
- This class will have firstName, lastName, department attributes
- a method name changeDepartment()
- Create three instances of this class
- Change department for two of the instances
- Create three objects for this class
*/
class User {
  constructor(firstName, lastName, department) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
  }
  changeDepartment() {
    console.log("Change department");
  }
};

const user1 = new User('Kean', 'Lim', 'IT');
const user2 = new User('Shantelle', 'Lamar', 'HR');
const user3 = new User('Jordan', 'Bentley', 'Finance');

user1.changeDepartment();
console.log(user1.department);

user2.changeDepartment();
console.log(user2.department);
