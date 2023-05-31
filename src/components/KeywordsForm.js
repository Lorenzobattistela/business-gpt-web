import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

function FormComponent() {
  const [formData, setFormData] = useState({});
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log form data for testing
    
    axios.post('http://127.0.0.1:5000/keywords', formData)
        .then((response) => {
            console.log(response)
            setResponse(response?.data?.keywords);
        });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Buscar palavras chave
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="segment"
          label="Segmento"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          name="locality"
          label="Localidade"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <Button type="submit" variant="contained">Buscar</Button>
        <Typography variant="h4" gutterBottom>
            Palavras Chave: 
            <br></br>
            {response}
        </Typography>
      </form>
    </div>
  );
}

export default FormComponent;
