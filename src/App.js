import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

import LoginForm from './components/LoginForm';
import KeywordsForm from './components/KeywordsForm';
import DescriptionForm from './components/DescriptionForm';
import PostsForm from './components/PostsForm';
import EvaluationForm from './components/EvaluationForm';

function App() {
  const [authToken, setAuthToken] = useState("");

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            business-gpt
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: '2rem' }}>
        <Routes>
          <Route
            path="/"
            element={<Home authToken={authToken} setAuthToken={setAuthToken} />}
          />
          <Route path="/keywords" element={<KeywordsForm authToken={authToken} />} />
          <Route
            path="/description"
            element={<DescriptionForm authToken={authToken} />}
          />
          <Route path="/posts" element={<PostsForm authToken={authToken} />} />
          <Route
            path="/evaluation"
            element={<EvaluationForm authToken={authToken} />}
          />
        </Routes>
      </Container>
    </Router>
  );
}

function Home({ authToken, setAuthToken }) {
  if (!authToken) {
    return <LoginForm setAuthToken={setAuthToken} />;
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Home
      </Typography>
      <Button component={Link} to="/keywords" variant="outlined">
        Keywords
      </Button>
      <Button component={Link} to="/description" variant="outlined">
        Description
      </Button>
      <Button component={Link} to="/posts" variant="outlined">
        Posts
      </Button>
      <Button component={Link} to="/evaluation" variant="outlined">
        Evaluation
      </Button>
    </div>
  );
}

export default App;
