module.exports = {
  common: {
    maximumAge: process.env.MAXIMUM_AGE,
  },
  aws: {
    region: process.env.AWS_REGION_CUSTOM,
  },
  dynamodb: {
    table: process.env.DYNAMODB_TABLE,
  },
};
