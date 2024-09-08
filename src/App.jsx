import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { CartProvider } from "./contexts/CartContext";
import AppRoutes from "./routes/AppRoutes";
import "./styles/global.css";

function App() {
	return (
		<CartProvider>
			<Router>
				<Navbar />
				<AppRoutes />
			</Router>
		</CartProvider>
	);
}

export default App;
