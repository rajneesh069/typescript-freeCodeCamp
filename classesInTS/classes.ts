class User {
  email: string;
  name: string;
  readonly city: string = "Gonda";
  address: string;
  constructor(email: string, name: string) {
    this.email = email; //this.email refers to the email defined above in the class
    this.name = name; //this.name refers to the email defined above in the class
  }
}

const rajneesh = new User("rajneesh@gmail.com", "Rajneesh");
rajneesh.address = "Gayatri Puram Colony";

export {}