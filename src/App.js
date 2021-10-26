import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import Movies from './components/Movies'
import Footer from './components/Footer'
import ErrorPage from './components/ErrorPage'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}
export default App