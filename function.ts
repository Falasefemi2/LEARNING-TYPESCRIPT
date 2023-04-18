// const addTwo = (num: number): number => {
//   return num + 2;
// };

// const getUpper = (val: string) => {
//   return val.toUpperCase();
// };

// const signUp = (name: string, email: string, isPaid: boolean) => {};

// const loginUser = (name: string, email: string, isPaid: boolean = false) => {};

// addTwo(3);
// getUpper("femi");
// signUp("Falase", "femifalse@gmail.com", true);
// loginUser("g", "dddd");

// const getValue = (myVal: number): boolean => {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// };

// const getHello = (s: string): string => {
//   return ""
// }

// const heros = ["thor", "spiderman", "ironman"]
// const heros = ["thor", "spiderman", "ironman"]

// heros.map((hero) => (
//   `hero is ${hero}`
// ))

const consoleError = (errmsg: string): void => {
  console.log(errmsg);
}

const handleError = (msg: string): never => {
  throw new Error(msg)
}