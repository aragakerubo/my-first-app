import React from "react";

// function CookingInstructions(props) {
// 	const InstructionsList = props.instructions.map((instruction, index) => (
// 		<li key={index}>{instruction}</li>
// 	));

// 	return (
// 		<section className="instructions">
// 			<h3>Cooking Instructions</h3>
// 			<ol>{InstructionsList}</ol>
// 		</section>
// 	);
// }

class CookingInstructions extends React.Component {
	render() {
		const InstructionsList = this.props.instructions.map(
			(instruction, index) => <li key={index}>{instruction}</li>
		);

		return (
			<section className="instructions">
				<h3>Cooking Instructions</h3>
				<ol>{InstructionsList}</ol>
			</section>
		);
	}
}

export default CookingInstructions;
