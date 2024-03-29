import React from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/landingpage/Home';
import Index from './pages/about/Index';
import Faq from './pages/Faq';
import Contact from './pages/Contact';



const App = () => {
    return (
    <div className='app'>  
    <Router>
       <Header />    
       <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/about' component={Index} />  
         <Route path='/faq' component={Faq} />
         <Route path='/get-in-touch' component={Contact} />
       </Switch>
    </Router>
    </div>
    )
}

export default App
