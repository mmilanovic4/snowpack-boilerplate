import React from 'react';

const Login = () => {
	const handleLogin = () => {
		localStorage?.setItem('idUser', '1');
		window.location.href = '/';
	};

	return (
		<>
			<h1>Log in</h1>
			<button onClick={handleLogin}>Log in</button>
		</>
	);
};

export { Login };
