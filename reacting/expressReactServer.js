/**
 * Created by jk on 09/11/15.
 */

var express = require('express');
var expressReact = require('express-react-views');
var babel = ('babel/register');

var app = express();
//var viewsEngine = expressReact.createEngine({
//  transformViews: false
//});
var viewsEngine = expressReact.createEngine();

var port = process.argv[2] || 3000;

app.set('port', port);
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', viewsEngine);

app.use('/home', function (req, res) {
  res.render('index');
});

app.use('/form', function (req, res) {
  res.render('index3');
});

app.use('/home2', function (req, res) {
  res.render('index2');
});

app.use('/props', function (req, res) {
  res.render('indexProps', '');
});

app.use('/propsTest', function (req, res) {
  res.render('indexPropsTest', '');
});

app.use('/propsType', function (req, res) {
  res.render('indexPropsType', '');
});

app.use('/check', function (req, res) {
  res.render('indexCheckbox', '');
});

app.use('/style', function (req, res) {
  res.render('indexStyle', '');
});

app.listen(app.get('port'), function () {
});