"use strict";

const hello=(req, res)=>{
    res.render("home/index");
};

const login=(req,res)=>{
    res.render("home/login");
};


// {key: key} 자동으로 하나만 입력하면 키와 같은값이 넘어감
module.exports={
    hello,
    login
};