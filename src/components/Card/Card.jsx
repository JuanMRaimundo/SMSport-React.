import { Link } from "react-router-dom";

function Card({ data }) {
	if (!data) {
		return "no se encontró producto"; // No renderizar nada si data es undefined
	}
	return (
		<div className="card contador" style={{ width: "18rem" }}>
			<Link to={`/item/${data.id}`}>
				<img className="card-img-top" src={data.img} alt="Card image cap" />
			</Link>

			<div className="card-body">
				<h5 className="card-title">{data.name}</h5>
				<p className="card-description">{data.description}</p>

				<p className="card-price">${data.precio}</p>
			</div>
		</div>
	);
}
export default Card;
