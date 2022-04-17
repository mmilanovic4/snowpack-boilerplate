import React, { Suspense } from 'react';
import { HashRouter as Router, Routes } from 'react-router-dom';
import { getRoutes } from './routes';

const App = () => {
	return (
		<>
			<Router>
				<Suspense fallback={<p>Loading...</p>} />
				<Routes>{getRoutes()}</Routes>
			</Router>
		</>
	);
};

export { App };
