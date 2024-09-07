import "./styles.css";
import React from "react";
import {
	Navbar,
	Container,
	Nav,
	NavDropdown,
	Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo.png";
import CartWidget from "./CartWidget/CartWidget";

function NavbarIndex() {
	return (
		<>
			<Navbar bg="warning" expand="lg">
				<Container fluid>
					<Link to="/">
						<img src={Logo} alt="logo" className="logo-icon" />
					</Link>
					<Navbar.Toggle aria-controls="offcanvasNavbar" />

					<Navbar.Offcanvas
						id="offcanvasNavbar"
						aria-labelledby="offcanvasNavbarLabel"
						placement="end"
						className="bg-warning"
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className="justify-content-end flex-grow-1 pe-3 h5">
								<Link className="nav-link " to="/">
									Inicio
								</Link>
								<Link className="nav-link" to="/Contact">
									Contact
								</Link>
								<NavDropdown
									title="Category"
									id="navbarScrollingDropdown"
									className="dropdown-conteiner"
								>
									<Link className="dropdown-item" to="/Category/Remeras">
										Remeras
									</Link>
									<Link className="dropdown-item" to="/Category/Pantalones">
										Pantalones
									</Link>
									<Link className="dropdown-item" to="/Category/Zapatillas">
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
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
}
export default NavbarIndex;
