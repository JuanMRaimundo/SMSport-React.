import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//DATA

import { db } from "../../firebase/firebaseConfig.js";
//COMPONENTS
import Card from "../../components/Card/Card.jsx";
import { LinearProgress } from "@mui/material";
import { collection, query, getDocs } from "firebase/firestore";
import { ItemCount } from "../../components/ItemCount/ItemCount.jsx";

//STYLES

function Item() {
	const [producto, setProducto] = useState(null); // Inicializar como null para indicar que no hay producto seleccionado
	let { id } = useParams();

	useEffect(() => {
		const selectedProductPromise = async () => {
			try {
				const q = query(collection(db, "sportswear"));
				const querySnapshot = await getDocs(q);

				// Mapear los documentos a un array de objetos con un 'id' personalizado
				const docs = querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));

				// Encontrar el producto por 'id'
				const selectedProduct = docs.find((prod) => prod.id === id);

				setProducto(selectedProduct); // Actualizar el estado con el producto encontrado
			} catch (error) {
				console.error("Error al obtener los datos:", error);
			}
		};

		selectedProductPromise();
	}, [id]);

	return (
		<>
			<div className="list">
				{producto ? (
					<>
						<Card data={producto} stock={5} />
						<ItemCount stock={5} product={producto} />
					</>
				) : (
					<div>
						<LinearProgress color="warning" className="progres" />
					</div>
				)}
			</div>
		</>
	);
}
export default Item;
