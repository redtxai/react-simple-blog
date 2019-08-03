import React from 'react'
import styled from 'styled-components'

import PlaceholderElement from './PlaceholderElement'

const Wrapper = styled.div`
  background-color: white;
  width: 580px;
  min-width: 280px;
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.75);
  display: flex;
  flex-direction: column;
`

function SearchPlaceholder() {
  return <Wrapper><PlaceholderElement/></Wrapper>
}

export default SearchPlaceholder