interface User {
  name: string;
  email: string;
  city: string;
}

class Try {
  name: string;
  email: string;
  public readonly city: string = "Lagos";

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  getUser(): User {
    return { name: this.name, email: this.email, city: this.city };
  }
}

const user = new Try("John Doe", "johndoe@example.com");
console.log(user.getUser()); // Output: { name: 'John Doe', email: 'johndoe@example.com'}
user.city;
