"use strict";
const score = [];
const names = [];
const identityOne = (val) => {
    return val;
};
const identityTwo = (val) => {
    return val;
};
const identityThree = (val) => {
    return val;
};
identityThree(true);
const getProducts = (products) => {
    return products[3];
};
const anotheFnc = (valOne, valTwo) => {
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
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
