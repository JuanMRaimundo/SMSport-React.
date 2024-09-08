import React, { useEffect, useState } from "react";

import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import LoadingSpinner from "../../utils/LoadingSpinner";

function Home() {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const loadData = async () => {
			await new Promise((resolve) => setTimeout(resolve, 2000));
			setLoading(false);
		};
		loadData();
	}, []);

	return (
		<div className="itemListContainer">
			{loading ? <LoadingSpinner /> : <ItemListContainer />}
		</div>
	);
}

export default Home;
