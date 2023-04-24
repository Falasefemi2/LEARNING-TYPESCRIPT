"use strict";
function dectectTypes(val) {
    if (typeof val === "number") {
        val.toPrecision();
    }
}
function provideId(id) {
    if (!id) {
        console.log("please provide ID");
        return;
    }
    id.toLowerCase;
}
function isAdmin(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
