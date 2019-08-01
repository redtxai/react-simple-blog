import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Routes from './routes'
import { fetchPostsData, fetchAuthorsData } from './actions'

import GlobalStyle from './themes/globalStyle'
import Header from './components/Header'

class App extends Component {
  constructor(props) {
    super(props)
    this.fetchPostsData = this.fetchPostsData.bind(this)
    this.fetchAuthorsData = this.fetchAuthorsData.bind(this)
  }

  componentDidMount() {
    this.fetchPostsData()
    this.fetchAuthorsData()
  }

  fetchPostsData() {
    const { postsData, fetchPostsData } = this.props
    if (!postsData.length) {
      fetchPostsData()
    }
  }

  fetchAuthorsData() {
    const { authorsData, fetchAuthorsData } = this.props
    if (!authorsData.length) {
      fetchAuthorsData()
    }
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <GlobalStyle />
        <Routes/>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  postsData: state.reducer.postsData,
  authorsData: state.reducer.authorsData
})

const mapDispatchToProps = dispatch => {
  return {
    fetchPostsData: () => {
      dispatch(fetchPostsData())
    },
    fetchAuthorsData: () => {
      dispatch(fetchAuthorsData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
