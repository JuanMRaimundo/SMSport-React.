import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

//STYLES
import "./styles.css";
import { Add, Remove } from "@mui/icons-material";

export const ItemCount = ({ product }) => {
	const { cart, addToCart, removeFromCart, clearCart, cartTotal } =
		useContext(CartContext);
	// Encuentra el producto específico en el carrito
	const cartProduct = cart.find((item) => item.id === product.id);

	// Calcula el stock inicial del producto
	const initialStock = product.stock;
	const availableStock =
		initialStock - (cartProduct ? cartProduct.quantity : 0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		// Actualiza el stock disponible cuando cambie el carrito
		if (cartProduct) {
			const newAvailableStock = initialStock - cartProduct.quantity;
			if (newAvailableStock !== availableStock) {
				setCount(0); // Restablece el contador si el stock cambió
			}
		}
	}, [cartProduct, initialStock, availableStock]);

	const increment = () => {
		if (count < availableStock) {
			setCount(count + 1);
		}
	};

	const decrement = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	const addToCartHandler = () => {
		if (count > 0) {
			addToCart(product, count);
			setCount(0);
		}
	};

	return (
		<div className="counter">
			<p className="card-stock">Stock: {availableStock}</p>
			<button
				className="btn btn-warning"
				onClick={decrement}
				disabled={count === 0}
			>
				<Remove />
			</button>
			<div className="alert alert-secondary">{count}</div>
			<button
				className="btn btn-warning"
				onClick={increment}
				disabled={count === initialStock}
			>
				<Add />
			</button>
			<button
				onClick={addToCartHandler}
				className="btn btn-dark"
				disabled={
					count === 0 || count + (cartProduct?.quantity || 0) > initialStock
				}
			>
				Agregar al Carrito
			</button>

			<Link to="/">
				<Button>Volver</Button>
			</Link>
			<Link to="../../Cart">
				<Button disabled={availableStock == 0}>Finalizar Compra</Button>
			</Link>
		</div>
	);
};
