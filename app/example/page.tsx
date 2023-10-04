import MovieListCSR from "@/componentes/Example/MovieListCSR";
import MovieListSSR from "@/componentes/Example/MovieListSSR";

const ExamplePage = async () => {

    return (
        <div className="flex flex-row justify-evenly">
            <MovieListCSR/>
            <MovieListSSR/>
        </div>
    )
}

export default ExamplePage