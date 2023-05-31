import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

import KeywordsForm from './components/KeywordsForm';
import DescriptionForm from './components/DescriptionForm';
import PostsForm from './components/PostsForm';
import EvaluationForm from './components/EvaluationForm';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            business-gpt
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/keywords" element={<KeywordsForm />} />
          <Route path="/description" element={<DescriptionForm />} />
          <Route path="/posts" element={<PostsForm />} />
          <Route path="/evaluation" element={<EvaluationForm />} />
        </Routes>
      </Container>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Home
      </Typography>
      <Button component={Link} to="/keywords" variant="outlined">Keywords</Button>
      <Button component={Link} to="/description" variant="outlined">Description</Button>
      <Button component={Link} to="/posts" variant="outlined">Posts</Button>
      <Button component={Link} to="/evaluation" variant="outlined">Evaluation</Button>
    </div>
  );
}

export default App;
