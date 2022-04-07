"use strict"

const id = document.querySelector("#id"),
    pw= document.querySelector("#pw"),
    loginBtn=document.querySelector("#loginBtn")


loginBtn.addEventListener("click", login);

function login(){
    const req ={
        id: id.value,
        pw: pw.value
    };

    fetch("/login", {
        method:"POST",
        header:{
            "Content-type": "application/json"
        },
        body: JSON.stringify(req)
    })
};