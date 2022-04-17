import React from 'react';
import { useNavigate } from 'react-router';
import { routes } from '../routes';

const Dashboard = () => {
	const navigate = useNavigate();

	const handleLogout = () => {
		navigate(routes?.Logout?.path);
	};

	return (
		<>
			<h1>Dashboard</h1>
			<button onClick={handleLogout}>Log out</button>
		</>
	);
};

export { Dashboard };
