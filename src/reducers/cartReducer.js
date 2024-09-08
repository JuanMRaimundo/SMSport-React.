export const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			const exists = state.find((item) => item.id === action.payload.id);
			if (exists) {
				return state.map((item) =>
					item.id === action.payload.id
						? { ...item, quantity: item.quantity + action.payload.quantity }
						: item
				);
			}
			return [
				...state,
				{ ...action.payload, quantity: action.payload.quantity },
			];

		case "REMOVE_FROM_CART":
			return state.filter((item) => item.id !== action.payload);

		case "CLEAR_CART":
			return [];

		case "UPDATE_QUANTITY":
			return state.map((item) =>
				item.id === action.payload.id
					? { ...item, quantity: action.payload.quantity }
					: item
			);

		default:
			return state;
	}
};
