import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Details = ({ movies }) => {
	const [movie, setMovie] = useState();
	const { id } = useParams();
	console.log(id);

	//OPCION 1
	// const thisMovie = movies.find((movie) => movie.id === id);
	// console.log(thisMovie);

	//OPCION 2
	useEffect(() => {
		axios
			.get(`https://ghibliapi.herokuapp.com/films/${id}`)
			.then((res) => setMovie(res.data));
		// eslint-disable-next-line
	}, []);

	console.log(movie);
	return (
		<div>
			<img src={movie?.movie_banner} alt="" />
		</div>
	);
};

export default Details;
