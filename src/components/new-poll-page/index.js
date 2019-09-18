import React from 'react'
import PollForm from './../form'
import { Link } from 'react-router-dom'
import { NewPoll } from './style'

const NewPollPage = () => (
  <NewPoll>
    <PollForm />
    <Link to="/polls">Check submitted polls</Link>
  </NewPoll>
)

export default NewPollPage
