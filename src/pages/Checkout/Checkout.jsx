import { React, useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import OrdenCompra from "../../components/OrdenCompra/OrdenCompra";
//STYLES
import "./styles.css";
import LoadingSpinner from "../../utils/LoadingSpinner";

const initialState = {
	name: "",
	email: "",
	city: "",
	phonenumber: "",
};

function Checkout() {
	const { clearCart, sumTotal } = useContext(CartContext);
	const [showForm, setShowForm] = useState(true);
	const [orderId, setOrderId] = useState("");
	const [values, setValues] = useState(initialState);
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState({});

	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
		setErrors({ ...errors, [name]: "" });
	};

	const validateForm = () => {
		const newErrors = {};
		if (!values.name) newErrors.name = "El nombre es obligatorio.";
		if (!values.email) {
			newErrors.email = "El email es obligatorio.";
		} else if (!/\S+@\S+\.\S+/.test(values.email)) {
			newErrors.email = "El email no es válido.";
		}
		if (!values.city) newErrors.city = "La ciudad es obligatoria.";
		if (!values.phonenumber)
			newErrors.phonenumber = "El teléfono es obligatorio.";
		return newErrors;
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		const validationErrors = validateForm();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		setLoading(true);
		const ordenData = {
			name: values.name,
			email: values.email,
			city: values.city,
			phonenumber: values.phonenumber,
			total: sumTotal(),
		};

		const docRef = await addDoc(collection(db, "ordenesCompra"), {
			ordenData,
		});

		setOrderId(docRef.id);
		setLoading(false);
		clearCart();
		setShowForm(false);
	};

	return (
		<>
			{loading ? (
				<LoadingSpinner />
			) : showForm ? (
				<>
					<h2>Terminá tu Compra</h2>
					<Form onSubmit={onSubmit}>
						<Form.Group className="mb-3" controlId="formBasicName">
							<Form.Label>Nombre</Form.Label>
							<Form.Control
								type="text"
								placeholder="Nombre"
								value={values.name}
								name="name"
								onChange={handleOnChange}
								isInvalid={!!errors.name}
							/>
							<Form.Control.Feedback type="invalid">
								{errors.name}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="Email"
								value={values.email}
								name="email"
								onChange={handleOnChange}
								isInvalid={!!errors.email}
							/>
							<Form.Control.Feedback type="invalid">
								{errors.email}
							</Form.Control.Feedback>
							<Form.Text className="text-muted">
								No compartiremos tu información con nadie. Es solo por la
								seguridad de tu compra.
							</Form.Text>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicCity">
							<Form.Label>Ciudad</Form.Label>
							<Form.Control
								type="text"
								placeholder="Ciudad"
								value={values.city}
								name="city"
								onChange={handleOnChange}
								isInvalid={!!errors.city}
							/>
							<Form.Control.Feedback type="invalid">
								{errors.city}
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPhone">
							<Form.Label>Teléfono</Form.Label>
							<InputGroup className="mb-3">
								<Form.Control
									aria-label="Teléfono"
									name="phonenumber"
									value={values.phonenumber}
									onChange={handleOnChange}
									isInvalid={!!errors.phonenumber}
								/>
								<Form.Control.Feedback type="invalid">
									{errors.phonenumber}
								</Form.Control.Feedback>
							</InputGroup>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicCheckbox">
							<Form.Check
								type="checkbox"
								label="Recibir orden de compra por e-mail"
							/>
						</Form.Group>
						<Button className="btn btn-warning" variant="primary" type="submit">
							Aceptar
						</Button>
					</Form>
				</>
			) : (
				<OrdenCompra
					ordenData={{
						name: values.name,
						email: values.email,
						city: values.city,
						phonenumber: values.phonenumber,
						total: sumTotal(),
						id: orderId,
					}}
				/>
			)}
		</>
	);
}

export default Checkout;
