// const superHeroes = []; //never type

// superHeroes.push("IronMan"); //string is not assignable to type 'never'
//never type denotes that it is never supposed to execute or end the things

// const superHeroes:[] = []; //denotes an empty array type
// superHeroes.push("IronMan") // same error as before -> string is not assignable to type 'never'

const superHeroes: string[] = ["IronMan", "Thor", "Captain America"];

const numbers: number[] = [1, 2, 3, 4];
numbers.push(69); //:)

//Other ways to define array type
const supes: Array<string> = ["Spiderman", "Black Panther"];
supes.push("Blade");

type User = {
  name: string;
  email: string;
  isActive: boolean;
  age: number;
};

const allUsers: User[] = [];

// allUsers.push({}) //gives error as object type doesn't match

allUsers.push({
  name: "Rajneesh",
  age: 21,
  isActive: true,
  email: "rajneesh@gmail.com",
});

const MLModels: number[][] = [ //2D Array
  [255, 255, 255],
  [233, 233, 234],
];

// const MLModels: number[][] = [
//   [255, "255", 255],
//   [233, 233, 234],
// ]; //gives error as string is one of the elements in the array
export {}
