/* the type, enum, interface and tuples are all constructs of TS and NOT JS and in the transpiled
JS we won't find the types like string or boolean or number or interface or types or anything
like that, TS will create code corresponding to all of it, but remember JS runs,
not TS, and TS exists only during development so that IDEs can suggest properly and we don't
make silly errors in the code itself, like assigning a variable a number first and then
a string, although if we literally go to the corresponding transpiled JS code and make changes, 
sure we'll be able to do it. */

interface User {
  //doesn't contain the nitty-gritties of how methods work but contains a rough framework of it, it is mainly a blueprint of a class
  name: string;
  getName: () => string;
  readonly dbID: number;
  email: string;
  googleId?: string;
  startTrial(): string;
  getCoupon(couponName: string, discountInPercentage: number): string;
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
};

console.log(rajneesh.startTrial());
console.log(rajneesh.getName());
console.log(rajneesh.getCoupon("DISCOUNT20", 20)); //while making function calls all the parameters must be passed

/* type User = {
  name: string;
  getName: () => string;
};

const obj: User = {
  name: "Rajneesh",
  getName() {
    return `Hey ${this.name}`;
  },
};

console.log(obj.getName()); 
These things are also possible with types

*/
export {}