import React, { useState, useEffect } from "react";
import "../styles/input.css";
import Card from "./Card";
import axios from "axios";

const Movies = () => {
	const [input, setInput] = useState("");
	const [movies, setMovies] = useState();

	useEffect(() => {
		axios
			.get("https://ghibliapi.herokuapp.com/films/")
			.then((res) => setMovies(res.data));
	}, []);

	let moviesSlice = movies?.slice(0, 20);

	let arrayFilter = moviesSlice?.filter((e) =>
		e.title.toLowerCase().trim().startsWith(input)
	);

	console.log(movies);

	return (
		<div className="h-min-[60vh] flex justify-center items-center flex-col">
			<div className="form my-5">
				<input
					className="input"
					placeholder="Search movie"
					required=""
					type="text"
					onKeyUp={(e) => {
						setInput(e.target.value);
					}}
				/>
				<span className="input-border"></span>
			</div>
			<div className="flex justify-around mx-auto flex-wrap items-center gap-7 container mb-10">
				{arrayFilter
					? arrayFilter?.map((movie) => (
							<div className="card" key={movie.id}>
								<Card movie={movie} />
							</div>
					  ))
					: null}
			</div>
		</div>
	);
};

export default Movies;
