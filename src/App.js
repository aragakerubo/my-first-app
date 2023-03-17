import "./App.css";
import React from "react";
// import GreetingsFunc from "./components/GreetingsFunc";
// import GreetingsClass from "./components/GreetingsClass";
import Recipe from "./components/Recipe";
import { recipes } from "./data";

function App() {
	const RecipeCards = recipes.map((recipe) => (
		<Recipe key={recipe.id} recipeItems={recipe} />
	));

	return (
		<div className="App">
			<h1>Menu</h1>
			{React.createElement(
				"div",
				null,
				React.createElement(
					"ul",
					null,
					React.createElement(
						"li",
						null,
						"New menu items out now: 🍕🍔🍟🥓🌮🥪🥙🥗!"
					),
					React.createElement(
						"li",
						null,
						"Home deliveries coming soon."
					)
				)
			)}
			{RecipeCards}
		</div>
	);
}

// function add(a, b) {
// 	return a + b;
// }

// add(2, 3);
// add(6, 7);

export default App;
