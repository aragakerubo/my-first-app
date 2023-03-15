import React from "react";

function GreetingsFunc(props) {
	return (
		<div>
			<h1>
				Hello, {props.name}! You are a {props.occupation}.
			</h1>
			<h2>Second</h2>
		</div>
	);
}

export default GreetingsFunc;
