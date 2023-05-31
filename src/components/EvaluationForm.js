import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

function FormComponent() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log form data for testing
    // Make API call or handle form submission logic here
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Form Component
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
          name="client_evaluation"
          label="Avaliação do Cliente"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <Button type="submit" variant="contained">Submit</Button>
      </form>
    </div>
  );
}

export default FormComponent;
