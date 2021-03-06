"use strict";

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#btnLogin");

loginBtn.addEventListener("click", () => {
    const req = {
        id: id.value,
        pw: password.value,
    };

    fetch("/login", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    }).then((res) => res.json()).then((res) => {
        if(res.success) {
            location.href = "/";
        } else {
            alert(res.msg);
        }
    }).catch((err) => {
        console.error("error!!!!");
    });
});