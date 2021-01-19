let Ticket = require ('../models/tickets')
let Flights = require('../models/flights')

function newTicket(req, res, next) {
    let flightId = req.params.id
    res.render('tickets/new', {flightId})
}

function createTicket(req, res, next) {
    let newTicket = new Ticket(req.body)
    newTicket.flight = req.params.id
    newTicket.save(function(err, result){
        if (err) return res.send(err);
        res.redirect('/flights/' + req.params.id)
    })
}

module.exports = {
    createTicket,
    newTicket
}