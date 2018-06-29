import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Styles
// import 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.css';

// Shared Components
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'

// Pages
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'

// Styles
import 'sass/app.sass'


ReactDOM.render((
  <Router>
    <div>
      <Header />
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route path="/" component={Home}/>
      <Footer />
    </div>
  </Router>
), document.getElementById('root'));
