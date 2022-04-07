"use strict";

const users = {
    id: ['jinho', "sung", 'kim'],
    pw: ['1234', '54321', '123123']
}

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    }
}



const process = {
    login: (req, res) => {
        const id = req.body.id,
            pw = req.body.pw;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id)
            if (users.pw[idx] === pw) {
                return res.json({
                    success: true,

                });
            }
            return res.json({
                success: false,
                msg: "로그인에 실패했습니다"

            });
        };

    }
}


// {key: key} 자동으로 하나만 입력하면 키와 같은값이 넘어감
module.exports = {
    output,
    process
};