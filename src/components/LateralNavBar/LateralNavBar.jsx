import React, { Component } from 'react'
import styled from 'styled-components'

import LateralNavBarContent from './LateralNavBarContent'

const LateralNavBarRoot = styled.div`
  position: fixed;
  right: -290px;
  transform: ${props => (props.show ? 'translateX(-280px)' : 'none')};
  transition: all 0.5s linear;
  top: 0;
  z-index: 101;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 4px;
`

const LateralNavBarTrigger = styled.label`
  width: 20px;
  height: 40px;
  border-radius: 5px 0px 0px 5px;
  padding: 0px 15px;
  font-weight: bold;
  background-color: white;
  box-shadow: -3px 1px 5px -1px rgba(0,0,0,0.75);
  color: #6A6B6D;
  z-index: 11;

  &:hover {
    cursor: pointer;
    background-color: #EBECEE;
  }
`

class LateralNavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }

  render() {
    return (
      <LateralNavBarRoot show={this.state.active}>
        <LateralNavBarTrigger onClick={ () => this.setState({active: !this.state.active}) }/>
        <LateralNavBarContent/>
      </LateralNavBarRoot>
    )
  }
}

export default LateralNavBar
