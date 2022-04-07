"use strict";

const UserStorage=require("../../models/UserStorage")

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    }
};



const process = {
    login: (req, res) => {
        const id = req.body.id,
            pw = req.body.pw;
        
        
        const users=UserStorage.getUsers("id","pw", "names");

        const response={};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id)
            if (users.pw[idx] === pw) {
                response.success=true;
                return res.json(response);
            }

        };
        response.success=false;
        response.msg=" 로그인에 실패했습니다.";
        return res.json(response);
    }
}


// {key: key} 자동으로 하나만 입력하면 키와 같은값이 넘어감
module.exports = {
    output,
    process
};