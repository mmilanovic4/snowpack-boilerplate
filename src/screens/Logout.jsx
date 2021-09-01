import React, { useEffect } from 'react';

const Logout = () => {
	useEffect(() => {
		localStorage?.removeItem('idUser');
	}, []);

	const goToLogin = () => {
		window.location.href = '/#login';
	};

	return (
		<>
			<h1>Logged out</h1>
			<button onClick={goToLogin}>Log in</button>
		</>
	);
};

export { Logout };
