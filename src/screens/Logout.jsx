import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { routes } from '../routes';

const Logout = () => {
	const navigate = useNavigate();

	useEffect(() => {
		localStorage?.removeItem('idUser');
	}, []);

	const goToLogin = () => {
		navigate(routes?.Login?.path);
	};

	return (
		<>
			<h1>Logged out</h1>
			<button onClick={goToLogin}>Log in</button>
		</>
	);
};

export { Logout };
