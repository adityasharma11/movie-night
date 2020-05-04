import { API_URL, API_KEY } from "../Config/config";

export const fetchData = (imdbId) => {
  return fetch(`${API_URL}/?apikey=${API_KEY}&i=${imdbId}`).then(response => response.json());
};
