let score: number | string | boolean = 33; //avoid any, rather put unions in types

score = "55";
score = true;

//Unions for custom data types
type User = {
  name: string;
  id: string;
};

type Admin = {
  username: string;
  id: string;
};

let Rajneesh: User | Admin = {
  name: "Rajneesh",
  id: "334",
};

Rajneesh = {
  username: "Rajneesh",
  id: "334",
};

// function getDBID(id: number | string) {
//   //making some API calls
//   console.log(`db id is ${id}`);
// }

// getDBID("3");
// getDBID(3);

//Let's do some manipulations in that function
function getDBID(id: number | string) {
  //making some API calls
  //   id.toLowerCase() //gives error as id could be number too, how to overcome that?
  //like this :-
  if (typeof id === "string") {
    id.toLowerCase(); // works now
  } else {
    //or write else if(typeof id ==="number")
    id.toFixed(); //a property that can only be used on a number
  }
}

getDBID("3");
getDBID(3);

//arrays

// const data: number[] = [1,2,3,"4"]; //problematic obviosuly, strings aren't allowed
const data: (string | number | boolean)[] = ["1", 2, 3, true];
// const data1: string[] | number[] = ["1", 2, 3]; //gives error as that type means either all numbers array or all string array, for that we have to do union first between string and number then put the array sign

// let pi : 3.14 = 3.14; //literal assignment
// pi = 3.14159; //gives error
//useful case for literal assignment -> aeroplane seat allotment
let seatAllotment: "aisle" | "middle" | "window";
//  seatAllotment = "crew"; //->gives error
seatAllotment = "middle"; //-> works fine

export {}