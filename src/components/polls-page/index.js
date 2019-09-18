import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import loadingSpinner from '../../assets/loadingSpinner.svg'
import { Polls, H2, PollList, Poll, Question, Channel, Alert } from './style'

const pollsInfo = data => {
  return data.map(({ question, channel: { name }, id }) => ({
    question: question,
    name: name,
    id
  }))
}

class SubmittedPolls extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pollsList: [],
      loading: true
    }
  }

  render() {
    return (
      <Polls>
        <H2>Submitted Polls</H2>
        {this.state.loading ? (
          <>
            <Alert>Data is Loading....</Alert>
            <img src={loadingSpinner} alt="loading spninner" />
          </>
        ) : this.state.pollsList.length > 0 ? (
          <PollList>
            {this.state.pollsList.map(({ id, name, question }) => (
              <Poll key={id}>
                <Link to={`/polls/${id}`} className="link">
                  <Question>{question}</Question>
                  <Channel>Channel: #{name}</Channel>
                </Link>
              </Poll>
            ))}
          </PollList>
        ) : (
          <Alert>
            No polls to display, please submit one <Link to="/">here</Link>.
          </Alert>
        )}
      </Polls>
    )
  }

  componentDidMount() {
    fetch('http://localhost:8081/polls', { method: 'GET' })
      .then(res => res.json())
      .then(({ data }) => {
        const polls = pollsInfo(data)

        this.setState({
          pollsList: polls,
          loading: false
        })
      })
  }
}

export default SubmittedPolls
