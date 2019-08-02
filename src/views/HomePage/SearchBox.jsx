import React, { Component } from 'react'
import styled from 'styled-components'

import caret from '../../assets/caret.png'

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

const Search = styled.p`
  margin: 0;
  height: 20px;
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
  margin-left: 12px;
  margin-right: 12px;
  flex: 2;
`

const DeepFilterCaret = styled.img`
  margin: auto;
  width: 20px;
  height: 20px;

  &:hover {
    cursor: pointer;
  }
`

const DeepFilter = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #6A6B6D;
  font-weight: bold;
  transition:  max-height ${props => (props.show ? '1s ease-in' : '0.4s ease-out')};
  max-height:  ${props => (props.show ? '1000' : '0')}px;
  overflow: hidden;
`

const TitleLabel = styled.label`
  margin-bottom: 10px;
`

const AuthorColumn = styled.div`
  margin-top: 15px;
  padding: 5px 5px 5px 0px;
  display: flex;
  flex-direction: column;
`

const AuthorLabel = styled.label`
  padding: 5px;
  color: #6A6B6D;
  border-radius: 5px;
  font-weight: ${props => (props.authorSelected ? 'bold' : 'normal')};

  &:hover {
    cursor: pointer;
    background-color: #EBECEE;
  }
`

const SortColumn = styled.div`
  min-width: 40%;
  margin-top: 15px;
  padding: 5px 0px 5px 5px;
  display: flex;
  flex-direction: column;
`

const SortLabel = styled.label`
  padding: 5px;
  color: #6A6B6D;
  font-weight: normal;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: #EBECEE;
  }
`

class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.handleFilter = this.handleFilter.bind(this)
  }

  handleFilter(authorId) {
    const { getAuthorFilter } = this.props
    getAuthorFilter(authorId)
  }

  render() {
    const { authorsData, onType, authorFilter } = this.props
    return (
      <Wrapper>
        <Search>
          <FilterLabel>
            Filter: <InputField onKeyUp={onType} placeholder="Search for post title..."/>
          </FilterLabel>
          <DeepFilterCaret 
            src={caret}
            onClick={() => this.setState({ show: !this.state.show })}/>
        </Search>
        <DeepFilter
          show={this.state.show}>
          <AuthorColumn>
            <TitleLabel>By Author:</TitleLabel>
            {
              authorsData.map((author) => {
                return (
                  <AuthorLabel
                    authorSelected={authorFilter === author.id}
                    onClick={() => this.handleFilter(author.id)}
                    key={author.id}>
                    {author.name}
                  </AuthorLabel>
                )
              })
            }
          </AuthorColumn>
          <SortColumn>
            <TitleLabel>Sort:</TitleLabel>
            <SortLabel>Author</SortLabel>
            <SortLabel>Date</SortLabel>
            <SortLabel>Title</SortLabel>
          </SortColumn>
        </DeepFilter>
      </Wrapper>
    )
  }
}

export default SearchBox
