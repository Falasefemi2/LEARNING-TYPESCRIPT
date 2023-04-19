let score: number | string = 33;

score = 44;
score = "femi";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let femi: User | Admin = {
  name: "femi",
  id: 222,
};

femi = {
  username: "femi",
  id: 23,
};

const getDBId = (id: number | string) => {
  console.log(`DB is is: ${id}`);
};

getDBId(2);
getDBId("femi");

// array
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number)[] = ["1", "femio", 3];

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "middle"
