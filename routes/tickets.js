var express = require('express');
var router = express.Router();
let ticketsCtrl = require('../controllers/tickets')

/* GET users listing. */
router.get('/new/:id', ticketsCtrl.newTicket)

router.post('/:id', ticketsCtrl.createTicket)

module.exports = router;
