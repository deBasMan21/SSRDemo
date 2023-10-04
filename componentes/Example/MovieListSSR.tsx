import Movie from "@/models/Movie";

const MovieListSSR = async () => {
    const url = 'https://moviesminidatabase.p.rapidapi.com/movie/imdb_id/byTitle/Harry%20Potter/';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '994d69b14amsha92971d9137b5fap10df27jsn63fc46abced3',
            'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
        },
        caches: "no-cache"
    };

    const response = await fetch(url, options);
    const result = await response.json();
    const movies: Movie[] = result.results;

    return (
        <div>
            <h1>SSR Page</h1>
            { movies.map((movie) => {
                return <h2 key={movie.imdb_id}>{movie.title}</h2>
            }) 
            }
        </div>
    )
}

export default MovieListSSR