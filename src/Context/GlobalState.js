import {
	createContext,
	useReducer
} from "react";
import AppReducer from './AppReducer';
//state

const initialState = {
	countries: [],
	theme: false
}

//create and export context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({
	children
}) => {

	const [state, dispatch] = useReducer(AppReducer, initialState);

	/**Function to get countries */
	function setCountries (url,type = 'GET') {
		dispatch({
			type,
			url
		})
	}

	return ( 
		<GlobalContext.Provider value = {
			{
				contries: state.countries,
				theme: state.theme,
				setCountries
			}
		} > 

		{children} 

		</GlobalContext.Provider>
	)
}
