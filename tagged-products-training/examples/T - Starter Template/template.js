/*global EVT, $  */
/*jslint devel: true */

  var projectKey = '';
// Instantiate Base EVRYTHNG Object
  var app = new EVT.App(projectKey);

  function doSomething() {
    'use strict';
    app.product().read().then(function (products) {
      $(document).ready(function () {
        $('#results').append('<h2>Product</h2>' + JSON.stringify(products, null, 2));
      });
    });
  }

