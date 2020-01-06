import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './Layout';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Route path="/" component={Layout} />
      </div>
    </Router >
  );
};

export default App;
