import { useState, useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalState';

const SearchBar = () => {
	//states
	const [search, setSearch] = useState('');
	const [searchResults, setSearchResults] = useState([])

	const { countries, setContries } = useContext(GlobalContext);

	const searchCountries = () => {
		// filtering the search data
		setSearchResults(countries.filter((country,i) => {
			return country.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
		}))
		setContries(searchResults);
	}

	return (
		<div className="" >
			<button></button>
			<input placeholder="Search for a country..."
			className = "form-control border-0 outline-none"
				value={search}
				onChange={(e) => {
					e.preventDefault();
					setSearch(e.target.value)
					searchCountries()
				}}
				type="search" name="search" id="search" aria-label="search bar" />
		</div>
	);
};

export default SearchBar;
