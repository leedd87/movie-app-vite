import React from "react";
import Hero from "../src/components/Hero";
import Movies from "../src/components/Movies";

const Index = ({ movies }) => {
	return (
		<div>
			<Hero />
			<Movies movies={movies} />
		</div>
	);
};

export default Index;
