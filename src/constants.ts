export const SLIDE_IN_DURATION = 200;
export const FADE_IN_DURATION = 500;

const BASE_URL = 'https://api.themoviedb.org/3/';
const MOVIES_API = BASE_URL + 'search/movie';
const API_KEY = 'api_key=6de482bc8c5768aa3648618b9c3cc98a';
const INCLUDE_ADULT = 'include_adult=false';
const LANGUAGE = 'language=en-US';
const PAGE = 'page=1';

export const MOVIES_URL = `${MOVIES_API}?${API_KEY}&${INCLUDE_ADULT}&${LANGUAGE}&${PAGE}`;

export const MOVIE_API = BASE_URL + 'movie/';
export const COMBINE_QUERIES = API_KEY + '&' + LANGUAGE;

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';
