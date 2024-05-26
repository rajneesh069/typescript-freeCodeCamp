class User {
  public email: string;
  public name: string; //private keyword is in TS only and not in JS, in JS we use #
  private city: string;
  constructor(email: string, name: string, city: string) {
    this.email = email;
    this.name = name;
    this.city = city;
  }
}

const rajneesh = new User("rajneesh@gmail.com", "Rajneesh", "Gonda");
console.table([rajneesh]);

// rajneesh.city = "Kanpur"; //gives error as city is marked as private

//Other way to create a class

class User1 {
  constructor(
    public name: string,
    public email: string,
    private _id: string,
    public userId: string,
    private age: number
  ) {
    //this body can be omitted too!
    // this.name = name;
    // this.email = email;
    // this._id = _id;
    // this.userId = userId;
    // this.age = age;
  }
}

const sachin = new User1(
  "Sachin",
  "sachin@gmail.com",
  "xf0231",
  "sachin16",
  21
);
console.table([sachin]);
