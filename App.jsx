import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css'
import Navigation from './components/Navigation';
import Hero from './components/Hero';

import React from 'react'

const App = () => {
  return (
    <div>
       <Navigation></Navigation>
       <Hero></Hero>
    </div>
  )
}

export default App

