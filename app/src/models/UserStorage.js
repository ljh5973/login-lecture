"use strict";

const fs = require("fs").promises;
class UserStorage {

    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // => [id, pw, names]
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    static #getUsers(data, isAll, fields){
        const users=JSON.parse(data);
        if(isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];

            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUsers(isAll, ...fields) {

        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUsers(data, isAll, fields);
            })     // 위가 성공하면 then
            .catch((err) => console.error);   // 실패하면 catch를 실행함
        // const users=this.#users;
        
    }
    static getUserInfo(id) {

        return fs.readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUserInfo(data, id);
            })     // 위가 성공하면 then
            .catch((err) => console.error);   // 실패하면 catch를 실행함

    }



    static async save(userInfo) {
        const users =await this.getUsers(true);
        if(users.id.includes(userInfo.id)){
           throw ("이미 존재하는 아이디입니다.");
        }
        users.id.push(userInfo.id);
        users.names.push(userInfo.name);
        users.pw.push(userInfo.pw);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return {success:true};


    }
}

module.exports = UserStorage