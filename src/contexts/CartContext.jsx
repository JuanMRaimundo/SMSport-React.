import { createContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

export const CartContext = createContext();

const initialCartState = [];

export const CartProvider = ({ children }) => {
	const [cart, dispatch] = useReducer(cartReducer, initialCartState);

	const addToCart = (item, quantity) => {
		dispatch({ type: "ADD_TO_CART", payload: { ...item, quantity } });
	};

	const removeFromCart = (id) => {
		dispatch({ type: "REMOVE_FROM_CART", payload: id });
	};

	const updateQuantity = (id, quantity) => {
		dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
	};

	const clearCart = () => {
		dispatch({ type: "CLEAR_CART" });
	};

	const cartTotal = () => {
		return cart.reduce((total, item) => total + item.quantity, 0);
	};

	const sumTotal = () => {
		return cart.reduce((total, item) => total + item.quantity * item.precio, 0);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				updateQuantity,
				clearCart,
				cartTotal,
				sumTotal,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
