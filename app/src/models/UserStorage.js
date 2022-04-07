"use strict";

const db = require("../config/db.js");
class UserStorage {

    static getUserInfo(id) {
        return new Promise((resolve, reject)=>{
            const query="SELECT * FROM users where id =?;";
            db.query(query, [id], (err, data)=>{
                console.log(data[0]);
            if (err) reject(`${err}`);
            else resolve(data[0]);
            });
        });
    }

    static async save(userInfo) {
        return new Promise((resolve, reject)=>{
            const query="INSERT INTO users(id, name, pw) VALUES(?, ? ,?);";
            db.query(query, [userInfo.id, userInfo.name, userInfo.pw], (err)=>{
            if (err) reject(`${err}`);
            else resolve({success:true});
            });
        });
    }
}

module.exports = UserStorage