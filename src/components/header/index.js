import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/bridge-logo.png'
import { Header, H1, IMG, HeaderLink, HeaderLinkList, Brand } from './style'

const AppHeader = () => (
  <Header>
    <Brand>
      <Link to="/">
        <IMG src={logo} alt="Bridge School" />
        <H1>BridgeBot</H1>
      </Link>
    </Brand>

    <HeaderLinkList>
      <Link to="/new-poll" className="link">
        <HeaderLink>New Poll</HeaderLink>
      </Link>
    </HeaderLinkList>
  </Header>
)

export default AppHeader
