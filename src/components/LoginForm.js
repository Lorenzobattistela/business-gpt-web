import React, { useState } from 'react';
import { TextField, Button, CircularProgress} from '@mui/material';
import axios from 'axios';

function LoginForm({ setAuthToken }) {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post('http://127.0.0.1:5000/login', formData)
      .then((response) => {
        const authToken = response?.data?.token;
        setAuthToken(authToken); // Update the authToken state in App.js
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          onChange={handleChange}
        />
        {!loading && (
          <Button type="submit" variant="contained">
            Submit
          </Button>
        )}
        {loading && <CircularProgress />} {/* Display loading tag while waiting */}
      </form>
    </div>
  );
}

export default LoginForm;
