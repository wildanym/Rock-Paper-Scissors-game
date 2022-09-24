import "./App.css";
import "./index.css";
import Header from "./components/Header";
import PlayArea from "./components/PlayArea";
import Rules from "./components/Rules";
import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);
	function getData(data) {
		setCount(count + data);
	}
	return (
		<div className="relative flex flex-col items-center justify-between gap-16 p-8 sm:h-full md:h-screen bgColor">
			<Header count={count} />
			<PlayArea setCount={getData} />
			<Rules />
		</div>
	);
}

export default App;
