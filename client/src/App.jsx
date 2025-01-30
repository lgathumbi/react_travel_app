import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import DestinationList from './components/DestinationList';
import ItineraryList from './components/ItineraryList';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/DestinationList" component={DestinationList} />
            <Route path="/ItineraryList" component={ItineraryList} />
        </Switch>
    </Router>  
    </>
  )

}

export default App
