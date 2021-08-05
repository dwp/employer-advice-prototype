const express = require('express')
const dayjs = require('dayjs')
var objectSupport = require("dayjs/plugin/objectSupport");
dayjs.extend(objectSupport);

const router = express.Router()

//Radio button redirect package
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

// Add your routes here - above the module.exports line

// router.post('/start/test', function (req, res) {
//     res.redirect('test-2');
// });

router.post('/prototype-A/establishing/ssp-routing', function (req, res) {

    const day = Number(req.session.data['employeeLeaveDateDayA'])
    const month = Number(req.session.data['employeeLeaveDateMonthA'])
    const year = Number(req.session.data['employeeLeaveDateYearA'])

    const startDate = dayjs({ year : year, month : month-1, day :day})

    const now = dayjs()

    const daysEmployeeOffSick = now.diff(startDate, "day")

    console.log(daysEmployeeOffSick)

    req.session.data['daysEmployeeOffSick'] = daysEmployeeOffSick

    // res.redirect('/test/date-results-test')

    if (daysEmployeeOffSick <= '3') {
        res.redirect('est-g1');
    } else {
        res.redirect('est-g2&3');
    }

    // {% if data['daysEmployeeOffSick'] <= '3'  %}


    // {% elif (data['daysEmployeeOffSick'] >= '4') and (data['daysEmployeeOffSick'] <= '7') %}


  })

module.exports = router
