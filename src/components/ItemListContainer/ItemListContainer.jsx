import { useEffect, useState } from "react";

//DATA

import { db } from "../../firebase/firebaseConfig.js";
//COMPONENTS
import Card from "../Card/Card.jsx";
import { Grid, LinearProgress } from "@mui/material";
import { collection, query, getDocs } from "firebase/firestore";
//STYLES
import "./styles.css";

function ItemListContainer() {
	const [productos, setProductos] = useState([]);

	useEffect(() => {
		//tomando datos de Firestore
		const getProducts = async () => {
			const q = query(collection(db, "sportswear"));
			const docs = [];
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setProductos(docs);
		};
		getProducts();
	}, []);

	return (
		<Grid className="list">
			{productos.length > 0 ? (
				productos.map((prod) => (
					<Grid item xs={12} md={6} lg={3} key={prod.id}>
						<Card data={prod} stock={5} />
					</Grid>
				))
			) : (
				<LinearProgress color="warning" />
			)}
		</Grid>
	);
}

export default ItemListContainer;
