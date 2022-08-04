import React from "react";
import { Link as LinkRouter } from "react-router-dom";

const Movies = ({ movies }) => {
	// const [movies, setMovies] = useState();

	// useEffect(() => {
	// 	axios
	// 		.get("https://ghibliapi.herokuapp.com/films/")
	// 		.then((res) => setMovies(res.data));
	// }, []);

	// console.log(movies);

	let moviesSlice = movies?.slice(0, 20);
	console.log(moviesSlice);

	return (
		<div className="grid grid-cols-4">
			{moviesSlice &&
				moviesSlice.map((movie) => (
					<div key={movie.id} className="col-span-1 flex flex-col">
						<img src={movie.image} alt="" />
						<LinkRouter to={`/movie/${movie.id}`}>
							<h2 className="text-black">{movie.title}</h2>
						</LinkRouter>
					</div>
				))}
		</div>
	);
};

export default Movies;
