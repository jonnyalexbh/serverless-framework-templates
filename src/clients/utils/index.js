exports.randomGift = () => {
  const gifts = ['Bag', 'Shoes', 'Mobile'];
  const random = Math.floor(Math.random() * gifts.length);
  return gifts[random];
};
