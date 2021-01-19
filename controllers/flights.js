let Flights = require('../models/flights')
const tickets = require('../models/tickets')

function newFlight(req, res, next) {
    res.render('new.ejs')
  }

  function allFlights(req, res, next) {
      Flights.find({}, function(err, flights) {
        console.log('My flights:', flights)  
        res.render('flights', {flights})
      })
    // res.render('flights');
  };

  function addFlight(req, res, next) {
    let flight = new Flights(req.body);
    flight.save(function(err, result) {
        if (err) return res.send(err);
        console.log(flight);
        res.redirect('/flights')
    })
  }

  function show(req, res, next) {
    // res.send(req.params.id)
    Flights.findById(req.params.id, function(err, flight){
        tickets.find({flight : flight._id}, function(err, tickets){
            res.render('show', {flight, tickets})
        })
    })
  }

  function addDestination(req, res, next) {
      console.log('req.params.body', req.body)
      Flights.findById(req.params.id, function(err, flight){
          flight.destinations.push(req.body)
          console.log('The flight:', flight)
          console.log('its destinations:', flight.destinations)
            flight.save(function (err, f){
                if (err) return res.send(err);
                res.redirect('/flights/'+req.params.id)
            })
      })
  }

  module.exports = {
      newFlight,
      addFlight,
      allFlights,
      show,
      addDestination
  }