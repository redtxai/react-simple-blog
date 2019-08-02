module.exports = {
  compare: (a, b, attr = 'title', order = 1) => {
    if (!a) return 0
    if (!b) return 0
    if (!order) return 0
    if (order > 0) {
      if (a[attr] < b[attr]) return 1
      if (b[attr] < a[attr]) return -1
    }
    if (a[attr] < b[attr]) return -1
    if (b[attr] < a[attr]) return 1
    return 0
  },
  compareMetadata: (a, b, attr = 'publishedAt', order = 1) => {
    if (!a) return 0
    if (!b) return 0
    if (!order) return 0
    if (order > 0) {
      if (a.metadata[attr] < b.metadata[attr]) return 1
      if (b.metadata[attr] < a.metadata[attr]) return -1
    }
    if (a.metadata[attr] < b.metadata[attr]) return -1
    if (b.metadata[attr] < a.metadata[attr]) return 1
    return 0
  }
}
