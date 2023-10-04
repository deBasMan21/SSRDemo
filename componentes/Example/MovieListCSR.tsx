"use client"

import Movie from "@/models/Movie";
import { useState, useEffect } from "react";

const MovieListCSR = () => {
    let [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const url = 'https://moviesminidatabase.p.rapidapi.com/movie/imdb_id/byTitle/Harry%20Potter/';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '994d69b14amsha92971d9137b5fap10df27jsn63fc46abced3',
                'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
            },
            caches: "no-cache"
        };

        try {
            fetch(url, options)
                .then((res) => res.json())
                .then((res) => {console.log(res); return res })
                .then((data) => setMovies(data.results));
        } catch (error) {
            console.error(error);
        }
    }, [setMovies])

    return (
        <div>
            <h1>CSR Page</h1>
            { movies.map((movie) => {
                return <h2 key={movie.imdb_id}>{movie.title}</h2>
            }) 
            }
        </div>
    )
}

export default MovieListCSR