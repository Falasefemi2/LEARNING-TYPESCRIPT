const score: Array<number> = [];
const names: Array<string> = [];

const identityOne = (val: boolean | number): boolean | number => {
  return val;
};

const identityTwo = (val: any): any => {
  return val;
};

const identityThree = <T>(val: T): T => {
  return val;
};

identityThree(true);

interface Bootle {
  cover: "string";
  brand: "string";
  type: number;
}

const getProducts = <T>(products: T[]): T => {
  return products[3];
};

interface Database {
  connection: string;
  userName: string;
  password: string;
}

const anotheFnc = <T, U extends Database>(valOne: T, valTwo: U): object => {
  return {
    valOne,
    valTwo,
  };
};

anotheFnc("FEMI", {
  connection: "",
  userName: "",
  password: "",
});

// interface Quiz {
//   name: string;
//   type: string;
// }

// interface Course {
//   name: string;
//   author: string;
//   subject: string;
// }

// class Sellable<T> {
//   public cart: T[] = [];

//   addToCart(product: T) {
//     this.cart.push(product);
//   }
// }

const getSearchProducts = <T>(products: T[]): T => {
  const myIndex = 3;
  return products[myIndex];
};

interface Database {
  connection: string;
  userName: string;
  password: string;
}

const anotherFunction = <T, U extends Database>(
  valOne: T,
  valTwo: U
): object => {
  return {
    valOne,
    valTwo,
  };
};

anotherFunction(3, {
  connection: "",
  userName: "",
  password: "",
});

interface Quiz {
  name: string,
  type: string
}

interface Course {
  name: string,
  author: string,
  subject: string
}

class Sellable<T> {
  public cart: T[] = []

  addToCart(products: T) {
    this.cart.push(products)
  }
}
