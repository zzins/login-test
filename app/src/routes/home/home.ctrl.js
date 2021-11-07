"use strict";

const UserStorage = require("../../models/UserStorage");

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
        console.log(UserStorage.getUsers("id", "password"));
        /*
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
        */
    }
};

module.exports = {
    output,
    process,
};