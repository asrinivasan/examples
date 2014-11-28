'use strict';

describe('Controller: ClassicscanCtrl', function () {

  // load the controller's module
  beforeEach(module('cokeApp'));

  var ClassicscanCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClassicscanCtrl = $controller('ClassicscanCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});