import React from 'react';
import { useHistory } from 'react-router';
import { routes } from '../routes';

const Dashboard = () => {
	const history = useHistory();

	const handleLogout = () => {
		history?.push(routes?.Logout?.path);
	};

	return (
		<>
			<h1>Dashboard</h1>
			<button onClick={handleLogout}>Log out</button>
		</>
	);
};

export { Dashboard };
