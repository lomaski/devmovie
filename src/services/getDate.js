import api from "./api";

export async function getMovies() {
    const { 
        data: { results } } = 
        await api.get('/movie/popular');
    
    return results[1];}

export async function getTopRated() {
    const { 
        data: { results } } = 
        await api.get('/movie/top_rated');
    
    return results;}

export async function getTopRatedTv() {
    const { 
        data: { results } } = 
        await api.get('/tv/top_rated');
    
    return results;}

export async function getPopular() {
    const { 
        data: { results } } = 
        await api.get('/movie/popular');
    
    return results;}

export async function getTopPopular() {
    const { 
        data: { results } } = 
        await api.get('/person/popular');
    
    return results;}

export async function getMovie(movieId) {
    const { data } = await api.get(`/movie/${movieId}`);

    return data;
}

export async function getMovieVideos(movieId) {
    const { data: { results } } = await api.get(`/movie/${movieId}/videos`);
    return results;
}

export async function getSimilar(movieId) {
    const { data: { results } } = await api.get(`/movie/${movieId}/similar`);
    return results;
}

export async function getDetails(movieId) {
    const { data } = await api.get(`/movie/${movieId}`); 
    return data;
}

export async function getMovieById(movieId) {
    const { data } = await api.get(`/movie/${movieId}`);
    return data;
}

export async function getMovieCredits(movieId) {
    const { data: { cast } } = await api.get(`/movie/${movieId}/credits`);
    return cast;
}

export async function getMovieChanges() {
    const { 
        data: { results } } = 
        await api.get('/movie/changes');
    
    return results;
}

export async function getMovieM(page = 1) {
  const { data: { results } } = await api.get('/movie/popular', {
    params: {
      page: page 
    }
  });
  return results;
}

export async function getTvM(page = 1) {
    const { 
        data: { results }} = 
        await api.get('/discover/tv', {
            params: {
                page: page 
        }
        });
    return results;
}

export async function getMtv(id, page = 1) {
    const { 
        data: { results }} = 
        await api.get(`/discover/${id}?page=${page}`);
    return results;
}


/* Genres */
export async function getGenres() {
    const {data: { genres }} = 
        await api.get('/genre/movie/list');
    return genres;
}

export async function getTvGenres() {
    const {data: { genres }} = 
        await api.get('/genre/tv/list');
    return genres;
}