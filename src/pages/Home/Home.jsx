import { useState, useEffect, useContext } from 'react';

import Country from '../../components/country/country';
import Filter from '../../components/Filter/Filter';
import SearchBar from '../../components/search-bar/SearchBar';
import { GlobalContext } from '../../Context/GlobalState';

const Home = () => {
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState('');
	const { countries, setCountries } = useContext(GlobalContext);

	const abort = new AbortController()
	/**Geting our countries from the API */
	const fetchData = async () => {
		try {
			let countries = await fetch('https://restcountries.eu/rest/v2/all');
			if (!countries.ok) {
				throw Error('something wrong, çould not connect to resource')
			}
			const data = await countries.json();
			console.log(data)
			setCountries(data)
			setIsPending(false)
			setError('')
		} catch (error) {
			console.warn(`sorry an error occurred, due to ${error.message} `)
			setError(error.message)
			setIsPending(false)
		}
	} 

	useEffect(() => {
		 fetchData();
		return () => {
			abort.abort();
		}
	})


	return (
		<section>
			<div className="container">
				<div className="row">
					<SearchBar />
					<Filter/>
				</div>
				{isPending && <h3 className="text-danger">Geting Countries...</h3>}
				<div className="row justify-content-center row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xlg-4">
					{
						countries.length > 0 && countries.map((country, id) => (
							<Country
								key={`country-${id}`}
								country={country}
							/>
						))
					}
					{error && <h3 className="text-danger font-weight-light">{error}</h3>}
				</div>
			</div>
		</section>
	);
};

export default Home;
