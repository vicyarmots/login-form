import React, { useEffect, useState } from 'react';
import User from './User';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState([]);

	const handleUserEmail = (event) => {
		event.preventDefault();
		setEmail(event.target.value);
	};

	const handleUserPass = (event) => {
		event.preventDefault();
		setPassword(event.target.value);
	};

	const submitUser = (event) => {
		event.preventDefault();
		if (email !== '' && password !== '') {
			setUser([...user, { email: email, password: password, id: Math.random() * 1000 }]);
		} else {
			return;
		}
		setEmail('');
		setPassword('');
	};

	return (
		<div className="login-form">
			<input placeholder="email" onChange={handleUserEmail} />
			<input placeholder="password" onChange={handleUserPass} />
			<button onClick={submitUser}>Submit</button>
			{user.map((item) => {
				return <User email={item.email} password={item.password} key={item.id} />;
			})}
		</div>
	);
};

export default LoginForm;
