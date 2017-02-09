'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// define the folder that will be used for static assets
app.use(_express2.default.static(_path2.default.join(__dirname, '..', 'public')));

// start the server
var env = process.env.NODE_ENV || 'production';
var port = process.env.PORT || 3000;
app.listen(port, function (err) {
  if (err) return console.error(err);

  return console.info('\n      Server running on http://localhost:' + port + ' [' + env + ']\n      Universal rendering: ' + (process.env.UNIVERSAL ? 'enabled' : 'disabled') + '\n    ');
});