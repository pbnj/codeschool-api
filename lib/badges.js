const axios = require('axios');
const Promise = require('bluebird');

/**
 * Retrieves badges from a public user profile
 *
 * @param {String} user User's name
 * @returns {Object} Object representing user's badges
 */
module.exports = user => new Promise((resolve, reject) => {
  axios.get(`https://www.codeschool.com/users/${user}.json`)
      .then(resp => resolve(resp.data.badges))
      .catch(err => reject(err));
});
