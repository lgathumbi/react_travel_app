import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import DestinationList from './components/DestinationList';
import ItineraryList from './components/ItineraryList';
import './App.css'


  const App = () => {

  return (
    <>
     <Router>
      <Header/>
          <Routes>
            <Route path="/" exact component={Home} />
            <Route  path="/DestinationList" component={DestinationList} />
            <Route path="/ItineraryList" component={ItineraryList} />
          </Routes>
    </Router>  
    </>
  )

}

export default App
