const commentKey = 'HJ3nJrQxKFWMKnh6RtwV';
const commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${commentKey}/comments`;

const likesApi = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const likesKey = 'MStmYRS4tH0jZSlJGdVr';
const likesUrl = `${likesApi}/apps/:${likesKey}/comments/`;

const moviesApi = 'https://api.tvmaze.com/shows/1/episodes';

export default { moviesApi, commentUrl, likesUrl };