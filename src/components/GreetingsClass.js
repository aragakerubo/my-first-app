import React from "react";

class GreetingsClass extends React.Component {
	render() {
		return (
			<h1>
				Hello from class, {this.props.name}! You are a{" "}
				{this.props.occupation}.
			</h1>
		);
	}
}

export default GreetingsClass;
