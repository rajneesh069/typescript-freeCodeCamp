/* const AISLE = 0;
const MIDDLE = 1;
const WINDOW = 2;
if(seat===AISLE){
    //do something
} */

//rather than defining 3 different constants/variables we can do it using another way -> enums

enum SeatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
  FOURTH,
}

//in enums,by default, first value =0, second value =1 and so on....

const seat = SeatChoice.MIDDLE;

/* if you wanna start with some specific number, assign it to the elements, like this :-
enum SeatChoice {
    AISLE=10,
    MIDDLE, //now this is 11
    WINDOW, //now this is 12
    FOURTH, //now this is 13
  }

but if we do this:-
enum SeatChoice {
    AISLE=10,
    MIDDLE =22, //now this is 22
    WINDOW, //now this is 23
    FOURTH, //now this is 24
  } */

//so now we know how values are assigned automatically, or else we can assign custom values to each variable

/* if sring is assigned then all of them need to be assigned with some value as TS can no longer find the pattern of assigment

this works :-
enum SeatChoice {
    AISLE="aisle",
    MIDDLE =22, //now this is 22 //pattern identified
    WINDOW, //now this is 23
    FOURTH, //now this is 24
  }

this will give error, as pattern can't be identified
enum SeatChoice {
    AISLE="aisle",
    MIDDLE ="middle",
    WINDOW,
    FOURTH,
  }

this works :-
enum SeatChoice {
    AISLE="aisle",
    MIDDLE ="middle",
    WINDOW = 99,
    FOURTH = "fourth",
  } */

/*generates lots of JS code when transpiled:
enum SeatChoice {
    AISLE="aisle",
    MIDDLE ="middle",
    WINDOW = 99,
    FOURTH = "fourth",
  }

to avoid it, use :-
const enum SeatChoice {
    AISLE="aisle",
    MIDDLE ="middle",
    WINDOW = 99,
    FOURTH = "fourth",
  }
*/