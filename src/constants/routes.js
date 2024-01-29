// export const LANDING = '/';
// export const SIGN_UP = '/signup';
// export const SIGN_IN = '/signin';
// export const HOME = '/home';
// export const ACCOUNT = '/account';
// export const ADMIN = '/admin';
// export const PASSWORD_FORGET = '/pw-forget';

import { createBrowserRouter as Router } from 'react-router-dom';
import PasswordChange from '../components/PasswordChange';
import PasswordForget from '../components/PasswordForget';
import Session from '../components/Session';
import SignIn from '../components/SignIn';
import SignOut from '../components/SignOut';
import SignUp from '../components/SignUp';
import Landing from '../components/Landing';
import Account from '../components/Account';
import Admin from '../components/Admin';

export const routes  = Router([
	{
		path: '/',
		element: <Landing />
	},
	{ 
		path: '/signup',
		element: <SignUp />
	},
	{
		path: '/signin',
		element: <SignIn />
	},
	{
		path: '/account',
		element: <Account />
	},
	{
		path: '/admin',
		element: <Admin />
	},
	{
		path: '/pw-forget',
		element: <PasswordForget />          
	},
	{
		path: '/pw-change',
		element: <PasswordChange />          
	}
]);