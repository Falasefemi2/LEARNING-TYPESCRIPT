"use strict";
class Try {
    constructor(name, email) {
        this.city = "Lagos";
        this.name = name;
        this.email = email;
    }
    getUser() {
        return { name: this.name, email: this.email, city: this.city };
    }
}
const user = new Try("John Doe", "johndoe@example.com");
console.log(user.getUser()); // Output: { name: 'John Doe', email: 'johndoe@example.com'}
user.city;
