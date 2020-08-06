

var createError = require('http-errors');
var cookieSession = require('cookie-session');
var express = require('express');
var path = require('path');
var cors = require("cors");
var flash = require('express-flash');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Add Routes
var indexRouter = require('./routes/index');
var my_profile = require('./routes/my-profile');
var change_password = require('./routes/change-password');
var change_transcation_password = require('./routes/change-transcation-password');
var upload_kyc = require('./routes/upload-kyc');
var cryptomarketmembersgip = require('./routes/cryptomarketmembersgip');
var AHS_Support = require('./routes/AHS-Support');
var AHS_Marketcode = require('./routes/AHS-Marketcode');
var AHS_Coin = require('./routes/AHS-Coin');
var crypto_conversion = require('./routes/crypto-conversion');
var world_wide_community = require('./routes/world-wide-community');
var AHS_Communitygrowth = require('./routes/AHS-Communitygrowth');
var AHS_Marketplace_product = require('./routes/AHS-Marketplace-product');
var Franchise = require('./routes/Franchise');
var offer_team = require('./routes/offer-team');
var my_designation = require('./routes/my-designation');
var cashback_point = require('./routes/cashback-point');
var donation = require('./routes/donation');
var Escrow_account = require('./routes/Escrow-account');
var point_account = require('./routes/point-account');
var promotion_code = require('./routes/promotion-code');
var offer = require('./routes/offer');
var tranning = require('./routes/tranning');
var wallet = require('./routes/wallet');
var support = require('./routes/support');
var affiliateearning = require('./routes/affiliateearning');
var systemsupport = require('./routes/systemsupport');
var pointearn = require('./routes/pointearn');
var payment_option = require('./routes/payment-option');



var app = express();

// cors middleware

app.use(cors())


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieSession({
  name: 'session',
  keys: ['kaushal'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(flash());

// Use Routes
app.use('/', indexRouter);
app.use('/my-profile', my_profile);
app.use('/change-password', change_password);
app.use('/change-transcation-password', change_transcation_password);
app.use('/upload-kyc', upload_kyc);
app.use( '/cryptomarketmembersgip', cryptomarketmembersgip);
app.use( '/AHS-Support', AHS_Support);
app.use( '/AHS-Marketcode', AHS_Marketcode);
app.use( '/AHS-Coin',AHS_Coin );
app.use( '/crypto-conversion',crypto_conversion );
app.use( '/world-wide-community',world_wide_community );
app.use( '/AHS-Communitygrowth',AHS_Communitygrowth );
app.use( '/AHS-Marketplace-product',AHS_Marketplace_product );
app.use( '/Franchise',Franchise );
app.use( '/offer-team',offer_team);
app.use( '/my-designation',my_designation );
app.use( '/cashback-point',cashback_point );
app.use( '/donation',donation );
app.use( '/Escrow-account',Escrow_account );
app.use( '/point-account',point_account );
app.use( '/promotion-code',promotion_code);
app.use( '/offer',offer);
app.use( '/tranning', tranning);
app.use('/wallet', wallet);
app.use('/support', support);
app.use('/affiliateearning', affiliateearning);
app.use('/systemsupport', systemsupport);
app.use('/pointearn', pointearn);
app.use('/payment-option', payment_option);


// Access Control
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
