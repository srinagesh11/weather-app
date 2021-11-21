const express = require('express');
const router = express.Router();
const geocode = require('../utils/geocode')
const forecast = require('../utils/forecast')


router.post("/weather",  async (req, res) => {
    const {address} = req.body;
    
    if(address) {
        geocode(address,(err,{latitude,longitude,location} = {}) => {
            console.log(latitude, longitude, location)
            if(err) {
               return res.send({
                    err
                })
            }
            forecast(latitude,longitude,(err,data) => {
                if(err) {
                    return res.send({
                        err
                    })
                }
                res.send({
                    "forecast" : data,
                    location,
                    "address" : address
                })
            })
        })
    } else {
        res.send({
            "Error" : "Please provide weather"
        })
    }
});

module.exports = router;