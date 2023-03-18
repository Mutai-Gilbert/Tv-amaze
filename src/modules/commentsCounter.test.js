const getComments = require('./commentsCounter.js');

describe('getComments', () => {
  it('should retrieve comments from the server for a given item ID', async () => {
    const comments = await getComments(123);
    expect(comments).toEqual([
      {
        id: 1, item_id: 123, username: 'user1', comment: 'comment 1',
      },
      {
        id: 2, item_id: 123, username: 'user2', comment: 'comment 2',
      },
      {
        id: 3, item_id: 123, username: 'user3', comment: 'comment 3',
      },
    ]);
  });

  it('should return an empty array if there are no comments for the given item ID', async () => {
    const comments = await getComments(456);
    expect(comments).toEqual([]);
  });
});
