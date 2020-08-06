var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var pool = require("./pool");
let table = "login";

router.get("/", (req, res) => {
    res.render(`upload-kyc`);
});

module.exports = router;