import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.svg`
  visibility: ${props => (props.sortProperty ? 'visible' : 'hidden')};
  transform: rotate(${props => (props.sortProperty > 0 ? '90' : '-90')}deg);

  &:hover {
    cursor: pointer;
  }
`
const SortPath = styled.path`
  fill: #6A6B6D;
`

function SortSvg({ sortProperty }) {
  return (
    <Wrapper sortProperty={sortProperty}
      enable-background="new 0 0 32 32"
      height="16px"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 32 32"
      width="16px"
      xmlns="http://www.w3.org/2000/svg">
        <SortPath d="M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z"/>
    </Wrapper>
  )
}

export default SortSvg
