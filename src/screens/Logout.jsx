import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { routes } from '../routes';

const Logout = () => {
	const history = useHistory();

	useEffect(() => {
		localStorage?.removeItem('idUser');
	}, []);

	const goToLogin = () => {
		history?.push(routes?.Login?.path);
	};

	return (
		<>
			<h1>Logged out</h1>
			<button onClick={goToLogin}>Log in</button>
		</>
	);
};

export { Logout };
