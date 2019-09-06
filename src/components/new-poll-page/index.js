import React from 'react'
import PollForm from './../form'
import PieChart from '../pie-chart'
import { NewPoll } from './style'

const NewPollPage = () => (
  <NewPoll>
    <PollForm />
    <PieChart />
  </NewPoll>
)

export default NewPollPage
