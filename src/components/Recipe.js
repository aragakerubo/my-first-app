import React from "react";
import Ingredients from "./Ingredients";
import CookingInstructions from "./CookingInstructions";

// function Recipe(props) {
// 	return (
// 		<section id={props.recipeItems.id} className="recipe">
// 			<h1>{props.recipeItems.title}</h1>
// 			<Ingredients ingredients={props.recipeItems.ingredients} />
// 			<CookingInstructions
// 				instructions={props.recipeItems.instructions}
// 			/>
// 		</section>
// 	);
// }

class Recipe extends React.Component {
	render() {
		return (
			<section id={this.props.recipeItems.id} className="recipe">
				<h1>{this.props.recipeItems.title}</h1>
				<Ingredients ingredients={this.props.recipeItems.ingredients} />
				<CookingInstructions
					instructions={this.props.recipeItems.instructions}
				/>
			</section>
		);
	}
}

export default Recipe;
