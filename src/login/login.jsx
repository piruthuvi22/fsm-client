import React, { useState } from 'react';

const Login = () => {
  const [credentials, setCredentials] = useState({
    userName: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = credentials;
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter username and password');
      return;
    }
    try {
      // Send a POST request to login endpoint
      const response = await fetch('http://localhost:8080/createUser/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      // Handle the response
      if (response.ok) {
        const data = await response.json();
        // Success: Login successful
        console.log('Login successful');
        console.log('Token:', data.token); // Assuming the response includes a token
      } else {
        // Error: Failed to login
        console.error('Failed to login');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Login</h1>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>
          Username:
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <br />
        <label style={labelStyle}>
          Password:
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <br />
        {error && <p style={errorStyle}>{error}</p>}
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
};

// CSS styles as JavaScript objects
const containerStyle = {
  maxWidth: '400px',
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#f2f2f2',
  borderRadius: '5px'
};

const titleStyle = {
  textAlign: 'center',
  marginBottom: '20px'
};

const labelStyle = {
  display: 'block',
  marginBottom: '10px',
  fontWeight: 'bold'
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px'
};

const buttonStyle = {
  display: 'block',
  width: '100%',
  padding: '10px',
  backgroundColor: '#4caf50',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

const errorStyle = {
  color: 'red',
  fontSize: '14px',
  marginTop: '5px'
};

export default Login;