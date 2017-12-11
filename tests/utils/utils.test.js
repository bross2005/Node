const expect = require('expect');
const utils = require ('./utils');


it('should square the number', (done) => {
utils.square(5, (sum) => {
expect(sum).toBe(25).toBeA('number');
done();
})
});

it('should compare names', () => {
    var user = {age:20, location:'moscow'};
    var res = utils.setNames(user, 'vlad dat');

expect(user).toInclude({firstname:'vlad', lastname:'dat'});
});
