//only in TS, not in JS
// const user : string[] = ['rj']; // want string, number and boolean but in this order only
let user: [string, number, boolean] = ["rj", 133, true];
// user = [1,"sm", true]; //gives error
//user = ["sm",1,true, false] //gives error as only 3 elements are allowed, not more not less

let rgb: [number, number, number] = [255, 255, 255];

type User = [number, string];
const newUser: User = [112, "rajneesh@gmail.com"];
// newUser[0] = "39"; //gives error
newUser.push("22"); // works -> so beware
newUser.push(22); // works -> so beware
//other methods could be used too, so beware

// let newUser1 : User;
// newUser1.push(22); //assignement is necessary or else it gives error

type someNewUser = readonly[number, string];
let newUser1 : someNewUser;
newUser1 = [11,'rj']; //assigned now and then trying to push
// newUser1.push(22); //can't do it now because of readonly property
export {}