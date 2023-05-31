import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

function FormComponent() {
  const [formData, setFormData] = useState({});
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:5000/description', formData)
        .then((response) => {
            setResponse(response?.data?.description);
        });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Criar nova descrição
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="company_name"
          label="Nome da Empresa"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          name="old_description"
          label="Descrição da empresa"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <Button type="submit" variant="contained">Criar</Button>
      </form>
      <Typography variant="h4" gutterBottom>
            Nova Descrição: 
            <br></br>
            {response}
        </Typography>
    </div>
  );
}

export default FormComponent;
