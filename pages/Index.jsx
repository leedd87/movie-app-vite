import React from "react";
import Footer from "../src/components/Footer";
import Hero from "../src/components/Hero";
import Movies from "../src/components/Movies";

const Index = ({ movies }) => {
	return (
		<div>
			<Hero />
			<Movies movies={movies} />
			<Footer />
		</div>
	);
};

export default Index;
