import React, { Component } from 'react'
import styled from 'styled-components'

import LateralNavBarContent from './LateralNavBarContent'

const LateralNavBarRoot = styled.div`
  position: fixed;
  right: -287px;
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
  position: absolute;
  left: -26px;
  top: 50%;
  width: 30px;
  height: 40px;
  border-radius: 5px 0px 0px 5px;
  box-sizing: border-box;
  font-weight: bold;
  background-color: white;
  box-shadow: -3px 1px 5px -1px rgba(0,0,0,0.75);
  color: #6A6B6D;
  z-index: 11;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background-color: #EBECEE;
  }
`

const LateralNavbarCaret = styled.svg`
  transform: rotate(${props => (props.show > 0 ? '0' : '180')}deg);

  &:hover {
    cursor: pointer;
  }
`
const SortPath = styled.path`
  fill: #6A6B6D;
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
        <LateralNavBarTrigger onClick={ () => this.setState({active: !this.state.active}) }>
          <LateralNavbarCaret show={this.state.active}
            enable-background="new 0 0 32 32"
            height="20x"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 32 32"
            width="20x"
            xmlns="http://www.w3.org/2000/svg">
              <SortPath d="M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z"/>
          </LateralNavbarCaret>
        </LateralNavBarTrigger>
        <LateralNavBarContent selectPost={ () => this.setState({active: !this.state.active}) }/>
      </LateralNavBarRoot>
    )
  }
}

export default LateralNavBar
