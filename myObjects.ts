// const User = {
//     name: "femi",
//     email: "femifalase",
//     isActive: true,
//     age: 23
// }

// const createUser = (name: string, isActive: boolean) => {}

// createUser("femi", false)

// const creaseCourse = (): {} => {
//     return {}
// }

// creaseCourse()

// type User = {
//   name: string;
//   email: string;
//   isPaid: boolean;
// };

// const userType = (user: User): User => {
//   return { name: "", email: "", isPaid: false };
// };

// userType({ name: "", email: "", isPaid: false });

type User = {
    readonly _id: string
    name: string
    email: String
    isActive: boolean
    creditCard?: number
}

type cardNumber = {
    cardNumber: number
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

// let myUser: User = {
//     _id: "1234",
//     name: "femi",
//     email: "femi@",
//     isActive: false
// }
// myUser.email = "jjjf"

// const bank = (card: cardDetails): cardDetails => {
//     return `${card}`
// }

// bank({})
export {};
