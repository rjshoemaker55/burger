const express = require('express')
const router = express.Router()
const burger = require('../models/burger.js')

router.get('/', function(req,res) {

    burger.selectAll(function(data) {
        console.log('')
        console.log('----------')
        console.log('/ GET function in burgers_controll hit, running selectAll.')
        console.log('----------')
        res.render('index', { burgers: data })
    })
})

router.post('/:id', function(req,res) {

    burger.updateOne(req.params.id, function(data) {
        console.log('')
        console.log('----------')
        console.log('/:id PUT function in burgers_controller hit, updating one.')
        console.log('----------')
        res.redirect('/')
        console.log('')
        console.log('...redirecting back to /')
    })
})

router.post('/', function(req,res) {

    console.log('')
    console.log('----------')
    console.log('/ POST function in burgers_controller hit, inserting one.')
    console.log('----------')
    console.log('sending ' + req.body.newburgername + ' to burger.js')

    burger.insertOne(req.body.newburgername, function() {
        res.redirect('/')
        console.log('redirecting back to /')
    })
})

module.exports = router

