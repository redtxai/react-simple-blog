module.exports = {
  compare: (a, b) => {
    if (!a) return 0
    if (!b) return 0
    if (a.metadata.publishedAt < b.metadata.publishedAt) return 1
    if (b.metadata.publishedAt < a.metadata.publishedAt) return -1
    return 0
  }
}
