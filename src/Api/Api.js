import axios from "axios";
const API_KEY = "a9b59899abe04ed021d670db47633005";
const API_URL = "https://api.themoviedb.org/3";

export const Trending = {
  getTrending() {
    return axios.get(`${API_URL}/trending/all/day?api_key=${API_KEY}`);
  }
};

export const Search = {
  getResaults(query) {
    return axios.get(
      `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
  }
};

export const Movie = {
  getById(id) {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
  },
  getRecomendations(id) {
    return axios.get(
      `${API_URL}/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
    );
  }
};
