import {Link} from 'react-router-dom';

const Country = ({ name, flag, region, population, capital }) => {
	return (
		<div className="col">
			<Link>
				<div className="card">
					<img src={flag} alt={`${name}'s flag`} className="card-img-top img-fluid" />
					<div className="card-body">
						<h2 className="card-title"> {name} </h2>
						<ul className="card-text">
							<li className="text-capital">
								<span className="text-bold"></span>population:<span className=""> {population}</span>
							</li>
							<li className="text-capital">
								<span className="text-bold">region:</span><span className=""> {region}</span>
							</li>
							<li className="text-capital">
								<span className="text-bold">capital:</span><span className=""> {capital}</span>
							</li>
						</ul>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Country;
