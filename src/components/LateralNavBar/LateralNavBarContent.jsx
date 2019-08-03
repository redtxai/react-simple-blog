import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import styled from 'styled-components'

import { compareMetadata } from '../../utils/compare'

const Wrapper = styled.div`
  width: 280px;
  height: 100%;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 5px;
  font-weight: bold;
  background-color: white;
  box-shadow: 0px 1px 13px 0px rgba(0,0,0,0.75);
  color: #6A6B6D;
  display: flex;
  flex-flow: column nowrap;
  overflow-x: hidden;
  overflow-y: auto;
`

const Header = styled.header`
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  text-transform: uppercase;
  text-align: center;
`

const PostBlock = styled.div`
  box-sizing: border-box;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.selected ? '#EBECEE' : 'none')};

  &:hover {
    cursor: pointer;
    background-color: #EBECEE;
  }
`

class LateralNavBarContent extends Component {
  render() {
    const { postsData, location, history } = this.props
    const { pathname } = location
    return (
      <Wrapper>
        <Header>Summary</Header>
          {
            postsData.sort(compareMetadata).map((post, index) => {
              return (
                <PostBlock
                  key={index}
                  onClick={ () => history.push(`/${post.id}`) }
                  selected={pathname === '/' + post.id}>
                    {post.title}
                </PostBlock>
              )
            })
          }
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  postsData: state.reducer.postsData
})

export default withRouter(connect(mapStateToProps, null)(LateralNavBarContent))
