import React from "react";

// const Ingredients = () => {}
// function Ingredients(props) {
// 	const IngredientsList = props.ingredients.map((ingredient, index) => (
// 		<li key={index}>{ingredient}</li>
// 	));

// 	return (
// 		<section className="ingredients">
// 			<h3>Ingredients</h3>
// 			<ul>{IngredientsList}</ul>
// 		</section>
// 	);
// }

class Ingredients extends React.Component {
	render() {
		const IngredientsList = this.props.ingredients.map(
			(ingredient, index) => <li key={index}>{ingredient}</li>
		);

		return (
			<section className="ingredients">
				<h3>Ingredients</h3>
				<ul>{IngredientsList}</ul>
			</section>
		);
	}
}

export default Ingredients;
