import React, { Suspense } from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { getRoutes } from './routes/routes';

const App = () => {
	return (
		<>
			<Router>
				<Suspense fallback={<p>Loading...</p>} />
				<Switch>{getRoutes()}</Switch>
			</Router>
		</>
	);
};

export { App };
