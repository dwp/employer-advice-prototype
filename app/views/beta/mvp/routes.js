const express = require('express')
const dayjs = require('dayjs')
var objectSupport = require("dayjs/plugin/objectSupport");
dayjs.extend(objectSupport);

const router = express.Router()

//Radio button redirect package
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

// Add your routes here - above the module.exports line

router.post('/mvp-journey/ssp-routing', function (req, res) {

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

//     router.post('/mvp/current-situation-routing', function (req, res) {
//         let currentSituation = req.session.data.currentSituation;

//         if (currentSituation == 'atWork'){
//             res.redirect('com-q1');
//         }    
//         else if (currentSituation == 'offWork'){
//             res.redirect('est-g4');
//         }
//         else {
//             res.redirect('est-q3');
//         }
//       })      


 })

/* 
 Ben use this example
*/

 router.post('/mvp-journey/current-situation-routing', function (req, res) {

    let currentSituation = req.session.data.currentSituation;

    if (currentSituation == 'ongoingCondition'){
        res.redirect('est-g4');
    } else if (currentSituation == 'offWork') {
        res.redirect('est-q1');
    } else {
        res.redirect('est-q3');
    }   
});

router.post('/mvp-journey/what-to-say-routing', function (req, res) {

    let wantHelpOnWhatToSayA = req.session.data.wantHelpOnWhatToSayA;

    if (wantHelpOnWhatToSayA == 'Yes'){
        res.redirect('com-g1');
    } else {
        res.redirect('est-q3');
    }   
});

router.post('/mvp-journey/told-about-condition-routing', function (req, res) {

    let toldAboutCondition = req.session.data.toldAboutCondition;

    if (toldAboutCondition == 'yesToldMe'){
        res.redirect('est-g4');
    } else if (toldAboutCondition == 'noNotToldMe') {
        res.redirect('est-g5');
    } else {
        res.redirect('com-g8');
    }   
});

router.post('/mvp-journey/talked-about-changes-routing', function (req, res) {

    let talkedAboutChanges = req.session.data.talkedAboutChanges;
    let currentSituation = req.session.data.currentSituation;

    if (talkedAboutChanges == 'No'){
        res.redirect('com-g2');
    } else if (currentSituation == 'ongoingCondition' && talkedAboutChanges == 'Yes')  {
        res.redirect('sum-2');
    } else {
        res.redirect('ret-g7');
    }   
});

/* 
 End of example
*/

module.exports = router
