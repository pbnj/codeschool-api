const axios = require('axios');
const Promise = require('bluebird');

/**
 * Retrieves courses from a public user profile
 *
 * @param {String} user User's name
 * @returns {Object} Object representing a public user's profile
 */
module.exports = user => new Promise((resolve, reject) => {
  axios.get(`https://www.codeschool.com/users/${user}.json`)
      .then(resp => resolve(resp.data.user))
      .catch(err => reject(err));
});
