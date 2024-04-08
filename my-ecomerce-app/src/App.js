import logo from "./logo.svg";
import "./App.css";
//import Header from "./components/Header"; // Import the Header component
import Homepage from "./components/Homepage";
import LoginPage from "./components/LoginPage";

function App() {
	return (
		<div className="App">
			<LoginPage />
			<Homepage />
			
		</div>
	);
}

export default App;
