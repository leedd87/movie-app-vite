import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import "../styles/card.css";

const Card = ({ movie }) => {
	return (
		<>
			{/* <LinkRouter to={`/movie/${movie.id}`}>
				<div key={movie.id} className="col-span-1 flex flex-col card">
					<img src={movie.image} alt="" />
					<h2 className="text-black text-xl p-2">{movie.title}</h2>
				</div>
			</LinkRouter> */}

			<div className="card-details">
				<img src={movie.image} alt="" />
				<p className="text-title">{movie.title}</p>
				<p className="text-body">Producer: {movie.producer}</p>
				<p className="text-body">Release date: {movie.release_date}</p>
			</div>
			<LinkRouter to={`/movie/${movie.id}`}>
				<button className="card-button">More info</button>
			</LinkRouter>
		</>
	);
};

export default Card;
