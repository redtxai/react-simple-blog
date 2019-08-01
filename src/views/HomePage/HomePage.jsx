import React, { Component } from 'react'
import { connect } from 'react-redux'

class HomePage extends Component {
  render() {
    return <div>teste</div>
  }
}

const mapStateToProps = state => ({
  postsData: state.reducer.postsData
})

export default connect(mapStateToProps, null)(HomePage)
