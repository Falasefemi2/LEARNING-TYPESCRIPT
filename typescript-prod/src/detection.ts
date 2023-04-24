const dectectType = (val: number | string) => {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 4;
};

const giveId = (id: string | null) => {
  if (!id) {
    console.log("No ID");
    return;
  }
  id.toLocaleUpperCase();
};

const printAll = (strs: string | string[] | null) => {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
};

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

// const isAdmin = (account: User | Admin) => {
//     return account.email
// }

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird){
    return (pet as Fish).swim !== undefined
}