const request = require('request')
require('dotenv').config();
const forecast = (latitude, longitude,callback) => {
    const baseUrl = "http://api.weatherstack.com/current?access_key="
    let url = `${baseUrl}${process.env.WEATHER_KEY}&query=${latitude},${longitude}`
    request({url, json: true},(error,{body}) => {
        if(error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            let cToFahr = body.current.temperature * 9 / 5 + 32;
            callback(undefined,`${body.current.weather_descriptions[0]} . It is currently ${cToFahr} degrees fahrenheit temperature. Wind speed is ${body.current.wind_speed}`)
        }
    })

}

module.exports = forecast