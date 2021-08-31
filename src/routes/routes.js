import { keys, map } from 'lodash';
import { createElement } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Account } from '../screens/Account';
import { Login } from '../screens/Login';
import { NotFound } from '../screens/NotFound';

const routes = {
	NotFound: {
		path: '/404',
		component: NotFound,
		isProtected: false,
		exact: true
	},
	Login: {
		path: '/login',
		component: Login,
		isProtected: false,
		exact: true
	},
	Account: {
		path: '/',
		component: Account,
		isProtected: true
	}
};

const isAuthenticated = () => false; // Mock auth

const getRoutes = () => {
	return map(keys(routes), (key) => {
		const { isProtected, ...props } = routes[key];
		if (!isProtected || isAuthenticated()) {
			return createElement(Route, { key, ...props });
		}
		return createElement(Redirect, {
			key,
			to: { pathname: routes?.Login?.path }
		});
	});
};

export { getRoutes };
