import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import App from './App';

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

ReactDOM.render(<App />, document.getElementById('root'));

