const commentApi = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const commentKey = 'QHq7xdcE5HweJib9xXlp';
const commentUrl = `${commentApi}/apps/${commentKey}/comments`;

const likesApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const likesKey = 'lOgyxNQpuEBW43CFKeNT';
const likesUrl = `${likesApi}/apps/${likesKey}/likes`;

const moviesApi = 'https://api.tvmaze.com/shows/1/episodes';

export default { moviesApi, commentUrl, likesUrl };
