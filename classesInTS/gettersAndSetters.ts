class User {
  private _courseCount = 1;
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

const rajneesh = new User("Rajneesh", "rajneesh@apple.com", 21);
rajneesh.courseCount = 2; //this is the setter, value can't be assigned to a getter function
console.log("This is the getter I guess:", rajneesh.courseCount); //this is the getter
console.table([rajneesh]);
export {};
