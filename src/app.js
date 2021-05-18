const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const app = express()
const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Srinagesh'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Srinagesh'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Srinagesh'
    })
})

app.get('/weather', (req, res) => {
    if(req.query.address) {
        geocode(req.query.address,(err,{latitude,longitude,location} = {}) => {
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
                    "address" : req.query.address
                })
            })
        })
    } else {
        res.send({
            "Error" : "Please provide weather"
        })
    }
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Srinagesh',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Srinagesh',
        errorMessage: 'Page not found.'
    })
})

app.listen(port, () => {
    console.log('Server is up on port .' + port)
})