const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
require("dotenv").config();

//REGISTER
router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});
//LOGIN

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username: username })
        .then((user) => {
            if (user) {
                bcrypt.compare(
                    password,
                    user.password,
                    (err, passwordMatch) => {
                        if (err) throw err;
                        if (passwordMatch === true) {
                            jwt.sign(
                                { user },
                                process.env.SECRETKEY,

                                (err, token) => {
                                    if (err) throw err;
                                    res.status(200).json({
                                        status: 200,
                                        msg: "logged in successfully",
                                        token: token,
                                        data: user,
                                    });
                                }
                            );
                        } else res.send({ msg: "wrong password" });
                    }
                );
            } else {
                res.status(400).json({
                    status: 400,
                    msg: "user doesn't exist",
                });
            }
        })
        .catch((err) => console.log(err));
});
module.exports = router;
