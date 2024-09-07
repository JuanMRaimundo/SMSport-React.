import Cart from "../../../assets/icons/cart.png";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../contexts/CartContext";

import "./styles.css";

function CartWidget() {
	const { cart } = useContext(CartContext);
	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		//visualizamos cantidad de productos en el carrito
		const newTotalItems = cart.reduce(
			(total, item) => total + item.quantity,
			0
		);
		setTotalItems(newTotalItems);
	}, [cart]);

	return (
		<div className="cart-icon">
			<img src={Cart} alt="cart" className="" />

			<p>{totalItems}</p>
		</div>
	);
}

export default CartWidget;
