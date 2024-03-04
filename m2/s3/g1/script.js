class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  compareAge(otherUser) {
    if (this.age < otherUser.age) {
      return `${this.firstName} e' piu piccolo di ${otherUser.firstName}`;
    } else if (this.age > otherUser.age) {
      return `${otherUser.firstName} e' piccolo di ${this.firstName}`;
    } else {
      return `${this.firstName} hannola stessa eta' ${otherUser.firstName}`;
    }
  }
}

let x = new User("Franz", "Natavio", 26, "Roma");
let y = new User("Alessandro", "Natavio", 44, "Roma");

console.log(x.compareAge(y));
