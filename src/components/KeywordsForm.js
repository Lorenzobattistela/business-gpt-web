import React, { useState } from 'react';
import { TextField, Button, Typography, Card, CircularProgress } from '@mui/material';
import axios from 'axios';

function KeywordsForm({authToken}) {
  const [formData, setFormData] = useState({});
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post('http://127.0.0.1:5000/keywords', formData, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => {
        setResponse(response?.data?.keywords);
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
        {!loading && (
          <Button type="submit" variant="contained">
            Buscar
          </Button>
        )}
        {loading && <CircularProgress />} {/* Display loading tag while waiting */}
      </form>
      {response && (
        <Card variant="outlined" style={{ marginTop: '1rem', padding: '1rem' }}>
          <Typography variant="h6">Palavras chave:</Typography>
          <Typography>{response}</Typography>
        </Card>
      )}
    </div>
  );
}

export default KeywordsForm;
