import React from "react";
import Hero from "../src/components/Hero";
import Movies from "../src/components/Movies";

const Index = ({ movies }) => {
	return (
		<>
			<Hero />
			<Movies movies={movies} />
		</>
	);
};

export default Index;
