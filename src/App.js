import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LayoutBased from './views/layoutBased/layoutBased';

function App() {
  return (
    <div className="App">

      <Router >
        <Route exact="/" component={LayoutBased} />
      </Router>

    </div>
  );
}

export default App;
