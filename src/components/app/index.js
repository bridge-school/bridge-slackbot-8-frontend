import React, { useEffect } from 'react'
import { request } from '../../backend-request'
import NewPollPage from './../new-poll-page/'
import './style.js'

function App() {
  useEffect(() => {
    const fetchData = async () => {
      return await request('health')
    }
    fetchData()
  })
  return <NewPollPage />
}

export default App
