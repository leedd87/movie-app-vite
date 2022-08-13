import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom";

const Details = ({ movies }) => {
	const [movie, setMovie] = useState();
	const [people, setPeople] = useState();
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

	useEffect(() => {
		axios
			.get(
				"https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
			)
			.then((res) => console.log(res));
	}, []);

	return (
		<div className="fondo">
			<div
				style={{
					backgroundImage: `url(${movie?.movie_banner})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
				className="w-full h-[500px]"
			></div>
			{/* <img src={movie?.movie_banner} alt="" /> */}
			<div className="flex justify-center items-center border-red-400 mx-auto my-16 container bg-white rounded-2xl border-8 ">
				<div className=" m-3 ">
					<img
						src={movie?.image}
						alt=""
						className="rounded-2xl img-detail"
					/>
				</div>

				<div className="p-8">
					<h1 className="text-2xl font-bold">{movie?.title}</h1>
					<h2>Original title: {movie?.original_title}</h2>
					<h2>
						Original title romanised: {movie?.original_title_romanised}
					</h2>
					<h2>Director: {movie?.director}</h2>
					<h2>Producer: {movie?.producer}</h2>
					<h2>Release date: {movie?.release_date}</h2>
					<h2>Release running time: {movie?.running_time}'</h2>
					<p>{movie?.description}</p>
				</div>
			</div>
		</div>
	);
	1;
};

export default Details;
