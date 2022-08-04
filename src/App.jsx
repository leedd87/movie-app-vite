import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Index from "../pages/Index";
import Details from "./components/Details";

function App() {
	const [movies, setMovies] = useState();

	useEffect(() => {
		axios
			.get("https://ghibliapi.herokuapp.com/films/")
			.then((res) => setMovies(res.data));
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Index movies={movies} />} />
				<Route path="/movie/:id" element={<Details movies={movies} />} />
			</Routes>
		</div>
	);
}

export default App;
