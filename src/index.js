import './style.css';
import moviesApi from './api.js';

const displayMovies = async () => {
  const listOfMovies = document.getElementById('list-of-shows');
  listOfMovies.innerHTML = '';

  moviesApi.forEach(async (item) => {
    try {
      const response = await fetch(item);
      const data = await response.json();
      if (!response.ok) {
        listOfMovies.innerHTML = 'Server Down';
      }
      data.movie.forEach((item) => {
        listOfMovies.innerHTML += `
                    <section class="food_items flex">
                      <div class="">
                        <span class="" id=${item.idMeal}>
                        </span>
                      </div>
                      <div class="meal_image">
                        <img class="meal_image" src="${item.strMealThumb}" alt="asdf">
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
                        <button class="button">Reservations</button>
                    </section>`;
      });
    } catch (err) {
      listOfMovies.innerHTML = 'err';
    }
  });
};

export default displayMovies();