const express = require('express')
var router = require('express').Router();

router.get('/', (req, res) => {
    res.send("shop router")
})





router.use('/products', require('./products'));

module.exports = router;