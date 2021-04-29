import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components'
import './index.css';
import App from './app';
import GlobalStyle from './common/GlobalStyle';
import theme from './common/theme'
import AuthService from './service/auth_service'

const authService = new AuthService();
ReactDOM.render(
  
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App authService={authService}/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);