var express = require('express');
var router = express.Router();
let flightsCtrl = require('../controllers/flights')

/* GET users listing. */
router.get('/', flightsCtrl.allFlights)

router.get('/new', flightsCtrl.newFlight)
router.post('/', flightsCtrl.addFlight)
router.get('/:id', flightsCtrl.show)
router.post('/:id', flightsCtrl.addDestination)

module.exports = router;