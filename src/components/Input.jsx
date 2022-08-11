import React from "react";
import "../styles/input.css";

const Input = () => {
	const [input, setInput] = useState("");

	return (
		<>
			<div className="form flex justify-center items-center">
				<input
					className="input"
					placeholder="Search movie"
					required=""
					type="text"
					onChange={(e) => {
						console.log(input);
					}}
				/>
				<span className="input-border"></span>
			</div>
		</>
	);
};

export default Input;
