import React from 'react';
import { Link } from 'react-router-dom';

// const Navigation = () => (
// 	<div>
// 		<h1>Nav</h1>
// 		<ul>
// 			<li>
// 				<Link to={'/'}>Landing</Link>
// 			</li>
// 			<li>
// 				<Link to={'/signin'}>Sign In</Link>
// 			</li>
// 			<li>
// 				<Link to={'/account'}>Account</Link>
// 			</li>
// 			<li>
// 				<Link to={'/admin'}>Admin</Link>
// 			</li>
// 		</ul>
// 	</div>
// );

const Navigation = () => (
	<div>
		<h2>Nav</h2>
		<ul>
			<li>
				<a href={'/'}>Landing</a>
			</li>
			<li>
				<a href={'/signin'}>Sign In</a>
			</li>
			<li>
				<a href={'/signup'}>Sign Up</a>
			</li>
			<li>
				<a href={'/account'}>Account</a>
			</li>
			<li>
				<a href={'/admin'}>Admin</a>
			</li>
			<li>
				<a href={'/pw-forget'}>Forget Password</a>
			</li>
			<li>
				<a href={'/pw-change'}>Change Password</a>
			</li>
		</ul>
	</div>
);
export default Navigation;