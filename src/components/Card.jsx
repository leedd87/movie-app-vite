import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import "../styles/card.css";

const Card = ({ movie }) => {
	return (
		<>
			<LinkRouter to={`/movie/${movie.id}`}>
				<div key={movie.id} className="col-span-1 flex flex-col card">
					<img src={movie.image} alt="" />
					<h2 className="text-black text-xl p-2">{movie.title}</h2>
				</div>
			</LinkRouter>
		</>
	);
};

export default Card;
