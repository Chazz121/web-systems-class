const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.end('today is ' + day())
})

var days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

var day = () => {
  var date = new Date()
  return days[date.getDay()]
}

module.exports = router
