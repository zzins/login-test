"use strict";

class UserStorage {
    static #users = { // # public variable => private variable
        id: ['aaa', 'bbb', 'ccc'],
        pw: ['111', '222', '333'],
    };

    static getUsers(...fields) {
        console.log(fields);
        return this.#users;
    }
};

module.exports = UserStorage;