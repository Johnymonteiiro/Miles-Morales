import React from 'react';
import './App.css';
import Navbar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home1 from './components/home';
import Favorite from './components/favorite';

function App() {
    return (
        <>
        <Router>
          <Navbar/>
            <Switch>
               <Route path='/' exact component={Home1} />
               <Route path='/favorites'exact component={Favorite} />
            </Switch>
        </Router> 
        </>
    )
}


export default App;
