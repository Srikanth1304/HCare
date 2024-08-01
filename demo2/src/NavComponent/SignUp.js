import React, { useState } from 'react';
import axios from 'axios';

const SignUp = ({ setShowLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4001/signup', {
        username,
        password
      });
      console.log(response.data);
      alert("User created");
      setShowLogin(true); 
    } catch (error) {
      console.error('Error signing up', error);
    }
  };

  return (
    <div className='signup'>
      <form onSubmit={handleSignUp}>
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
        <button type='submit'>Sign Up</button>


      </form>
    </div>
  );
};

export default SignUp;
