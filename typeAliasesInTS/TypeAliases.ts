/* the type, enum, interface and tuples are all constructs of TS and NOT JS and in transpiled
JS you won't find the types like string or boolean or number or interface or types or anything
like that, TS will create code corresponding to all of interface, but remember JS runs,
not TS, and TS exists only during development so that IDEs can suggest properly and we don't
make silly errors in the code itself, like assigning a variable a number first and then
a string, although if we literally go to the corresponding transpiled JS code and make changes, sure
we'll be able to do it. */

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

type Mystring = string; //it is possible but obviously no need to do it like this

function createUser(user: User): User {
  return {
    name: "Rajneesh",
    email: "rajneesh.mishra9616@gmail.com",
    isActive: true,
   };
}

createUser({ name: "", email: "", isActive: true });
export {}
