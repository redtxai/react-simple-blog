module.exports = {
  dateString: (date) => {
    const dateObj = new Date(date)
    // const today = new Date()
    // const pastDate = new Date(today.getDate() - 7)
    // if (pastDate < dateObj) {
      // The idea here was choose other data format for less than a week date
      // for example: Thursday, 8:30 PM
      // or: Yesterday, 11:30 AM
    // }
    return dateObj.getDate() + "/" + (dateObj.getMonth() + 1) + "/" + dateObj.getFullYear()
  }
}
