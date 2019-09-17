import React, { useState, useEffect } from 'react'

import { request } from '../../backend-request'
import ResultPieChart from '../pie-chart'

import { ResultContainer, Heading, QuestionText, ChannelText } from './style'

const formatResponse = originData => {
  const responseData = Object.entries(originData)
  let formatedResponse = []
  for (const [selection, count] of responseData) {
    formatedResponse = [...formatedResponse, { name: selection, value: count }]
  }
  return formatedResponse
}

function PollResultPage() {
  const [question, setQuestion] = useState('')
  const [channel, setChannel] = useState('')
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    const getResponse = async () => {
      const result = await request('polls/JS5OeMlb2nOL6Att54r3')
      const pollData = await result.json()
      const { question, channel, response } = pollData
      const formatedResponse = formatResponse(response)
      setQuestion(question)
      setChannel(channel.name)
      setChartData(formatedResponse)
    }
    getResponse()
  }, [])

  return (
    <ResultContainer>
      <Heading>Poll Results</Heading>
      <QuestionText>{question}</QuestionText>
      <ChannelText>Channel Asked: #{channel}</ChannelText>
      <ResultPieChart data={chartData} />
    </ResultContainer>
  )
}

export default PollResultPage
