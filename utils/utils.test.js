const expect = require('expect');
const utils = require('./utils');

describe('utils', () => {
  it('should add two numbers', () =>{
    var res = utils.add(33, 11);
    expect(res).toBe(44).toBeA('number');


  });

  it('should square a number', ()=> {
    var res = utils.square(2);
    expect(res).toBe(4).toBeA('number');

  } );

  it('should expect some values', ()=> {
    // expect(12).toNotBe(11);
    // expect([1]).toEqual([1]);
    expect([2,3,4]).toInclude(3);
  });
});
//   it('should async square a number', (done) => {
//     utils.asyncSquare(2, (square) => {
//       expect(square).toBe(4).toBeA('number');
//       done();
//     });
//   });
// })
//
// it('should add two numbers', () =>{
//   var res = utils.add(33, 11);
//   expect(res).toBe(44).toBeA('number');
//
//
// });
//
// it('should square a number', ()=> {
//   var res = utils.square(2);
//   expect(res).toBe(4).toBeA('number');
//
// } );
//
// it('should expect some values', ()=> {
//   // expect(12).toNotBe(11);
//   // expect([1]).toEqual([1]);
//   expect([2,3,4]).toInclude(3);
// });
//
// it('should async square a number', (done) => {
//   utils.asyncSquare(2, (square) => {
//     expect(square).toBe(4).toBeA('number');
//     done();
//   });
// });

// it('should asyncAdd two nubers', (done) => {
//   utils.asyncAdd(4,3, (sum) => {
//     expect(sum).toBe(7).toBeA('number');
//     done();
//   });
// });

it('should verify first and last names are set', () => {
  //should verify first and last names are set
  //assert it includes first and last name with proper values
  user = {}
  var res = utils.setName(user,"Dan Schwartz");
  var name = "Dan Schwartz".split(" ");


  expect(res).toInclude({
    firstName: 'Dan',
    lastName: 'Schwartz'
  });
})
