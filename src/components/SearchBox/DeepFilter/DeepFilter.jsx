import React from 'react'
import styled from 'styled-components'

import SortSvg from './SortSvg'

const Wrapper = styled.section`
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

function DeepFilter({ show, authorsData, authorFilter, sortProperty, toggleSortProperties, handleFilter }) {
  return (
    <Wrapper
      show={show}>
      <AuthorColumn>
        <TitleLabel>Filter by Author:</TitleLabel>
        {
          authorsData.map((author) => {
            return (
              <AuthorLabel
                authorSelected={authorFilter === author.id}
                onClick={() => handleFilter(author.id)}
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
          <SortSvg sortProperty={sortProperty.authorSort}/>
        </SortParagraph>
        <SortParagraph sortProperty={sortProperty.dateSort} onClick={() => toggleSortProperties('dateSort')}>
          <SortLabel>Date</SortLabel>
          <SortSvg sortProperty={sortProperty.dateSort}/>
        </SortParagraph>
        <SortParagraph sortProperty={sortProperty.titleSort} onClick={() => toggleSortProperties('titleSort')}>
          <SortLabel>Title</SortLabel>
          <SortSvg sortProperty={sortProperty.titleSort}/>
        </SortParagraph>
      </SortColumn>
    </Wrapper>
  )
}

export default DeepFilter
