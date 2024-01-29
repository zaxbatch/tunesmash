import React from 'react';
import Header from '../Layout/Header.js';
import Firebase from '../Firebase';
import Navigation from '../Navigation';
import * as ROUTES from '../../constants/routes';
// import PassworChange from '../PasswordChange';
// import PasswordForget from '../PasswordForget';
// import Session from '../Session';
// import SignIn from '../SignIn';
// import SignOut from '../SignOut';
// import SignUp from '../SignUp';
// import Landing from '../Landing';
// import Account from '../Account';
// import Admin from '../Admin';
import { RouterProvider as Routes } from 'react-router-dom';
import { routes } from '../../constants/routes';

const App = () => (
	<div>
		<Header />
		<h1>TuneSmash</h1>
		<hr />
			<div>
				<Navigation />
					<hr />
					<Routes router={routes} />
			</div>
	</div>
);
export default App;