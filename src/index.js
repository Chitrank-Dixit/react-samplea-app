import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App cat={2} txt="this is the prop text"/>,
  document.getElementById('root')
);
