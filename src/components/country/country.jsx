import {Link} from 'react-router-dom';

const Country = ({ country }) => {
	return (
		<div className="col">
			<Link>
				<div className="card">
					<img src={country.flag} alt={`${country.name}'s flag`} className="card-img-top img-fluid" />
					<div className="card-body">
						<h2 className="card-title"> {country.name} </h2>
						<ul className="card-text">
							<li className="text-capital">
								<span className="text-bold"></span>population:<span className=""> {country.population}</span>
							</li>
							<li className="text-capital">
								<span className="text-bold">region:</span><span className=""> {country.region}</span>
							</li>
							<li className="text-capital">
								<span className="text-bold">capital:</span><span className=""> {country.capital}</span>
							</li>
						</ul>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Country;
