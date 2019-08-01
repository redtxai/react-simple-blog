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
      filter: ''
    }
    this.getAuthorName = this.getAuthorName.bind(this)
    this.getFilterValue = this.getFilterValue.bind(this)
    this.getConditionalRendering = this.getConditionalRendering.bind(this)
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

  getConditionalRendering(post) {
    return !this.state.filter
      || post.title.toUpperCase().includes(this.state.filter.toUpperCase())
  }

  render() {
    const { postsData } = this.props
    return (
      <Section>
        <FilterWrapper>
          <SearchBox onType={this.getFilterValue}/>
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
