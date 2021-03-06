import React, { useEffect } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { request } from '../../backend-request'
import { fetchChannels } from '../../store/actions/request-actions'

import AppHeader from '../header/'
import NewPollPage from './../new-poll-page/'
import SubmittedPolls from './../polls-page/'
import PollResultPage from './../poll-result-page'
import './style.js'

function App({ fetchChannels }) {
  useEffect(() => {
    const fetchData = async () => {
      return await request('channels')
    }

    fetchChannels(fetchData)
  }, [fetchChannels])

  // decide name
  return (
    <Router>
      <div>
        <AppHeader />
        <Switch>
          <Route exact path="/" component={SubmittedPolls} />
          <Route exact path="/new-poll" component={NewPollPage} />
          <Route exact path="/polls/:id" component={PollResultPage} />
        </Switch>
      </div>
    </Router>
  )
}

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = {
  fetchChannels
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
