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
  margin-right: 12px;
  flex: 2;
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

const SortParagraph = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin: 0;
  box-sizing: border-box;
  font-weight: ${props => (props.sortProperty ? 'bold' : 'normal')};
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: #EBECEE;
  }
`

const SortLabel = styled.label`
  color: #6A6B6D;
  &:hover {
    cursor: pointer;
  }
`

const SortSvg = styled.svg`
  visibility: ${props => (props.sortProperty ? 'visible' : 'hidden')};
  transform: rotate(${props => (props.sortProperty > 0 ? '90' : '-90')}deg);

  &:hover {
    cursor: pointer;
  }
`
const SortPath = styled.path`
  fill: #6A6B6D;
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
    const { authorsData, onType, authorFilter, sortProperty, toggleSortProperties } = this.props
    return (
      <Wrapper>
        <Search>
          <FilterLabel>
            <InputField onKeyUp={onType} placeholder="Search for post title..."/>
          </FilterLabel>
          <DeepFilterCaret 
            src={caret}
            show={this.state.show}
            onClick={() => this.setState({ show: !this.state.show })}/>
        </Search>
        <DeepFilter
          show={this.state.show}>
          <AuthorColumn>
            <TitleLabel>Filter by Author:</TitleLabel>
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
            <TitleLabel>Sort by:</TitleLabel>
            <SortParagraph sortProperty={sortProperty.authorSort} onClick={() => toggleSortProperties('authorSort')}>
              <SortLabel>Author</SortLabel>
              <SortSvg sortProperty={sortProperty.authorSort}
                enable-background="new 0 0 32 32"
                height="16px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 32 32"
                width="16px"
                xmlns="http://www.w3.org/2000/svg">
                <SortPath d="M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z"/>
              </SortSvg>
            </SortParagraph>
            <SortParagraph sortProperty={sortProperty.dateSort} onClick={() => toggleSortProperties('dateSort')}>
              <SortLabel>Date</SortLabel>
              <SortSvg sortProperty={sortProperty.dateSort}
                enable-background="new 0 0 32 32"
                height="16px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 32 32"
                width="16px"
                xmlns="http://www.w3.org/2000/svg">
                <SortPath d="M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z"/>
              </SortSvg>
            </SortParagraph>
            <SortParagraph sortProperty={sortProperty.titleSort} onClick={() => toggleSortProperties('titleSort')}>
              <SortLabel>Title</SortLabel>
              <SortSvg sortProperty={sortProperty.titleSort}
                enable-background="new 0 0 32 32"
                height="16px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 32 32"
                width="16px"
                xmlns="http://www.w3.org/2000/svg">
                <SortPath d="M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z"/>
              </SortSvg>
            </SortParagraph>
          </SortColumn>
        </DeepFilter>
      </Wrapper>
    )
  }
}

export default SearchBox
