import React from 'react';

const Dashboard = () => {
	const handleLogout = () => {
		window.location.href = '/#logout';
	};

	return (
		<>
			<h1>Dashboard</h1>
			<button onClick={handleLogout}>Log out</button>
		</>
	);
};

export { Dashboard };
