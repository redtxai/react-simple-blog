import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { compare } from '../../utils/compare'
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
      authorFilter: 0
    }
    this.getAuthorName = this.getAuthorName.bind(this)
    this.getFilterValue = this.getFilterValue.bind(this)
    this.getConditionalRendering = this.getConditionalRendering.bind(this)
    this.getAuthorFilter = this.getAuthorFilter.bind(this)
  }

  getAuthorName(authorId) {
    const { authorsData } = this.props
    const author = authorsData.find((aut) => aut.id === authorId)
    if (!author) {
      return ''
    }
    return author.name
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

  render() {
    const { postsData, authorsData } = this.props
    let searchBox
    if (authorsData.length) {
      searchBox = <SearchBox onType={this.getFilterValue} getAuthorFilter={this.getAuthorFilter} authorsData={authorsData} authorFilter={this.state.authorFilter}/>
    }

    return (
      <Section>
        <FilterWrapper>
          {searchBox}
        </FilterWrapper>
        <Wrapper>
          {
            postsData.sort(compare).map((post, index) => {
              const dateFormatted = dateString(post.metadata.publishedAt)
              if (this.getConditionalRendering(post)) {
                return <PostBlock
                  key={index}
                  title={post.title}
                  author={this.getAuthorName(post.metadata.authorId)}
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
