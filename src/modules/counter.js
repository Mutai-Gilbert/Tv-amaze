const addMoviesCounter = (data) => {
  const countMovies = document.querySelector('.count-movies');
  const numberOfMovies = document.createElement('span');
  numberOfMovies.innerHTML = `(${data.length})`;
  countMovies.append(numberOfMovies);
  return data.length;
};
export default addMoviesCounter;