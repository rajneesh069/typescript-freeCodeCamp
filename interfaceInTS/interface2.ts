interface User {
  name: string;
  getName: () => string;
  readonly dbID: number;
  email: string;
  googleId?: string;
  startTrial(): string;
  getCoupon(couponName: string, discountInPercentage: number): string;
}
//we can write the interface again! But can't do it with types or enums
interface User {
  gitHubToken: string;
}

const rajneesh: User = {
  name: "Rajneesh",
  getName: () => {
    return `Hey, ${rajneesh.name}!`;
  },
  dbID: 123,
  email: "rajneesh@gmail.com",
  startTrial() {
    return `${this.name}, your trial has ended.`;
  },
  getCoupon(coupon, off) {
    //you can change the name of parameters(like off and coupon here instead of couponName and discountInPercentage respectively) when you actually define them in the object.
    return `The coupon name is ${coupon} and you'll get ${off}% off.`;
  },
  gitHubToken: "158RJ58@#",
};

interface Admin extends User {
  //inheritance of interface, contains all the properties of User as well as of Admin
  role: "admin" | "ta" | "learner";
}

const sachin: Admin = {
  role: "admin",
  name: "sachin",
  getName: () => {
    return `Hey, ${rajneesh.name}!`;
  },
  dbID: 123,
  email: "rajneesh@gmail.com",
  startTrial() {
    return `${this.name}, your trial has ended.`;
  },
  getCoupon(coupon, off) {
    //you can change the name of parameters(like off and coupon here instead of couponName and discountInPercentage respectively) when you actually define them in the object.
    return `The coupon name is ${coupon} and you'll get ${off}% off.`;
  },
  gitHubToken: "158RJ58@#",
};
//read the difference between types and interfaces from TS official docs
export {};
