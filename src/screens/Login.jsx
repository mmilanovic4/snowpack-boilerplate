import React from 'react';
import { useHistory } from 'react-router';
import { routes } from '../routes';

const Login = () => {
	const history = useHistory();

	const handleLogin = () => {
		localStorage?.setItem('idUser', '1');
		history?.push(routes?.Dashboard?.path);
	};

	return (
		<>
			<h1>Log in</h1>
			<button onClick={handleLogin}>Log in</button>
		</>
	);
};

export { Login };
