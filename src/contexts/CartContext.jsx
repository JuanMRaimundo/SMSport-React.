import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	//Verifica si está en el carro
	const isInCart = (id) => {
		return cart.some((x) => x.id === id);
	};
	//Agrega al carro de compras y se le agrega una propiedad cantidad
	const addToCart = (item, quantity) => {
		if (isInCart(item.id)) {
			let pos = cart.findIndex((x) => x.id === item.id);
			cart[pos].quantity += quantity;
			setCart([...cart]);
		} else {
			setCart([...cart, { ...item, quantity: quantity }]);
		}
	};

	const removeFromCart = (itemId) => {
		const products = cart.filter((item) => item.id !== itemId);
		setCart(products);
	};

	const clearCart = () => {
		setCart([]);
	};

	const cartTotal = () => {
		return cart.reduce((total, item) => (total += item.quantity), 0);
	};

	const sumTotal = () => {
		return cart.reduce(
			(total, item) => (total += item.quantity * item.precio),
			0
		);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				clearCart,
				cartTotal,
				sumTotal,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
