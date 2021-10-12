const express = require('express')
const dayjs = require('dayjs')
var objectSupport = require("dayjs/plugin/objectSupport");
dayjs.extend(objectSupport);

const router = express.Router()

//Radio button redirect package
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

// Add your routes here - above the module.exports line

router.post('/prototype-A/ssp-routing', function (req, res) {

    let currentSituation = req.session.data.currentSituation;

    const day = Number(req.session.data['employeeLeaveDateDayA'])
    const month = Number(req.session.data['employeeLeaveDateMonthA'])
    const year = Number(req.session.data['employeeLeaveDateYearA'])

    const startDate = dayjs({ year : year, month : month-1, day :day})

    const now = dayjs()

    const daysEmployeeOffSick = now.diff(startDate, "day")

    console.log(daysEmployeeOffSick)

    req.session.data['daysEmployeeOffSick'] = daysEmployeeOffSick

    /*
        If employee is on "ready to return to work (green journey)", direct them to RET-G7
        If employee is on "employee is work sick (red journey)", carry out the branching to direct them to the SSP pages 
    */

    if (currentSituation == 'employeeReadyToReturn'){
        res.redirect('../return-to-work/ret-g7');
    } else {
        if (daysEmployeeOffSick <= '3') {
            res.redirect('est-g1');
        } else {
            res.redirect('est-g2&3');
        }
    } 


 })

/* 
 Ben use this example
*/

/* 
 router.post('/prototype-A/current-situation-routing', function (req, res) {

    let currentSituation = req.session.data.currentSituation;

    if (currentSituation == 'ongoingCondition'){
        res.redirect('est-g4');
    } else if (currentSituation == 'offWork') {
        res.redirect('est-q1');
    } else {
        res.redirect('est-q3');
    }   
});
/* 

/* 
 End of example
*/

router.post('/prototype-A/est-q5-routing', function (req, res) {

    let staQ1 = req.session.data.staQ1;

    if (staQ1 == 'ongoingCondition'){
        res.redirect('est-g4');
    } else {
        res.redirect('est-q3');
    }   
});

router.post('/prototype-A/est-q3-routing', function (req, res) {

    let estQ3 = req.session.data.estQ3;

    if (estQ3 == 'yesToldMe'){
        res.redirect('est-g4');
    } else if (estQ3 == 'notToldMe') {
        res.redirect('est-g5');
    } else {
        res.redirect('com-g8');
    }   
});

router.post('/prototype-A/com-q1-routing', function (req, res) {

    let comQ1 = req.session.data.comQ1;

    if (comQ1 == 'yes'){
        res.redirect('com-g1');
    } else {
        res.redirect('com-q2');
    }   
});

router.post('/prototype-A/com-q2-routing', function (req, res) {

    let comQ1 = req.session.data.comQ1;

    if (comQ1 == 'yes'){
        res.redirect('dis-1');
    } else {
        res.redirect('com-g2');
    }   
});

module.exports = router
