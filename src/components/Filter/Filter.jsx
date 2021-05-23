import {useState, useContext} from 'react';
import { GlobalContext } from '../../Context/GlobalState';

const Filter = () => {

	const { countries, setCountries } = useContext(GlobalContext);

	const [filterData, setFilterData] = useState("")

	const handelFilter = (e) => {
		e.preventDefault();
		setFilterData(e.target.value)
		setCountries(countries.filter(country => {
			return country.region.toLowerCase().includes(filterData.toLowerCase());
		}));
	}
return (
	<select
		name="filter"
		id="filter-region"
		className=""
		onChange = {handelFilter}
	>
		<optgroup>
			<option value='' placeholder='Filter by Region'>
				All
			</option>
			<option value='Africa'>Africa</option>
			<option value='America'>America</option>
			<option value='Asia'>Asia</option>
			<option value='Europe'>Europe</option>
			<option value='Oceania'>Oceania</option>
		</optgroup>
	</select>
);
};

export default Filter;
