import React from 'react';
import { useNavigate } from 'react-router';
import { routes } from '../routes';

const Login = () => {
	const navigate = useNavigate();

	const handleLogin = () => {
		localStorage?.setItem('idUser', '1');
		navigate(routes?.Dashboard?.path);
	};

	return (
		<>
			<h1>Log in</h1>
			<button onClick={handleLogin}>Log in</button>
		</>
	);
};

export { Login };
