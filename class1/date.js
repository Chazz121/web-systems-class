var myDate = new Date()

days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

var day = () => {
  return days[myDate.getDay()]
}

module.exports = { day: day() }