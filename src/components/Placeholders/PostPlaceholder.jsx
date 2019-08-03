import React from 'react'
import styled from 'styled-components'

import PlaceholderElement from './PlaceholderElement'

const Wrapper = styled.article`
  background-color: white;
  width: 280px;
  height: 224px;
  box-sizing: border-box;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.75);

  & * {
    cursor: pointer;
  }
`

const TitleWrapper = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Hr = styled.hr`
  width: 7%;
  text-align: left;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
`

function PostPlaceholder() {
  return (
    <Wrapper>
      <TitleWrapper>
        <PlaceholderElement/>
        <PlaceholderElement/>
        <PlaceholderElement/>
      </TitleWrapper>
      <Hr/>
      <PlaceholderElement/>
    </Wrapper>
  )
}

export default PostPlaceholder
