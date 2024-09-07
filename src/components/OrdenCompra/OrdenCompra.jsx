import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
//STYLES
import "./styles.css";

function OrdenCompra({ ordenData }) {
	return (
		<div className="conteiner-orden-compra">
			<div className="orden-compra">
				<h2>¡GRACIAS POR TU COMPRA!</h2>
				<h3>Orden de Compra</h3>
				<p>Nombre: {ordenData.name}</p>
				<p>Email: {ordenData.email}</p>
				<p>Ciudad: {ordenData.city}</p>
				<p>Teléfono:{ordenData.phonenumber}</p>
				<p>Código de compra: ${ordenData.id}</p>
				<Link to="/">
					<Button>Volver al Inicio</Button>
				</Link>
			</div>
		</div>
	);
}

export default OrdenCompra;
