const { describe, it } = require('mocha');
const { expect } = require('chai');

const { badges } = require('../index');

describe('badges', () => {
  it('shows badges for a given user', () => {
    badges('pmbenjamin').then(data => expect(data).to.contain('badge'));
  });
});
