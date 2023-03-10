import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL} >
        <App />
      </BrowserRouter>
    </ChatContextProvider>
  </AuthContextProvider>
  
);
