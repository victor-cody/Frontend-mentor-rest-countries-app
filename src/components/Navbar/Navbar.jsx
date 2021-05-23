import React from 'react';

const Navbar = () => {
	return (
		<header className="navbar fixed-top d-flex align-items-center justify-content-around py-2" >
			<div className="container-fluid">
				<h1>Where in the world?</h1>

				<button className="border-none px-2 py-2">
					Dark Mode
			</button>
			</div>
		</header>
	);
};

export default Navbar;
