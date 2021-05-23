export default function AppReducer (state,action) {
	switch (action.type) {
		case 'GET':
			 return {
				 ...state,
				 countries: action.url
			 }
		
		default:
			return state;
	}
}
