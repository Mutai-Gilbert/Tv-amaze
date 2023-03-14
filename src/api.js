const commentApi = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const commentKey = 'QHq7xdcE5HweJib9xXlp';
const commentUrl = `${commentApi}/apps/:${commentKey}/comments/`;

const likesApi = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const likesKey = 'MStmYRS4tH0jZSlJGdVr';
const likesUrl = `${likesApi}/apps/:${likesKey}/comments/`;

const moviesApi = 'https://api.tvmaze.com/shows/1/episodes';

export default { moviesApi, commentUrl, likesUrl };