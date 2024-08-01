import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'

const Login = ({ setShowLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4001/signin', {
        username,
        password
      });
      if (response.status === 200) {
        setShowLogin(false);  
        alert("Welcome To Hcare");
      }
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='login'>
      <form onSubmit={handleLogin}>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
