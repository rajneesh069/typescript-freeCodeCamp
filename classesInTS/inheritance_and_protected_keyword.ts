/* private, public and protected are called access modifiers as they limit your access to the
methods and properties of a class */
class User {
  protected _courseCount = 1; //now it can be used in the same class and any other class which inherits it and nowhere else outside them
  constructor(public name: string, public email: string, private age: number) {}

  get getAppleEmail(): string {
    return `Your apple email is ${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum: number) {
    //gives error, if we give the return type of the setter function void or anything, we need to omit the function return type;
    if (courseNum <= 1) {
      this.deleteToken(); //can only be used inside the class as the method is private
      throw new Error("Course count must be greater than 1.");
    }
    this._courseCount = courseNum;
  }

  private deleteToken(): void {
    //private method
    console.log("Token Deleted");
  }
}

class SubUser extends User {
  //subuser inherits user class but only the public methods and properties NOT the private ones!
  isFamily: Boolean = true;
  changeCourseCount() {
    // this._courseCount = 4; //error, because _courseCount is private
    this._courseCount = 4;
  }
}

const rajneesh = new User("Rajneesh", "rajneesh@apple.com", 21);
console.table([rajneesh]);
export {};
