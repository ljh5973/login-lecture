"use strict";


class UserStorage{

    static #users = {
        id: ['jinho', "sung", 'kim'],
        pw: ['1234', '54321', '123123'],
        names:["진호","구라",'치지마']
    };

    static getUsers(...fields){
        const users=this.#users;
        const newUsers= fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] =users[field];

            }
            return newUsers;
        }, {});
        return newUsers;
    }
    static getUserInfo(id){
        const users=this.#users;
        const idx=users.id.indexOf(id);
        const userKeys=Object.keys(users); // => [id, pw, names]
        const userInfo= userKeys.reduce((newUser,info)=>{
            newUser[info]= users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }
}

module.exports=UserStorage