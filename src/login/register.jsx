import React, { useState } from 'react';

const Register = () => {
  const [adminUser, setAdminUser] = useState({
    username: '',
    password: '',
    role: ''
  });

  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    setAdminUser({ ...adminUser, [e.target.name]: e.target.value });
    setPasswordError('');
  };

  

  const validatePassword = (password) => {
    if (password.length < 8) {
      setPasswordError('Password should be at least 8 characters long');
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      setPasswordError('Password should include at least one capital letter');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validatePassword(adminUser.password)) {
      try {
        // Send a POST request to saveAdminUser endpoint
        const response = await fetch('http://localhost:8080/createUser/saveAdminUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(adminUser)
        });
        // Handle the response
        if (response.ok) {
          // Success: Admin user saved
          console.log('Admin user saved successfully');
        } else {
          // Error: Failed to save admin user
          console.error('Failed to save admin user');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Create Admin User</h1>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>
          Username:
          <input
            type="text"
            name="username"
            value={adminUser.username}
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
            value={adminUser.password}
            onChange={handleChange}
            style={inputStyle}
          />
          {passwordError && <p style={errorStyle}>{passwordError}</p>}
        </label>
        <br />
        <label style={labelStyle}>
          Role:
          <select
            name="role"
            value={adminUser.role}
            onChange={handleChange}
            style={selectStyle}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </label>
        <br />
        <button type="submit" style={buttonStyle}>Create User</button>
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

const selectStyle = {
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

export default Register;