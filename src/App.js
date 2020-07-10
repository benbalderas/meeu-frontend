import React from 'react';
import './App.css';
import theme from 'theme';
import {
  Typography,
  ThemeProvider,
  Container,
  CssBaseline,
} from '@material-ui/core';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Container>
          <Typography variant="h1">Hello all!</Typography>
          <Typography variant="h2">I hope you like</Typography>
          <Typography variant="h3">How this is looking</Typography>
          <Typography variant="h4">The Metropolitan Museum</Typography>
          <Typography variant="h5">
            The Monet Family in Their Garden at Argenteuil
          </Typography>
          <Typography variant="h6">Exhibits</Typography>
          <Typography color="primary" variant="subtitle1">
            Edouard Manet
          </Typography>
          <Typography color="textSecondary" variant="body2">
            The Louvre, or the Louvre Museum, is the world's largest art museum
            and a historic monument in Paris, France. A central landmark of the
            city, it is located on the Right Bank of the Seine in the city's 1st
            arrondissement.
          </Typography>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
