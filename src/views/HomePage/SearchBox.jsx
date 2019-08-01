import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: white;
  width: 580px;
  min-width: 280px;
  height: 45px;
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.75);
`

const Label = styled.label`
  width: 100%;
  font-weight: bold;
  color: #6A6B6D;
  display: flex;
`

const InputField = styled.input`
  border-radius: 5px;
  margin-left: 12px;
  flex: 2;
`
function SearchBox(props) {
  return (
    <Wrapper>
      <Label>
        Filter: <InputField onKeyUp={props.onType} placeholder="Search for post title..."/>
      </Label>
    </Wrapper>
  )
}

export default SearchBox
