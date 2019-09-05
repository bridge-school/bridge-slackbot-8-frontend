import React, { useEffect } from 'react'
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
      <NewPollPage />
    </div>
  )
}

export default App
