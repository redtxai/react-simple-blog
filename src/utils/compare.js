module.exports = {
  compare: (a, b) => {
    if (a.metadata.publishedAt < b.metadata.publishedAt) return 1
    if (b.metadata.publishedAt < a.metadata.publishedAt) return -1
    return 0
  }
}
