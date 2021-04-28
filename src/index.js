import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components'
import './index.css';
import App from './app';
import GlobalStyle from './common/GlobalStyle';
import theme from './common/theme'

ReactDOM.render(
  
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);