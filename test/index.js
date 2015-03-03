var expect = require('chai').expect;
var agnosticize = require('../');

describe('agnosticize', function() {
  it('should work', function() {
    expect(agnosticize('http://www.google.com')).to.equal('//www.google.com');
    expect(agnosticize('https://www.google.com')).to.equal('//www.google.com');
    expect(agnosticize('ftp://www.google.com')).to.equal('//www.google.com');
    expect(agnosticize('HTTP://www.google.com')).to.equal('//www.google.com');
  });
});