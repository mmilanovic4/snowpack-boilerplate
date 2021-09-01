import { keys, map } from 'lodash';
import { createElement } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Dashboard } from '../screens/Dashboard';
import { Login } from '../screens/Login';
import { Logout } from '../screens/Logout';

const routes = {
	Logout: {
		path: '/logout',
		component: Logout,
		isProtected: false,
		exact: true
	},
	Login: {
		path: '/login',
		component: Login,
		isProtected: false,
		exact: true
	},
	Dashboard: {
		path: '/',
		component: Dashboard,
		isProtected: true
	}
};

const isAuthenticated = () => {
	return localStorage?.getItem('idUser') || false;
};

const withAuthentication = (Component) => (props) => {
	return isAuthenticated()
		? createElement(Component, { ...props })
		: createElement(Redirect, {
				...props,
				to: { pathname: routes?.Login?.path }
		  });
};

const getRoutes = () => {
	return map(keys(routes), (key) => {
		const { isProtected, component, ...props } = routes[key];
		return createElement(Route, {
			key,
			component: isProtected ? withAuthentication(component) : component,
			...props
		});
	});
};

export { routes, getRoutes };
