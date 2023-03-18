const { displayMovies } = require('./index.js');
const { addMoviesCounter } = require('./modules/counter.js');

describe('Items Count', () => {
  it('No items count', () => {
    const arr = [];

    displayMovies(arr);

    expect(addMoviesCounter('list-of-shows')).toBe(0);
  });

  it('Full Items Count', async () => {
    const arr = [
      {
        show: { id: 0, image: { medium: 'src' }, name: 'name' },
        likes: 0,
      },
      {
        show: { id: 0, image: { medium: 'src' }, name: 'name' },
        likes: 0,
      },
    ];

    await displayMovies(arr);

    expect(addMoviesCounter('ul li')).toBe(2);
  });
});
