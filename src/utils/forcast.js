const request = require('request')

const forcast = (long, lat, callback) => {
    const url = 'https://api.darksky.net/forecast/2da5867dbc0653e774d2ab2e91415cdf/' + encodeURIComponent(long) + ',' + encodeURIComponent(lat) + '?units=ca'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.error) {
            callback('Link formatted poorly')
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out.' + 'There is a ' + body.currently.precipProbability*100 + '% chance of rain.\nThere is a visibility of ' + body.daily.data[0].visibility + '~ KM and a ' + body.daily.data[0].humidity*100 + '% humidity in the air.')
        }
    })
}

module.exports = forcast