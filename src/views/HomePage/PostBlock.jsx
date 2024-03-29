import React from 'react'
import { withRouter } from 'react-router'
import styled from 'styled-components'

const PostInternalBlock = styled.article`
  background-color: white;
  width: 280px;
  height: 224px;
  box-sizing: border-box;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  transform: scale(1);
  transition: 0.85s all ease;
  box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.75);

  &:hover {
    transform: scale(1.05);
  }

  & * {
    cursor: pointer;
  }
`

const Title = styled.label`
  font-weight: bold;
  color: #6A6B6D;
  height: 100px;  
`

const Hr = styled.hr`
  width: 7%;
  text-align: left;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
`

const Author = styled.label`
  font-weight: bold;
  color: #6A6B6D;
  margin-bottom: 10px;
`

const DateBlock = styled.label`
  font-style: italic;
  color: #6A6B6D;
`

function PostBlock(props) {
  return (
    <PostInternalBlock onClick={ () => props.history.push(`/${props.id}`) } {...props}>
      <Title>
        {props.title}
      </Title>
      <Hr/>
      <Author>
        {props.author}
      </Author>
      <DateBlock>
        {props.date}
      </DateBlock>
    </PostInternalBlock>
  )
}

export default withRouter(PostBlock)
