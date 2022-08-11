import React, { useState, useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom";
import Input from "./Input";
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

	return (
		<div className="flex justify-center items-center flex-col">
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
			<div className="grid grid-cols-4 gap-7 container mb-10">
				{arrayFilter
					? arrayFilter?.map((movie) => (
							// <div key={movie.id} className="col-span-1 flex flex-col">
							// 	<img src={movie.image} alt="" />
							// 	<LinkRouter to={`/movie/${movie.id}`}>
							// 		<h2 className="text-black">{movie.title}</h2>
							// 	</LinkRouter>
							// </div>
							<Card movie={movie} />
					  ))
					: null}
			</div>
		</div>
	);
};

export default Movies;
