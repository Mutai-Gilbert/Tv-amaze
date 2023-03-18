import addMoviesCounter from './modules/counter.js';

describe('Items Count', () => {
  const arr = [];
  document.body.innerHTML = `
  <div class="count-movies">
  <span></span>
  </div>`;
  test('No items count', () => {
    const tester = addMoviesCounter(arr);
    expect(tester).toBe(0);
  });
});