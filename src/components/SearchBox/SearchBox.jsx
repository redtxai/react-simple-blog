import React, { Component } from 'react'
import styled from 'styled-components'

import Search from './Search'
import DeepFilter from './DeepFilter'

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
    const { onType } = this.props
    return (
      <Wrapper>
        <Search
          onType={onType}
          show={this.state.show}
          toggleShow={() => this.setState({show: !this.state.show})}
        />
        <DeepFilter
          show={this.state.show}
          handleFilter={this.handleFilter}
          {...this.props}  
        />
      </Wrapper>
    )
  }
}

export default SearchBox
