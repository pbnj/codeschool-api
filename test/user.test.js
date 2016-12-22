const { describe, it } = require('mocha');
const { expect } = require('chai');

const { user } = require('../index');

describe('user', () => {
  it('shows user profile for a given user', () => {
    user('pmbenjamin').then(data => expect(data).to.contain('username'));
  });
});
