import React, { useState } from 'react';
import { TextField, Button, Typography, Card, CircularProgress } from '@mui/material';
import axios from 'axios';

function DescriptionForm() {
  const [formData, setFormData] = useState({});
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post('http://127.0.0.1:5000/description', formData)
      .then((response) => {
        setResponse(response?.data?.description);
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
        {!loading && (
          <Button type="submit" variant="contained">
            Criar
          </Button>
        )}
        {loading && <CircularProgress />} {/* Display loading tag while waiting */}
      </form>
      {response && (
        <Card variant="outlined" style={{ marginTop: '1rem', padding: '1rem' }}>
          <Typography variant="h6">Nova Descrição:</Typography>
          <Typography>{response}</Typography>
        </Card>
      )}
    </div>
  );
}

export default DescriptionForm;
