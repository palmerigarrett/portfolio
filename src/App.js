import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/nav/Header'
import Footer from './components/nav/Footer'
import Landing from './components/Landing'

function App() {
  return (
    <>
      <Header />
        <Router>
          <Switch>
            <Route exact path="/portfolio/">
              <Landing/>
            </Route>
          </Switch>
        </Router>
      <Footer />
    </>
  );
}

export default App;
