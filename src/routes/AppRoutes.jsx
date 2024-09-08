import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingSpinner from "../utils/LoadingSpinner";

// PAGES con lazy loading
const Home = lazy(() => import("../pages/Home/Home"));
const Category = lazy(() => import("../pages/Category/Category"));
const Item = lazy(() => import("../pages/Item/Item"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const Cart = lazy(() => import("../pages/Cart/Cart"));
const Checkout = lazy(() => import("../pages/Checkout/Checkout"));

const AppRoutes = () => {
	return (
		<Suspense fallback={<LoadingSpinner />}>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/category/:categoryID" element={<Category />} />
				<Route exact path="/contact" element={<Contact />} />
				<Route exact path="/item/:id" element={<Item />} />
				<Route exact path="/cart" element={<Cart />} />
				<Route exact path="/checkout" element={<Checkout />} />
			</Routes>
		</Suspense>
	);
};

export default AppRoutes;
