exports.calculateAge = (birthday) => {
  const today = new Date();
  const birthDate = new Date(birthday);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }
  return age;
};

exports.jsonResponse = (body = null, status = 200) => ({
  statusCode: status,
  body: JSON.stringify(body),
});

module.exports.getBody = (body) => JSON.parse(body);
