const axios = require('axios');
const { ALBUMS_BASE_URL } = require('../constants');
const { buildConfig } = require('../helpers');

exports.getAlbums = () => axios.get(`${ALBUMS_BASE_URL}/albums`)
  .then((albums) => albums)
  .catch(() => { throw new Error('An error occurred while trying to get the albums'); });

exports.getAlbum = (id) => {
  const options = buildConfig({
    host: ALBUMS_BASE_URL,
    endpoint: `albums/${id}`,
  });
  return axios(options)
    .then((albums) => albums)
    .catch(() => { throw new Error('An error occurred while trying to get the album'); });
};
