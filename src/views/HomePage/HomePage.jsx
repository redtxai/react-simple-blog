import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { compare, compareMetadata } from '../../utils/compare'
import { dateString } from '../../utils/dateUtils'
import SearchBox from './SearchBox'
import PostBlock from './PostBlock'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 60px 10px 10px 10px;
  overflow-x: hidden;
  overflow-y: auto;
`

const Wrapper = styled.section`
  margin: auto;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  height: 100%;
  box-sizing: border-box;
`

const FilterWrapper = styled.section`
  margin: auto;
  padding: 10px;
  display: flex;
  width: 95%;
  height: 100%;
  box-sizing: border-box;
`

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: '',
      authorFilter: 0,
      sortProperty: {
        dateSort: 1,
        authorSort: 0,
        titleSort: 0
      }
    }
    this.getFilterValue = this.getFilterValue.bind(this)
    this.getConditionalRendering = this.getConditionalRendering.bind(this)
    this.getAuthorFilter = this.getAuthorFilter.bind(this)
    this.getSort = this.getSort.bind(this)
    this.toggleSortProperties = this.toggleSortProperties.bind(this)
  }

  getFilterValue({ target }) {
    this.setState({ filter: target.value })
  }

  getConditionalRendering({ title, metadata }) {
    const { filter, authorFilter } = this.state
    return (
        !filter
        || title.toUpperCase().includes(filter.toUpperCase())
      ) && (
        !authorFilter || authorFilter === metadata.authorId
      )
  }

  getAuthorFilter(authorId) {
    if (authorId === this.state.authorFilter) {
      authorId = 0
    }
    this.setState({ authorFilter: authorId })
  }

  getSort(a, b) {
    const { dateSort, titleSort } = this.state.sortProperty
    return compareMetadata(a, b, 'publishedAt', dateSort) || compare(a, b, 'title', titleSort)
  }

  toggleSortProperties(prop) {
    const { sortProperty } = this.state
    sortProperty[prop] = sortProperty[prop] > 0 ? sortProperty[prop] - 2 : ++sortProperty[prop]

    for (let key in sortProperty) {
      if (key !== prop) {
        sortProperty[key] = 0
      }
    }
    this.setState({ sortProperty: sortProperty })
  }

  render() {
    const { postsData, authorsData } = this.props
    const { authorFilter, sortProperty } = this.state
    let searchBox

    if (authorsData.length) {
      searchBox = (
        <SearchBox
          onType={this.getFilterValue}
          getAuthorFilter={this.getAuthorFilter}
          authorsData={authorsData}
          authorFilter={authorFilter}
          sortProperty={sortProperty}
          toggleSortProperties={this.toggleSortProperties}/>
      )
    }

    return (
      <Section>
        <FilterWrapper>
          {searchBox}
        </FilterWrapper>
        <Wrapper>
          {
            postsData.sort(this.getSort).map((post, index) => {
              const { authorName, publishedAt } = post.metadata
              const dateFormatted = dateString(publishedAt)
              if (this.getConditionalRendering(post)) {
                return <PostBlock
                  key={index}
                  id={post.id}
                  title={post.title}
                  author={authorName}
                  date={dateFormatted} />
              }
              return null
            })
          }
        </Wrapper>
      </Section>
    )
  }
}

const mapStateToProps = state => ({
  postsData: state.reducer.postsData,
  authorsData: state.reducer.authorsData
})

export default connect(mapStateToProps, null)(HomePage)
