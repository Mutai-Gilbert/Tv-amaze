const comments = [
  {
    id: 1,
    item_id: 123,
    username: 'user1',
    comment: 'comment 1',
  },
  {
    id: 2,
    item_id: 123,
    username: 'user2',
    comment: 'comment 2',
  },
  {
    id: 3,
    item_id: 123,
    username: 'user3',
    comment: 'comment 3',
  },
];

const getComments = async (id) => {
  if (id === 123) {
    return comments;
  }
  return [];
};

module.exports = getComments;
