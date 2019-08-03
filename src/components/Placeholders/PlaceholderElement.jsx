import React from 'react'
import styled from 'styled-components'

const Paragraph = styled.p`
  margin: 0;
  height: 20px;
  border-radius: 5px;
  background: linear-gradient(270deg, #cdcece, #fbfcff);
  background-size: 400% 400%;
  animation: AnimationName 1.2s ease infinite;
  @keyframes AnimationName { 
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
`

function PlaceholderElement() {
  return <Paragraph/>
}

export default PlaceholderElement