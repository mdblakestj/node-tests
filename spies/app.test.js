const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('app', () =>{
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);
  it('Should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Andrew', 25);
    expect(spy).toHaveBeenCalledWith('Andrew', 25);
  })
  it('Should call saveUser with user object', () => {
    var email = 'mdblakestj@gmail.com';
    var password = 'password'

    app.handleSignup(email, password);
    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });
  })
