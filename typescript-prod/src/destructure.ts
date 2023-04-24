function dectectTypes(val: number | string) {
    if(typeof val === "number") {
        val.toPrecision()
    }
}

function provideId(id: string | null) {
    if(!id) {
        console.log("please provide ID"); 
        return 
    }
    id.toLowerCase
}

interface User {
    name: string,
    email: string 
}

interface Animal {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdmin(account: User | Animal) {
    if ("isAdmin" in account) {
        return account.isAdmin
    }
}




