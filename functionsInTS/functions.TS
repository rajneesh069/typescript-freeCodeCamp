function addTwo(num: number): number {
  return num + 2;
}

function getUpper(val: string): string {
  return val.toUpperCase();
}

function signUpUser(
  name: string,
  email: string,
  password: string,
  isPaid: boolean = false
) {}

signUpUser("Rajneesh", "rajneesh@gmail.com", "123", false);

function getValue(myVal: number): boolean | string {
  if (myVal > 5) {
    return true;
  }
  return "200 OK";
}

const getHello = (s: string): string => {
  return "Hello";
};

const heroes = ["Thor", "spiderman", "ironman"];

heroes.map((hero): string => `hero is ${hero}`);

const nums = [1, 2, 3];

nums.map((num): string => `this is ${num}`);

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(msg: string): never { //never returns a value, i.e. we want an intentional crash
  throw new Error(msg);
}

export {}