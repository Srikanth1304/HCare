import React, { useState } from 'react';

const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === "admin" && password === "root") {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    };

    const handleLogout = () => {
        setIsLogin(false);
        setUsername('');
        setPassword('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    console.log('isLoggedIn:', isLogin);

    return (
        <>
            {!isLogin ? (
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="username" name="username" value={username} onChange={handleChange} />
                    <input type="password" placeholder="password" name="password" value={password} onChange={handleChange} />
                    <button type="submit">Login</button>
                </form>
            ) : (
                <>
                    <h3>Welcome, {username}</h3>
                    <button onClick={handleLogout}>Logout</button>
                </>
            )}
        </>
    );
};

export default Login;
