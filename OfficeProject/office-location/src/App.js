import React, { Component } from 'react'
import NavigationBar from '../src/NavBar/NavBar'
import './App.css'
import PageLayout from '../src/Features/PageLayout'
import { Welcome, Admin, Manager, Employee, Login } from '../src/Features/Index'
import {BrowserRouter as Router, Switch} from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <NavigationBar />
        </header>
        <div className="container">
          <Switch>
            <PageLayout exact path='/' component={Welcome} />
            <PageLayout path='/login' component={Login} />
            <PageLayout path='/admin' component={Admin} />
            <PageLayout path='/manager' component={Manager} />
            <PageLayout path='/employee' component={Employee} />

          </Switch>

        </div>
      </div>
    </Router>

  );
}
