const express = require('express')
const dayjs = require('dayjs')
var objectSupport = require("dayjs/plugin/objectSupport");
dayjs.extend(objectSupport);

const router = express.Router()

//Radio button redirect package
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

// Add your routes here - above the module.exports line

//Point to individual routes files for each iteration
// router.use('/beta/sprint-3', require('./views/beta/sprint-3/routes'));

router.use('/beta/sprint-3/prototype-A', require('./views/beta/sprint-3/prototype-A/routes'));

router.use('/beta/sprint-3/prototype-B', require('./views/beta/sprint-3/prototype-B/routes'));

router.use('/beta/sprint-4', require('./views/beta/sprint-4/routes'));

router.use('/beta/sprint-5', require('./views/beta/sprint-5/routes'));

router.use('/beta/mvp', require('./views/beta/mvp/routes'));

router.use('/beta/sprint-9', require('./views/beta/sprint-9/routes'));

router.use('/beta/sprint-10', require('./views/beta/sprint-10/routes'));

router.use('/beta/sprint-12', require('./views/beta/sprint-12/routes'));

router.use('/beta/sprint-21', require('./views/beta/sprint-21/routes'));

router.use('/beta/release-4-2-0', require('./views/beta/release-4-2-0/routes'));


// router.use('/beta/sprint-:routeVersion', (req, res, next) => {
//   var routeVersion = req.params.routeVersion
//   require('./beta/sprint-' + routeVersion + '/routes')(req, res, next)
// })

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
