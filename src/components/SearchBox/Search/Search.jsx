import React from 'react'
import styled from 'styled-components'

import caret from '../../../assets/caret.png'

const Wrapper = styled.p`
  margin: 0;
  height: 30px;
  display: flex;
`

const FilterLabel = styled.label`
  width: 100%;
  font-weight: bold;
  color: #6A6B6D;
  display: flex;
`

const InputField = styled.input`
  border-radius: 5px;
  outline: none;
  margin-right: 12px;
  flex: 2;
  color: #6A6B6D;
  border: 0;
  border: 1px solid #c3c3c4;
  padding: 2px 5px;

  &:focus {
    box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.75);
  }
`

const DeepFilterCaret = styled.img`
  margin: auto;
  width: 20px;
  height: 20px;
  transform: rotate(${props => (props.show ? '180' : '0')}deg);
  transition: transform ${props => (props.show ? '1' : '0.4')}s;

  &:hover {
    cursor: pointer;
  }
`

function Search({ onType, show, toggleShow }) {
  return (
    <Wrapper>
      <FilterLabel>
        <InputField onKeyUp={onType} placeholder="Search for post title..."/>
      </FilterLabel>
      <DeepFilterCaret 
        src={caret}
        show={show}
        onClick={toggleShow}/>
    </Wrapper>
  )
}

export default Search
