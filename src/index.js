import './style.css';

const displayMovies = async () => {
  const listOfMovies = document.getElementById('list-of-shows');
  listOfMovies.innerHTML = '';

  const moviesApi = ('https://api.tvmaze.com/shows/1/episodes');

  const response = await fetch(moviesApi);
  const data = await response.json();
  data.forEach((item) => {
    listOfMovies.innerHTML += `
                    <section class="food_items flex">
                      <div class="">
                        <span class="" id=${item.name}>
                        </span>
                      </div>
                      <div class="meal_image">
                        <img class="meal_image" src="${item.image.original}" alt="asdf">
                      </div>
                      <div class="flex actions_name">
                        <p class="meal">${item.strMeal}</p>
                        <div>
                          <i class="fa-solid fa-heart"></i>
                          <span>
                            <p>2 likes</p>
                          </span>
                        </div>
                      </div>
                      <div class="column flex">
                        <button class="button">Comments</button>
                    </section>`;
  });
};

export default displayMovies();