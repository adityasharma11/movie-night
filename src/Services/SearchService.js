import { API_URL, API_KEY } from "../Config/config";

export const fetchSearchData = (value, type, pageNum = 1) => {
  value = value.split(" ").join("%20");
  const url = `${API_URL}?apikey=${API_KEY}&s=${value}&type=${type}&page=${pageNum}`;
  return fetch(url).then(response => response.json());
};
