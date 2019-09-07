import React, { useEffect } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { request } from '../../backend-request'
import { setChannels } from '../../store/actions/request-actions'

import AppHeader from '../header/'
import NewPollPage from './../new-poll-page/'
import './style.js'

function App() {
  useEffect(() => {
    const fetchData = async () => {
      return await request('channels')
    }

    fetchData()
      .then(res => res.json())
      .then(data =>
        data
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map(channel => ({ ...channel, option: `#${channel.name}` }))
      )
      .then(data => setChannels(data))
  }, [])

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

const mapStateToProps = state => ({
  channels: state.requestsReducer.channels
})

const mapDispatchToProps = {
  setChannels
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
