exports.randomGift = () => {
  const gifts = ['Bag', 'Shoes', 'Mobile'];
  const random = Math.floor(Math.random() * gifts.length);
  return gifts[random];
};

const randomNumber = (minimum, maximum) => {
  return Math.round(Math.random() * (maximum - minimum) + minimum);
};

exports.getCard = {
  creditCardNumber: `${randomNumber(0000, 9999)}-${randomNumber(0000, 9999)}-${randomNumber(0000, 9999)}-${randomNumber(0000, 9999)}`, 
  expirationDate: `${randomNumber(01, 12)}/${randomNumber(21, 35)}`, 
  securityCode: `${randomNumber(000, 999)}`
};
