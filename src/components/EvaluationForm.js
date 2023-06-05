import React, { useState } from 'react';
import { TextField, Button, Typography, CircularProgress, Card } from '@mui/material';
import axios from 'axios';

function EvaluationForm() {
  const [formData, setFormData] = useState({});
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post('http://127.0.0.1:5000/evaluation', formData)
      .then((response) => {
        setResponse(response?.data?.evaluation);
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
        Avaliações
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
          name="evaluation"
          label="Avaliação do Cliente"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        {!loading && (
          <Button type="submit" variant="contained">
            Responder Avaliação
          </Button>
        )}
        {loading && <CircularProgress />} {/* Display loading tag while waiting */}
      </form>
      {response && (
        <Card variant="outlined" style={{ marginTop: '1rem', padding: '1rem' }}>
          <Typography variant="h6">Resposta de avaliação</Typography>
          <Typography>{response}</Typography>
        </Card>
      )}
    </div>
  );
}

export default EvaluationForm;
