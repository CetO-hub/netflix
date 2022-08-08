const key = process.env.REACT_APP_THE_MOVIE_DB_API_KEY;

const requests = {
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestLatest: `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=horro`,
};

export default requests;
