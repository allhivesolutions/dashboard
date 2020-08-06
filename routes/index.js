var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var nodemailer = require('nodemailer');
var pool = require("./pool");
let table = "index";

router.get("/", (req, res) => {
    res.render('index');
});

module.exports = router;
