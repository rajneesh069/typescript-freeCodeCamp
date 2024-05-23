type User = {
  readonly _id: string; //readonly -> only exists in TS ofc
  name: string;
  email: string;
  isActive: boolean;
  creditCardNumber?: number; // for optional property, we use ? after the name of the property
};

let myUser: User = {
  _id: "1234",
  name: "Rajneesh",
  email: "rajneesh@gmail.com",
  isActive: false,
};

myUser.email = "sachin@gmail.com";
// myUser._id = "1234"; // not able to change _id, because it has read-only property active

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  }; // joins all the types

const card: cardDetails = {
  cardDate: "123",
  cardNumber: "123",
  cvv: 988,
};
