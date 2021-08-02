import React from 'react';
import './App.css';
import Blog from './Containers/Blog/Blog'
//React Router
import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
      <Router>
        <div>
          <Blog/>
        </div>
      </Router>
    )
  }
}

export default App;
