import React from 'react'
import { Link } from 'react-router-dom'
import logo from './bridge-logo.png'
import { Header, H1, IMG } from './style'

const AppHeader = () => (
  <Header>
    <Link to="/">
      <IMG src={logo} alt="Bridge School" />
    </Link>
    <H1>BridgeBot</H1>
  </Header>
)

export default AppHeader
