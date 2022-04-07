"use strict";

const fs = require("fs").promises;
class UserStorage {

    static #getUserInfo(data,id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // => [id, pw, names]
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }


    static getUsers(...fields) {
        // const users=this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];

            }
            return newUsers;
        }, {});
        return newUsers;
    }
    static getUserInfo(id) {

        return fs.readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUserInfo(data,id);
            })     // 위가 성공하면 then
            .catch((err) => console.error);   // 실패하면 catch를 실행함

    }

  

    static save(userInfo) {
        // const users= this.#users;
        users.id.push(userInfo.id);
        users.names.push(userInfo.userName);
        users.pw.push(userInfo.pw);

        return { success: true }
    }
}

module.exports = UserStorage