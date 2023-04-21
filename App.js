import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Destinations from './components/Destinations';
import Blog from './components/Blog';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/destinations" component={Destinations} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
