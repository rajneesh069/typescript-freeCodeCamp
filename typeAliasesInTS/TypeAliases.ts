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
