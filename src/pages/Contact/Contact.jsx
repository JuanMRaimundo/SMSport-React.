import React from "react";
import { TextField, Button, Grid } from "@mui/material/";
import "./styles.css";

const Contact = () => {
	return (
		<>
			<h2 className="formu">Contacto</h2>
			<Grid
				container
				direction="column"
				justifyContent="center"
				alignItems="center"
				className=""
				component="form"
				sx={{
					"& > :not(style)": { m: 1, width: "25ch" },
				}}
				noValidate
				autoComplete="off"
			>
				<TextField
					id="outlined-basic"
					label="Nombre"
					variant="outlined"
					color="warning"
				/>
				<TextField
					id="outlined-basic"
					label="Email"
					variant="outlined"
					color="warning"
				/>
				<TextField
					id="filled-multiline-flexible"
					label="Asunto"
					multiline
					maxRows={4}
					variant="filled"
					color="warning"
				/>
				<Button color="warning" variant="contained" size="small">
					Enviar{" "}
				</Button>
			</Grid>
		</>
	);
};

export default Contact;
