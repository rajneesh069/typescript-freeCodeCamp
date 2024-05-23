const User = {
  name: "Rajneesh",
  email: "rajneesh.mishra9616@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "rajneesh", isPaid: false });

function createCourse(): { name: string; price: number } {
  return { name: "Rajneesh", price: 399 };
}

//bad behaviour of objects
let newUser = { name: "Rajneesh", email: "rajneesh.mishra9616@gmail.com", isPaid : true };
createUser(newUser);
