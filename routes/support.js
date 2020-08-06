var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");

router.get(
  "/get-support-link-reference",
  (req, res) => {
    res.render("support/get-support-link-reference");
  }
);

router.get(
    "/given-support",
    (req, res) => {
      res.render("support/given-support");
    }
  );


  router.get(
    "/give-support-by",
    (req, res) => {
      res.render("support/give-support-by");
    }
  );

  router.get(
    "/give-support-link-request",
    (req, res) => {
      res.render("support/give-support-link-request");
    }
  );

  router.get(
    "/give-support-request",
    (req, res) => {
      res.render("support/give-support-request");
    }
  );
  
  router.get(
    "/give-support-request-by",
    (req, res) => {
      res.render("support/give-support-request-by");
    }
  );
  
  router.get(
    "/give-support-request-status",
    (req, res) => {
      res.render("support/give-support-request-status");
    }
  );


  router.get(
    "/recevied-support",
    (req, res) => {
      res.render("support/recevied-support");
    }
  );
  

module.exports = router;
