import "./App.css";
import GreetingsFunc from "./components/GreetingsFunc";
import GreetingsClass from "./components/GreetingsClass";

function App() {
	return (
		<div className="App">
			<GreetingsFunc name="Jane Doe" occupation="engineer" />
			<GreetingsFunc name="John Doe" />
			<GreetingsFunc name="Joe Doe" />
			<GreetingsClass name="Jack Doe" occupation="accountant" />
			<GreetingsClass />
		</div>
	);
}

// function add(a, b) {
// 	return a + b;
// }

// add(2, 3);
// add(6, 7);

export default App;
