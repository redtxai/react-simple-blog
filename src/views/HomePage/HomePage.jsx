import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { compare } from '../../utils/compare'
import { dateString } from '../../utils/dateUtils'
import PostBlock from './PostBlock'

const Section = styled.section`
  display: flex;
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

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.getAuthorName = this.getAuthorName.bind(this)
  }

  getAuthorName(authorId) {
    const { authorsData } = this.props
    const author = authorsData.find((aut) => aut.id === authorId)
    if (!author) {
      return ''
    }
    return author.name
  }

  render() {
    const { postsData } = this.props
    return (
      <Section>
        <Wrapper>
          {
            postsData.sort(compare).map((post, index) => {
              const dateFormatted = dateString(post.metadata.publishedAt)
              return <PostBlock
                key={index}
                title={post.title}
                author={this.getAuthorName(post.metadata.authorId)}
                date={dateFormatted} />
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
