const API_KEY = 'd9b2a8e4929d31f3c3363f94bf5b0782';

// Функція для виконання запиту до API
async function apiCall(endpoint) {
  const url = `https://api.themoviedb.org/3${endpoint}&api_key=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Функція для отримання списку найпопулярніших фільмів
export async function getTrendingMovies() {
  return apiCall('/trending/movie/day?');
}

// Функція для пошуку фільму за ключовим словом
export async function searchMovies(query) {
  return apiCall(`/search/movie?query=${query}&`);
}

// Функція для отримання повної інформації про фільм
export async function getMovieDetails(movieId) {
  return apiCall(`/movie/${movieId}?`);
}

// Функція для отримання інформації про акторський склад фільму
export async function getMovieCredits(movieId) {
  return apiCall(`/movie/${movieId}/credits?`);
}

// Функція для отримання оглядів фільму
export async function getMovieReviews(movieId) {
  return apiCall(`/movie/${movieId}/reviews?`);
}