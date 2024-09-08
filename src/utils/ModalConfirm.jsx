import { Modal, Button } from "react-bootstrap";

const ModalConfirm = ({ show, handleClose, handleConfirm, message }) => {
	return (
		<Modal show={show} onHide={handleClose} centered>
			<Modal.Header closeButton>
				<Modal.Title>Confirmación</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{message || "¿Estás seguro de que deseas continuar?"}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Cancelar
				</Button>
				<Button variant="danger" onClick={handleConfirm}>
					Confirmar
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ModalConfirm;
