import React from 'react';
import Header from '../Layout/Header.js';
import Firebase from '../Firebase';
import Navigation from '../Navigation';
import PassworChange from '../PasswordChange';
import PasswordForget from '../PasswordForget';
import Session from '../Session';
import SignIn from '../SignIn';
import SignOut from '../SignOut';
import SignUp from '../SignUp';
import Landing from '../Landing';
import Account from '../Account';
import Admin from '../Admin';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';




const App = () => (
	<div>
		<Header />
		<h1>TuneSmash</h1>
		<Firebase />

			<div>
				<Navigation />
					<hr />
					<Routes>
						<Route exact path={ROUTES.LANDING} component={Landing} />
						<Route path={ROUTES.SIGN_UP} component={SignUp} />
						<Route path={ROUTES.SIGN_IN} component={SignIn} />
						<Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
						<Route path={ROUTES.ACCOUNT} component={Account} />
						<Route path={ROUTES.ADMIN} component={Admin} />
					</Routes>
  
			</div>
	</div>
);
export default App;