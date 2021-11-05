"use strict";

const users = {
    id: ['aaa', 'bbb', 'ccc'],
    pw: ['111', '222', '333'],
};

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
        const id = req.body.id;
        const pw = req.body.pw;
        console.log(id, pw);
        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.pw[idx] === pw) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "fail"
        });
    }
};

module.exports = {
    output,
    process,
};