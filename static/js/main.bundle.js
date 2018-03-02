'use strict';

var _contentRequest = require('contentRequest');

var _contentRequest2 = _interopRequireDefault(_contentRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_contentRequest2.default.getJSONContent('eng').then(function (response) {
  return console.log(response.data.heading);
});
