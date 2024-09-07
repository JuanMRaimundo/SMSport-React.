import "./styles.css";
import Logo from "../../assets/icons/logo.png";
import CartWidget from "./CartWidget/CartWidget";
//ROUTER
import { Link } from "react-router-dom";
//STYLES
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarIndex() {
	return (
		<Navbar expand="lg" className="bg-warning">
			<Container fluid>
				<a href="/">
					<img src={Logo} alt="logo" className="logo-icon" />
				</a>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0 h5"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Link className="nav-link" to="/">
							Inicio
						</Link>
						<Link className="nav-link" to="/Contact">
							Contact
						</Link>
						<NavDropdown title="Category" id="navbarScrollingDropdown">
							<Link className="nav-link" to="/Category/Remeras">
								Remeras
							</Link>

							<Link className="nav-link" to="/Category/Pantalones">
								Pantalones
							</Link>
							<Link className="nav-link" to="/Category/Zapatillas">
								Zapatillas
							</Link>
						</NavDropdown>
						<Nav.Link href="#" disabled>
							Nosotros
						</Nav.Link>
						<Link className="nav-link" to="/Cart">
							<CartWidget />
						</Link>
					</Nav>
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Buscar"
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="outline-dark">Buscar</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavbarIndex;
