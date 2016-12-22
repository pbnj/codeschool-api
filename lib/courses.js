const axios = require('axios');
const Promise = require('bluebird');

/**
 * Retrieves courses from a public user profile
 *
 * @param {String} user User's name
 * @param {String} status Course Status [ completed | in_progress ]
 * @returns {Object} Object representing all, completed, or in progress courses
 */
module.exports = (user, status) => new Promise((resolve, reject) => {
  axios.get(`https://www.codeschool.com/users/${user}.json`)
      .then((resp) => {
        if (status === 'completed' || status === 'in_progress') {
          resolve(resp.data.courses[status]);
        } else {
          resolve(resp.data.courses);
        }
      })
      .catch(err => reject(err));
});
