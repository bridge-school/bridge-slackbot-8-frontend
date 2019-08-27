import React, { useEffect } from 'react';
// import './style.js'
import { request } from '../../backend-request';

import NewPollPage from '../new-poll-page';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      return await request('health')
    }
    fetchData()
  })
  return <NewPollPage />
}

export default App;
