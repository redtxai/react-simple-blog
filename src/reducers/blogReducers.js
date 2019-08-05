import {
  FETCHING_POSTS_DATA,
  FETCHED_POSTS_DATA,
  FETCHING_AUTHORS_DATA,
  FETCHED_AUTHORS_DATA,
  FETCHED_DATA
} from '../actions/types'

const initialState = {
  postsData: [],
  authorsData: [],
  fetchedData: false
}

export default function blogReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_POSTS_DATA:
        const { fetchingPostsData } = action
      return {
        ...state,
        fetchingPostsData
      }
    case FETCHED_POSTS_DATA:
        const { fetchedPostsData, postsData } = action
        return {
          ...state,
          fetchedPostsData,
          postsData
        }
    case FETCHING_AUTHORS_DATA:
      const { fetchingAuthorsData } = action
      return {
        ...state,
        fetchingAuthorsData
      }
    case FETCHED_AUTHORS_DATA:
      const { fetchedAuthorsData, authorsData } = action
      return {
        ...state,
        fetchedAuthorsData,
        authorsData
      }
    case FETCHED_DATA:
      const { fetchedData } = action
      return {
        ...state,
        fetchedData
      }
    default:
      return state
  }
}
