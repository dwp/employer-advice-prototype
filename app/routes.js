const express = require('express')
const dayjs = require('dayjs')
var objectSupport = require("dayjs/plugin/objectSupport");
dayjs.extend(objectSupport);

const router = express.Router()

//Radio button redirect package
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

// Add your routes here - above the module.exports line


// Examples 
router.post('/test/date-test-answer', function (req, res) {

    const day = Number(req.session.data['TestDay'])
    const month = Number(req.session.data['TestMonth'])
    const year = Number(req.session.data['TestYear'])

    const startDate = dayjs({ year : year, month : month-1, day :day})

    const now = dayjs()

    const daysEmployeeOffSick = now.diff(startDate, "day")

    console.log(daysEmployeeOffSick)

    req.session.data['daysEmployeeOffSick'] = daysEmployeeOffSick

    res.redirect('/test/date-results-test')

  })

module.exports = router
