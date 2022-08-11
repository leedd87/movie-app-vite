import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Index from "../pages/Index";
import Details from "./components/Details";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/movie/:id" element={<Details />} />
			</Routes>
		</div>
	);
}

export default App;
