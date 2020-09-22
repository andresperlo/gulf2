import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePages from './pages/HomePages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={HomePages}/>
      </Switch>
    </Router>
  );
}

export default App;
