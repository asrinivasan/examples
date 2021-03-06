'use strict';

describe('Controller: UnrecognisedCtrl', function () {

  // load the controller's module
  beforeEach(module('trainingApp'));

  var UnrecognisedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UnrecognisedCtrl = $controller('UnrecognisedCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
