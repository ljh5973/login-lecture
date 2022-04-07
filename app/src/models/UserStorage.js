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
}

module.exports=UserStorage