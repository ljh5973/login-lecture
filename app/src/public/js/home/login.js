"use strict"

const id = document.querySelector("#id"),
    pw= document.querySelector("#pw"),
    loginBtn=document.querySelector("#button")


loginBtn.addEventListener("click", login);

function login(){

    if(!id.value) return alert("아이디를 입력해주세요");
    if(!pw.value) return alert("비밀번호가 일치하지 않습니다.");
    const req ={
        id: id.value,
        pw: pw.value
    };

    fetch("/login", {
        method:"POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify(req)
    })
    .then((res)=> res.json())
    .then((res)=>{
        if (res.success){
            location.href="/";
        }else{
            if(res.err) return alert(res.err);
            alert(res.msg);
        }
    })
    .catch((err)=>{
        console.error(new Error("로그인 중 에러 발생"));
    })

  
};