/**
 * Created by dibster on 28/10/14.
 *
 * uses request library https://github.com/request/request
 */
var operatorKey = 'KgfsWUbXUKsTbp3EmBsWIGzrNNd7SpoleNVfCf4nc4Bh9p82AuA8SYAi1IlCwsntuk1UKc023TAYT3aL';

var request = require('request');

var options = {
  url: 'https://api.evrythng.com/products',
  headers: {
    'Authorization': operatorKey
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info);
  }
  else {
    console.log(error);
  }
}

request(options, callback);