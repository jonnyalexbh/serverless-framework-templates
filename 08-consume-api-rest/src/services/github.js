const axios = require('axios');
const { buildConfig } = require('../helpers');
const { github } = require('../config');

exports.getRepositories = () => {
  const options = buildConfig({
    host: github.url,
    endpoint: 'user/repos',
    headers: {
      Authorization: github.token,
    },
    params: {
      sort: 'pushed',
      affiliation: 'owner',
    },
  });
  return axios(options)
    .then((repository) => repository)
    .catch(() => {
      throw new Error('An error occurred while trying to get the repos');
    });
};
