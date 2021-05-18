const request = require('request')

const forecast = (latitude, longitude,callback) => {
    const url ='http://api.weatherstack.com/current?access_key=0eb529d69772469fc118d8c035c7e1a3&query=' + encodeURIComponent(latitude,longitude)
    request({url, json: true},(error,{body}) => {
        if(error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,`${body.current.weather_descriptions[0]} . It is currently ${body.current.temperature} degrees temperature. It feels like ${body.current.feelslike} degrees out`)
        }
    })

}

module.exports = forecast