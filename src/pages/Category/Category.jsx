import React from "react";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
//DATA
import { db } from "../../firebase/firebaseConfig.js";
//COMPONENTS
import Card from "../../components/Card/Card.jsx";
import { LinearProgress, Grid } from "@mui/material";
import { collection, query, getDocs } from "firebase/firestore";
//STYLES
import "./styles.css";

function Category() {
	const [productos, setProductos] = useState([]);
	const [isLoading, setisLoading] = useState(false);
	let { categoryID } = useParams();

	useEffect(() => {
		setisLoading(true);

		const filteredProductPromise = async () => {
			try {
				const q = query(collection(db, "sportswear"));
				const querySnapshot = await getDocs(q);

				// Mapea los documentos a un array de objetos con un 'id' personalizado
				const docs = querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));

				// Encuentra el producto por 'id'
				const selectedProducts = docs.filter(
					(prod) => prod.category === categoryID
				);

				setProductos(selectedProducts);
			} catch (error) {
				console.error("Error al obtener los datos:", error);
			}
			setisLoading(false);
		};

		filteredProductPromise();
	}, [categoryID]);

	return isLoading ? (
		<div>
			<LinearProgress color="warning" className="progres" />
		</div>
	) : (
		<Grid className="list">
			{productos.map((prod) => (
				<Grid item xs={12} md={6} lg={3} key={prod.id}>
					<Card data={prod} stock={5} />
				</Grid>
			))}
		</Grid>
	);
}

export default Category;
