const commentKey = 'MMc1FmLd80mPmHV1mx1Z';
const commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${commentKey}/comments`;


const likesApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const likesKey = 'lOgyxNQpuEBW43CFKeNT';
const likesUrl = `${likesApi}/apps/${likesKey}/likes`;

const moviesApi = 'https://api.tvmaze.com/shows/1/episodes';

export default { moviesApi, commentUrl, likesUrl };
