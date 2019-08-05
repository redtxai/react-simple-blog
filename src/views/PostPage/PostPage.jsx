import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { dateString } from '../../utils/dateUtils'

const Container = styled.article`
  padding: 70px 10px 10px 10px;
  overflow-x: hidden;
  overflow-y: auto;
`

const Wrapper= styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: white;
  padding: 35px;
  box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.75);
`

const Header = styled.header`
  width: 100%;
  text-align: center;
  padding-bottom: 15px;
`

const H2 = styled.h2`
  color: #6A6B6D;
  margin: 0;
`

const Body = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  border-top: 1px solid #c3c3c4;
  border-bottom: 1px solid #c3c3c4;
  color: #6A6B6D;
  line-height: 1.5;
`

const Footer = styled.footer`
  display: flex;
  padding-top: 15px;
  color: #6A6B6D;
`

const AuthorLabel = styled.label`
  font-weight: bold;
`

const DateLabel = styled.label`
  font-style: italic;
`

function PostPage({ match, postsData }) {
  const postId = parseInt(match.params.id)
  if (!postId || !postsData.length) {
    return null
  }
  const post = postsData.find((p) => p.id === postId)
  const { authorName, publishedAt } = post.metadata
  return (
    <Container>
      <Wrapper>
        <Header>
          <H2>{post.title}</H2>
        </Header>
        <Body>
          {post.body}
        </Body>
        <Footer>
          <AuthorLabel>{authorName}</AuthorLabel>&nbsp;-&nbsp;<DateLabel>{dateString(publishedAt)}</DateLabel>
        </Footer>
      </Wrapper>
    </Container>
  )
}

const mapStateToProps = state => ({
  postsData: state.reducer.postsData
})

export default connect(mapStateToProps, null)(PostPage)
