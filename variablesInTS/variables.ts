/* the type, enum, interface and tuples are all constructs of TS and NOT JS and in transpiled
JS you won't find the types like string or boolean or number or interface or types or anything
like that, TS will create code corresponding to all of interface, but remember JS runs,
not TS, and TS exists only during development so that IDEs can suggest properly and we don't
make silly errors in the code itself, like assigning a variable a number first and then
a string, although if we literally go to the corresponding transpiled JS code and make changes, sure
we'll be able to do it. */

const name: string = "Rajneesh";

let num: number = 21;
// num = "Rajneesh"; //not allowd, gives error
let bool: boolean = true;
//automatic type inference
//if the variable is declared and given a value at the time
//of declaration then for simple variables and arrays - type is inferred automatically

let number = 21; //-> type inferred, because declared and value is given at thge time of declaration
let myName = "Rajneesh"; //-> type inferred
// number = "R"; //not allowed as automatic type inferrence know thats number is of number type

//for complex variables like complex objects or arrays of objects type may not be inferred automtcially
let person = {
  name: "Rajneesh",
  age: 21,
};

// person.sex = "male"; //not allowed as automatic type inferrence knows that person has only two properties,i.e., name and age, hence the third property couldn't be added/edited

//use automatic type inferrence whenever possible and avoid the 'any' type

let some; //'any' type as no value is given initially hence automatic type inferrence assigns it the type 'any'
some = 21; //allowed as type is any
some = "Rajneesh"; //allowed as type is any
some = true; //allowed as type is any

//one can assign 'any' type explicitly too in order to avoid defining accurate types or when the type is ambiguous, though do avoid it
let checkVar: any = 21;
checkVar = "hey";
checkVar = true;
//any type means type could be anything, hence should be avoided as the whole concept of TS is to make JS predictable in case of types atleast. Also use union types(in coming lessons) instead.

export {}; //to remove that error when it says block scoped
//variable can't be reassigned -> don't worry too much about it
