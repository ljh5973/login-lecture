const mysql= require("mysql");

const db = mysql.createConnection({
    host:"jinho-test.cuvbn89lbyyp.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "rptdoa00!!",
    database:"login_lecture",
});

db.connect();

module.exports=db;