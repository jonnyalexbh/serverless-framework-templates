exports.buildConfig = ({
  method = 'get', host, endpoint, data, headers, params,
}) => ({
  method,
  url: `${host}/${endpoint}`,
  headers: {
    'content-type': 'application/json',
    ...headers,
  },
  data,
  params,
});
