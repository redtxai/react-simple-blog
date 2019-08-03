import React from 'react'
import { withRouter } from 'react-router'
import styled from 'styled-components'

const HeaderRoot = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 46px;
  background-color: #FEFEFE;
  box-shadow: 0px 1px 13px 0px rgba(0,0,0,0.75);
  display: flex;
  padding: 4px;
  z-index: 100;
`

const HeaderNavButton = styled.label`
  margin: 4px;
  line-height: 38px;
  height: 38px;
  border-radius: 5px;
  padding: 0px 15px;
  font-weight: bold;
  background-color: ${props => (props.selected ? '#EBECEE' : 'transparent')};
  color: #6A6B6D;

  &:hover {
    cursor: pointer;
    background-color: #EBECEE;
  }
`

function Header({ location, history }) {
  return (
    <HeaderRoot>
      <HeaderNavButton onClick={ () => history.push('/') } selected={location.pathname === '/'}>
        Posts
      </HeaderNavButton>
      <HeaderNavButton onClick={ () => history.push('/about') } selected={location.pathname === '/about'}>
        About
      </HeaderNavButton>
    </HeaderRoot>
  )
}

export default withRouter(Header)
