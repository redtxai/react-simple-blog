module.exports = {
  dateString: (date) => {
    const dateObj = new Date(date)
    const today = new Date()
    const pastDate = new Date(today.getDate() - 7)
    if (pastDate < dateObj) {
      
    }
    return dateObj.getDate() + "/" + (dateObj.getMonth() + 1) + "/" + dateObj.getFullYear()
  }
}
