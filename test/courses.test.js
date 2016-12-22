const { describe, it } = require('mocha');
const { expect } = require('chai');

const { courses } = require('../index');

describe('courses', () => {
  it('shows courses for a given user', () => {
    courses('pmbenjamin').then(data => expect(data).to.contain('completed'));
  });

  it('shows completed courses for a given user', () => {
    courses('pmbenjamin', 'completed').then(data => expect(data).to.contain('completed'));
  });

  it('shows in progress courses for a given user', () => {
    courses('pmbenjamin', 'in_progress').then(data => expect(data).to.contain('in_progress'));
  });
});
