/**
 * Created by dibster on 20/11/14.
 */
var operatorKey = 'ucGgQiSMTYa6rl0VjJzBPCcCfK6xRwa4uiMTCxH8C4JUetqnjbscuxi9YPDLQKmASp5uR1jQo0Sbauui';

var app = new EVT.App(operatorKey);
var helper = new EVTHelper();

describe("Create User Anonymously", function(){
  window.localStorage.clear();
  it("should create an anonymous User", function(done){
    helper.getUserContext(EVT, app).then(function (user) {
      expect(user.type).toBe('anonymous');
      done();
    });
  });

  it("should use already created User", function(done){
    helper.getUserContext(EVT, app).then(function (user) {
      // id user retirved from local storage then is undefined
      expect(user.type).toBe(undefined);
      done();
    });
  });

  it("should decode a parameter", function(done){

    parmId = helper.getParameterByName("http://dave.com?Action=123", "Action");
    expect(parmId).toBe("123");
    done();
  });


});


//    page.uploadFile('input[name=scanThng_upload]', 'testimages/classicBottle.jpg');
