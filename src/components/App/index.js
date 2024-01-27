import React from 'react';
import Header from '../Layout/Header.js';
import Account from '../Account';
import Admin from '../Admin';
import Firebase from '../Firebase';
import Landing from '../Landing';
import Navigation from '../Navigation';
import PassworChange from '../PasswordChange';
import PasswordForget from '../PasswordForget';
import Session from '../Session';
import SignIn from '../SignIn';
import SignOut from '../SignOut';
import SignUp from '../SignUp';


const App = () => (
	<div>
		<Header />
		<h1>TuneSmash</h1>
		<Account />
		<Admin />
		<Firebase />
		<Landing />
		<Navigation />
		<PassworChange />
		<PasswordForget />
		<Session />
		<SignIn />
		<SignOut />
		<SignUp />
	</div>
);
export default App;