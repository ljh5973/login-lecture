"use strict"

const id = document.querySelector("#id"),
    userName = document.querySelector("#userName"),
    pw= document.querySelector("#pw"),
    confirmPw= document.querySelector("#confirm-pw"),
    registerBtn=document.querySelector("#button")


    registerBtn.addEventListener("click", register);

function register(){

    if(!id.value) return alert("아이디를 입력해주세요");
    if(pw.value!==confirmPw.value){
        return alert("비밀번호가 일치하지 않습니다.");
    }

    const req ={
        id: id.value,
        name:userName.value,
        pw: pw.value

    };

    console.log(req);

    fetch("/register", {
        method:"POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify(req)
    })
    .then((res)=> res.json())
    .then((res)=>{
        if (res.success){
            location.href="/login";
        }else{
            if(res.err) return alert(res.err);
            alert(res.msg);
        }
    })
    .catch((err)=>{
        console.error(new Error("회원가입 중 에러 발생"));
    })

  
};