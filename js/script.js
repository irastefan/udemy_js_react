"use strict";

// Lesson 19 

const numberOfFilms = +prompt('numberOfFilms?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const lastFilm1 = prompt('Last film'),
      ratingFilm1 = prompt('Rating film'),
      lastFilm2 = prompt('Last film'),
      ratingFilm2 = prompt('Rating film');

personalMovieDB.movies = {
    [lastFilm1]: ratingFilm1,
    [lastFilm2]: ratingFilm2
};

console.log(personalMovieDB);