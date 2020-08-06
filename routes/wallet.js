var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");

router.get(
  "/AHS-Coin",
  (req, res) => {
    res.render("wallet/AHS-Coin");
  }
);

router.get(
    "/AHS-MARKETPLACE-CODE",
    (req, res) => {
      res.render("wallet/AHS-MARKETPLACE-CODE");
    }
  );


  router.get(
    "/AHS-SUPPORT-CODE",
    (req, res) => {
      res.render("wallet/AHS-SUPPORT-CODE");
    }
  );

  router.get(
    "/CASHBACK-CASH-POINT-EARN",
    (req, res) => {
      res.render("wallet/CASHBACK-CASH-POINT-EARN");
    }
  );

  router.get(
    "/CRYPTO-CONVERSION",
    (req, res) => {
      res.render("wallet/CRYPTO-CONVERSION");
    }
  );
  
  router.get(
    "/currency-topup",
    (req, res) => {
      res.render("wallet/currency-topup");
    }
  );
  
  router.get(
    "/ESCROW-ACCOUNT",
    (req, res) => {
      res.render("wallet/ESCROW-ACCOUNT");
    }
  );
  
  router.get(
    "/FRANCHISE",
    (req, res) => {
      res.render("wallet/FRANCHISE");
    }
  );
  
  router.get(
    "/LEVEL-TEAM-WORK",
    (req, res) => {
      res.render("wallet/LEVEL-TEAM-WORK");
    }
  );

  router.get(
    "/MULTIPLE-PURPOSE",
    (req, res) => {
      res.render("wallet/MULTIPLE-PURPOSE");
    }
  );

  router.get(
    "/MY-DESIGNATION",
    (req, res) => {
      res.render("wallet/MY-DESIGNATION");
    }
  );


  router.get(
    "/MY-DESIGNATION-REWARDS",
    (req, res) => {
      res.render("wallet/MY-DESIGNATION-REWARDS");
    }
  );


  router.get(
    "/MY-TEAM-WORK",
    (req, res) => {
      res.render("wallet/MY-TEAM-WORK");
    }
  );



  router.get(
    "/OFFER-ACCOUNT",
    (req, res) => {
      res.render("wallet/OFFER-ACCOUNT");
    }
  );


  router.get(
    "/OFFICIAL-TEAM-WORK",
    (req, res) => {
      res.render("wallet/OFFICIAL-TEAM-WORK");
    }
  );


  router.get(
    "/OTHER-COIN-TOP-UP",
    (req, res) => {
      res.render("wallet/OTHER-COIN-TOP-UP");
    }
  );


  router.get(
    "/POINT-ACCOUN",
    (req, res) => {
      res.render("wallet/POINT-ACCOUN");
    }
  );


  router.get(
    "/PROMOTION-ACCOUNT",
    (req, res) => {
      res.render("wallet/PROMOTION-ACCOUNT");
    }
  );



  router.get(
    "/REFERRAL-ASSOCIATE",
    (req, res) => {
      res.render("wallet/REFERRAL-ASSOCIATE");
    }
  );



  router.get(
    "/SINGLE-LEG-TEAM-WORK",
    (req, res) => {
      res.render("wallet/SINGLE-LEG-TEAM-WORK");
    }
  );


  router.get(
    "/SUPPORT-CODE-GROWTH",
    (req, res) => {
      res.render("wallet/SUPPORT-CODE-GROWTH");
    }
  );


  router.get(
    "/Worldwide-community-Network",
    (req, res) => {
      res.render("wallet/Worldwide-community-Network");
    }
  );

module.exports = router;
