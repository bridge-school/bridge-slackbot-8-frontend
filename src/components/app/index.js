import React, { useEffect } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { request } from '../../backend-request'
import AppHeader from '../header/'
import NewPollPage from './../new-poll-page/'
import './style.js'

function App() {
  useEffect(() => {
    const fetchData = async () => {
      return await request('health')
    }
    fetchData()
  })
  // decide name
  return (
    <Router>
      <div>
        <AppHeader />
        <Switch>
          <Route exact path="/" component={NewPollPage} />
          <Route exact path="/new-poll" component={NewPollPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
