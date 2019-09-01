import React from 'react'
import logo from './bridge-logo.png'
import { Header, H1, IMG } from './style'

const AppHeader = () => (
    <Header>
        <IMG src={logo} alt="Bridge School"/>
        <H1>BridgeBot</H1>
    </Header>
)
 
export default AppHeader