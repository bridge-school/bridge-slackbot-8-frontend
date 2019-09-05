import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
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
    <div>
      <AppHeader />
<<<<<<< HEAD
<<<<<<< HEAD
      <NewPollPage />
=======
=======
>>>>>>> 93da19b9b2624546375faaa3815e216ed6bbe1cb
      <Switch>
        <Route exact path="/" component={NewPollPage} />
        <Route exact path="/new-poll" component={NewPollPage} />
      </Switch>
<<<<<<< HEAD
>>>>>>> setup react router and route for homepage, new-poll page and bridge icon in header
=======
>>>>>>> 93da19b9b2624546375faaa3815e216ed6bbe1cb
    </div>
  )
}

export default App
